import styles from './styles.module.css'
import { Container } from '../Container';
import { CarouselWithCaptions } from '../Carousel';

export function About() {
    return (
        <Container>
            <div className={styles.containerAbout}>
                <div className={styles.aboutUs}>
                    <h1>Sobre nós</h1>
                    <p>
                        A Vitalliz é a equipe criada para o desenvolvimento do Projeto
                        Integrador do curso de Desenvolvimento de Software Multiplataforma (Fatec), com o propósito de unir tecnologia, inovação e sustentabilidade - alinhado ao <strong>ODS 2 da ONU</strong> (Fome Zero e Agricultura Sustentável)
                    </p>
                    <div>
                    </div>
                </div>
                <CarouselWithCaptions />
                
            </div>
        </Container>
    );
}