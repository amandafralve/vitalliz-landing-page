
import styles from "./styles.module.css";

export function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <img src="/vitallizLogo.svg" alt="Logo Vitaliz" />
                <p>Início</p>
                <p>Projeto</p>
                <p>Sobre</p>
                <p>Equipe</p>
                <button>Ver Projetos</button>
                <button>PT_BR</button>
            </nav>
        </>  
    );
}