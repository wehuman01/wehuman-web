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
├── astro.config.mjs        # site: https://wehuman.top，sitemap
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
- 域名：CNAME `wehuman.top`（与 `awedot.wehuman.top` 同域；实施时按 DNS 实际情况可退 `www.wehuman.top`）

## 6. 范围外（未来）

- 其他 awe* 工具的项目卡（数据结构已留扩展位）
- og-image 位图、深色模式、博客/更新日志、每项目详情子页
