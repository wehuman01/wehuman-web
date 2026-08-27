import type { Locale } from '../i18n/types';

export interface Product {
  id: 'awedot' | 'awewarm' | 'aweshare';
  name: string;
  href: string;
  sourceHref: string;
  copy: Record<Locale, { description: string; keywords: string[]; boundary?: string }>;
}

export const products: Product[] = [
  {
    id: 'awedot',
    name: 'awedot',
    href: 'https://awedot.wehuman.top/',
    sourceHref: 'https://github.com/mugpeng/awedot',
    copy: {
      en: { description: 'Preserve, organise, and resume AI agent sessions without losing the thread of thought.', keywords: ['Session memory', 'Project context', 'Multiple agents'] },
      zh: { description: '保存、整理并恢复 AI agent session，不让思考的线索随注意力转移而消失。', keywords: ['Session 记忆', '项目上下文', '多个 Agent'] },
    },
  },
  {
    id: 'awewarm',
    name: 'awewarm',
    href: 'https://github.com/wehuman01/awewarm',
    sourceHref: 'https://github.com/wehuman01/awewarm',
    copy: {
      en: { description: 'Keep supported AI coding-plan windows ready with one minimal request scheduled around your work.', keywords: ['Scheduled readiness', 'Local-first', 'Explicit trust'] },
      zh: { description: '围绕人的工作时间，用一次极小的计划请求让受支持的 AI coding-plan 窗口提前就绪。', keywords: ['计划就绪', '本地优先', '明确的信任边界'] },
    },
  },
  {
    id: 'aweshare',
    name: 'aweshare',
    href: 'https://github.com/wehuman01/aweshare',
    sourceHref: 'https://github.com/wehuman01/aweshare',
    copy: {
      en: {
        description: 'A local-first, self-hosted relay for sharing authorised AI capability while upstream keys stay on the producer device.',
        keywords: ['Local models', 'Self-hosted Hub', 'Standard SDKs'],
        boundary: 'Prompts and responses pass through the trusted Hub in plaintext; this is not end-to-end encryption. Upstream terms still apply.',
      },
      zh: {
        description: '本地优先、可自托管的 AI 能力中继；分享获授权的能力，同时让上游密钥留在提供者设备。',
        keywords: ['本地模型', '自托管 Hub', '标准 SDK'],
        boundary: '提示词与响应会以明文经过受信任 Hub，并非端到端加密；同时仍需遵守上游服务条款。',
      },
    },
  },
];
