import { Container } from "../Container";
import styles from "./styles.module.css"

export function Hero() {
    return (
        <section className={styles.hero}>
            <Container>
                <div className={styles["hero-content"]}>
                    <h1>TECNOLOGIA<br/>& INOVAÇÃO</h1>
                </div>
            </Container>
        </section>
    );
}