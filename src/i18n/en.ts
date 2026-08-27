import type { SiteCopy } from './types';

export const en: SiteCopy = {
  locale: 'en',
  nav: { home: 'Home', research: 'Research', philosophy: 'Philosophy', articles: 'Articles', language: '中文', skip: 'Skip to content' },
  meta: {
    home: { title: 'wehuman — AI in service of being human', description: 'We build AI tools that protect attention, creativity, and human choice.' },
    research: { title: 'Research — wehuman', description: 'Open tools for preserving context, protecting work rhythms, and sharing useful AI capacity.' },
    philosophy: { title: 'Philosophy — wehuman', description: 'AI should make us more human: more creative, more focused, and freer to do what matters.' },
    articles: { title: 'Articles — wehuman', description: 'Notes on humane tools, local-first AI infrastructure, and the boundaries that matter.' },
  },
  home: {
    eyebrow: 'Technology in service of human attention',
    title: 'AI should not make humans obsolete. It should make us more human.',
    description: 'More creative. More focused. Freer to do what truly matters.',
    links: {
      research: { label: 'Research', note: 'Tools shaped around a human rhythm.' },
      philosophy: { label: 'Philosophy', note: 'Why capability should create room, not noise.' },
      articles: { label: 'Latest article', note: 'Who provides compute, who uses it, who keeps the gate.' },
    },
  },
  research: {
    eyebrow: 'Research through making',
    title: 'Tools that give attention back.',
    intro: 'We study a practical question: how can capable AI systems ask less of the people using them? These projects turn that question into working, inspectable tools.',
    visit: 'Visit project',
    source: 'View source',
    boundary: 'Trust boundary',
  },
  philosophy: {
    eyebrow: 'A human direction',
    title: 'The point of intelligence is not to make people disappear.',
    lead: 'AI should enlarge human agency — not quietly reorganise life around the needs of another tool.',
    paragraphs: [
      'Capability matters. But capability alone does not tell us whether a technology is useful, humane, or worth inviting into a day.',
      'We build for the moments between intention and action: remembering the thread, preparing without interruption, and coordinating useful capacity without giving away control.',
      'Good tools carry repetition and complexity quietly. They expose their boundaries, remain understandable, and leave the consequential choices with people.',
      'The measure is simple: after using the tool, is there more room for attention, creativity, and the work that only a person can choose to care about?',
    ],
    contrasts: [
      { less: 'Less switching', more: 'More attention' },
      { less: 'Less repetition', more: 'More creation' },
      { less: 'Less tool-shaped work', more: 'More human choice' },
    ],
  },
  articles: {
    eyebrow: 'Field notes',
    title: 'Writing from the work.',
    intro: 'Technical notes, design choices, and honest boundaries from the tools we are building.',
    read: 'Read article',
    latest: 'Latest',
    back: 'All articles',
  },
  footer: { note: 'Made with patience, in service of human attention.', github: 'GitHub' },
};
