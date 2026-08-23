# wehuman 官网设计文档（笔墨主题）

日期：2026-08-22
状态：已获用户口头批准的设计，待 spec 审阅

## 1. 背景与目标

wehuman 是"让人类更像人类"的 AI 产品组织（定义见 `others/0619/anwser.md`）。
本站是组织官网，作用：传达价值观 + 展示产品（首批 awedot、awewarm，留扩展位）。

- 结构参考 `../webioinfo-web`（Astro 双语静态站）。
- 视觉为全新笔墨（山水/ink-wash）主题，气质参照 `product/tools/awewarm/logo/prompt.md`：
  宣纸白大留白、水墨笔触、唯一朱砂强调色、印章落款、优雅 serif wordmark。
- 旧 logo（`archive/logo/`）弃用，不做参考。

## 2. 视觉语言

### 2.1 色彩

| Token | 值 | 用途 |
|---|---|---|
| paper | `#F6F1E7` | 页面底色（暖米白；禁冷白/纯白） |
| card | `#FCF9F2` | 册页卡片底色（比纸略浅） |
| ink | `#37362F` | 主文字（近黑带暖灰；禁纯黑） |
| ink-light | `#8B867B` | 次要文字、元信息 |
| ink-line | `rgba(55,54,47,0.14)` | 边框、分隔线 |
| wash | `rgba(55,54,47,0.04)` | 墨晕底、分区晕染 |
| vermilion | `#BC3A2C` | 唯一强调色：链接、CTA、印章、hover |
| vermilion-dark | `#9E2F23` | vermilion 的 hover/active |

朱砂是全页唯一强色（"空寂中的一点暖"），不引入第二彩色。

### 2.2 字体

- 展示/正文 serif 栈：`"EB Garamond", "Noto Serif SC", serif`（中文用思源宋体，Latin 用 EB Garamond；标题 600，正文 400）
- wordmark `WEHUMAN`：大写、粗重优雅 serif，同栈 700
- 题跋/标签：`"JetBrains Mono", monospace`，12px，uppercase，letter-spacing 0.08em
- 正文行高 1.8（中文阅读留白）

### 2.3 笔墨元素（全部内联 SVG/CSS，零位图、零客户端 JS）

- **朱砂方印 Seal**：方形篆印风格 SVG，内刻极简"人"字抽象 glyph；用于 header wordmark 旁与 footer 落款
- **水纹笔触 BrushStrokes**：hero 下方 2–3 条浓淡不同的横向干笔 path（带飞白质感），即 prompt 中的 river
- **一枚朱点**：hero 偏左上一枚小朱砂圆点（朝阳/火种），与水纹呼应
- **留白**：版心 ≤840px 居中，区块纵向间距 ≥96px
- **卡片隐喻"册页"**：项目卡如宣纸册页——card 底色、ink-line 细边、4–8px 小圆角、极淡墨晕阴影；hover 时墨色微润（边框加深）并轻浮 4px（不旋转、不弹簧——水墨是静的）

### 2.4 Do / Don't

- Do：保持大留白；serif 主导；朱砂只用一点
- Don't：纯黑、渐变彩色、玻璃拟态、贴纸式旋转、客户端 JS（本站连主题切换也不做，仅浅色）
- Don't：使用任何位图资产（logo/纹理全部 SVG）

## 3. 站点结构与内容

### 3.1 路由（与 webioinfo 同构）

```
/          首页（en 默认）    /zh/       中文首页
/about     关于（en）         /zh/about  关于（zh）
```

### 3.2 首页区块（自上而下，如一幅立轴）

1. **Header**（sticky，paper/80 + backdrop-blur）：印章 + `WEHUMAN` wordmark + 右侧导航（About 链接、GitHub 链接、语言 pill EN/中文）
2. **Hero**：serif 大标题 + 副标题 + 两个 CTA（主：朱砂实心 pill"查看作品"；次：墨色描边 pill"GitHub"）+ 水纹笔触 + 朱点
   - zh 标题方向："AI 时代，更像人地工作"；副标题："AI 最重要的价值不是替代人类，而是让人类更像人类。"
   - en 标题方向："Stay human in the age of AI"；副标题："AI's greatest value is not replacing humans — it's making us more human."
3. **理念 Philosophy**：三行留白短句（不替代人 / 守住心流 / 把时间还给人在乎的事），mono 小标题"理念 PHILOSOPHY"
4. **项目 ProjectLeaves**：册页卡 ×2 + 末尾淡墨小字"更多作品，研墨中…"
   - **awedot** — AI Session Bookmark Manager：悬浮球常驻屏幕边缘，一键收藏、原样恢复 AI 编程会话。tags：Session · Flow · macOS/Win。链接 GitHub `mugpeng/awedot` + `awedot.wehuman.top`
   - **awewarm** — Subscription Window Warmer：用一次最小的请求把配额窗口焐热，开工时窗口已开。tags：Warm-up · CLI · pip。链接 GitHub `wehuman01/awewarm` + PyPI
