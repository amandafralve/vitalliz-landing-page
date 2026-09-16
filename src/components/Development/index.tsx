import { Container } from '../Container';

import {
  Search,
  Settings2,
  BrainCircuit,
  ScanSearch,
  Smartphone,
  Check,
  User,
  type LucideIcon,
} from 'lucide-react';

import ScrollStack, {
  ScrollStackItem,
} from '../ScrollStack';

import styles from './styles.module.css';

interface Persona {
  name: string;
  role: string;
  tag: string;
  description: string;
}

interface StepData {
  number: string;
  title: string;
  icon: LucideIcon;
  variant?: 'default' | 'research';
  image?: string;
  label?: string;
  subtitle?: string;
  paragraphs?: string[];
  checklist?: string[];
  stat?: string;
  statLabel?: string;
  objectivesTitle?: string;
  objectives?: string[];
  resultsTitle?: string;
  results?: string[];
  personasTitle?: string;
  personas?: Persona[];
}

const steps: StepData[] = [
  {
    number: '1',
    title: 'Coleta de dados',
    icon: Search,
    variant: 'research',
    subtitle: 'Pesquisa de Usuário',

    objectivesTitle: 'Objetivos da Pesquisa',
    objectives: [
      'Compreender dificuldades de produtores no uso de tecnologia no campo',
      'Mapear necessidades e expectativas de profissionais agrícolas',
      'Identificar padrões de comportamento digital no agronegócio',
    ],

    resultsTitle: 'Principais Resultados',
    results: [
      'Muitos produtores têm dificuldade com ferramentas digitais',
      'Preferência por instruções simples, rápidas e visuais',
      'Necessidade de tutorial guiado no primeiro acesso',
      'Buscam praticidade, rapidez e segurança no diagnóstico',
    ],

    personasTitle: 'PERSONAS',
    personas: [
      {
        name: 'João',
        role: 'Produtor Rural',
        tag: 'Baixa familiaridade tecnológica',
        description:
          'Produtor que precisa de soluções rápidas e fáceis para evitar perdas na produção, sem depender de suporte técnico constante.',
      },
      {
        name: 'Ana',
        role: 'Agrônoma Consultora',
        tag: 'Profissional técnica',
        description:
          'Profissional que busca agilidade e precisão nos diagnósticos, com organização centralizada das informações das lavouras.',
      },
    ],
  },

  {
    number: '1',
    title: 'Coleta de dados',
    icon: Search,
    image: '/img/development/VisitaTecnicaCampo.webp',
    subtitle: 'Pesquisa de Campo',

    paragraphs: [
      'Realizamos uma pesquisa de campo no Sítio São Miguel, em Pariquera-Açu/SP, para compreender a realidade do cultivo de mexerica (Citrus reticulata).',
      'Através da aplicação de um questionário estruturado, coletamos dados diretos sobre o manejo na prática e realizamos a coleta de amostras reais de folhas.',
    ],

    checklist: [
      '+100 imagens coletadas de folhas deficientes',
      'Aprendizado real sobre o dia a dia no pomar',
      'Diversidade de estágios de deficiência',
    ],
  },

  {
      number: '2',
      title: 'Pré-processamento e aumento de dados',
      icon: Settings2,
      image: '/img/development/fundoMexerica.png',
      subtitle: 'Padronização e Data Augmentation',

      paragraphs: [
      'As imagens foram submetidas à correção automática de orientação e redimensionadas para 224 × 224 pixels, utilizando ajuste proporcional com preenchimento de bordas para preservar suas características visuais.',
      'Durante o treinamento, aplicamos aumento de dados exclusivamente nas imagens de treino, gerando três variações sintéticas por imagem com inversão horizontal, rotação, alterações de saturação, brilho e exposição.',
      ],

      checklist: [
      'Imagens padronizadas em 224 × 224 pixels',
      'Normalização dos valores dos pixels',
      'Aumento de dados com variações de captura',
      ],
  },

    {
      number: '3',
      title: 'Treinamento do modelo',
      icon: BrainCircuit,
      image: '/img/development/fundoMexerica.png',
      subtitle: 'Rede Neural Convolucional',

      paragraphs: [
        'Desenvolvemos uma Rede Neural Convolucional composta por três blocos convolucionais, com 32, 64 e 128 filtros, responsáveis por extrair características visuais das folhas em diferentes níveis de complexidade.',
        'O modelo utiliza uma camada densa com 512 neurônios e Dropout de 50%. O treinamento foi realizado com o otimizador Adam, função de perda binary crossentropy e Early Stopping com paciência de 10 épocas.',
      ],

      checklist: [
        'Arquitetura com 3 blocos convolucionais',
        'Dropout de 50% para reduzir overfitting',
        'Early Stopping para selecionar o melhor desempenho',
      ],
    },

    {
      number: '4',
      title: 'Validação',
      icon: ScanSearch,
      image: '/img/development/fundoMexerica.png',
      subtitle: 'Avaliação do modelo',

      paragraphs: [
        'Após o treinamento, o modelo foi avaliado com um conjunto de teste formado por 25 imagens que não participaram das etapas de treinamento ou validação.',
        'O modelo alcançou 95,97% de acurácia no conjunto de teste, demonstrando capacidade de distinguir folhas saudáveis de folhas com deficiência de manganês em imagens inéditas.',
      ],

      stat: '95,97%',
      statLabel: 'de acurácia no teste',
  },

  {
    number: '5',
    title: 'Protótipo funcional',
    icon: Smartphone,
    image: '/img/development/fundoMexerica.png',
    subtitle: 'Aplicativo Mobile',

    paragraphs: [
    'Desenvolvemos um aplicativo mobile capaz de analisar imagens de folhas de Citrus reticulata e identificar sinais de deficiência de manganês por meio do modelo de Inteligência Artificial.',
    'A solução foi projetada para oferecer ao produtor um diagnóstico preliminar de forma rápida e acessível, diretamente pelo celular, a partir de uma imagem da folha.',
    ],

    checklist: [
    'Aplicativo exclusivo para dispositivos móveis',
    'Análise de imagens por Inteligência Artificial',
    'Diagnóstico preliminar de deficiência de manganês',
    ],
  },
];

