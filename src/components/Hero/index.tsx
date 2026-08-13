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
                <div className={styles.heroContent}>
                    <p className={styles.heroPhrase}>Vitalliz · Aplicações mobile e web</p>
                    <div className={styles.heroContentTwo}>
                        <header className={styles.heroTitle}>
                            <img 
                                src="vitallizElementoLogo.svg" 
                                alt="" 
                                aria-hidden="true"
                            />
                            <h1>TECNOLOGIA<br/>& INOVAÇÃO</h1>
                        </header>
                        
                        <div  className={styles.footerContainer}>
                            <p className={styles.heroText}>Somos uma equipe de desenvolvimento mobile e web. Transformamos desafios do dia a dia em soluções inteligentes e sustentáveis</p>

                            <footer className={styles.buttonsDiv}>
                                <Button icon={<MoveRight />} iconPosition="right" color="whiteAnimated"  text="Explorar Projeto" />
                                <Button color="transparent"  text="Fale conosco" />
                            </footer>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}