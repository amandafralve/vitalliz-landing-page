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
  imageTablet?: string;
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
    number: '2',
    icon: Search,
    image: '/img/Development/1-VisitaTecnicaCampo.webp',
  },
  {
    id: 'preprocessing',
    number: '3',
    icon: Settings2,
    image: '/img/Development/3-Desktop.webp',
    imageTablet: '/img/Development/3-Tablet.webp',
    imageMobile: '/img/Development/3-Mobile.webp',
  },
  {
    id: 'training',
    number: '4',
    icon: BrainCircuit,
    image: '/img/Development/4-Desktop.webp',
    imageTablet: '/img/Development/4-Tablet.webp',
    imageMobile: '/img/Development/4-Mobile.webp',
  },
  {
    id: 'validation',
    number: '5',
    icon: ScanSearch,
    image: '/img/Development/5-Desktop.webp',
    imageTablet: '/img/Development/5-Tablet.webp',
    imageMobile: '/img/Development/5-Mobile.webp',
  },
  {
    id: 'prototype',
    number: '6',
    icon: Smartphone,
    image: '/img/Development/5-mockupNitrusleafApp.webp',
  },
];