import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { Trans, useTranslation } from 'react-i18next';
import styles from './styles.module.css'

export function Footer() {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <section className={styles.footerBg}>
            <footer className={styles.footer}>
                <div className={styles.footerTop}>
                    <div className={styles.footerBrand}>
                        <p className={styles.footerText}>
                            <Trans
                                i18nKey="footer.copyright"
                                values={{ year }}
                                components={{ strongBrand: <strong /> }}
                            />
                        </p>
                        <p className={styles.footerTagline}>
                            {t('footer.tagline')}
                        </p>
                    </div>

                    <nav className={styles.footerLinks} aria-label={t('footer.ariaLabels.navLinks')}>
                        <a href="#home">{t('footer.links.home')}</a>
                        <a href="#project">{t('footer.links.project')}</a>
                        <a href="#about">{t('footer.links.about')}</a>
                        <a href="#team">{t('footer.links.team')}</a>
                    </nav>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.socialLinks} aria-label={t('footer.ariaLabels.social')}>
                        <a
                            href="https://github.com/Vitalliz"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t('footer.ariaLabels.github')}
                        >
                            <FaGithub />
                        </a>

                        <a href="mailto:contato@vitalliz.com" aria-label={t('footer.ariaLabels.email')}>
                            <FaEnvelope />
                        </a>
                    </div>

                    <a href="#home" className={styles.backToTop}>
                        {t('footer.backToTop')} ↑
                    </a>
                </div>
            </footer>
        </section>
    );
}