function StepHeader({ step }: { step: StepData }) {
  const Icon = step.icon;

  return (
    <div className={styles.stepHeading}>
      <span className={styles.cardNumber}>{step.number}</span>
      <h3>{step.title}</h3>
      <Icon size={20} className={styles.cardIcon} />
    </div>
  );
}

function SubHeading({ step }: { step: StepData }) {
  if (!step.label && !step.subtitle) return null;

  return (
    <>
      {step.label && (
        <span className={styles.subLabel}>{step.label}</span>
      )}
      {step.subtitle && (
        <h4 className={styles.subtitle}>{step.subtitle}</h4>
      )}
    </>
  );
}

function StepCard({ step }: { step: StepData }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <StepHeader step={step} />

        <div className={styles.subCard}>
          <SubHeading step={step} />

          {step.paragraphs?.map((paragraph, i) => (
            <p key={i} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}

          {step.stat && (
            <div className={styles.statBlock}>
              <span className={styles.statNumber}>{step.stat}</span>
              <span className={styles.statLabel}>{step.statLabel}</span>
            </div>
          )}

          {step.checklist && step.checklist.length > 0 && (
            <ul className={styles.checklist}>
              {step.checklist.map((item, i) => (
                <li key={i}>
                  <span className={styles.checkIcon}>
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {step.image && (
        <div className={styles.cardImage}>
          <img src={step.image} alt={step.title} loading="lazy" />
        </div>
      )}
    </div>
  );
}

function ResearchCard({ step }: { step: StepData }) {
  return (
    <div className={`${styles.card} ${styles.researchCard}`}>
      <div className={styles.researchContent}>
        <StepHeader step={step} />

        {step.subtitle && (
          <h4 className={styles.subtitle}>{step.subtitle}</h4>
        )}

        <div className={styles.researchGrid}>
          <div className={styles.researchColumn}>
            <div className={styles.researchSection}>
              <h5 className={styles.SubHeading}>
                {step.objectivesTitle}
              </h5>
              <ul className={styles.researchList}>
                {step.objectives?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={`${styles.researchSection}`}>
              <h5 className={styles.SubHeading}>
                {step.resultsTitle}
              </h5>
              <ul className={styles.researchList}>
                {step.results?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.personaColumn}>
            <h5 className={styles.SubHeading}>{step.personasTitle}</h5>

            {step.personas?.map((persona) => (
              <div key={persona.name} className={styles.personaCard}>
                <div className={styles.personaHeader}>
                  <span className={styles.personaAvatar}>
                    <User size={20} />
                  </span>

                  <div>
                    <p className={styles.personaName}>
                      {persona.name} - {persona.role}
                    </p>
                    <span className={styles.personaTag}>
                      {persona.tag}
                    </span>
                  </div>
                </div>

                <p className={styles.personaDescription}>
                  {persona.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Development() {
  return (
    <section className={styles.projectBg}>
      <Container>
        <div className={styles.header}>
          <span className={styles.tag}>NITRUSLEAF</span>
          <h1>Como desenvolvemos</h1>
          <p>Da coleta de dados ao protótipo funcional</p>
        </div>

        <ScrollStack
          useWindowScroll={true}
          itemDistance={100}
          itemScale={0.04}
          itemStackDistance={5}
          stackPosition="15%"
          scaleEndPosition="-5%"
          baseScale={0.88}
          blurAmount={2}
        >
          {steps.map((step, index) => (
            <ScrollStackItem key={`${step.number}-${index}`}>
              {step.variant === 'research' ? (
                <ResearchCard step={step} />
              ) : (
                <StepCard step={step} />
              )}
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </Container>
    </section>
  );
}