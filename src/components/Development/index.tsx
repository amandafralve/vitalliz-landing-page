// Development.jsx
import { useEffect, useRef, useState } from 'react';
import { Container } from '../Container';
import {
    Search,
    Settings2,
    BrainCircuit,
    ScanSearch,
    Smartphone,
    Check,
} from 'lucide-react';
import styles from './styles.module.css';

const steps = [
    {
        number: '1',
        title: 'Coleta de dados',
        icon: Search,
        image: '/img/Development/fundoMexerica.png',
        label: 'Pesquisa de Usuário',
        subtitle: 'Pesquisa de Campo',
        paragraphs: [
            'Realizamos uma pesquisa de campo no Sítio São Miguel, em Pariquera-Açu/SP, para compreender a realidade do cultivo de mexerica (Citrus reticulata).',
            'Através da aplicação de um questionário estruturado, coletamos dados diretos sobre o manejo na prática e realizamos a coleta de amostras reais de folhas.',
        ],
        checklist: [
            '+100 imagens coletadas de folhas deficientes',
            'Aprendizado real sobre o dia a dia no pomar',
            'Diversidade de estágios de deficiência',
        ],
    },
    {
        number: '2',
        title: 'Pré-processamento e aumento de dados',
        icon: Settings2,
        image: '/img/Development/fundoMexerica.png',
        label: 'Preparação dos Dados',
        subtitle: 'Padronização e Data Augmentation',
        paragraphs: [
            'Padronizamos e redimensionamos todas as imagens coletadas para um formato único, garantindo consistência para o treinamento do modelo.',
            'Aplicamos técnicas de data augmentation, como rotação, brilho e zoom, para simular condições reais de captura em campo.',
        ],
        checklist: [
            'Imagens padronizadas e redimensionadas',
            'Simulação de condições reais de captura',
            'Base de dados ampliada artificialmente',
        ],
    },
    {
        number: '3',
        title: 'Treinamento do modelo',
        icon: BrainCircuit,
        image: '/img/Development/fundoMexerica.png',
        label: 'Machine Learning',
        subtitle: 'Rede Neural Convolucional',
        paragraphs: [
            'Desenvolvemos uma rede neural convolucional com três blocos convolucionais, responsáveis por extrair as características visuais das folhas.',
            'O treinamento utilizou Early Stopping para interromper o processo no momento ideal, evitando overfitting e preservando a generalização do modelo.',
        ],
        checklist: [
            'Arquitetura com 3 blocos convolucionais',
            'Early Stopping para evitar overfitting',
            'Ajuste fino de hiperparâmetros',
        ],
    },
    {
        number: '4',
        title: 'Validação',
        icon: ScanSearch,
        image: '/img/Development/fundoMexerica.png',
        label: 'Testes',
        subtitle: 'Validação com Imagens Inéditas',
        paragraphs: [
            'Testamos o modelo com um conjunto de imagens nunca vistas durante o treinamento, avaliando sua real capacidade de generalização.',
            'Os resultados confirmaram que o modelo identifica corretamente diferentes estágios de deficiência nutricional nas folhas.',
        ],
        checklist: [
            'Testado com dados 100% inéditos',
            'Alta capacidade de generalização',
            'Resultados consistentes entre estágios',
        ],
        stat: '95,97%',
        statLabel: 'de acurácia',
    },
    {
        number: '5',
        title: 'Protótipo funcional',
        icon: Smartphone,
        image: '/img/Development/fundoMexerica.png',
        label: 'Produto Final',
        subtitle: 'Aplicativo Mobile + API',
        paragraphs: [
            'Desenvolvemos um aplicativo mobile integrado a uma API que recebe a imagem da folha e processa o diagnóstico em tempo real.',
            'O produtor recebe o resultado diretamente no celular, com recomendações práticas para o manejo da deficiência identificada.',
        ],
        checklist: [
            'Diagnóstico em tempo real',
            'Integração via API',
            'Interface simples para o produtor',
        ],
    },
];

type Step = (typeof steps)[number];

type StepCardProps = {
    step: Step;
    isActive: boolean;
    cardRef?: (node: HTMLDivElement | null) => void;
};

function StepCard({ step, isActive, cardRef }: StepCardProps) {
    const Icon = step.icon;

    return (
        <div
            ref={cardRef}
            data-step={step.number}
            aria-current={isActive ? 'step' : undefined}
            className={`${styles.card} ${isActive ? styles.cardActive : styles.cardInactive}`}
        >
            <div className={styles.cardContent}>
                <div className={styles.stepHeading}>
                    <span className={styles.cardNumber}>{step.number}</span>
                    <h3>{step.title}</h3>
                    <Icon size={20} className={styles.cardIcon} />
                </div>

                <div className={styles.subCard}>
                    <span className={styles.subLabel}>{step.label}</span>
                    <hr className={styles.divider} />
                    <h4 className={styles.subtitle}>{step.subtitle}</h4>

                    {step.paragraphs.map((paragraph, i) => (
                        <p key={i} className={styles.paragraph}>
                            {paragraph}
                        </p>
                    ))}

                    {step.stat && (
                        <div className={styles.statBlock}>
                            <span className={styles.statNumber}>{step.stat}</span>
                            <span className={styles.statLabel}>{step.statLabel}</span>
                        </div>
                    )}

                    <ul className={styles.checklist}>
                        {step.checklist.map((item, i) => (
                            <li key={i}>
                                <span className={styles.checkIcon}>
                                    <Check size={12} strokeWidth={3} />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={styles.cardImage}>
                <img src={step.image} alt={step.title} loading="lazy" />
            </div>
        </div>
    );
}

export function Development() {
    const [activeStep, setActiveStep] = useState<string | null>(null);
    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [firstStep, ...restSteps] = steps;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target as HTMLElement;
                        setActiveStep(target.dataset.step ?? null);
                    }
                });
            },
            {
                threshold: 0,
                // faixa fina no centro da viewport: só o card cruzando
                // essa região vira o ativo
                rootMargin: '-45% 0px -45% 0px',
            }
        );

        const currentRefs = cardRefs.current.filter(
            (el): el is HTMLDivElement => el !== null
        );
        currentRefs.forEach((el) => observer.observe(el));

        return () => currentRefs.forEach((el) => observer.unobserve(el));
    }, []);

    return (
        <section className={styles.projectBg}>
            <Container>
                {/* Header + card 1 pinados juntos, como uma "visualização" */}
                <div className={styles.introWrap}>
                    <div className={styles.introSticky}>
                        <div className={styles.rightHeader}>
                            <span className={styles.tag}>DESENVOLVIMENTO</span>
                            <h2>Como desenvolvemos</h2>
                            <p>Da coleta de dados ao protótipo funcional</p>
                        </div>

                        <StepCard step={firstStep} isActive />
                    </div>
                </div>

                {/* Cards 2-5: fluxo normal, um seguido do outro,
                    só o card central ganha destaque */}
                <div className={styles.cards}>
                    {restSteps.map((step, index) => (
                        <StepCard
                            key={step.number}
                            step={step}
                            isActive={activeStep === step.number}
                            cardRef={(el) => {
                                cardRefs.current[index] = el;
                            }}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}