5. **收尾桥接**：项目区之后一行淡墨链接"关于我们 →"指向 `/about`（中文页指向 `/zh/about`）
6. **Footer**：印章落款 + GitHub 链接 + `© 2026 wehuman`

### 3.3 About 页（`/about`、`/zh/about`）

使命（anwser.md 精神全文改写）+ 三条价值观（更像人 / 守心流 / 还时间）+ 联系方式（GitHub org）。

文案集中在 `src/i18n/en.json`、`zh.json`，schema 仿 webioinfo。

## 4. 技术架构

- Astro 6 + Tailwind 4 + `@astrojs/sitemap`（与 webioinfo 完全同栈）；纯静态、零客户端 JS
- 文件布局：

```
wehuman-web/
├── astro.config.mjs        # site: https://www.wehuman.top，sitemap
├── DESIGN.md               # 笔墨设计系统（实施时同步产出）
├── public/                 # favicon.svg（朱点/印章）、CNAME
├── .github/workflows/      # Pages 部署
└── src/
    ├── components/         # Header / Hero / Philosophy / ProjectLeaves / AboutPage / Footer / Seal.astro / BrushStrokes.astro
    ├── i18n/               # en.json / zh.json
    ├── layouts/Layout.astro
    ├── pages/              # index / about / zh/index / zh/about
    └── styles/global.css   # tokens（@theme）+ 基础样式
```

- 现存 `archive/`、`others/` 目录原样保留，不参与构建
- 验证方式：`astro build` 通过；dev server 目检双语四页；链接人工点验

## 5. 部署

- 仓库：GitHub `wehuman01/wehuman-web`（org 账号新建）
- GitHub Actions 构建 → gh-pages（照搬 webioinfo workflow 模式）
- 域名：CNAME `www.wehuman.top`（与 `awedot.wehuman.top` 同域）

## 6. 范围外（未来）

- 其他 awe* 工具的项目卡（数据结构已留扩展位）
- og-image 位图、深色模式、博客/更新日志、每项目详情子页

## 7. 增补：江南手卷动效升级（2026-08-22，已获批准）

在笔墨主题之上为首页加入"手卷"动效层，突出水墨江南：

- **开场展卷** `ScrollOpening.astro`：宣纸覆屏（上下绫边），深木轴带朱砂轴头自左向右卷开，约 1.5s；sessionStorage 记忆同一会话只播一次；仅首页。
- **毛笔书写**：Hero 标题改为内联 SVG text，按词/字拆 tspan（en 7 词、zh 10 字），逐笔"勾线（stroke-dashoffset）→ 洇墨（fill 淡入）"；等 webfont 就绪（`fonts-ready`，1.8s 兜底）才落笔。标题语义保留 `<h1 class="sr-only">`。
- **墨晕显现**：Philosophy / ProjectLeaves / AboutPage / 远山区块进入视口时 blur+opacity+上浮 洇开（IntersectionObserver 加 `.revealed`，`--d` 错峰）。
- **江南意象**（全内联 SVG）：`InkMountains.astro` 三叠低缓远山（透明度 .03/.05/.08）+ 山脚雾带（paper 色 blur 横带），首页两处（第二处镜像），滚动轻微视差；水纹上加一枚乌篷船简笔；Hero 右上一枝干笔垂柳。朱点入场改为微弹升起。
- **技术边界修订**：原"零客户端 JS"放宽为——唯一脚本 `src/scripts/ink-motion.js`（约 70 行原生 JS：fonts-ready、IntersectionObserver、视差），零框架零依赖；head 内联片段打 `js`/`no-opening` 标记。所有动效仅在 `html.js` 下生效，`prefers-reduced-motion` 与无 JS 时内容直接可见。
- **时序**：`:root { --ink-t: 1.5s }`（展卷后落笔基准），`html.no-opening` 下为 0.15s；副标题/CTA/水纹以 `--fd` 顺延。
- 验证：`astro build` 通过；产物含全部 keyframes、tspan 与内联脚本（浏览器面板在本环境不可用，未做截图目检，待人工 dev 目检）。

## 8. 增补：写意重构（2026-08-23，已获批准）

用户反馈"AI 味太重"，要求反规矩、字体更像毛笔、排版更写意、交互更优雅。决议：**Header 与 Footer 原样保留，其余完全重构**。

