import styles from './styles.module.css'
import { Container } from '../Container';
import { FaGithub, FaLinkedin, FaBehance, FaEnvelope } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { links } from '../../constants/links';

type Member = {
    id: 'amanda' | 'lucas' | 'valeria' | 'juliano';
    name: string;
    image: string;
    github?: string;
    linkedin?: string;
    behance?: string;
    email: string;
};

const TEAM: Member[] = [
    {
        id: "amanda",
        name: "Amanda Vithória",
        image: "/img/Team/AmandaFreitas.webp",
        ...links.team.amanda,
    },
    {
        id: "lucas",
        name: "Lucas Gomes",
        image: "/img/Team/LucasGomes.webp",
        ...links.team.lucas,
    },
    {
        id: "valeria",
        name: "Valéria de Freitas",
        image: "/img/Team/ValeriaFreitas.webp",
        ...links.team.valeria,
    },
    {
        id: "juliano",
        name: "Juliano Rodrigues",
        image: "/img/Team/JulianoRodrigues.webp",
        ...links.team.juliano,
    },
];

export function Team() {
    const { t } = useTranslation();

    return (
        <section id='team' className={styles.teamBg}>
            <Container>
                <div className={styles.team}>
                    <h1 className={styles.teamTitle}>{t('team.title')}</h1>
                    <div className={styles.teamGrid}>
                        {TEAM.map((member) => (
                            <div key={member.id} className={styles.memberCard}>
                                <img
                                    src={member.image}
                                    alt={t('team.ariaLabels.photo', { name: member.name })}
                                    className={styles.memberPhoto}
                                />
                                <div className={styles.memberInfo}>
                                    <h3 className={styles.memberName}>{member.name}</h3>
                                    <p className={styles.memberRole}>
                                        {t(`team.members.${member.id}.role`)}
                                    </p>
                                </div>
                                <div className={styles.memberFooter}>
                                    <div className={styles.memberSocials}>
                                        {member.github && (
                                            <a
                                                href={member.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={t('team.ariaLabels.github', { name: member.name })}
                                            >
                                                <FaGithub />
                                            </a>
                                        )}
                                        {member.behance && (
                                            <a
                                                href={member.behance}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={t('team.ariaLabels.behance', { name: member.name })}
                                            >
                                                <FaBehance />
                                            </a>
                                        )}
                                        {member.linkedin && (
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={t('team.ariaLabels.linkedin', { name: member.name })}
                                            >
                                                <FaLinkedin />
                                            </a>
                                        )}
                                    </div>
                                    <div className={styles.memberEmail}>
                                        <a
                                            href={`mailto:${member.email}`}
                                            aria-label={t('team.ariaLabels.email', { name: member.name })}
                                        >
                                            <FaEnvelope />
                                            <span>{member.email}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}