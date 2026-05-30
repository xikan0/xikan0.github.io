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

.about-lead {
  max-width: 40rem;
  margin: 0;
  color: var(--about-muted);
  line-height: 2;
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
    <h2 class="about-title">你好</h2>
    <p class="about-lead">本人正在备考(2026-27)，所以现在不会有什么内容，之后这里会放一些学习、日常的记录</p>
    <p class="about-lead">如果你偶然来到这里，欢迎随便看看。</p>
  </section>

  <figure class="about-photo">
    <img src="https://cdn.jsdelivr.net/gh/xikan0/ImgHosting@main/PIC/P33.png" alt="风景图">
  </figure>
</div>
