"use client";

import * as React from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    animate,
    type PanInfo,
    type MotionValue,
} from "motion/react";
import styles from "./styles.module.css";

interface Slide {
    image: string;
    alt: string;
}

const slides: Slide[] = [
    { image: "/img/project/mockupSplash.svg", alt: "Mockup Splash" },
    { image: "/img/project/mockupScan.svg", alt: "Mockup Scan" },
    { image: "/img/project/mockupResult.svg", alt: "Mockup Result" },
    { image: "/img/project/mockupMenu.svg", alt: "Mockup Menu" },
];

interface CarouselConfig {
    distanceDivisor: number;
    velocityDivisor: number;
    sensitivity: number;
    xMultiplier: number;
    yMultiplier: number;
    rotationMultiplier: number;
    scaleReduction: number;
}

const getCarouselConfig = (width: number): CarouselConfig => {
  if (width < 640) {
    return {
      distanceDivisor: 120,
      velocityDivisor: 500,
      sensitivity: 180,
      xMultiplier: 80, // Distância lateral reduzida para cards menores
      yMultiplier: 15,
      rotationMultiplier: 8,
      scaleReduction: 0.06,
    };
  }
  if (width < 1024) {
    return {
      distanceDivisor: 160,
      velocityDivisor: 650,
      sensitivity: 220,
      xMultiplier: 110,
      yMultiplier: 20,
      rotationMultiplier: 10,
      scaleReduction: 0.08,
    };
  }
  return {
    distanceDivisor: 200,
    velocityDivisor: 800,
    sensitivity: 250,
    xMultiplier: 140, // Distância reduzida no desktop
    yMultiplier: 25,
    rotationMultiplier: 12,
    scaleReduction: 0.1,
  };
};

const CarouselMockup = () => {
  const scrollProgress = useMotionValue(0);
  const startProgress = React.useRef(0);

  const [windowWidth, setWindowWidth] = React.useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 0;
  });

  const total = slides.length;

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const config = React.useMemo(
    () => getCarouselConfig(windowWidth),
    [windowWidth]
  );

  const handleDragStart = () => {
    startProgress.current = scrollProgress.get();
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const dragDistance = info.offset.x;
    const velocity = info.velocity.x;

    const distanceShift = -dragDistance / config.distanceDivisor;
    const velocityShift = -velocity / config.velocityDivisor;

    let totalShift = Math.round(distanceShift + velocityShift);
    totalShift = Math.max(-3, Math.min(3, totalShift));

    const target = Math.round(startProgress.current) + totalShift;

    animate(scrollProgress, target, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      mass: 1,
    });
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack}>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDrag={(_, info) => {
            const delta = -info.delta.x / config.sensitivity;
            scrollProgress.set(scrollProgress.get() + delta);
          }}
          onDragEnd={handleDragEnd}
          className={styles.dragSurface}
        />

        {slides.map((slide, i) => (
          <Card
            key={i}
            slide={slide}
            index={i}
            total={total}
            progress={scrollProgress}
            config={config}
          />
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  slide: Slide;
  index: number;
  total: number;
  progress: MotionValue<number>;
  config: CarouselConfig;
}

const Card = ({ slide, index, total, progress, config }: CardProps) => {
  const offset = useTransform(progress, (p) => {
    let diff = (index - p) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  });

  const x = useTransform(offset, (o) => o * config.xMultiplier);
  const rotate = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return o * config.rotationMultiplier;
  });
  const y = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return absO * config.yMultiplier;
  });
  const scale = useTransform(
    offset,
    (o) => 1 - Math.abs(o) * config.scaleReduction
  );
  const opacity = useTransform(
    offset,
    [-total / 2, -total / 2 + 0.5, 0, total / 2 - 0.5, total / 2],
    [0, 1, 1, 1, 0]
  );
  const zIndex = useTransform(offset, (o) =>
    Math.round(100 - Math.abs(o) * 10)
  );

  return (
    <motion.div
      style={{
        x,
        rotate,
        y,
        scale,
        opacity,
        zIndex,
      }}
      className={styles.card}
    >
      {/* Usando a tag <img> com suporte a arquivos .svg */}
      <img
        src={slide.image}
        alt={slide.alt}
        className={styles.cardSvg}
      />

      <motion.div
        style={{
          opacity: useTransform(
            offset,
            [-2, -0.5, 0, 0.5, 2],
            [0.5, 0.2, 0, 0.2, 0.5]
          ),
        }}
        className={styles.cardOverlay}
      />
    </motion.div>
  );
};

export default CarouselMockup;