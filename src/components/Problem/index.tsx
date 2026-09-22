import { ClipboardClock, Leaf, UserRoundCog } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';
import { Container } from '../Container';
import styles from './styles.module.css';

const icons = [Leaf, ClipboardClock, UserRoundCog];

export function Problem() {
    const { t, i18n } = useTranslation();
    const cards = t('problem.cards', { returnObjects: true }) as {
        title: string;
        subtitle: string;
        description: string;
    }[];

    return (
        <section className={styles.projectBg}>
            <Container>
                <div className={styles.solutionContainer}>
                    <span className={styles.tag}>{t('problem.tag')}</span>
                    <h1>
                        <Trans i18nKey="problem.title" t={t} i18n={i18n} components={{ br: <br /> }} />
                    </h1>
                    <p>{t('problem.paragraph1')}</p>
                    <p>{t('problem.paragraph2')}</p>
                    <div className={styles.solutionGroup}>
                        <h5 className={styles.groupLabel}>{t('problem.groupLabel')}</h5>
                        <div className={styles.solutionBlock}>
                            <div className={styles.cardGrid}>
                                {cards.map((card, index) => {
                                    const Icon = icons[index];
                                    return (
                                        <div className={styles.cardObj} key={index}>
                                            <div className={styles.cardIcon}>
                                                <Icon />
                                            </div>
                                            <div className={styles.cardTitle}>
                                                <h5>{card.title}</h5>
                                                <h6>{card.subtitle}</h6>
                                            </div>
                                            <p>{card.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}