---
title: "awerouter设计哲学1：一个路由器，三种协议，任意混用提供商"
description: "有一件事，大多数路由工具不会主动告诉你：它们被锁定在一种通信协议和一个提供商生态里。"
date: 2026-08-20
locale: zh
path: one-router-three-protocols
tags: [awerouter]
product: awerouter
---

有一件事，大多数路由工具不会主动告诉你：它们被锁定在一种通信协议和一个提供商生态里。专为 Anthropic 打造的路由器无法对接 GLM 的端点，专为 OpenAI 打造的路由器无法代理 Claude Code。如果你想用 StepFun 处理廉价任务、用 Anthropic 处理高难度任务，你就得用两套工具。

awerouter 没有这个限制。它原生支持三种协议——Anthropic Messages、OpenAI Chat Completions、OpenAI Responses——并且在一个路由配置中，你可以在同一协议组内混用任意数量的提供商。跨协议意味着再启动同一路由器的另一个配置，而不是引入第二套工具。路由器不在乎对端是什么，它只在乎哪边便宜、哪边更强。

GitHub：[github.com/mugpeng/awerouter](https://github.com/mugpeng/awerouter)

## 一个配置，多个提供商

一个路由配置有两个目的地：`flash` 和 `pro`。每个目的地都是一个形如 `providerName,modelId` 的逗号分隔字符串。提供商名称对应 `providers.json` 中的条目，后者存储了对应协议组的端点地址和认证信息。

```json
{
  "cc-router-1": {
    "protocol": "anthropic",
    "longContextThreshold": 8000,
    "destinations": {
      "flash": "stepfun,step-3.7-flash",
      "pro":   "anthropic,claude-opus-5"
    }
  }
}
```

同样的配置也可以把 `flash` 指向 GLM、把 `pro` 指向 OpenAI。`providers.json` 中的协议组携带对应的 `base_url`——而且因为每个提供商在不同协议下通常使用不同路径，配置允许你为每种通信格式指定正确的端点：

| 协议 | Base URL 约定 | 端点 |
|---|---|---|
| `anthropic` | `ANTHROPIC_BASE_URL` 风格，不带 `/v1` | `base_url + /v1/messages` |
| `openai-chat` | `OPENAI_BASE_URL` 包含版本号 | `base_url + /chat/completions` |
| `openai-responses` | `OPENAI_BASE_URL` 包含版本号 | `base_url + /responses` |

以 GLM 为例，它用于 Chat Completions 的地址是 `https://open.bigmodel.cn/api/coding/paas/v4`，但用于 Responses 的地址是 `https://open.bigmodel.cn/api/v1`。awerouter 把两者都存储在同一个提供商名称下，各自归属不同的协议组，在请求时自动选取正确的那一个。

## 客户端无需知晓

对客户端来说，一切如常。Claude Code 依然指向 `ANTHROPIC_BASE_URL=http://127.0.0.1:20128`。Codex 在 `config.toml` 里把同一地址设为 `base_url`。OpenCode 也把自己的 OpenAI 兼容提供商配置指向这里。awerouter 守护进程终止原生协议、执行路由决策，然后将请求以相同的通信格式转发到上游。

每个路由配置各自作为一个守护进程实例运行，这些实例共享同一个配置目录。在同一台机器上同时启动多个，它们会依次排在 20128、20129……端口上——于是 Claude Code、Codex 和 OpenCode 各自坐在自己的路由配置前，各自以不同方式混用提供商。路由器是共享的中间层，这些客户端彼此互不可见。

## 协议无关的路由

路由决策本身完全不感知协议。`resolve()` 函数接收一个预先计算好的 `InspectResult`——请求结构的标准化快照——并返回一个包含目的地和标签的 `ResolveResult`。它不知道收到的请求是 Anthropic Messages 还是 OpenAI Chat Completions，也不需要知道。

三个协议专属的提取器产出相同的 `InspectResult`：

- `token_count` — 估算的输入 token 总数
- `has_image` — 是否存在任意图片块
- `has_web_search` — 是否声明了 `web_search_*` 工具
- `file_search_tokens` — 仅来自 grep/glob/ls 结果的 token 数
- `last_tools` — 末尾一批并行工具调用，`last_phase` 标记其中是否有调用改动了代码

一个路由器。三个提取器。同一个决策。

## 混用提供商不是事后补救

多提供商路由之所以重要，不是为了灵活而灵活，而是因为不同提供商之间的价格和能力差距真实存在。

一个典型部署：StepFun 的 `step-3.7-flash` 以极低成本处理高频的常规请求，Anthropic 的 `claude-opus-5` 处理真正困难的任务。如果你还希望在特定编码任务中使用 GLM，它可以和它们并列接入——不需要第二台路由器，不需要代理链，不需要重新配置客户端。

新增一个提供商，只需编辑配置，不必改动架构。智能体（agent）一次对话就能完成：

> "在 openai-chat 组里把 GLM 加成一个提供商，把 flash 设为 `glm,glm-4-flash`。"

## 本地模型也在混用之列

提供商不一定是云端 API。本地推理服务——Ollama、LM Studio、llama.cpp、vLLM——同样是提供商，而且不需要密钥：省略 `auth` 字段，请求就会以无认证头的形式发往上游。

```json
{
  "anthropic": {
    "ollama":    { "base_url": "http://127.0.0.1:11434" },
    "anthropic": { "base_url": "https://api.anthropic.com", "auth": "${ANTHROPIC_KEY}" }
  },
  "openai-chat": {
    "ollama": { "base_url": "http://127.0.0.1:11434/v1" }
  }
}
```

任何 OpenAI 兼容服务都能挂在 `openai-chat` 组（LM Studio `http://127.0.0.1:1234/v1`、llama.cpp `http://127.0.0.1:8080/v1`、vLLM `http://127.0.0.1:8000/v1`）；Ollama ≥ 0.14 原生支持 Anthropic 协议，本地模型甚至可以直接坐进 Claude Code 所在的 `anthropic` 组。路径约定与云端一致：`openai-chat` 的 base_url 带 `/v1` 段，`anthropic` 的不带。

接下来，本地和云端在同一个配置里随意混排——便宜的活交给本地模型，难啃的交给云端 API：

```json
"destinations": {
  "flash": "ollama,qwen3-coder:30b",
  "pro":   "anthropic,claude-opus-5"
}
```

本地服务没启动时，flash→pro 回退会在连接错误时触发，请求透明地落到云端——本地优先、云端兜底，不需要任何额外配置。

## 为什么这很重要

第一代 LLM 代理假设的是一对一关系：一个客户端、一个提供商、一种协议。一旦你真的想要混用，这个模型立刻崩塌。

awerouter 的设计把协议层视为传输通道，把提供商混用视为策略。它们是两个独立的维度。你可以更换提供商，而不触碰路由逻辑；你可以调整路由逻辑，而不触碰提供商。四层决策管道不在乎 `flash` 或 `pro` 背后站着哪家提供商——它只在乎 `flash` 存在，`pro` 也存在。

正是这种分离，让一台路由器、一个配置目录——每个配置一个守护进程实例——就能为你机器上的每一个智能体、每一个你使用的提供商、每一种它们能说的协议提供服务。

## awerouter 系列文章

- [awerouter：不怕deepseek 涨价，一句话让智能路由给你省钱](https://mp.weixin.qq.com/s/8jucVeQWQRjCIUEXxj-fHQ)
- [awerouter 更新: 数据看板告诉你省了多少](https://mp.weixin.qq.com/s/V1tPgz-jEekAMRdLMzGZGQ)

## 更多来自 mugpeng

awerouter 是 aweteam 生态的一部分：

- **[aweskill](https://aweskill.webioinfo.top/)** — 以 CLI 为核心的技能包管理器，支持 47 款以上的 AI 编程智能体
- **[aweswitch](https://github.com/Webioinfo01/aweswitch)** — AI 编程智能体配置方案切换器，支持 Claude Code、Codex 和 OpenCode；启动会话时自动指向 awerouter 守护进程
- **[aweshelf](https://github.com/Webioinfo01/aweshelf)** — 支持配置方案感知恢复的 AI 编程会话管理器
- **[awerouter](https://github.com/mugpeng/awerouter)** — 智能大语言模型路由器，自动利用结构信号将智能体请求分配到快速低价的轻量模型或能力更强的旗舰提供商，平衡成本、延迟与推理质量
- **[awescholar](https://github.com/Webioinfo01/awescholar)** — 面向 Awesome 列表的自动化科学文献发现与整理工具
