import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import { Container } from '../Container';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import emailjs from '@emailjs/browser';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

// Tempo (em ms) que a notificação fica visível antes de sumir sozinha
const NOTICE_DURATION = {
    success: 5000,
    error: 8000,
} as const;

export function Contact() {
    const { t } = useTranslation();
    const [status, setStatus] = useState<SubmitStatus>('idle');

    // Esconde a notificação automaticamente após alguns segundos
    useEffect(() => {
        if (status !== 'success' && status !== 'error') return;

        const timeout = window.setTimeout(() => setStatus('idle'), NOTICE_DURATION[status]);
        return () => window.clearTimeout(timeout);
    }, [status]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Evita envio duplicado enquanto a requisição anterior ainda está em andamento
        if (status === 'loading') return;

        // Guarda o form antes do await: depois dele, e.currentTarget vira null
        const form = e.currentTarget;
        setStatus('loading');

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            form.reset();
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
            setStatus('error');
        }
    };

    return (
        <section id='contact' className={styles.contactBg}>
            <Container>
                <div className={styles.contact}>
                    <div className={styles.contactIntro}>
                        <h2 className={styles.contactTitle}>{t('contact.title')}</h2>
                        <p className={styles.contactText}>{t('contact.text')}</p>
                    </div>

                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.formRow}>
                            <div className={styles.formField}>
                                <label htmlFor="name">{t('contact.form.nameLabel')}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder={t('contact.form.namePlaceholder')}
                                    required
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="email">{t('contact.form.emailLabel')}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder={t('contact.form.emailPlaceholder')}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formField}>
                            <label htmlFor="subject">{t('contact.form.subjectLabel')}</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder={t('contact.form.subjectPlaceholder')}
                                required
                            />
                        </div>

                        <div className={styles.formField}>
                            <label htmlFor="message">{t('contact.form.messageLabel')}</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder={t('contact.form.messagePlaceholder')}
                                required
                            />
                        </div>

                        <div className={styles.formActions}>
                            <Button
                                icon={<FaPaperPlane />}
                                size='mdTwo'
                                iconPosition='right'
                                text={
                                    status === 'loading'
                                        ? t('contact.form.sendingButton')
                                        : t('contact.form.submitButton')
                                }
                                color='white'
                                type='submit'
                                disabled={status === 'loading'}
                            />
                        </div>

                        {status === 'success' && (
                            <div
                                className={`${styles.formNotice} ${styles.formSuccess}`}
                                role="status"
                                aria-live="polite"
                            >
                                <FaCheckCircle className={styles.formNoticeIcon} aria-hidden="true" />
                                <p>{t('contact.form.successMessage')}</p>
                                <button
                                    type="button"
                                    className={styles.formNoticeClose}
                                    onClick={() => setStatus('idle')}
                                    aria-label={t('contact.form.closeNotice', 'Fechar')}
                                >
                                    <FaTimes aria-hidden="true" />
                                </button>
                            </div>
                        )}

                        {status === 'error' && (
                            <div
                                className={`${styles.formNotice} ${styles.formError}`}
                                role="alert"
                            >
                                <FaExclamationCircle className={styles.formNoticeIcon} aria-hidden="true" />
                                <p>{t('contact.form.errorMessage')}</p>
                                <button
                                    type="button"
                                    className={styles.formNoticeClose}
                                    onClick={() => setStatus('idle')}
                                    aria-label={t('contact.form.closeNotice', 'Fechar')}
                                >
                                    <FaTimes aria-hidden="true" />
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </Container>
        </section>
    );
}