- **字体三层**：「画」大字层用马善政毛笔楷书（Ma Shan Zheng，OFL，Google Fonts；拉丁字符同支毛笔，中英一笔）；「跋」正文层保留 EB Garamond + Noto Serif SC；「印」层 mono 仅存 Header 语言 pill。大字欹侧 ±2.5°（构建期固定序列）、关键词 1.5–1.9× 大小错落。
- **排版（计白当黑）**：居中版心废止。引首近全空（竖排标题居右/英文错落居左上、朱点、左下小字跋、底部一线水纹）；主景项目**去卡片化**（ProjectScene：毛笔大字名 + 题跋小字 + 朱砂链接，两景对角错落，中隔水纹舟）；隔水 68vh 空屏 + 远山柳枝；题跋中文竖排三列（人/专注/时间 浓墨大字）、英文错落三行；尾行研墨中 + 关于链接。
- **交互（静水深流）**：入场动画体系（ink-reveal）全删；新增**收卷渐隐**（内容滚出视口淡至 0.18，滚动即展卷的连续感）；书写改**落笔洇墨**（blur+缩放收干，弃描边勾线）；慢动三件：水面呼吸 26s、舟横移 44s、雾漂移 46–60s；景 hover 背后洇墨晕；CTA 药丸废止，改朱砂字链接（下划线自左洇开、点按如落印）。
- **文件**：+ProjectScene/Willow；−ProjectLeaves；Hero/Philosophy 重写；i18n philosophy.lines → rows（pre/key/post 结构化，关键词大字）；ink-motion.js 删 reveal 加 scroll-fade；global.css 重写（brush tokens、引首/景/题跋样式、慢动 keyframes、降级段）。
- 验证：`astro build` 通过；产物核验（竖排/欹侧/关键词 scale/两景/收卷 6 处/Header+Footer 保留/旧类清除）。

## 9. 增补：hermes 式结构重排（2026-08-23，进行中 → 本次收尾）

用户要求参考 `https://hermes-agent.nousresearch.com/`（agent 产品的落地页范式：徽章 + 安装命令 + 下载卡 + 编号特性 + 页脚徽记）重排首页，**保留水墨视觉语言**。第 8 节的竖排写意排版废止，回归居中结构化版式（立轴正面观）。

- **首页区块（自上而下）**：引首 Hero（mono 徽章 pill「开源 · 安静的工具」/ 毛笔大标题两行 + 朱点收尾 / 一句副题 / 朱砂印钮 CTA「查看作品」+ 描边 ghost「GitHub」/ **墨砚终端**：深墨底 `pip install awewarm` + copy 按钮）→ 作品 Works（`#works`：眉题 + 毛笔节标 + 副题，册页双卡各带内联 SVG 笔意小图，官网/PyPI 朱砂链接 + GitHub + 终端安装提示，「更多作品，研墨中……」）→ 特性 Features（册页界格六格：朱砂 #01–06 + 毛笔单字 收/复/温/静/简/人 + 名称 + 一句描述）→ 跋尾 Philosophy（居中宣言三行，人/专注/时间 朱砂大字点睛；开源·免费·MIT 徽记 pill；「关于我们 →」）→ 远山压脚 → Footer（落款行 + works/about/GitHub 链接）。
- **Header/Footer 微调**：导航加入「作品」（`#works` 锚点）；Footer 加落款行「研墨而作，为人而作。」与 license；其余保持。
- **动效**：CTA 恢复药丸（第 8 节废止令解除）；hero 各块以 `.rise` 落笔洇墨依次浮现（`--fd` 0/0.25/0.55/0.8/1s）；水纹元素级出场（朱点升起 → 干笔 `pathLength` 描线 → 倒影涟漪洇开）+ 慢动三件（水面呼吸 26s、舟 ±14px 44s、雾漂 46–60s）；收卷渐隐挂在 Works/Features/Philosophy 三区（`data-scroll-fade`）；展卷开场保留。
- **终端复制**：Hero 内联小脚本 clipboard 复制安装命令，成功显示「已复制」1.6s，失败静默。
- **文件**：+Works/Features/ScrollOpening/InkMountains/BrushStrokes（重写）；Hero/Philosophy/Header/Footer/AboutPage/Layout/global.css 修改；−ProjectLeaves（Willow/ProjectScene 未落地即被本节替代）；i18n hero.title_lines/badge/install_*、works、features（六条）、philosophy.badges、footer.line/license 新增，link_site 死字段删除。
- **降级**：与第 7/8 节同一原则——一切动效仅 `html.js` 下生效，`prefers-reduced-motion`/无 JS 时内容直接可见；终端复制失败静默。
- 验证：`astro build` 通过；产物含徽章/终端/双卡/六格/徽记/水纹 keyframes/收卷属性，双语四页齐全。
