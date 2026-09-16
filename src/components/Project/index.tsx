import { Container } from '../Container';
import { Button } from '../Button';
import { MoveUpRight } from 'lucide-react';
import { FaGithub, FaFigma } from "react-icons/fa";
import CarouselMockup from '../CarouselMockup';
import styles from './styles.module.css';
import { links } from '../../constants/links'

export function Project() {
    return (
        <section id='project' className={styles.projectBg}>
            <Container>
                <div className={styles.project}>
                    {/* Coluna Esquerda: Informações do Projeto */}
                    <div className={styles.left}>
                        <div className={styles.brand}>
                            <span className={styles.tag}>PROJETO</span>
                            <h1>Nitrusleaf</h1>
                        </div>

                        <p className={styles.subtitle}>
                            Diagnóstico foliar inteligente para citricultura movido a IA
                        </p>

                        <p className={styles.description}>
                            Aplicativo mobile que utiliza visão computacional e redes neurais para identificar deficiências nutricionais em folhas de mexerica. O produtor tira a foto da folha e recebe o diagnóstico preciso em segundos no campo.
                        </p>

                        <div className={styles.secondaryButtons}>
                            <Button
                                icon={<FaGithub />}
                                text="Repositório"
                                color="white"
                                size="md"
                                onClick={() => window.open(links.project.github, "_blank")}
                            />
                            <Button
                                icon={<FaFigma />}
                                text="Protótipo"
                                color="white"
                                size="md"
                                onClick={() => window.open(links.project.figma, "_blank")}
                            />
                        </div>
                        
                        <Button
                            icon={<MoveUpRight />}
                            iconPosition="right"
                            text="Conhecer Produto"
                            color="blue"
                            size="md"
                            onClick={() => window.open(links.project.produto, "_blank")}
                        />
                    </div>

                    {/* Coluna Direita: Carrossel Mockup */}
                    <div className={styles.right}>
                        <CarouselMockup />
                    </div>
                </div>
            </Container>
        </section>
    );
}