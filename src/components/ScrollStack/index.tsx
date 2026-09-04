import React, { useLayoutEffect, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';
import Lenis from 'lenis';
import styles from './styles.module.css';

export interface ScrollStackItemProps {
    itemClassName?: string;
    children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
    children,
    itemClassName = '',
}) => (
    <div className={`${styles.scrollStackCard} ${itemClassName}`.trim()}>
        {children}
    </div>
);

interface ScrollStackProps {
    className?: string;
    children: ReactNode;

    itemDistance?: number;
    itemScale?: number;
    itemStackDistance?: number;

    stackPosition?: string;
    scaleEndPosition?: string;

    baseScale?: number;
    rotationAmount?: number;
    blurAmount?: number;

    useWindowScroll?: boolean;

    onStackComplete?: () => void;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({
    children,
    className = '',

    itemDistance = 50,
    itemScale = 0.03,
    itemStackDistance = 10,

    stackPosition = '20%',
    scaleEndPosition = '10%',

    baseScale = 0.85,
    rotationAmount = 0,
    blurAmount = 0,

    useWindowScroll = false,

    onStackComplete,
}) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const endElementRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number | null>(null);
    const lenisRef = useRef<Lenis | null>(null);
    const cardsRef = useRef<HTMLElement[]>([]);
    const cardOffsetsRef = useRef<number[]>([]);
    const endElementOffsetRef = useRef<number>(0);
    const stackCompletedRef = useRef(false);
    const lastTransformsRef = useRef(
        new Map<
            number,
            {
                translateY: number;
                scale: number;
                rotation: number;
                blur: number;
            }
        >()
    );

  /* Calcula o progresso entre dois pontos. */
    const calculateProgress = useCallback(
        (scrollTop: number, start: number, end: number) => {
            if (scrollTop < start) {
                return 0;
            }

            if (scrollTop > end) {
                return 1;
            }

            if (end === start) {
                return 1;
            }

            return (
                (scrollTop - start) / (end - start)
            );
        },[]
    );

    /* Converte valores como:
    * "15%" -> pixels
    * 200   -> 200 pixels */
    const parsePercentage = useCallback(
        (value: string | number, containerHeight: number) => {
            if (
                typeof value === 'string' &&
                value.includes('%')
            ) {
                return (
                    (parseFloat(value) / 100) * containerHeight
                );
            }

            return Number(value);
            },[]
    );

    /*
    * Obtém o scroll atual.
    *
    * Quando useWindowScroll = true,
    * utilizamos o scroll da página.
    */
    const getScrollData = useCallback(() => {
        if (useWindowScroll) {
            return {
                scrollTop:
                window.scrollY ||
                document.documentElement
                    .scrollTop ||
                document.body.scrollTop ||
                0,

                containerHeight:
                window.innerHeight,
            };
        }

    const scroller = scrollerRef.current;

    return {
    scrollTop:
        scroller?.scrollTop ?? 0,

    containerHeight:
        scroller?.clientHeight ??
        window.innerHeight,
    };
}, [useWindowScroll]);

    /* Atualiza as posições dos cards. */
    const updateLayoutMetrics = useCallback(() => {
        const cards = cardsRef.current;

        if (!cards.length) { return; }

        if (useWindowScroll) {
            const scrollY =
            window.scrollY ||
            document.documentElement
                .scrollTop ||
            0;

            cardOffsetsRef.current =
            cards.map(
                (card) => card.getBoundingClientRect()
                    .top + scrollY
            );

            if (endElementRef.current) {
                endElementOffsetRef.current =
                    endElementRef.current
                    .getBoundingClientRect()
                    .top + scrollY;
            }
        } else {
            cardOffsetsRef.current =
            cards.map(
                (card) => card.offsetTop
            );

            if (endElementRef.current) {
            endElementOffsetRef.current =
                endElementRef.current
                .offsetTop;
            }
        }
    }, [useWindowScroll]);

