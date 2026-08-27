import type { SiteCopy } from './types';

export const zh: SiteCopy = {
  locale: 'zh',
  meta: {
    title: 'wehuman — 为人留出空间的 AI 工具',
    description: 'wehuman 创造安静、诚实的 AI 工具，保护人的注意力，延续工作节奏，让人去做真正重要的事。',
  },
  nav: { products: '产品', philosophy: '理念', language: 'EN', skip: '跳到正文' },
  hero: {
    eyebrow: '让技术服务于人的注意力',
    lineOne: 'AI 不应',
    lineTwo: '让人消失。',
    description: '它应该让我们更像人——更有创造力、更专注，也更自由地去做真正在乎的事。',
    cta: '看看我们在做什么',
    scroll: '沿河而下',
  },
  philosophy: {
    eyebrow: '为什么是 wehuman',
    title: '为只有你能做的事，留出空间。',
    body: 'AI 工具越来越强大，使用它的过程却也越来越碎片化、越来越消耗人。我们希望工具去适应人的节奏——安静地接住上下文、重复和协调，不让这些琐碎占满人的一天。',
    contrasts: [
      { less: '少一点切换', more: '多一点专注' },
      { less: '少一点重复', more: '多一点创造' },
      { less: '少一点被工具塑造', more: '多一点人的选择' },
    ],
  },
  work: {
    eyebrow: '我们的作品',
    title: '三件工具，一种人的节奏。',
    intro: '记得刚才走到哪里，在工作开始时已经准备好，让闲置的能力流动起来。',
    view: '了解更多',
    source: '查看源码',
  },
  products: {
    awedot: {
      chapter: '留住思路',
      title: '让思考的线索留在手边。',
      statement: '注意力转向别处时，session 应该等你回来，而不是随之消失。',
      description: 'awedot 是 AI agent session 的安静落脚点。保存当前 session，按工作脉络整理，并带着当时的 API profile 与上下文重新出发。',
      features: ['一键保存与恢复 session', '按项目与分类整理上下文', '统一查看多个 AI agent 的本机与 SSH session'],
    },
    awewarm: {
      chapter: '守住节奏',
      title: '让工具跟上人的节奏。',
      statement: '灵感到来时，工作窗口应该已经打开。',
      description: 'awewarm 按计划发送一次极小请求，让受支持的 AI coding-plan 窗口提前就绪。它可以使用本机 Claude Code、Codex 账户、兼容端点，或一台由你选择信任的服务器。',
      features: ['固定时间与已验证窗口的周期调度', '支持 Claude Code、Codex 与兼容端点', '本地优先，并明确说明远程信任边界'],
    },
    aweshare: {
      chapter: '分享余力',
      title: '让闲置能力流动起来。',
      statement: '有用的余力，可以成为共同的河流，而不是搁浅的资源。',
      description: 'aweshare 是本地优先、可自托管的 AI 能力中继。分享本机 Ollama、vLLM 模型或获授权的上游后端，再通过标准 OpenAI 或 Anthropic SDK 使用。',
      features: ['上游密钥留在提供者设备', '自托管 Hub 与邀请制接入', '原生中继 OpenAI 和 Anthropic 协议'],
      boundary: '诚实的边界：提示词与响应会以明文经过受信任 Hub，并非端到端加密；同时仍需遵守上游服务条款。',
    },
  },
  closing: {
    eyebrow: '一种人的方向',
    lineOne: '我们不追求',
    lineTwo: '让人消失在自动化之后。',
    body: '我们创造工具，让人重新拥有注意力、创造力和选择。',
    github: '在 GitHub 与我们相遇',
  },
  footer: { note: '耐心创造，服务于人的注意力。', language: 'Read in English' },
};
