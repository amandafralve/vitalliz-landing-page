import { Boxes, Languages, Menu, X } from "lucide-react";
import { Button } from "../Button";
import styles from "./styles.module.css";
import { useTranslation } from 'react-i18next';
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const emptySubscribe = () => () => {};

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);    
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const isPt = i18n.language?.toLowerCase().startsWith("pt");

    const mounted = useSyncExternalStore(
        emptySubscribe,
        () => true,   // client snapshot
        () => false   // server snapshot
    );

    const isTransparent = !isScrolled;
    const logoSrc = isTransparent ? "/vitallizLogoWhite.svg" : "/vitallizLogo.svg";

    const toggleLanguage = () => {
        const nextLang = isPt ? "en" : "pt";
        i18n.changeLanguage(nextLang);
    };

    const closeMenu = () => setMenuOpen(false);
    const toggleMenu = () => setMenuOpen((prev) => !prev);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, []);

    useEffect(() => {
        if (!menuOpen) return;

        const scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";

        return () => {
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            document.body.style.width = "";
            window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
        };
    }, [menuOpen]);

    const navbarClass = `${styles.navbar} ${isScrolled ? styles.navbarScrolled : styles.navbarTransparent}`;

    const navbarContent = (
        <nav className={navbarClass}>
            <div className={styles.navbarTop}>
                <img src={logoSrc} alt="Logo Vitaliz" />
                <button
                    className={styles.hamburgerButton}
                    onClick={toggleMenu}
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <div className={`${styles.linksNavbar} ${menuOpen ? styles.linksNavbarOpen : ""}`}>
                <a href="#home" onClick={closeMenu}>{t("nav.home")}</a>
                <a href="#project" onClick={closeMenu}>{t("nav.project")}</a>
                <a href="#about" onClick={closeMenu}>{t("nav.about")}</a>
                <a href="#team" onClick={closeMenu}>{t("nav.team")}</a>
                <a href="#contact" onClick={closeMenu}>{t("nav.contact")}</a>
            </div>

            <div className={`${styles.buttonsNavbar} ${menuOpen ? styles.buttonsNavbarOpen : ""}`}>
                <Button
                    icon={<Boxes />}
                    text={t("nav.viewProject")}
                    color="blue"
                    onClick={() => {
                        closeMenu();

                        setTimeout(() => {
                            document.getElementById("project")?.scrollIntoView({
                                block: "start",
                            });
                        }, 50);
                    }}
                />
                <Button
                    icon={<Languages />}
                    text={isPt ? 'EN' : 'PT-BR'}
                    color={isTransparent ? "transparent" : "language"}
                    onClick={toggleLanguage}
                    title="Mudar idioma / Change language"
                />
            </div>
        </nav>
    );

    if (!mounted) return null;
    return createPortal(navbarContent, document.body);
}