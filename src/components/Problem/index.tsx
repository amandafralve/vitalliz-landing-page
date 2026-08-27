import { ClipboardClock, Leaf, UserRoundCog } from 'lucide-react';
import { Container } from '../Container';
import styles from './styles.module.css';

export function Problem() {
    return (
        <section className={styles.projectBg}>
            <Container>
                <div className={styles.solutionContainer}>
                    <span className={styles.tag}>CONTEXTO</span>
                    <h1>Citricultura no Vale do Ribeira</h1>
                    <p>
                        Todo ano, produtores de citros perdem parte da colheita sem nem saber por quê. Os sintomas de deficiência nutricional na folha são sutis, fáceis de confundir com doenças como o greening (HLB), e o diagnóstico correto normalmente exige um especialista — que nem sempre está disponível na hora certa.
                    </p>
                    <p>
                        Em pesquisa de campo no Sítio São Miguel, identificamos alta incidência de
                        deficiência de manganês, casos de baixa de cobre e registros frequentes de
                        greening na plantação.
                    </p>
                    <div>
                        <h5>Dificuldades identificadas</h5>
                        <div className={styles.solutionBlock}>
                            <div className={styles.cardGrid}>
                                <div className={styles.cardObj}>
                                    <div className={styles.cardIcon}>
                                        <Leaf />
                                    </div>
                                    <div className={styles.cardTitle}>
                                        <h5>Confusão com Greening</h5>
                                        <h6>Sintomas parecidos, causas diferentes</h6>
                                    </div>
                                    <p>Manganês, cobre e greening causam manchas e amarelamento muito semelhantes na folha — o que leva a diagnósticos errados e tratamentos ineficazes.</p>
                                </div>
                                <div className={styles.cardObj}>
                                    <div className={styles.cardIcon}>
                                        <ClipboardClock />
                                    </div>
                                    <div className={styles.cardTitle}>
                                        <h5>Diagnóstico tardio</h5>
                                        <h6>O estrago já está feito</h6>
                                    </div>
                                    <p>Na maioria dos casos, o produtor só percebe o problema quando o fruto já foi afetado — e parte da safra já está comprometida.</p>
                                </div>
                                <div className={styles.cardObj}>
                                    <div className={styles.cardIcon}>
                                        <UserRoundCog />
                                    </div>
                                    <div className={styles.cardTitle}>
                                        <h5>Dificuldade técnica</h5>
                                        <h6>Conhecimento especializado é escasso</h6>
                                    </div>
                                    <p>Identificar a deficiência corretamente exige experiência técnica que nem toda propriedade tem acesso fácil ou rápido.</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </Container>
        </section>
    );
}