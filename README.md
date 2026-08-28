# wehuman-web

wehuman 的官网。双语（英文根路径 + `/zh/` 中文），16 个静态页面加一张 404：首页、理念、产品、文章列表与四篇文章的两种语言版本。

```sh
npm install
npm run dev       # 开发
npm run build     # 构建到 dist/
npm run preview   # 本地预览 dist/
```

## 结构

- `src/styles/tokens.css` — 全部设计 token（明暗两套，OKLCH）
- `src/styles/global.css` — 排版与组件样式（stamp 注释记录设计决策）
- `src/i18n/ui.ts` — 全部站点文案（en / zh）
- `src/scripts/rain.js` — 背景字符雨 + 指针高亮（canvas）
- `src/views/` + `src/pages/` — 页面视图与路由（`/zh/` 镜像）
- `src/content/articles/{en,zh}/` — 文章（markdown，frontmatter 含 locale 与 path）
- `ref/` — 设计参考资料（非站点代码）

## 设计

一个声部：Archivo（汉字用 Noto Sans SC），一种信号墨（ultramarine），发丝线与墨线做结构，零圆角、零阴影、零卡片。深浅两套模式跟随系统偏好，可手动切换并记住选择。背景是一场安静的字符雨，指针经过的地方会亮起来；`prefers-reduced-motion` 或省流量模式下为静态。

诚实原则：没有统计脚本，没有 cookie；工具的信任边界在研究页明说。
