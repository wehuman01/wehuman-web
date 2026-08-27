import type { SiteCopy } from './types';

export const en: SiteCopy = {
  locale: 'en',
  meta: {
    title: 'wehuman — AI tools that leave room for being human',
    description: 'wehuman builds calm AI tools that protect attention, preserve momentum, and help people do what truly matters.',
  },
  nav: { products: 'Products', philosophy: 'Philosophy', language: '中文', skip: 'Skip to content' },
  hero: {
    eyebrow: 'Technology in service of human attention',
    lineOne: 'AI should not make',
    lineTwo: 'humans obsolete.',
    description: 'It should make us more human — more creative, more focused, and freer to do what truly matters.',
    cta: 'Explore our work',
    scroll: 'Follow the river',
  },
  philosophy: {
    eyebrow: 'Why wehuman',
    title: 'Make space for the work only you can do.',
    body: 'AI tools are becoming more capable, yet using them can feel increasingly fragmented and demanding. We build tools that adapt to a person’s rhythm — quietly carrying the context, repetition, and coordination that should not consume a human day.',
    contrasts: [
      { less: 'Less switching', more: 'More attention' },
      { less: 'Less repetition', more: 'More creation' },
      { less: 'Less tool-shaped work', more: 'More human choice' },
    ],
  },
  work: {
    eyebrow: 'Our work',
    title: 'Three tools. One human rhythm.',
    intro: 'Remember where you were. Be ready when the work begins. Share what would otherwise sit idle.',
    view: 'Learn more',
    source: 'View source',
  },
  products: {
    awedot: {
      chapter: 'Remember',
      title: 'Keep the thread of thought.',
      statement: 'Your sessions should wait for you — not disappear when your attention moves.',
      description: 'awedot is a calm home for AI agent sessions. Bookmark the current session, organise it around the work, and return with the API profile and context from that moment.',
      features: ['One-click session bookmarks and resume', 'Project and category organisation', 'Local and SSH sessions across multiple AI agents'],
    },
    awewarm: {
      chapter: 'Stay ready',
      title: 'Let the tools keep your rhythm.',
      statement: 'A work window should be open when inspiration arrives.',
      description: 'awewarm sends one minimal scheduled request to keep supported AI coding-plan windows ready. It works with local Claude Code and Codex accounts, compatible endpoints, or a server you choose to trust.',
      features: ['Fixed-time and verified interval schedules', 'Claude Code, Codex, and compatible endpoints', 'Local-first operation with explicit remote trust'],
    },
    aweshare: {
      chapter: 'Share',
      title: 'Put idle capability in motion.',
      statement: 'Useful capacity can become a shared current instead of a stranded resource.',
      description: 'aweshare is a local-first, self-hosted relay for authorised AI capability. Share local Ollama or vLLM models and approved upstream backends, then use them through standard OpenAI or Anthropic SDKs.',
      features: ['Keys stay on the producer device', 'Self-hosted hub with invite-only access', 'Native OpenAI and Anthropic protocol relay'],
      boundary: 'An honest boundary: prompts and responses pass through the trusted hub in plaintext; this is not end-to-end encryption. Upstream terms still apply.',
    },
  },
  closing: {
    eyebrow: 'A human direction',
    lineOne: 'People should not disappear',
    lineTwo: 'behind automation.',
    body: 'We build so people can reclaim attention, creativity, and choice.',
    github: 'Meet us on GitHub',
  },
  footer: { note: 'Made with patience, in service of human attention.', language: '阅读中文版' },
};
