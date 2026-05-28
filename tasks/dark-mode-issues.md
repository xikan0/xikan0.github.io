# 暗色模式适配 - 维护笔记

> 最后更新：2026-05-28（审查了蝶变主题源码和实际 DOM 结构）

## 1. `!important` 用法

暗色模式卡片背景使用了 `html[data-theme="dark"] + !important`：

```css
html[data-theme="dark"] #aside_content .card-widget { background: #0d1b2a !important; }
```

如果后面要覆盖这些背景色，**也必须使用 `!important`**。

**原因**：主题的 CSS 变量 — (`card-bg`) 在暗色模式下未能被我们的自定义 CSS 成功覆盖，不得已改用硬编码 + `!important`。

## 2. 硬编码颜色

卡片背景使用硬编码而非 CSS 变量：

- 亮色：`#fff`（纯白）
- 暗色：`#0d1b2a`（深蓝黑）

如果以后想用半透明毛玻璃效果，需要手动改这些值。

## 3. ~~`#post` 背景重复~~ ✅ 已修复

`layout_post` 和 `layout_page` 在蝶变主题中**不存在**——这些选择器是死代码，从未匹配到任何元素。已移除，替换为正确的选择器 `#content-inner > div:first-child:not(.nc)`。

## 4. 正确选择器速查表

| 元素 | 正确选择器 |
|-------|-----------------|
| 侧边栏卡片 | `#aside_content .card-widget` |
| 首页文章卡片 | `#recent-posts>.recent-post-item` |
| 文章/页面内容区 | `#content-inner > div:first-child:not(.nc)` |

蝶变主题使用 `.layout > div:first-child:not(.nc)`（通过 `@extends .cardHover`）设置 `background: var(--card-bg)`。我们的自定义 CSS 会覆盖这些背景色。修改样式前，建议在 `themes/butterfly/source/css/` 中查阅主题选择器，避免编写死规则。

## 5. `backdrop-filter` 已移除

将半透明卡片改为纯白不透明时移除了 `backdrop-filter: blur(4px)`。后续若要毛玻璃效果，需要加回并处理好暗色模式的透明度。
