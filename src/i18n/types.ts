export type Locale = 'en' | 'zh';
export type Section = 'home' | 'research' | 'philosophy' | 'articles';

export interface SiteCopy {
  locale: Locale;
  nav: Record<Section, string> & { language: string; skip: string };
  meta: Record<Section, { title: string; description: string }>;
  home: {
    eyebrow: string;
    title: string;
    description: string;
    links: Record<'research' | 'philosophy' | 'articles', { label: string; note: string }>;
  };
  research: { eyebrow: string; title: string; intro: string; visit: string; source: string; boundary: string };
  philosophy: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: string[];
    contrasts: Array<{ less: string; more: string }>;
  };
  articles: { eyebrow: string; title: string; intro: string; read: string; latest: string; back: string };
  footer: { note: string; github: string };
}
