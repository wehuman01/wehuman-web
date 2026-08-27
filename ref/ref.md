# wehuman 网站参考（源自 archive/wehuman-web-archive）

原站为 Astro 项目，部署于 `https://wehuman01.github.io/wehuman-web/`，中英双语（英文根路径 + `/zh/` 中文路径）。

## 理念

核心理念是"**AI 不应让人消失，它应该让我们更像人**"——更有创造力、更专注、更自由地去做真正在乎的事。具体展开为几点：

- AI 应该**扩大人的能动性**，而不是悄悄让生活去适应又一个工具；
- 关注意图与行动之间的时刻：留住思路、不打断地提前准备、在不交出控制权的前提下协调有用的能力；
- 好工具的标准：安静地承担重复与复杂，**诚实地暴露边界**，保持可理解，把重要选择留给人；
- 衡量方式：用过之后，人是否拥有了**更多注意力、创造力和选择的空间**。

页面用三组对比概括：少一点切换多一点专注、少一点重复多一点创造、少一点被工具塑造多一点人的选择。页脚格言是"耐心创造，服务于人的注意力"。

## 产品（Research 页介绍的三个工具）

| 产品 | 说明 |
|---|---|
| **awedot** | 保存、整理并恢复 AI agent session，不让思考的线索随注意力转移而消失（session 记忆、项目上下文、多 Agent）。站点 `https://awedot.wehuman.top/`，源码 `https://github.com/mugpeng/awedot` |
| **awewarm** | 围绕人的工作时间，用一次极小的计划请求让受支持的 AI coding-plan 窗口提前就绪（计划就绪、本地优先、明确的信任边界）。源码 `https://github.com/wehuman01/awewarm` |
| **aweshare** | 本地优先、可自托管的 AI 能力中继，分享获授权的能力同时让上游密钥留在提供者设备（本地模型、自托管 Hub、标准 SDK）；明示信任边界——提示词与响应以明文经过受信任 Hub，并非端到端加密，且仍需遵守上游服务条款。源码 `https://github.com/wehuman01/aweshare` |

三者均为开源项目。

## 页面清单

共 4 个栏目 × 2 种语言，加 4 篇双语文章，sitemap 共 16 个页面：

- **首页**（`/`、`/zh/`）——主标题 + 导向研究和理念
- **理念**（`/philosophy/`、`/zh/philosophy/`）
- **研究**（`/research/`、`/zh/research/`）——即产品页
- **文章列表**（`/articles/`、`/zh/articles/`）+ 4 篇文章（各有中英两版）：
  - `agent-share-tokens`：《aweshare：我让 AI 智能体帮我共享 token》
  - `three-roles`：《aweshare 的三个角色：谁出算力，谁来用，谁来守门》
  - `cloudflare-tunnel`：《aweshare 开发笔记：我把 Hub 藏到了 Cloudflare Tunnel 后面》
  - `community-hub-beta`：《aweshare 社区 hub 开测：消费者 10 个名额，生产者不设限》

四篇文章全部围绕 aweshare 展开。

## 原站关键源文件位置（archive 内）

- 站点文案：`src/i18n/zh.ts`、`src/i18n/en.ts`
- 产品数据：`src/data/products.ts`
- 文章内容：`src/content/articles/{zh,en}/*.md`
- 页面：`src/pages/`（index、philosophy、research、articles/index、articles/[slug]，及 `zh/` 下的对应版本）
