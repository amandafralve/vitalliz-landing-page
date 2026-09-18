import { FaEnvelope, FaGithub } from 'react-icons/fa';
import styles from './styles.module.css'

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <section className={styles.footerBg}>
            <footer className={styles.footer}>
                <div className={styles.footerTop}>
                    <div className={styles.footerBrand}>
                        <p className={styles.footerText}>
                            <strong>Vitalliz</strong> © {year} • Todos os direitos reservados.
                        </p>
                        <p className={styles.footerTagline}>
                        Tecnologia que dá vida.
                        </p>
                    </div>

                    <nav className={styles.footerLinks} aria-label="Links do rodapé">
                        <a href="#home">Início</a>
                        <a href="#project">Projeto</a>
                        <a href="#about">Sobre</a>
                        <a href="#team">Equipe</a>
                    </nav>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.socialLinks} aria-label="Redes sociais">
                        <a href="https://github.com/Vitalliz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                        </a>

                        <a href="mailto:contato@vitalliz.com" aria-label="E-mail">
                            <FaEnvelope />
                        </a>
                    </div>

                    <a href="#home" className={styles.backToTop}>
                        Voltar ao topo ↑
                    </a>
                </div>
            </footer>
        </section>
    );
}