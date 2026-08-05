
import { Boxes, Languages, Menu, X } from "lucide-react";
import { Button } from "../Button";
import styles from "./styles.module.css";
import { useTranslation } from 'react-i18next';
import { useState } from "react";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const { t, i18n } = useTranslation();
    const isPt = i18n.language?.toLowerCase().startsWith("pt");
    const toggleLanguage = () => {
        const nextLang = isPt ? "en" : "pt";
        i18n.changeLanguage(nextLang);
    };
    
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbarTop}>
                    <img src="/vitallizLogo.svg" alt="Logo Vitaliz" />

                    <button
                        className={styles.hamburgerButton}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                <div className={`${styles.linksNavbar} ${menuOpen ? styles.linksNavbarOpen : ""}`}>
                    <a href="#">{t("nav.home")}</a>
                    <a href="#">{t("nav.about")}</a>
                    <a href="#">{t("nav.project")}</a>  
                    <a href="#">{t("nav.team")}</a>
                </div>

                <div className={`${styles.buttonsNavbar} ${menuOpen ? styles.buttonsNavbarOpen : ""}`}>
                    <Button icon={<Boxes/> } text={t("nav.viewProjects")} color="blue" />
                    <Button 
                        icon={<Languages/>}
                        text={isPt ? 'EN' : 'PT-BR'} 
                        color="language" 
                        onClick={toggleLanguage} 
                        title="Mudar idioma / Change language"/>
                </div>
            </nav>
        </>  
    );
}