    /* Atualiza transformações dos cards. */
    const updateCardTransforms =
        useCallback(() => {
            const cards = cardsRef.current;

        if (!cards.length) {
            return;
        }

        const { scrollTop, containerHeight} = getScrollData();

        const stackPositionPx =
            parsePercentage( stackPosition,containerHeight );

        const scaleEndPositionPx = parsePercentage(scaleEndPosition,containerHeight);

        const endElementTop = endElementOffsetRef.current;

        /* Descobre qual é o card atualmente no topo da pilha. */
        let topCardIndex = 0;

        if (blurAmount > 0) { for (
                let j = 0;
                j < cards.length;
                j++
            ) {
                const cardTop = cardOffsetsRef.current[j] ?? 0;

                const triggerStart = cardTop - stackPositionPx - itemStackDistance * j;

                if (scrollTop >= triggerStart) {
                    topCardIndex = j;
                }
            }
        }

        cards.forEach((card, i) => {
            if (!card) {
                return;
            }

            const cardTop = cardOffsetsRef.current[i] ?? 0;

            /* Momento em que o card começa a entrar na pilha. */
            const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;

            /* Momento em que termina a redução de escala. */
            const triggerEnd = cardTop - scaleEndPositionPx;
            const pinStart = triggerStart;

            /* O card permanece preso até próximo do final do stack. */
            const pinEnd = endElementTop - containerHeight / 2;

          /* Escala. */
            const scaleProgress = calculateProgress(scrollTop,triggerStart,triggerEnd);
            const targetScale = baseScale + i * itemScale;

            const scale = 1 - scaleProgress * (1 - targetScale);

            /* Rotação opcional. */
            const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

          /* Blur opcional. */
            let blur = 0;

            if (blurAmount > 0 &&i < topCardIndex) {
                blur = Math.max(0,(topCardIndex - i) * blurAmount);
            }

            /* Movimento vertical.*/
            let translateY = 0;

            if (scrollTop >= pinStart && scrollTop <= pinEnd) {
                translateY = scrollTop - cardTop +stackPositionPx + itemStackDistance * i;
            } else if (scrollTop > pinEnd) {
                translateY =pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
            }

            const newTransform = {
                translateY:
                Math.round(
                    translateY * 100
                ) / 100,

                scale:
                Math.round(
                    scale * 1000
                ) / 1000,

                rotation:
                Math.round(
                    rotation * 100
                ) / 100,

                blur:
                Math.round(
                    blur * 100
                ) / 100,
            };

            const lastTransform =
                lastTransformsRef.current.get(
                i
                );

            const hasChanged = !lastTransform || 
                Math.abs(lastTransform.translateY - newTransform.translateY
                ) > 0.1 ||
                Math.abs(
                lastTransform.scale - newTransform.scale
                ) > 0.001 ||
                Math.abs(lastTransform.rotation - newTransform.rotation
                ) > 0.1 ||
                Math.abs( lastTransform.blur - newTransform.blur
            ) > 0.1;

            if (hasChanged) {
                card.style.transform = `
                translate3d(0,${newTransform.translateY}px,0)
                scale(${newTransform.scale})
                rotate(${newTransform.rotation}deg)`;

                card.style.filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)`: 'none';

                lastTransformsRef.current.set(i,newTransform);
            }

            /* Verifica conclusão da pilha.*/
            if (i === cards.length - 1) {
                const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;

                if (isInView &&!stackCompletedRef.current) {
                    stackCompletedRef.current = true;
                    onStackComplete?.();
                }

                if (!isInView && stackCompletedRef.current) {
                    stackCompletedRef.current = false;
                }
            }
        }
    );
}, [
    getScrollData,
    parsePercentage,
    stackPosition,
    scaleEndPosition,
    blurAmount,
    itemStackDistance,
    calculateProgress,
    baseScale,
    itemScale,
    rotationAmount,
    onStackComplete,
]);

    /* Inicialização do ScrollStack. */
    useLayoutEffect(() => {
        const scroller = scrollerRef.current;

        if (!scroller && !useWindowScroll) {return;}

        const root = useWindowScroll? document: scroller!;

        const cards = Array.from(
            root.querySelectorAll(`.${styles.scrollStackCard}`)
        ) as HTMLElement[];

        cardsRef.current = cards;

    /*Configuração inicial dos cards.*/
    cards.forEach((card, i) => {
            if (i < cards.length - 1) {
                card.style.marginBottom =`${itemDistance}px`;
            }

            card.style.willChange = 'transform, filter';
            card.style.transformOrigin ='top center';
            card.style.backfaceVisibility ='hidden';
            card.style.webkitBackfaceVisibility ='hidden';
        }
    );

    updateLayoutMetrics();

    /* Mantém as métricas atualizadas quando o tamanho da tela muda.*/
    const resizeObserver = new ResizeObserver(() => {
        updateLayoutMetrics();
        updateCardTransforms();
    });

    if (scroller) {
        resizeObserver.observe(scroller);
    }

    resizeObserver.observe(document.body);

    /*Lenis.*/
    const lenisOptions = useWindowScroll ? {
        duration: 1.2,
        easing: (t: number) => Math.min(1,1.001 - Math.pow(2,-10 * t)),

        smoothWheel: true,
        syncTouch: true,
    } : {
        wrapper: scroller!,
        content:scroller!.querySelector(`.${styles.scrollStackInner}`) as HTMLElement,
        duration: 1.2,

        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2,-10 * t)),

        smoothWheel: true,
        syncTouch: true,
    };

    const lenis = new Lenis(lenisOptions);

    lenisRef.current = lenis;

    /* Atualização durante o scroll do Lenis.*/
    const handleScroll = () => {updateCardTransforms();};

    lenis.on('scroll',handleScroll);

    /* RAF do Lenis. */
    const raf = (time: number) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
    };

    animationFrameRef.current = requestAnimationFrame(raf);

    /* Quando o ScrollStack utiliza o scroll global da página,
     * também monitoramos o scroll nativo da window.*/
    if (useWindowScroll) {
        window.addEventListener('scroll', updateCardTransforms,{passive: true,});
    }

    updateCardTransforms();

    /* Cleanup. */
    const lastTransforms = lastTransformsRef.current;
    return () => {
        if (animationFrameRef.current !==null) {
            cancelAnimationFrame(animationFrameRef.current);
        }

        if (useWindowScroll) {
            window.removeEventListener('scroll',updateCardTransforms);
        }

        if (lenisRef.current) {
            lenisRef.current.off('scroll',handleScroll);
            lenisRef.current.destroy();
            lenisRef.current = null;
        }

        resizeObserver.disconnect();

        cards.forEach((card) => {
            card.style.transform ='';
            card.style.filter ='';
            card.style.marginBottom ='';
            card.style.willChange ='';
            }
        );

        cardsRef.current = [];

        lastTransforms.clear();

        stackCompletedRef.current = false;
    };
}, [
    useWindowScroll,
    itemDistance,
    updateLayoutMetrics,
    updateCardTransforms,
]);

    const endPadding = typeof window !== 'undefined' ? window.innerHeight * 0.5 : 400;
    return (
        <div className={`${styles.scrollStackScroller} ${className}`.trim()} ref={scrollerRef}>
            <div className={styles.scrollStackInner}style={{paddingBottom: `${endPadding}px`,}}>
                {children}
                <div className={styles.scrollStackEnd} ref={endElementRef}/>
            </div>
        </div>
    );
};

export default ScrollStack;