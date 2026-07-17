---
date: '2026-07-14 00:00:00'
tags:
  - 技术
description: 验证 Notion → Elog → Hexo 同步链路的测试文章
cover: ''
categories:
  - 随笔
title: Elog 同步测试文章
updated: '2026-07-14 20:00:00'
---

## 这是什么


一篇通过 WorkBuddy notion 连接器创建的测试文章，用来验证整条同步链路。


## 验证项

- front-matter 字段完整（title / date / tags / categories / status）
- 正文渲染正常
- 代码块渲染：

```javascript
console.log("Hello from Notion via Elog");
```


## 结语


如果你能在博客上看到这篇文章，说明 **Notion → Elog → Hexo** 链路已经打通。

