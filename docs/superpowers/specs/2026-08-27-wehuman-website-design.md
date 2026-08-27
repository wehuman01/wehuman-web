# wehuman 多页官网设计

日期：2026-08-27

## 目标

将现有长叙事单页改为克制、清晰的多页品牌官网。网站借鉴 Nous Research 的编辑式信息架构和留白节奏，但保持 wehuman 自己的现代中国水墨气质。

核心主张：

> AI should not make humans obsolete. It should make us more human — more creative, more focused, and freer to do what truly matters.

中文：

> AI 最重要的价值，不是替代人类，而是让人类更像人类——更有创造力、更专注、更能做自己真正在乎的事。

英文为默认语言。所有页面提供完整中文镜像。

## 设计原则

- **克制：** 一个页面只回答一个问题，不重复营销，不堆卡片。
- **舒适：** 暖宣纸底、深墨正文、充分留白、可控行宽和稳定行高。
- **水墨而非古风：** 水墨只建立气氛，不使用书法字、仿古边框或复杂山水插画压过内容。
- **诚实：** 产品与文章内容不超出 README 和原稿所陈述的边界。
- **快速：** 静态 HTML、少量 CSS 动效，无滚动劫持和持续动画。

## 信息架构

英文路径：

- `/`：Home
- `/research/`：Research
- `/philosophy/`：Philosophy
- `/articles/`：Articles
- `/articles/<slug>/`：文章详情

中文路径在 `/zh/` 下完整镜像。语言切换进入当前页面或当前文章的对应语言版本。

全站 Header 固定为：`Home / Research / Philosophy / Articles / 中文`。当前栏目使用一条细朱砂线标记。移动端仍显示所有入口，必要时允许导航区域横向滚动，不使用汉堡菜单。

## 页面内容

### Home

首页控制在桌面约 2–3 屏：

1. 首屏只有品牌主张、简短解释和低位水墨景观。
2. 三个横向文字入口：Research、Philosophy、Latest Article。
3. 简洁页脚。

首页不再完整介绍产品、不展示功能列表，也不重复结尾宣言。

### Research

Research 表达 wehuman 如何把理念落实为真实工具。awedot、awewarm、aweshare 各占一个横向条目，只包含：

- 项目名和一句价值描述。
- 最多三个能力关键词。
- 官网与 GitHub 入口。

条目以编号和细墨线分隔，不使用圆角卡片、阴影和图标阵列。aweshare 明确说明 Hub 可见明文流量、不是端到端加密，并提醒上游服务条款边界。

### Philosophy

以 wehuman 的价值观为主体，正文控制在 4–6 个短段落，并以三组对句建立节奏：

- Less switching / More attention
- Less repetition / More creation
- Less tool-shaped work / More human choice

末尾只使用一枚小朱砂印章收束，不追加产品营销。

### Articles

内容来源为 `product/aweshare/aweshare/docs/article_media`。首版导入四组中英文文章：

- aweshare: I Let My Agent Share My Tokens
- aweshare Dev Note: I Hid My Hub Behind a Cloudflare Tunnel
- aweshare Community Hub Opens for Beta: 10 Consumer Spots, Unlimited Producers
- aweshare's Three Roles: Who Provides Compute, Who Uses It, Who Keeps the Gate

索引页使用文章真实标题；日期只是次要元数据，不得以 `0820` 等目录编号代替标题。列表按日期倒序排列，显示标题、摘要和主题标签。

文章详情采用窄栏排版，支持标题、分级标题、列表、引用、代码和表格。原稿末尾的相关项目内容统一整理为简短的 wehuman 相关链接区。源文章复制到本站仓库中，避免 GitHub Pages 构建依赖另一个本地仓库。

## 视觉系统

### 色彩

- 主纸色：`#F2EEE5`
- 浅纸色：`#F8F5EE`
- 主墨：`#1D1E1A`
- 次墨：`#66635C`
- 淡墨线：`rgba(29, 30, 26, 0.16)`
- 朱砂：`#A33B2E`

每个视口只设置一个主要朱砂焦点。正文和大标题以墨色为主。

### 字体

- 英文展示字体使用 Newsreader、Iowan Old Style、Georgia 一类温和衬线栈。
- 中文展示字体使用 Noto Serif SC、Songti SC、STSong。
- 正文使用 Avenir Next、PingFang SC 等清晰无衬线栈。
- 所有页面共享相同字号比例、最大行宽和垂直节奏。

### 水墨

- 首屏保留低位抽象墨迹和一个小朱砂日。
- 内页只保留淡墨水平笔触、纸纤维和小印章。
- 墨迹不得穿过正文，不制造贯穿全站的长河，也不以装饰增加页面高度。
- 装饰全部 `aria-hidden`、不可交互，并在 reduced-motion 下静止。

## 内容与组件边界

- `Layout` 统一 SEO、语言、基础结构和全站样式。
- `Header` 根据当前路径生成导航和语言对应链接。
- `PageIntro` 为三个内页提供一致标题区。
- Research 产品数据与页面模板分离。
- Articles 使用 Astro 内容集合保存 Markdown 与元数据；列表和动态详情页都从集合生成。
- 中英文文案分别维护，不在客户端替换整页文本。

## 响应式与无障碍

- 桌面正文最大宽度约 68–72 个英文字符；文章中文保持舒适行长。
- 移动端基础正文不低于 17px，触控目标不低于 44px。
- 所有键盘焦点可见，当前导航使用 `aria-current="page"`。
- 页面在无 JavaScript 时仍完整可读。
- 动画限于一次轻微淡入；`prefers-reduced-motion` 下全部关闭。

## 验收

- 英文与中文各自生成 Home、Research、Philosophy、Articles 和四篇文章详情。
- 首页不超过约三屏，不再包含完整产品长卷。
- Header 在所有页面正确标记当前栏目，语言切换保持页面语义。
- 文章索引使用真实标题，不显示目录日期作为标题。
- Astro 类型检查与静态构建无错误。
- 桌面和移动端无水平溢出，长文、代码块和表格可读。
- GitHub Pages 子路径 `/wehuman-web/` 下的内部链接与资源均可访问。
