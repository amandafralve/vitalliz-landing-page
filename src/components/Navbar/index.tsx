
import { Boxes } from "lucide-react";
import { Button } from "../Button";
import styles from "./styles.module.css";

export function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <img src="/vitallizLogo.svg" alt="Logo Vitaliz" />
                <div className={styles.linksNavbar}>
                    <a href="#">Início</a>
                    <a href="#">Projeto</a>
                    <a href="#">Sobre</a>
                    <a href="#">Equipe</a>
                </div>
                <div className={styles.buttonsNavbar}>
                    <Button icon={<Boxes/> } text="Ver Projetos" color="blue" />
                    <Button text="PT-BR" color="language" />
                </div>
            </nav>
        </>  
    );
}