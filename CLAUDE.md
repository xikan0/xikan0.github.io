# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

基于 Hexo 8.0.0 的个人博客，主题为 Butterfly，使用 Git 进行版本管理。

- **源码仓库**：`https://github.com/xikan0/xikan0.github.io`（`source` 分支）
- **部署目标**：同一仓库的 `main` 分支（GitHub Pages 从 `main` 分支提供服务，由 `hexo deploy` 推送）
- **访问地址**：`https://xikan0.github.io`

## 常用命令

```bash
npm install          # 安装依赖
npm run server       # 启动本地开发服务器 (http://localhost:4000)
npm run build        # 生成静态文件到 public/
npm run deploy       # 部署到 GitHub Pages
npm run clean        # 清理 public/ 和缓存
```

## 架构

```
Blog/
├── _config.yml              # Hexo 主配置（站点信息、URL、部署等）
├── _config.butterfly.yml     # Butterfly 主题配置（导航、样式、插件、评论等）
├── source/                   # 源文件目录
│   ├── _posts/               # Markdown 文章（文件名即 URL slug）
│   ├── _data/                # 数据文件（友链 link.yml、说说 shuoshuo.yml、挂件 widget.yml）
│   ├── about/                # 关于页面
│   ├── link/                 # 友情链接页面
│   ├── music/                # 音乐页面
│   ├── shuoshuo/             # 说说页面
│   ├── categories/           # 分类页面
│   ├── tags/                 # 标签页面
│   └── css/                  # 自定义 CSS
├── scaffolds/                # 文章模板（post/draft/page）
├── themes/butterfly/         # Butterfly 主题（独立 git 仓库）
├── public/                   # 生成的静态站点（build 输出，不应手动编辑）
└── package.json
```

## 关键配置文件

- **`_config.yml`** — 站点元信息、URL、permalink 格式、代码高亮、部署目标
- **`_config.butterfly.yml`** — 主题全部配置：导航菜单、代码块、社交图标、评论(Valine)、搜索、Analytics、APlayer 等

## 文章格式

每篇文章是 `source/_posts/` 下的 Markdown 文件，Front Matter 示例：

```yaml
---
title: 文章标题
date: 2025-10-07 14:38:35
tags: [标签1, 标签2]
categories: [分类名]
---
```

## 页面类型

通过 Front Matter 的 `type` 字段区分：
- 友情链接页：`type: 'link'`，数据来自 `source/_data/link.yml`
- 说说页：`type: 'shuoshuo'`，数据来自 `source/_data/shuoshuo.yml`
- 音乐页：设置 `aplayer: true`

## 注意事项

- 主题 Butterfly 在 `themes/butterfly/` 内是独立 git 仓库，修改主题文件需要进入该目录操作
- 部署使用 `hexo-deployer-git`，将 `public/` 推送到 `main` 分支供 GitHub Pages 服务
- 源码提交到 `source` 分支，与部署的静态文件（`main` 分支）分离
- `public/` 和 `.deploy_git/` 是自动生成的，不应手动编辑或提交
- 访问 GitHub 失败时，先设置代理再重试：
  ```bash
  export http_proxy=http://127.0.0.1:7897
  export https_proxy=http://127.0.0.1:7897
  ```
