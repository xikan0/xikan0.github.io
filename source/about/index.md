---
title: 关于
date: 2025-10-08 10:54:47
---

<style>
.about-page {
  --about-ink: #20242a;
  --about-muted: #69707a;
  --about-soft: #98a1ad;
  --about-line: rgba(32, 36, 42, .1);
  color: var(--about-ink);
}

.about-hero {
  display: grid;
  gap: 1rem;
  padding: .35rem 0 1rem;
}

.about-kicker {
  margin: 0;
  color: var(--about-soft);
  font-size: .78rem;
  font-weight: 600;
  letter-spacing: .08em;
}

.about-title {
  margin: 0;
  max-width: 42rem;
  font-size: clamp(1.55rem, 3.5vw, 2.15rem);
  font-weight: 650;
  line-height: 1.32;
}

.about-lead,
.about-body p {
  max-width: 40rem;
  margin: 0;
  color: var(--about-muted);
  line-height: 2;
}

.about-tags {
  display: flex;
  flex-wrap: wrap;
  gap: .45rem;
  margin-top: .15rem;
}

.about-tags span {
  padding: .18rem .56rem;
  border: 1px solid var(--about-line);
  border-radius: 999px;
  background: transparent;
  color: var(--about-muted);
  font-size: .8rem;
}

.about-photo {
  width: 100%;
  margin: 2rem 0;
  overflow: hidden;
  border-radius: 8px;
}

.about-photo img {
  display: block;
  width: 100%;
  height: auto;
}

.about-body {
  display: grid;
  gap: 1.15rem;
  margin-top: .5rem;
}

@media (max-width: 768px) {
  .about-hero {
    padding-top: .15rem;
  }

  .about-photo {
    margin: 1.5rem 0;
  }
}
</style>

<div class="about-page">
  <section class="about-hero">
    <p class="about-kicker">ABOUT THIS BLOG</p>
    <h1 class="about-title">你好，我是 Xikan。</h1>
    <p class="about-lead">这里会放一些学习、折腾和日常里的记录。写得不一定很快，但希望每一篇都具体一点、真诚一点。</p>
    <div class="about-tags">
      <span>技术笔记</span>
      <span>工具折腾</span>
      <span>生活观察</span>
    </div>
  </section>

  <figure class="about-photo">
    <img src="https://cdn.jsdelivr.net/gh/xikan0/ImgHosting@main/PIC/P33.png" alt="风景图">
  </figure>

  <section class="about-body">
    <p>我搭建这个博客，是想给自己留一个可以慢慢整理的地方。技术上的问题、工具上的尝试、偶尔冒出来的想法，都可以先放在这里。</p>
    <p>它不需要总是完整，也不需要总是热闹。能留下当时的思路，未来回头看时还能想起自己是怎么走到这里的，就已经很好。</p>
    <p>如果你偶然来到这里，欢迎随便看看。</p>
  </section>
</div>
