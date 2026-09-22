import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { Trans, useTranslation } from 'react-i18next';
import styles from './styles.module.css'

const FOOTER_LINKS = [
    { id: "home", labelKey: "footer.links.home" },
    { id: "project", labelKey: "footer.links.project" },
    { id: "about", labelKey: "footer.links.about" },
    { id: "team", labelKey: "footer.links.team" },
] as const;

export function Footer() {
    const { t, i18n } = useTranslation();
    const year = new Date().getFullYear();

    // Faz o scroll manualmente e evita que o navegador adicione #id na URL
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({
            block: "start",
        });
    };

    return (
        <section className={styles.footerBg}>
            <footer className={styles.footer}>
                <div className={styles.footerTop}>
                    <div className={styles.footerBrand}>
                        <p className={styles.footerText}>
                            <Trans
                                i18nKey="footer.copyright"
                                t={t}
                                i18n={i18n}
                                values={{ year }}
                                components={{ strongBrand: <strong /> }}
                            />
                        </p>
                        <p className={styles.footerTagline}>
                            {t('footer.tagline')}
                        </p>
                    </div>

                    <nav className={styles.footerLinks} aria-label={t('footer.ariaLabels.navLinks')}>
                        {FOOTER_LINKS.map(({ id, labelKey }) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={(e) => handleNavClick(e, id)}
                            >
                                {t(labelKey)}
                            </a>
                        ))}
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

                        <a href="mailto:amanda.fralve@gmail.com" aria-label={t('footer.ariaLabels.email')}>
                            <FaEnvelope />
                        </a>
                    </div>

                    <a
                        href="#home"
                        className={styles.backToTop}
                        onClick={(e) => handleNavClick(e, "home")}
                    >
                        {t('footer.backToTop')} ↑
                    </a>
                </div>
            </footer>
        </section>
    );
}