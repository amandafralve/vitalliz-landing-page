
import styles from './styles.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>
                <strong>Vitalliz</strong> © {new Date().getFullYear()} • Todos os direitos reservados.
            </p>
            <nav className={styles.footerLinks} aria-label="Links do rodapé">
                <a href="#inicio">Início</a>
                <a href="#sobre">Sobre</a>
                <a href="#projeto">Projeto</a>
                <a href="#equipe">Equipe</a>
            </nav>
        </footer>
    );
}