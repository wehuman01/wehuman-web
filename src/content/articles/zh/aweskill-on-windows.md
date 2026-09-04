---
title: "aweskill：现在在 Windows 上也能跑了"
description: "我坐在一台 Windows 机器前。"
date: 2026-08-08
locale: zh
path: aweskill-on-windows
tags: [aweskill]
product: aweskill
---

我坐在一台 Windows 机器前。新开一个 `cmd.exe`，敲下 `aweskill find review`。工具跑起来了。挑了个技能，运行 `aweskill install owner/repo`，然后……`spawn ENOENT`。agent 的 npm 垫片起不来。我试了 `aweskill self-update`，看着它又以同样的方式崩掉。我打开刚装好的那个 agent 的 `SKILL.md`，名字和描述都是空的——frontmatter 没了。我合上笔记本，去倒了杯咖啡，跟 agent 说：

> "aweskill 在 Windows 上坏了。查清楚原因，修好它。"

等我回来时，安装通了，更新也通了，`SKILL.md` 里名字和描述都显示出来了，agent 还留了一段话总结它改了哪些地方。那个 `agent add` 流程在 macOS 上已经跑了几个月，现在在 Windows 上也能跑了。同一条命令，同一个结果，两种 shell 都通。

GitHub: [github.com/Webioinfo01/aweskill](https://github.com/Webioinfo01/aweskill)

## 三个 Bug

Windows 支持从 v0.1.x 起就号称"上线"了。Node.js 代码能跑，CLI 也能跑。真正跑不动的是那些*需要调用外部工具的部分*，以及那些默认 Unix 风格文本编码的部分。而用户第一次用就会踩到这两块。

**Bug 1：默认了 `npm` 和 `tar` 一定存在。** `self-update` 直接调用 `npm`，但在 Windows 上 `npm` 是个 `.cmd` 垫片，而新版 Node 拒绝在没有 shell 包装器的情况下启动 `.cmd` 垫片。于是在一台默认安装的 Windows 上，`aweskill self-update` 以 `spawn ENOENT` 失败收场。`git`（一个真正的 `.exe`）没事。技能压缩包下载那块更糟：它调用的是 `unzip`，而 Windows 默认不带这个工具。用户看到的报错是两种完全不同的，取决于先跑哪条命令。

**Bug 2：`SKILL.md` 的 frontmatter 凭空消失。** 技能文档的解析器只认 Unix 换行符。以 CRLF 保存的文件——Windows 上很多编辑器的默认行为——会把整段 frontmatter 静默丢掉。名字、描述，全没了。`find --local` 列出来的是空条目，`store show` 也显示不出任何有用的东西。技能明明已经*装好了*，工具却读不出来。但凡你从 Windows 上 checkout 一个技能仓库，就会踩中这一条。

**Bug 3：readlink 多了个尾部分隔符。** 这一条用户不太看得到，但 Windows CI 会在一个严格相等断言上失败——因为 Windows 的 `readlink` 给目录符号链接的目标路径会多补一个反斜杠。测试没错，是平台本身不一样。

v0.4.0 把这三个 Bug 一起修了，并在文档里把 Windows 当作一等公民平台。

## 改了什么

### npm 在 Windows 上改为通过 shell 启动

`self-update` 在 Windows 上现在会走 shell，这样 `.cmd` 垫片就能正确解析了。`git` 不受影响（它是真正的 `.exe`）。同一条在 macOS 上能跑的 `aweskill self-update`，在 `cmd.exe` 和 PowerShell 上也都能跑了。

### 技能压缩包按平台选对解压工具

下载在 Windows 10+ 上改用 `tar -xf`（系统自带），在 macOS/Linux 上则用 `unzip`，因为那些系统的 `tar` 读不了 `.zip`。用户再也不用额外装任何东西。

### CRLF 的 frontmatter 已规范化

技能文档解析器现在接受 CRLF 换行符。原生的 LF 平台（macOS/Linux）感觉不到任何变化。从 Windows checkout 下来的 CRLF 文件现在也能用了。

### 测试在 Windows 上不再偶发失败

符号链接的测试收紧了，Windows 的 CI 矩阵不再偶发失败。`windows-latest` 在 CI 里变绿了。

### 文档不再单独把 Windows 拎出来讲

两个 README 以及 aweskill 技能现在都直接在正文里写明跨平台支持，配上一个 `ubuntu | macOS | windows` 徽章和一句定位说明。原来那个专门的 Windows 章节删掉了。仍然存在的平台细节——`agent add` 里 junction 回退到受管副本的逻辑——现在压成 "Projection Work" 一节里的一行，因为整个工具里只有这一处命令行为确实不一样。

## 在 Windows 上的一天

今天是周三。你坐在一台 Windows 机器前，一个窗口开着 `cmd.exe`，另一个开着 PowerShell。你是 agent 用户，大头的活都交给 agent 干。

**上午 9:00。** 第一次安装 aweskill：

```cmd
npm install -g aweskill
aweskill -v
```

装上了。你让 agent 按照 `README.ai.md` 自我引导。agent 跑了 `aweskill store init`、`aweskill store where --verbose`、`aweskill agent supported`，然后 `aweskill agent add skill aweskill,aweskill-doctor --global --agent <agent-id>`。每一次调用外部工具都干脆利落：`npm` 走 shell 包装器启动，没有 `ENOENT`，也没有 `unzip: not found`。

**上午 10:30。** 你想要一个代码评审技能。你跟 agent 说：

> "找一个好用的代码评审技能，装进 aweskill，并给这个 agent 启用。"

agent 跑了 `aweskill find review`，挑了一个，再跑 `aweskill install owner/repo`。技能落在 `~/.aweskill/skills/`。agent 接着跑 `aweskill agent add skill pr-review --global --agent <agent-id>` 把它投射出去。`aweskill show pr-review` 把名字和描述都正确显示出来——frontmatter 解析正常，管它是不是 CRLF。

**下午 1:00。** 你发现新版本出来了。你跟 agent 说：

> "把 aweskill 更新一下。"

agent 跑了 `aweskill self-update`。幕后是这样：在 Windows 上 npm 现在改走 shell 启动，`.cmd` 垫片正确解析，安装顺利完成。新版本到位。

**下午 3:00。** 你打算从自己一直在改的、Windows checkout 的仓库里再导入几个技能。你跟 agent 说：

> "扫一下当前仓库里的技能，把看着有用的都导进来。"

agent 跑了 `aweskill store scan --import`。扫描找到了每一个 `SKILL.md`，包括那些用 CRLF 保存的。frontmatter 完整。导入成功。`aweskill list` 列出了新条目，名字也对。

**下午 5:00。** 收工。五条命令，全由 agent 跑下来，在一个新开的 `cmd.exe` 上第一次就成了。你从头到尾没装过 `unzip`，没见过 `spawn ENOENT`，更没必要跟 agent 解释一个刚装好的技能为什么没有名字。

## agent 在 Windows 上现在能做什么

aweskill 技能在 Windows 上现在也能做那件它在 macOS 和 Linux 上早就能做的事了：对工具本身做完整的自助操作。在 v0.4.0 之前，agent 的工具箱里留着 Windows 形状的缺口——`self-update` 失败、技能压缩包下载失败、刚装好的技能显示一片空白。v0.4.0 之后：

| 你说 | 技能执行的命令 |
|---|---|
| "把 aweskill 更新一下。" | `aweskill self-update`（在 Windows 上通过 shell 启动 npm） |
| "把这个仓库里的技能导进来。" | `aweskill store scan --import`（CRLF 的 frontmatter 正常解析） |
| "看看我刚装的是什么。" | `aweskill show <name>`（不再有空白的 frontmatter） |
| "找一个代码评审技能。" | `aweskill find review` |
| "装一下 owner/repo。" | `aweskill install owner/repo`（技能压缩包在 Windows 上用 bsdtar） |
| "把 aweskill 投射给 Codex。" | `aweskill agent add skill aweskill --global --agent codex` |

同样的命令，同样的动词，同样的预期输出。在 agent 的词汇里，Windows 不再是特殊情况。

## 同样的体验

对 Windows 用户来说，现在的流程跟 macOS 完全一样。装。用。更新。shell 从 `zsh` 换成了 `cmd.exe`，npm 垫片通过 PATHEXT 解析（而不是通过 shebang），除此之外什么都没变。`aweskill find` 干的还是它在别处干的事，`install`、`agent add`、`store scan --import`、`self-update`、`show` 也是。同样的配置，同样的 `~/.aweskill/skills/` 仓库，同样的投射布局。

这种一致性也延伸到 aweskill 技能本身。Windows 用户拿到的是和 macOS、Linux 用户从 v0.2.x 起就在用的同一个自然语言接口。技能读的是同一份 `README.ai.md`，走的是同一套自我引导流程，跑的是同一组 `aweskill` 命令。agent 不需要一个单独的"Windows 模式"——它会自己挑对 shell 包装器、归档解压器、frontmatter 规范化方式，而用户看到的只是一个能用的 CLI。

> "把 aweskill 更新一下，把这个仓库里的新技能也导进来。"

同一段提示词，在一台 Windows 笔记本和一台 Mac 上跑出来是一样的。agent 先跑 `aweskill self-update`（在 Windows 上 npm 垫片正确解析，没有 `ENOENT`），再跑 `aweskill store scan --import`（CRLF 的 frontmatter 正确解析）。安装设置是一项任务，而 agent 就是干任务的。所以我把这个任务交给了 agent。

## 为什么是 v0.4.0？

版本号从 0.3.8 直接跳到 0.4.0，是故意的。0.3.x 那条线的故事是："Windows 理论上支持，但这里有这些坑。" 0.4.0 这条线则是："Windows 支持，坑没了。" 光 npm spawn 这一处修复就足以撑起这次升版本——`self-update` 是关键路径，而它在默认的 Windows 安装上是完全跑不通的。再把技能压缩包的解压、CRLF 的 frontmatter、以及测试的规范化一起加上，这一版就翻过了"Windows 只是顺带照顾"这一章。

README 从很早开始就一直专门辟了一节"Windows"。v0.4.0 把它删了。不是因为 Windows 现在和其他平台一模一样——junction 与符号链接的差异是真实存在的，仍然记在 "Projection Work" 那一节里——而是因为*命令*现在是一模一样的了。用户在 Windows 上用 `aweskill` 不再需要专门的说明，拿来就用。

## 在 Windows 上试一下

```cmd
npm install -g aweskill
aweskill -v
aweskill store init
```

如果 `npm install -g` 提示你需要新开一个终端，那就新开一个。装完后的 `aweskill -v` 用来确认 CLI 能找到。`aweskill store init` 会创建 `~/.aweskill/`。从这一步起，同样的命令到处都能跑：

```cmd
aweskill find review
aweskill install owner/repo
aweskill agent add skill pr-review --global --agent codex
aweskill self-update
```

不用装 `unzip`。不用对自己刚 checkout 的 `SKILL.md` 手动修 CRLF。`self-update` 不再冒 `spawn ENOENT`。也不用再翻一个专门讲 Windows 的章节。

这就是现在 Windows 上的全部体验。同样的配置，同样的命令，同样的 `aweskill` 技能，同样有 agent 替你管着。

## 更多来自 Webioinfo 的项目

aweskill 是 [Webioinfo](https://www.webioinfo.top/) 生态的一部分：

- **[aweswitch](https://github.com/mugpeng/aweswitch)** — Agent 配置切换器（Claude、Codex、OpenCode）；现已跨平台
- **[aweshelf](https://github.com/Webioinfo01/aweshelf)** — 带配置感知恢复的 AI 编码会话管理器
- **[awescholar](https://github.com/Webioinfo01/awescholar)** — 自动化的学术文献发现工具
