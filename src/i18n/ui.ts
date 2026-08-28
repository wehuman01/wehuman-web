/** Site copy. Written to be read, not scanned. One voice: plainspoken,
 *  first-person, honest about boundaries. No marketing verbs.
 *  Homepage stays an index — section content lives on its own page. */

export type Locale = 'en' | 'zh';

export const locales: Locale[] = ['en', 'zh'];

const en = {
  htmlLang: 'en',
  masthead: {
    line: 'a small studio · est. 2026',
    nav: {
      main: 'main',
      product: 'product',
      articles: 'articles',
      philosophy: 'philosophy',
      github: 'GitHub ↗',
    },
  },
  meta: {
    home: { title: 'wehuman — tools that give attention back', description: 'Building tools for humans in the AI age. AI tools that protect attention, creativity, and human choice.' },
    philosophy: { title: 'philosophy — wehuman', description: 'AI should make us more human: more creative, more focused, freer to work on what matters.' },
    product: { title: 'product — wehuman', description: 'Three tools: keep agent sessions, keep working hours warm, share AI capability without sharing keys.' },
    articles: { title: 'articles — wehuman', description: 'Field notes on human-first tooling, local-first AI infrastructure, and honest trust boundaries.' },
  },
  home: {
    display: ['Building tools', 'for humans', 'in the AI age'],
    lede: 'It should make us more human — more creative, more focused, freer. A small studio: three tools, and a notebook.',
    cta: 'Explore our products',
  },
  product: {
    display: 'three tools, one stance',
    lede: 'All three do the same thing: the machine carries the repetition, the person keeps the controls.',
    records: [
      {
        name: 'awedot',
        intro: 'When attention moves on, an agent session should not vanish with it. awedot saves, organises, restores — session memory, project context, multiple agents.',
        boundaries: [
          'Sessions stay on your machine; awedot is a local index, not a cloud.',
          'Restores are explicit — nothing auto-resumes.',
        ],
        repo: 'https://github.com/mugpeng/awedot',
        site: 'https://awedot.wehuman.top/',
        meta: ['sessions', 'project context', 'multi-agent'],
      },
      {
        name: 'awewarm',
        intro: 'While you are away, coding-plan windows go cold. awewarm fires one minimal scheduled request in your working hours, so they are warm when you return.',
        boundaries: [
          'Your schedule lives in a local config, nowhere else.',
          'The boundary is explicit: one small request at a planned time, nothing more.',
        ],
        repo: 'https://github.com/wehuman01/awewarm',
        site: '',
        meta: ['plans ready', 'local-first', 'explicit boundaries'],
      },
      {
        name: 'aweshare',
        intro: 'A local-first relay for AI capability. Friends point ordinary OpenAI / Anthropic SDKs at a hub; keys are injected at call time, on the provider’s machine, and never travel.',
        boundaries: [
          'Stated plainly: prompts and responses pass the trusted hub in cleartext — not end-to-end encryption.',
          'Everyone still honours the upstream services’ terms.',
          'The hub can be yours (aweshare hub serve); either way, keys stay home.',
        ],
        repo: 'https://github.com/wehuman01/aweshare',
        site: 'https://aweshare.wehuman.top/',
        meta: ['local models', 'self-hosted hub', 'standard SDKs'],
      },
    ],
    back: '← back to the front page',
  },
  philosophy: {
    display: 'the point of a tool',
    sections: [
      {
        head: 'agency',
        body: [
          'AI should enlarge a person’s agency, not reshape life around yet another tool. Who initiates, who interrupts, who decides something is finished — those moments belong to the person.',
        ],
      },
      {
        head: 'between intent and action',
        body: [
          'Most attention is lost between intending and starting. That is where we work: keep the thread, prepare ahead, don’t interrupt, don’t take the controls.',
        ],
      },
      {
        head: 'what a good tool owes you',
        body: [
          'Quiet handling of repetition and complexity. Boundaries shown honestly, including the ones it can’t fix. It stays explainable; the important choices stay with you.',
        ],
      },
      {
        head: 'how we measure',
        body: [
          'Afterwards, does a person have more attention, more creativity, more room to choose? Every tool we keep has to answer yes. The rest gets changed, or retired.',
        ],
      },
    ],
    back: '← back to the front page',
  },
  articles: {
    display: 'field notes',
    lede: 'Notes written from real work.',
    back: '← all articles',
  },
  article: {
    back: '← all articles',
    published: 'published',
    tags: 'tags',
  },
  colophon: {
    motto: 'patient making, in service of attention.',
    dense: 'Building tools for humans in the AI age. Hand-set static pages: no analytics, no cookies, no banners. Source on GitHub — issues welcome. © 2026 wehuman.',
    github: 'GitHub ↗',
    email: 'peng@wehuman.top',
  },
};

