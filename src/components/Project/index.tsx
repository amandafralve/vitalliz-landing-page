// Project.jsx
import { useEffect, useRef, useState } from 'react';
import { Container } from '../Container';
import { Button } from '../Button';
import {
    MoveUpRight,
    Search,
    Settings2,
    BrainCircuit,
    ScanSearch,
    Smartphone,
} from 'lucide-react';
import { FaGithub, FaFigma  } from "react-icons/fa";
import styles from './styles.module.css';

const steps = [
    {
        number: '1',
        title: 'Coleta de dados',
        description: 'Pesquisa de campo no Sítio São Miguel e reunião de um banco com imagens de folhas saudáveis e com deficiência.',
        icon: Search,
    },
    {
        number: '2',
        title: 'Pré-processamento e aumento de dados',
        description: 'Padronização, redimensionamento e técnicas de data augmentation para simular condições reais de captura em campo.',
        icon: Settings2,
    },
    {
        number: '3',
        title: 'Treinamento do modelo',
        description: 'Rede neural convolucional com três blocos convolucionais, treinada com Early Stopping para evitar overfitting.',
        icon: BrainCircuit,
    },
    {
        number: '4',
        title: 'Validação',
        description: 'Teste com imagens inéditas, alcançando 95,97% de acurácia e confirmando a capacidade de generalização do modelo.',
        icon: ScanSearch,
    },
    {
        number: '5',
        title: 'Protótipo funcional',
        description: 'Aplicativo mobile integrado a uma API que envia o diagnóstico em tempo real para o produtor.',
        icon: Smartphone,
    },
];

export function Project() {
    const [activeStep, setActiveStep] = useState('1');
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveStep(entry.target.dataset.step);
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

        const currentRefs = cardRefs.current;
        currentRefs.forEach((el) => el && observer.observe(el));

        return () => currentRefs.forEach((el) => el && observer.unobserve(el));
    }, []);

    return (
        <section className={styles.projectBg}>
            <Container>
                <div className={styles.project}>
                    <div className={styles.left}>
                        <div className={styles.brand}>
                            <span>PROJETO</span>
                            <h1>Nitrusleaf</h1>
                        </div>

                        <p className={styles.subtitle}>
                            Identificação de deficiência de Manganês e Cobre na folha da mexerica,
                            orientado por Redes Neurais
                        </p>

                        <p className={styles.description}>
                            Um app que usa visão computacional e redes neurais para identificar
                            deficiências de manganês e cobre em folhas de mexerica. O produtor
                            fotografa a folha e recebe o diagnóstico em segundos, direto pelo celular.
                        </p>

                        <div className={styles.secondaryButtons}>
                            <Button
                                icon={<FaGithub  />}
                                text="Repositório"
                                color="white"
                                size='md'
                            />
                            <Button
                                icon={<FaFigma />}
                                text="Protótipo"
                                color="white"
                                size='md'
                            />
                        </div>

                        <Button
                            icon={<MoveUpRight />}
                            iconPosition="right"
                            text="Conhecer Produto"
                            color="blue"
                            size='md'
                        />
                    </div>

                    <div className={styles.right}>
                        <div className={styles.rightHeader}>
                            <h2>Como desenvolvemos</h2>
                            <p>Da coleta de dados ao protótipo funcional</p>
                        </div>

                        <div className={styles.cards}>
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                const isActive = activeStep === step.number;

                                return (
                                    <div
                                        key={step.number}
                                        ref={(el) => (cardRefs.current[index] = el)}
                                        data-step={step.number}
                                        className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
                                    >
                                        <div className={styles.cardHeader}>
                                            <h3>
                                                <span className={styles.cardNumber}>{step.number}</span>
                                                {step.title}
                                            </h3>
                                            <Icon size={20} className={styles.cardIcon} />
                                        </div>
                                        <p>{step.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}