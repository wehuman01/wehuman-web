# icon · favicon 设计源

- **上线文件**：`public/favicon.svg` —— concept 1 自适应版，内置 `prefers-color-scheme`，系统深浅色自动切换。
- `concept-1-repeat-decide-light.svg` / `-dark.svg` —— 固定深、浅两版的独立源文件，做 og:image、README、周边物料时从这里取。

图形：八个重复的环 + 一个更大的实心群青方块 —— "The machine repeats. The person decides."
色值来自 `src/styles/tokens.css` 的 OKLCH（群青 #1A48BC，暗色提亮 #6594FA）。
