// Project.jsx
import { Container } from '../Container';
import styles from './styles.module.css';


export function ProjectSolution() {

    return (
        <section className={styles.projectBg}>
            <Container>
                <div className={styles.solutionContainer}>
                    <h1>O <span>problema</span> que resolvemos</h1>
                    <p>A citricultura brasileira sofre com deficiências nutricionais de difícil diagnóstico. Nossa pesquisa de campo no Sítio São Miguel constatou alta incidência de deficiência de manganês e casos de baixa de cobre, além de registros frequentes de greening (HLB) na plantação.</p>

                    <div className={styles.solutionBlock}>
                        <div className={styles.cardGrid}>
                            <div className={styles.cardObj}>
                                <div className={styles.cardTitle}>
                                    
                                    <h5>Confusão com greening</h5>
                                </div>
                                <p>Sintomas visuais parecidos dificultam o diagnóstico correto.</p>
                            </div>
                            <div className={styles.cardObj}>
                                <div className={styles.cardTitle}>
                                    
                                    <h5>Diagnóstico tardio</h5>
                                </div>                               
                                <p>O produtor só percebe quando o fruto já foi afetado.</p>
                            </div>
                            <div className={styles.cardObj}>
                                <div className={styles.cardTitle}>
                                    
                                    <h5>Dificuldade técnica</h5>
                                </div>
                                <p>Identificar a deficiência exige experiência especializada.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}