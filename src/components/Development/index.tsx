import { Container } from '../Container';
import { Check, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ScrollStack, { ScrollStackItem } from '../ScrollStack';
import { stepsMeta, type StepMeta } from './data';
import styles from './styles.module.css';

interface Persona {
  name: string;
  role: string;
  tag: string;
  description: string;
}

interface StepContent {
  title: string;
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

type StepData = StepMeta & StepContent;

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
          {step.imageMobile ? (
            <picture>
              <source
                media="(max-width: 1150px)"
                srcSet={step.imageMobile}
              />
              <img src={step.image} alt={step.title} loading="lazy" />
            </picture>
          ) : (
            <img src={step.image} alt={step.title} loading="lazy" />
          )}
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
  const { t } = useTranslation();

  const steps: StepData[] = stepsMeta.map((meta) => ({
    ...meta,
    ...(t(`development.steps.${meta.id}`, { returnObjects: true }) as StepContent),
  }));

  return (
    <section className={styles.projectBg}>
      <Container>
        <div className={styles.header}>
          <span className={styles.tag}>{t('development.header.tag')}</span>
          <h1>{t('development.header.title')}</h1>
          <p>{t('development.header.subtitle')}</p>
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
          mobileBreakpoint={1150}
          minViewportHeight={750}
        >
          {steps.map((step, index) => (
            <ScrollStackItem key={`${step.id}-${index}`}>
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