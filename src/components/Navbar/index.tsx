
import { Boxes, Languages } from "lucide-react";
import { Button } from "../Button";
import styles from "./styles.module.css";
import { useTranslation } from 'react-i18next';

export function Navbar() {
    const { t, i18n } = useTranslation();
    const isPt = i18n.language?.toLowerCase().startsWith("pt");
    const toggleLanguage = () => {
        const nextLang = isPt ? "en" : "pt";
        i18n.changeLanguage(nextLang);
    };
    
    return (
        <>
            <nav className={styles.navbar}>
                <img src="/vitallizLogo.svg" alt="Logo Vitaliz" />
                <div className={styles.linksNavbar}>
                    <a href="#">{t("nav.home")}</a>
                    <a href="#">{t("nav.about")}</a>
                    <a href="#">{t("nav.project")}</a>  
                    <a href="#">{t("nav.team")}</a>
                </div>
                <div className={styles.buttonsNavbar}>
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