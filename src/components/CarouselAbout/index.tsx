import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react'
import styles from './styles.module.css'

type Event = {
    src: string;
    title: string;
    text: string;
};

const events: Event[] = [
    {
        src: '/img/events/ApresentacaoCasaOracle.webp',
        title: 'Apresentação Casa Oracle',
        text: 'Registros da nossa apresentação na Casa Oracle.',
    },
    {
        src: '/img/events/BancaPrimeiroSemestre.webp',
        title: 'Banca do Primeiro Semestre',
        text: 'Apresentação e avaliação dos projetos do primeiro semestre.',
    },
    {
        src: '/img/events/EventoCicUnesp.webp',
        title: 'Evento CIC Unesp',
        text: 'Participação no Congresso de Iniciação Científica da Unesp.',
    },
    {
        src: '/img/events/FeiraPrimeiroSemestre.webp',
        title: 'Feira do Primeiro Semestre',
        text: 'Exposição dos projetos desenvolvidos no primeiro semestre.',
    },
    {
        src: '/img/events/FeiraQuartoSemestre.webp',
        title: 'Feira do Quarto Semestre',
        text: 'Exposição dos projetos desenvolvidos no quarto semestre.',
    },
    {
        src: '/img/events/PremiacaoOracle.webp',
        title: 'Premiação Oracle',
        text: 'Reconhecimento recebido durante a premiação promovida pela Oracle.',
    },
    {
        src: '/img/events/VisitaTecnicaCampo.webp',
        title: 'Visita Técnica - Sítio São Miguel, Frutas Wosniak',
        text: 'Visita técnica realizada em campo para conhecer o processo produtivo.',
    },
    {
        src: '/img/events/VisitaTecnicaCampoDois.webp',
        title: 'Visita Técnica de Campo II',
        text: 'Segunda visita técnica em campo realizada pela equipe.',
    },
    {
        src: '/img/events/VisitaTecnicaIrineu.webp',
        title: 'Visita Técnica Irineu',
        text: 'Visita técnica realizada com o produtor Irineu.',
    },
];

export const CarouselWithCaptions = () => {
    return (
        <CCarousel controls indicators className={styles.carousel}>
            {events.map((event) => (
                <CCarouselItem key={event.src}>
                    <CImage
                        className={styles.carouselImage}
                        src={event.src}
                        alt={event.title}
                    />
                    <CCarouselCaption className={styles.carouselCaptionCustom}>
                        <h5>{event.title}</h5>
                        <p>{event.text}</p>
                    </CCarouselCaption>
                </CCarouselItem>
            ))}
        </CCarousel>
    )
}