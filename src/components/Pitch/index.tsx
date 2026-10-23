import { Container } from '../Container';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import { links } from '../../constants/links';

export function Pitch() {
    const { t } = useTranslation();

    return (
        <section id="pitch" className={styles.pitchBg}>
        <Container>
            <div className={styles.pitch}>
            <div className={styles.header}>
                <span className={styles.tag}>{t('pitch.tag')}</span>
                <h2>{t('pitch.title')}</h2>
                <p className={styles.description}>
                {t('pitch.description')}
                </p>
            </div>

            <div className={styles.videoCard}>
                <div className={styles.videoWrapper}>
                    <iframe
                    src={links.pitch.video}
                    title={t('pitch.title')}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    />
                </div>
            </div>

            </div>
        </Container>
        </section>
    );
}

export default Pitch;