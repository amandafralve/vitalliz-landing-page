import { MoveRight } from "lucide-react";
import { Button } from "../Button";
import { Container } from "../Container";
import GradientWaves from "../GradientWaves";
import styles from "./styles.module.css";

export function Hero() {
    return (
        <section id="home" className={styles.hero}>
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
                    <div className={styles.badgeWrapper}>
                        <span className={styles.heroPhrase}>
                            Vitalliz · Software & Mobile
                        </span>
                    </div>

                    <div className={styles.heroBody}>
                        <h1 className={styles.heroTitle}>
                            Damos vida e direção digital ao seu negócio
                        </h1>
                        
                        <p className={styles.heroText}>
                            Unimos a vitalidade da inovação com a clareza da engenharia de software. Desenvolvemos sistemas e aplicativos que iluminam caminhos e impulsionam resultados.
                        </p>

                        <footer className={styles.buttonsDiv}>
                            <Button 
                                icon={<MoveRight />} 
                                iconPosition="right" 
                                color="whiteAnimated" 
                                text="Ver Projeto Nitrusleaf" 
                                size="md"
                                onClick={() => {
                                    window.location.hash = "project";
                                }}
                            />
                            <Button 
                                color="transparent" 
                                text="Entre em contato"
                                size="md"
                                onClick={() => {
                                    window.location.hash = "contact";
                                }}
                            />
                        </footer>
                    </div>
                </div>
            </Container>
        </section>
    );
}