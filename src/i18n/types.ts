import type { ProductId } from '../data/products';

export interface ProductCopy {
  chapter: string;
  title: string;
  statement: string;
  description: string;
  features: string[];
  boundary?: string;
}

export interface SiteCopy {
  locale: 'en' | 'zh';
  meta: { title: string; description: string };
  nav: { products: string; philosophy: string; language: string; skip: string };
  hero: {
    eyebrow: string;
    lineOne: string;
    lineTwo: string;
    description: string;
    cta: string;
    scroll: string;
  };
  philosophy: {
    eyebrow: string;
    title: string;
    body: string;
    contrasts: Array<{ less: string; more: string }>;
  };
  work: { eyebrow: string; title: string; intro: string; view: string; source: string };
  products: Record<ProductId, ProductCopy>;
  closing: { eyebrow: string; lineOne: string; lineTwo: string; body: string; github: string };
  footer: { note: string; language: string };
}
