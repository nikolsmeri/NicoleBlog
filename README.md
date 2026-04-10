# Nicole's Blog

基于 [Hugo](https://gohugo.io/) + [PaperMod 主题](https://github.com/adityatelange/hugo-PaperMod) 搭建，通过 GitHub Actions 自动部署到 GitHub Pages。

## 🚀 自动部署流程

每次将代码 `push` 到 `main` 分支，GitHub Actions 会自动：
1. 用 Hugo 构建静态网站
2. 部署到 GitHub Pages

博客地址：**https://nikolsmeri.github.io/NicoleBlog/**

## ⚙️ 首次配置（只需做一次）

在 GitHub 仓库中开启 GitHub Pages：

1. 进入仓库 **Settings → Pages**
2. **Source** 选择 `GitHub Actions`
3. 保存，完成！

## ✍️ 写新文章

在 `content/posts/` 目录下新建 Markdown 文件，例如 `content/posts/my-post.md`：

```markdown
---
title: "文章标题"
date: 2026-04-10
draft: false
tags: ["标签1", "标签2"]
---

正文内容...
```

写完后：

```bash
git add .
git commit -m "新增文章：文章标题"
git push
```

推送后等待约 1 分钟，文章就会自动出现在博客上。

## 📁 目录结构

```
content/
  posts/       # 博客文章
  about.md     # 关于页面
  archives/    # 归档页面
themes/
  PaperMod/    # 主题（git submodule）
.github/
  workflows/
    deploy.yml # 自动部署配置
hugo.toml      # 博客配置文件
```
