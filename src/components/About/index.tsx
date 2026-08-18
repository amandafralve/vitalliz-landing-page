import styles from './styles.module.css'
import { Container } from '../Container';
import { CarouselWithCaptions } from '../Carousel';
import { Cpu, Lightbulb, Leaf } from 'lucide-react';

export function About() {
    return (
        <Container>
            <div className={styles.containerAbout}>
                <div className={styles.aboutUs}>
                    <h1>Sobre nós</h1>
                    <p>
                        A Vitalliz é a equipe criada para o desenvolvimento do Projeto
                        Integrador do curso de Desenvolvimento de Software Multiplataforma
                        da <strong>Fatec Registro</strong>, com o propósito de unir tecnologia,
                        inovação e sustentabilidade - alinhado ao <strong>ODS 2 da ONU</strong> (Fome
                        Zero e Agricultura Sustentável)
                    </p>
                    <div className={styles.objectiveBlock}>
                        <h2>Nosso Objetivo</h2>
                        <div className={styles.cardGrid}>
                            <div className={styles.cardObj}>
                                <div className={styles.cardTitle}>
                                    <Cpu size={22} className={styles.cardIcon} />
                                    <h5>Tecnologia</h5>
                                </div>
                                <p>Soluções digitais que conectam pessoas e simplificam processos do dia a dia</p>
                            </div>
                            <div className={styles.cardObj}>
                                <div className={styles.cardTitle}>
                                    <Lightbulb size={22} className={styles.cardIcon} />
                                    <h5>Inovação</h5>
                                </div>                               
                                <p>Abordagens criativas para transformar desafios reais em oportunidades</p>
                            </div>
                            <div className={styles.cardObj}>
                                <div className={styles.cardTitle}>
                                    <Leaf size={22} className={styles.cardIcon} />
                                    <h5>Sustentabilidade</h5>
                                </div>
                                <p>Impacto positivo alinhado aos objetivos de desenvolvimento sustentável da ONU</p>
                            </div>
                        </div>
                    </div>
                </div>

                <CarouselWithCaptions />
            </div>
        </Container>
    );
}