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

## 风险操作规则

以下操作**必须征得用户明确同意**后方可执行：

| 操作 | 规则 |
|------|------|
| `npm run deploy` / `hexo deploy` | 直接更新线上网站，**必须先确认** |
| `git push` 到 `main` 分支 | **禁止**，`main` 由 `hexo deploy` 独占推送 |
| `git push --force`（任意分支） | **禁止**，不可逆 |
| `git reset --hard` / `git clean -fd` | **禁止**，会丢失未提交的修改 |
| 修改 `_config.yml` 的 `deploy` 配置 | **需先确认**，改错会导致部署失败 |
| 手动编辑 `public/` 或 `.deploy_git/` | **禁止**，自动生成目录 |

## 固定操作命令

以下命令路径和参数已经验证正确，直接复制使用，**无需在 Blog/ 目录之外执行**。

### 提交源码

```bash
git -C "F:/Blog" add <file...>
git -C "F:/Blog" commit -m "$(cat <<'EOF'
<commit message>
EOF
)"
```

### 推送源码到 GitHub

```bash
export http_proxy=http://127.0.0.1:7897 && export https_proxy=http://127.0.0.1:7897 && git -C "F:/Blog" push
```

### 构建 + 部署上线

```bash
cd "F:/Blog" && npm run build
export http_proxy=http://127.0.0.1:7897 && export https_proxy=http://127.0.0.1:7897 && cd "F:/Blog" && npm run deploy
```

### 本地预览

```bash
cd "F:/Blog" && ./node_modules/.bin/hexo server
```

注意：`hexo` 命令不在全局 PATH 中，必须使用 `./node_modules/.bin/hexo` 或 `npx hexo`，且需在 `F:/Blog` 目录下执行。
