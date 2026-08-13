import styles from './styles.module.css'
import { Container } from '../Container';

type Member = {
    name: string;
    role: string;
    image: string;
    github?: string;
    linkedin?: string;
    behance?: string;
};

const TEAM: Member[] = [
    {
        name: "Amanda Vithória",
        role: "UI/UX & Desenvolvedora Front-End",
        image: "/img/Team/AmandaFreitas.webp",
        github: "#",
        behance: "#",
        linkedin: "#",
    },
    {
        name: "Lucas Gomes",
        role: "Desenvolvedor Back-end e Modelagem de Banco de Dados",
        image: "/img/Team/LucasGomes.webp",
        github: "#",
        linkedin: "#",
    },
    {
        name: "Valéria de Freitas",
        role: "Desenvolvedora Back-end",
        image: "/img/Team/ValeriaFreitas.webp",
        github: "#",
        linkedin: "#",
    },
    {
        name: "Juliano Rodrigues",
        role: "Inteligência Artificial e Análise de Dados",
        image: "/img/Team/JulianoRodrigues.webp",
        github: "#",
        linkedin: "#",
    },
];

function GithubIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z"/>
        </svg>
    );
}

function LinkedinIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
        </svg>
    );
}

function BehanceIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22 7h-6v-1h6v1zm1.726 6.726c.05-.408.076-.826.076-1.252 0-2.9-2.15-4.474-4.87-4.474-2.984 0-5.03 2.222-5.03 5.373 0 3.2 2.13 5.303 5.145 5.303 2.35 0 4.09-1.13 4.6-3.03h-2.35c-.28.68-.98 1.08-2.11 1.08-1.42 0-2.34-.87-2.42-2.29h6.96zm-6.93-1.65c.13-1.16.9-1.85 2.02-1.85 1.14 0 1.87.72 1.95 1.85h-3.97zM8.36 8.44c1.71 0 2.92-.9 2.92-2.62 0-1.71-1.21-2.55-2.9-2.55H0v14.4h8.62c1.94 0 3.5-1.05 3.5-2.98 0-1.94-1.44-2.99-3.76-3.05v-.04c1.24-.24 2.02-1.06 2.02-2.16 0-1.5-1.14-2.4-2.87-2.4H2.9v-.6h5.46zM2.9 7.09h4.7c.83 0 1.4.42 1.4 1.13 0 .74-.57 1.19-1.4 1.19H2.9V7.09zm0 4.32h4.9c1 0 1.65.5 1.65 1.36 0 .87-.65 1.34-1.65 1.34H2.9v-2.7z"/>
        </svg>
    );
}

export function Team() {
    return (
        <Container>
            <div className={styles.team}>
                <h1 className={styles.teamTitle}>Nossa Equipe</h1>

                <div className={styles.teamPanel}>
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

                                <div className={styles.memberSocials}>
                                    {member.github && (
                                        <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`Github de ${member.name}`}>
                                            <GithubIcon />
                                        </a>
                                    )}
                                    {member.behance && (
                                        <a href={member.behance} target="_blank" rel="noopener noreferrer" aria-label={`Behance de ${member.name}`}>
                                            <BehanceIcon />
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Linkedin de ${member.name}`}>
                                            <LinkedinIcon />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}