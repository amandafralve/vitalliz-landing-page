import { MoveRight } from "lucide-react";
import { Button } from "../Button";
import { Container } from "../Container";
import styles from "./styles.module.css"

export function Hero() {
    return (
        <section className={styles.hero}>
            <Container>
                <div className={styles["hero-content"]}>
                    <div className={styles.heroTitle}>
                        <img src="vitallizElementoLogo.svg" alt="Elemento de marca Vitalliz" />
                        <h1>TECNOLOGIA<br/>& INOVAÇÃO</h1>
                    </div>
                    
                    <p>Somos uma equipe de desenvolvimento mobile e web. Transformamos desafios do dia a dia em soluções inteligentes e sustentáveis - como o Nitrusleaf, nosso app de diagnóstico agrícola por inteligência artificial.</p>

                    <div className={styles.buttonsDiv}>
                        <Button icon={<MoveRight/>} color="white" text="Explorar Projeto" />
                        <Button color="transparent" text="Fale conosco" />
                    </div>
                </div>
            </Container>
        </section>
    );
}