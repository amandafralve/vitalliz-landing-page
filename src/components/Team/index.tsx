import styles from './styles.module.css'
import { Container } from '../Container';
import { FaGithub, FaLinkedin, FaBehance, FaEnvelope } from "react-icons/fa";

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
        github: "https://github.com/amandafralve",
        behance: "https://www.behance.net/amandafralve",
        linkedin: "https://www.linkedin.com/in/amanda-fralve/",
        email: "amanda.freitas12@aluno.cps.sp.gov.br",
    },
    {
        name: "Lucas Gomes",
        role: "Desenvolvedor Back-end e Modelagem de Banco de Dados",
        image: "/img/team/LucasGomes.webp",
        github: "https://github.com/ManoRokys",
        linkedin: "https://www.linkedin.com/in/lucas-gomes-fagundes",
        email: "lucas.fagundes@aluno.cps.sp.gov.br",
    },
    {
        name: "Valéria de Freitas",
        role: "Desenvolvedora Back-end",
        image: "/img/team/ValeriaFreitas.webp",
        github: "https://github.com/ValeriaDeFreitas",
        linkedin: "https://www.linkedin.com/in/valeria-de-freitas/",
        email: "valeria.freitas@aluno.cps.sp.gov.br",
    },
    {
        name: "Juliano Rodrigues",
        role: "Inteligência Artificial e Análise de Dados",
        image: "/img/team/JulianoRodrigues.webp",
        github: "https://github.com/jurodri",
        linkedin: "https://www.linkedin.com/in/jurodri/",
        email: "juliano.sales@aluno.cps.sp.gov.br",
    },
];

export function Team() {
    return (
        <section className={styles.teamBg}>
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
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <p className={styles.memberRole}>{member.role}</p>

                                <div>
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