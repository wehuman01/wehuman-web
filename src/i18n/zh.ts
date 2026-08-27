import type { SiteCopy } from './types';

export const zh: SiteCopy = {
  locale: 'zh',
  nav: { home: '首页', research: '研究', philosophy: '理念', articles: '文章', language: 'EN', skip: '跳到正文' },
  meta: {
    home: { title: 'wehuman — 让 AI 服务于人的存在', description: '我们创造保护注意力、创造力与人的选择的 AI 工具。' },
    research: { title: '研究 — wehuman', description: '留住上下文、保护工作节奏、分享有用 AI 能力的开放工具。' },
    philosophy: { title: '理念 — wehuman', description: 'AI 应该让我们更像人：更有创造力、更专注、更自由地做重要的事。' },
    articles: { title: '文章 — wehuman', description: '关于以人为本的工具、本地优先 AI 基础设施与真实边界的笔记。' },
  },
  home: {
    eyebrow: '让技术服务于人的注意力',
    title: 'AI 不应让人消失。它应该让我们更像人。',
    description: '更有创造力，更专注，也更自由地去做真正在乎的事。',
    links: {
      research: { label: '研究', note: '让工具适应人的节奏。' },
      philosophy: { label: '理念', note: '为什么能力应该创造空间，而不是噪音。' },
      articles: { label: '最新文章' },
    },
  },
  research: {
    eyebrow: '在创造中研究',
    title: '把注意力还给人的工具。',
    intro: '我们研究一个实际问题：能力越来越强的 AI，如何能够更少地消耗使用它的人？这些项目把问题变成真实、可检查的工具。',
    visit: '访问项目',
    source: '查看源码',
    boundary: '信任边界',
  },
  philosophy: {
    eyebrow: '一种人的方向',
    title: '智能的意义，不是让人从世界里消失。',
    lead: 'AI 应该扩大人的能动性，而不是悄悄让生活去适应又一个工具。',
    paragraphs: [
      '能力很重要，但能力本身不能回答一种技术是否有用、是否尊重人、是否值得进入我们的日常。',
      '我们关注意图与行动之间的那些时刻：留住思路，不打断地提前准备，在不交出控制权的前提下协调有用的能力。',
      '好的工具安静地承担重复与复杂，诚实地暴露边界，保持可以理解，并把重要选择留给人。',
      '衡量方式很简单：使用之后，人是否拥有了更多注意力、创造力，以及选择自己真正在乎之事的空间？',
    ],
    contrasts: [
      { less: '少一点切换', more: '多一点专注' },
      { less: '少一点重复', more: '多一点创造' },
      { less: '少一点被工具塑造', more: '多一点人的选择' },
    ],
  },
  articles: {
    eyebrow: '实践笔记',
    title: '从真实工作里写出来。',
    intro: '记录我们正在创造的工具、技术选择，以及不能被漂亮承诺掩盖的边界。',
    read: '阅读文章',
    latest: '最新',
    back: '全部文章',
  },
  footer: { note: '耐心创造，服务于人的注意力。', github: 'GitHub' },
};
