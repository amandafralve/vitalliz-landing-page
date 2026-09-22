import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react'
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css'

// Ordem precisa bater com about.carousel.events no JSON de tradução
const eventImages = [
    '/img/events/ApresentacaoCasaOracle.webp',
    '/img/events/BancaPrimeiroSemestre.webp',
    '/img/events/EventoCicUnesp.webp',
    '/img/events/FeiraPrimeiroSemestre.webp',
    '/img/events/FeiraQuartoSemestre.webp',
    '/img/events/PremiacaoOracle.webp',
    '/img/events/VisitaTecnicaCampo.webp',
    '/img/events/VisitaTecnicaCampoDois.webp',
    '/img/events/VisitaTecnicaIrineu.webp',
];

type EventCaption = {
    title: string;
    text: string;
};

export const CarouselWithCaptions = () => {
    const { t } = useTranslation();
    const events = t('about.carousel.events', { returnObjects: true }) as EventCaption[];

    return (
        <CCarousel controls indicators className={styles.carousel}>
            {eventImages.map((src, index) => {
                const event = events[index];
                return (
                    <CCarouselItem key={src}>
                        <CImage
                            className={styles.carouselImage}
                            src={src}
                            alt={event.title}
                        />
                        <CCarouselCaption className={styles.carouselCaptionCustom}>
                            <h5>{event.title}</h5>
                            <p>{event.text}</p>
                        </CCarouselCaption>
                    </CCarouselItem>
                );
            })}
        </CCarousel>
    )
}