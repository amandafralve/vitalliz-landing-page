import {
  Search,
  Settings2,
  BrainCircuit,
  ScanSearch,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';

export interface StepMeta {
  id: string;
  number: string;
  icon: LucideIcon;
  variant?: 'default' | 'research';
  image?: string;
  imageMobile?: string;
}

export const stepsMeta: StepMeta[] = [
  {
    id: 'research',
    number: '1',
    icon: Search,
    variant: 'research',
  },
  {
    id: 'fieldCollection',
    number: '1',
    icon: Search,
    image: '/img/Development/1-VisitaTecnicaCampo.webp',
  },
  {
    id: 'preprocessing',
    number: '2',
    icon: Settings2,
    image: '/img/Development/2-Data-Desktop.webp',
    imageMobile: '/img/Development/2-Data-Tablet-Mobile.webp',
  },
  {
    id: 'training',
    number: '3',
    icon: BrainCircuit,
    image: '/img/Development/3-Modelo-Desktop.webp',
    imageMobile: '/img/Development/3-Modelo-Mobile.webp',
  },
  {
    id: 'validation',
    number: '4',
    icon: ScanSearch,
    image: '/img/Development/4-Avaliacao-Desktop.webp',
    imageMobile: '/img/Development/4-Avaliacao-Mobile.webp',
  },
  {
    id: 'prototype',
    number: '5',
    icon: Smartphone,
    image: '/img/Development/5-mockupNitrusleafApp.webp',
  },
];