const zh = {
  htmlLang: 'zh-CN',
  masthead: {
    line: '一个小团队 · 始于 2026',
    nav: {
      main: '首页',
      product: '产品',
      articles: '文章',
      philosophy: '理念',
      github: 'GitHub ↗',
    },
  },
  meta: {
    home: { title: 'wehuman — 把注意力还给人的工具', description: '在 AI 时代为人做工具。我们做保护注意力、创造力与人的选择的 AI 工具。' },
    philosophy: { title: '理念 — wehuman', description: 'AI 应该让我们更像人：更有创造力、更专注，也更自由地去做重要的事。' },
    product: { title: '产品 — wehuman', description: '三个工具：留住 agent 会话、守住工作节奏、不交出密钥地共享 AI 能力。' },
    articles: { title: '文章 — wehuman', description: '关于以人为本的工具、本地优先 AI 基础设施与诚实信任边界的笔记。' },
  },
  home: {
    display: ['在 AI 时代', '做工具', '给人用'],
    lede: '它应该让我们更像人——更有创造力、更专注，也更自由。我们是一个小团队：三个工具，一本手记。',
    cta: '探索产品',
  },
  product: {
    display: '三个工具，一个立场',
    lede: '三个工具在做同一件事：机器承担重复，控制权留在人手里。',
    records: [
      {
        name: 'awedot',
        intro: '注意力移开的时候，agent session 不该跟着消失。awedot 保存、整理、恢复——session 记忆、项目上下文、多 Agent。',
        boundaries: [
          'session 留在你自己的机器上；awedot 是本地索引，不是云。',
          '恢复是显式的，没有东西自动续跑。',
        ],
        repo: 'https://github.com/mugpeng/awedot',
        site: 'https://awedot.wehuman.top/',
        meta: ['session 记忆', '项目上下文', '多 Agent'],
      },
      {
        name: 'awewarm',
        intro: '你不在的时候，coding-plan 窗口在变凉。awewarm 按你的工作时间发一次极小的定时请求，回来时窗口是热的。',
        boundaries: [
          '日程只存在本地配置里，不在别处。',
          '边界说得明白：计划时间的一次小请求，仅此而已。',
        ],
        repo: 'https://github.com/wehuman01/awewarm',
        site: '',
        meta: ['计划就绪', '本地优先', '明确的边界'],
      },
      {
        name: 'aweshare',
        intro: '本地优先的能力中继。朋友把普通的 OpenAI / Anthropic SDK 指向 hub；密钥在调用那一刻、在提供者的机器上注入，从不出门。',
        boundaries: [
          '明说：提示词与响应以明文经过受信任的 hub，不是端到端加密。',
          '各方仍需遵守上游服务的条款。',
          'hub 可以自建（aweshare hub serve）；无论哪种，密钥都留在家里。',
        ],
        repo: 'https://github.com/wehuman01/aweshare',
        site: 'https://aweshare.wehuman.top/',
        meta: ['本地模型', '自托管 hub', '标准 SDK'],
      },
    ],
    back: '← 回到首页',
  },
  philosophy: {
    display: '工具的意义',
    sections: [
      {
        head: '能动性',
        body: [
          'AI 应该扩大人的能动性，而不是让生活去适应又一个工具。谁发起、谁打断、谁决定一件事算不算完成——这些时刻留在人手里。',
        ],
      },
      {
        head: '意图与行动之间',
        body: [
          '大部分注意力流失在“打算做”和“开始做”之间。我们就在这条缝里工作：留住思路、提前准备、不打断，也不拿走控制权。',
        ],
      },
      {
        head: '好工具欠你什么',
        body: [
          '安静地承担重复与复杂；诚实地暴露边界，包括修不了的那些；保持可解释；把重要的选择留给你。',
        ],
      },
      {
        head: '我们怎么衡量',
        body: [
          '用过之后，人是否拥有更多注意力、创造力和选择的空间？每个工具都要能回答“是”；答不上来的，就改，或者停。',
        ],
      },
    ],
    back: '← 回到首页',
  },
  articles: {
    display: '手记',
    lede: '从真实工作里写出来的笔记。',
    back: '← 全部文章',
  },
  article: {
    back: '← 全部文章',
    published: '发表于',
    tags: '标签',
  },
  colophon: {
    motto: '耐心创造，服务于人的注意力。',
    dense: '在 AI 时代为人做工具。手工排版的静态页面：无统计、无 cookie、无弹窗。源码在 GitHub，欢迎 issue。© 2026 wehuman。',
    github: 'GitHub ↗',
    email: 'peng@wehuman.top',
  },
};

export const ui = { en, zh };
export type Copy = typeof en;
