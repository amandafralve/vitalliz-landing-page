import styles from './styles.module.css'
import { Container } from '../Container';
import { FaGithub, FaLinkedin, FaBehance, FaEnvelope } from "react-icons/fa";
import { links } from '../../constants/links';

type Member = {
    name: string;
    role: string;
    image: string;
    github?: string;
    linkedin?: string;
    behance?: string;
    email: string;
};

const TEAM: Member[] = [
    {
        name: "Amanda Vithória",
        role: "UI/UX & Desenvolvedora Front-End",
        image: "/img/team/AmandaFreitas.webp",
        ...links.team.amanda,
    },
    {
        name: "Lucas Gomes",
        role: "Desenvolvedor Back-end e Modelagem de Banco de Dados",
        image: "/img/team/LucasGomes.webp",
        ...links.team.lucas,
    },
    {
        name: "Valéria de Freitas",
        role: "Desenvolvedora Back-end",
        image: "/img/team/ValeriaFreitas.webp",
        ...links.team.valeria,
    },
    {
        name: "Juliano Rodrigues",
        role: "Inteligência Artificial e Análise de Dados",
        image: "/img/team/JulianoRodrigues.webp",
        ...links.team.juliano,
    },
];

export function Team() {
    return (
        <section id='team' className={styles.teamBg}>
            <Container>
                <div className={styles.team}>
                    <h1 className={styles.teamTitle}>Nossa Equipe</h1>
                    <div className={styles.teamGrid}>
                        {TEAM.map((member) => (
                            <div key={member.name} className={styles.memberCard}>
                                <img
                                    src={member.image}
                                    alt={`Foto de ${member.name}`}
                                    className={styles.memberPhoto}
                                />
                                <div className={styles.memberInfo}>
                                    <h3 className={styles.memberName}>{member.name}</h3>
                                    <p className={styles.memberRole}>{member.role}</p>
                                </div>
                                <div className={styles.memberFooter}>
                                    <div className={styles.memberSocials}>
                                        {member.github && (
                                            <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`Github de ${member.name}`}>
                                                <FaGithub />
                                            </a>
                                        )}
                                        {member.behance && (
                                            <a href={member.behance} target="_blank" rel="noopener noreferrer" aria-label={`Behance de ${member.name}`}>
                                                <FaBehance />
                                            </a>
                                        )}
                                        {member.linkedin && (
                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Linkedin de ${member.name}`}>
                                                <FaLinkedin  />
                                            </a>
                                        )}
                                    </div>
                                    <div className={styles.memberEmail}>
                                        <a href={`mailto:${member.email}`} aria-label={`Email de ${member.name}`}>
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