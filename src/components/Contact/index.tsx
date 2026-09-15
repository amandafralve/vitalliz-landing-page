import styles from './styles.module.css'
import { Container } from '../Container';
import { FaPaperPlane } from "react-icons/fa";
import { Button } from '../Button';

export function Contact() {
    return (
        <section className={styles.contactBg}>
            <Container>
                <div className={styles.contact}>
                    <div className={styles.contactIntro}>
                        <h2 className={styles.contactTitle}>Fale com a gente</h2>
                        <p className={styles.contactText}>
                            Tem alguma dúvida, sugestão ou proposta? Preencha o formulário
                            e retornaremos assim que possível.
                        </p>
                    </div>

                    <form className={styles.contactForm}>
                        <div className={styles.formRow}>
                            <div className={styles.formField}>
                                <label htmlFor="name">Nome</label>
                                <input type="text" id="name" name="name" placeholder="Seu nome completo" required />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="email">E-mail</label>
                                <input type="email" id="email" name="email" placeholder="voce@email.com" required />
                            </div>
                        </div>

                        <div className={styles.formField}>
                            <label htmlFor="subject">Assunto</label>
                            <input type="text" id="subject" name="subject" placeholder="Sobre o que você quer falar?" required />
                        </div>

                        <div className={styles.formField}>
                            <label htmlFor="message">Mensagem</label>
                            <textarea id="message" name="message" rows={5} placeholder="Escreva sua mensagem aqui..." required />
                        </div>

                        <div className={styles.formActions}>
                            <Button icon={<FaPaperPlane />} size='mdTwo' iconPosition='right' text="Enviar mensagem" color='white' />
                        </div>

                    </form>
                </div>
            </Container>
        </section>
    );
}