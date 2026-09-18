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
  { image: "/img/project/mockupProfile.svg", alt: "Mockup Meu Perfil" },
];

const AUTOPLAY_INTERVAL = 3000; // troca de slide a cada 3s

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
      xMultiplier: 80,
      yMultiplier: 15,
      rotationMultiplier: 8,
      scaleReduction: 0.06,
    };
  }
  if (width < 1151) {
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
    distanceDivisor: 140,
    velocityDivisor: 550,
    sensitivity: 190,
    xMultiplier: 95,
    yMultiplier: 17,
    rotationMultiplier: 9,
    scaleReduction: 0.07,
  };
};

const CarouselMockup = () => {
  const scrollProgress = useMotionValue(0);
  const startProgress = React.useRef(0);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const containerRef = React.useRef<HTMLDivElement | null>(null);

  // Refs para controlar o autoplay
  const autoplayTimerRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
  const isInteractingRef = React.useRef(false);
  const isInViewRef = React.useRef(false);

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

  // Monitora as mudanças na variável motion para atualizar o indicador da página ativa
  React.useEffect(() => {
    const unsubscribe = scrollProgress.on("change", (latest) => {
      const positiveIndex = ((Math.round(latest) % total) + total) % total;
      setActiveIndex(positiveIndex);
    });
    return () => unsubscribe();
  }, [scrollProgress, total]);

  const config = React.useMemo(
    () => getCarouselConfig(windowWidth),
    [windowWidth]
  );

  const stopAutoplay = React.useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  const startAutoplay = React.useCallback(() => {
    stopAutoplay();

    // Só inicia o timer se a seção estiver visível na tela
    if (!isInViewRef.current) return;

    autoplayTimerRef.current = setInterval(() => {
      if (isInteractingRef.current || !isInViewRef.current) return;

      const current = scrollProgress.get();
      const target = Math.round(current) + 1;

      animate(scrollProgress, target, {
        type: "spring",
        stiffness: 200,
        damping: 30,
        mass: 1,
      });
    }, AUTOPLAY_INTERVAL);
  }, [scrollProgress, stopAutoplay]);

  // Observa quando o carrossel entra/sai da viewport
  React.useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          startAutoplay();
        } else {
          stopAutoplay();
        }
      },
      { threshold: 0.4 } // considera "visível" quando ~40% da seção aparece
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [startAutoplay, stopAutoplay]);

  // Limpa o timer ao desmontar
  React.useEffect(() => {
    return () => stopAutoplay();
  }, [stopAutoplay]);

  const handleDragStart = () => {
    isInteractingRef.current = true;
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

    isInteractingRef.current = false;
    startAutoplay(); // reinicia a contagem dos 2s após o usuário soltar
  };

  // Permite ir direto para o slide desejado ao clicar na bolinha
  const goToSlide = (index: number) => {
    const current = scrollProgress.get();
    const currentModulo = ((Math.round(current) % total) + total) % total;

    let diff = index - currentModulo;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const target = Math.round(current) + diff;

    animate(scrollProgress, target, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      mass: 1,
    });

    startAutoplay(); // reinicia a contagem dos 2s após clique manual
  };

  return (
    <div
      ref={containerRef}
      className={styles.carouselContainer}
      onMouseEnter={() => {
        isInteractingRef.current = true;
      }}
      onMouseLeave={() => {
        isInteractingRef.current = false;
        startAutoplay();
      }}
    >
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

      {/* Indicadores / Bolinhas de navegação */}
      <div className={styles.dotsContainer}>
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goToSlide(i)}
            className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ""}`}
            aria-label={`Ir para a foto ${i + 1}`}
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

  // Mostra só os 3 cards centrais (offset -1, 0, 1).
  // Os demais (offset ±2 ou mais) ficam totalmente invisíveis,
  // independente de quantos slides existirem no total.
  const opacity = useTransform(
    offset,
    [-2, -1, 0, 1, 2],
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