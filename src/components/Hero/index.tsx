import { MoveRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "../Button";
import { Container } from "../Container";
import GradientWaves from "../GradientWaves";
import styles from "./styles.module.css";

export function Hero() {
    const { t } = useTranslation();

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
                            {t("hero.badge")}
                        </span>
                    </div>

                    <div className={styles.heroBody}>
                        <h1 className={styles.heroTitle}>
                            {t("hero.title")}
                        </h1>

                        <p className={styles.heroText}>
                            {t("hero.text")}
                        </p>

                        <footer className={styles.buttonsDiv}>
                            <Button
                                icon={<MoveRight />}
                                iconPosition="right"
                                color="whiteAnimated"
                                text={t("hero.ctaProject")}
                                size="md"
                                onClick={() => {
                                    window.location.hash = "project";
                                }}
                            />
                            <Button
                                color="transparent"
                                text={t("hero.ctaContact")}
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