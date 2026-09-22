import styles from './styles.module.css'
import { Container } from '../Container';
import { CarouselWithCaptions } from '../CarouselAbout';
import { Cpu, Lightbulb, Leaf } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';

const icons = [Cpu, Lightbulb, Leaf];

export function About() {
    const { t, i18n } = useTranslation();
    const cards = t('about.cards', { returnObjects: true }) as {
        title: string;
        description: string;
    }[];

    return (
        <Container>
            <div id='about' className={styles.containerAbout}>
                <h1>{t('about.title')}</h1>

                <div className={styles.aboutUs}>
                    <div className={styles.aboutUsContent}>
                        <p>
                            <Trans
                                i18nKey="about.intro"
                                t={t}
                                i18n={i18n}
                                components={{
                                    strongFatec: <strong />,
                                    strongOds: <strong />,
                                }}
                            />
                        </p>

                        <div className={styles.objectiveBlock}>
                            <h2>{t('about.objectiveTitle')}</h2>
                            <div className={styles.cardGrid}>
                                {cards.map((card, index) => {
                                    const Icon = icons[index];
                                    return (
                                        <div className={styles.cardObj} key={index}>
                                            <div className={styles.cardTitle}>
                                                <Icon size={22} className={styles.cardIcon} />
                                                <h5>{card.title}</h5>
                                            </div>
                                            <p>{card.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className={styles.carouselWrapper}>
                        <CarouselWithCaptions />
                    </div>
                </div>
            </div>
        </Container>
    );
}