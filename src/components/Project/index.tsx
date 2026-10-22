import { Container } from '../Container';
import { Button } from '../Button';
import { MoveUpRight } from 'lucide-react';
import { FaGithub, FaFigma } from "react-icons/fa";
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { DeferredSection } from '../DeferredSection';
import styles from './styles.module.css';
import { links } from '../../constants/links'

const LazyCarouselMockup = lazy(() => import('../CarouselMockup'));

export function Project() {
    const { t } = useTranslation();

    return (
        <section id='project' className={styles.projectBg}>
            <Container>
                <div className={styles.project}>
                    <div className={styles.left}>
                        <div className={styles.brand}>
                            <span className={styles.tag}>{t('project.tag')}</span>
                            <h1>{t('project.name')}</h1>
                        </div>

                        <p className={styles.subtitle}>
                            {t('project.subtitle')}
                        </p>

                        <p className={styles.description}>
                            {t('project.description')}
                        </p>

                        <div className={styles.secondaryButtons}>
                            <Button
                                icon={<FaGithub />}
                                text={t('project.githubButton')}
                                color="white"
                                size="md"
                                onClick={() => window.open(links.project.github, "_blank")}
                            />
                            <Button
                                icon={<FaFigma />}
                                text={t('project.figmaButton')}
                                color="white"
                                size="md"
                                onClick={() => window.open(links.project.figma, "_blank")}
                            />
                        </div>

                        <Button
                            icon={<MoveUpRight />}
                            iconPosition="right"
                            text={t('project.productButton')}
                            color="blue"
                            size="md"
                            onClick={() => window.open(links.project.produto, "_blank")}
                        />
                    </div>

                    <div className={styles.right}>
                        <DeferredSection
                            component={LazyCarouselMockup}
                            className={styles.lazyCarousel}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}