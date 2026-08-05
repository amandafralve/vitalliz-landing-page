import { MoveRight } from "lucide-react";
import { Button } from "../Button";
import { Container } from "../Container";
import GradientWaves from "../GradientWaves"
import styles from "./styles.module.css"

export function Hero() {
    return (
        <section className={styles.hero}>
            <GradientWaves
                className={styles.heroBackground}
                horizonColor="#1585C4"
                waveColor="#1585C4"
                crestColor="#31803A"
                speed={0.4}
                amplitude={2.5}
                waveScale={0.6}
                waveRatio={0.9}
                swell={35}
                turbulence={20}
                tilt={0.8}
                zoom={1}
                height={3}
                fogDepth={20}
                detail="medium"
                brightness={1}
                opacity={1}
                mouseInteraction
                parallaxStrength={0.5}
                grain
                grainIntensity={0.05}
            />

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