---
layout: page
title: 关于
---

<div class="about-container">

  <h1 class="about-title">
    关于我们
  </h1>

  <div class="about-info">
    <div class="about-number">邮箱</div>
    <div class="about-release-date">
      <a href="mailto:service@agiletiles.com" target="_blank" rel="noreferrer">service@agiletiles.com</a>
    </div>
  </div>

  <div class="about-info">
    <div class="about-number">公众号</div>
  </div>

  <div class="about-card">
    <div class="about-title-info">
      <span class="about-title-name">灵卡面板官方公众号</span>
    </div>
    <img style="width: 11rem; height: 11rem " src="https://index.agiletiles.com/website/images/qr_code/AgileTilesMPQR.jpg"></img>
  </div>

  <div class="about-info">
    <div class="about-number">QQ群</div>
    <div class="about-release-date">
      <span>
        ①群:
      </span>
      <a  href="https://qm.qq.com/cgi-bin/qm/qr?k=VK59itvpdf8BYA_cOXbLwLWNz9XqUuww&amp;jump_from=webapi&amp;authKey=86SEXINZcwHSIdaoXlSJJdQx5wvnoG+rJPMfXUSjL9ojBejru2M3IHNdS/Svn91m" target="_blank" rel="noreferrer">725814322</a>
      <span>
        (点击左边群号或扫描下方二维码加群，群成员满员时会不定期清理不活跃用户哦~)
      </span>
    </div>
  </div>

  <div class="about-card">
    <div class="about-title-info">
      <span class="about-title-name">灵卡面板官方①群</span>
    </div>
    <img style="width: 11rem; height: 11rem " src="https://index.agiletiles.com/website/images/qr_code/725814322.png"></img>
  </div>

  <div class="about-info">
    <div class="about-number">意见反馈</div>
    <div class="about-release-date">可以打开软件后在 设置 -> 意见反馈 处提交反馈哦~</div>
  </div>

  <div class="about-info">
    <div class="about-number">会员工单</div>
    <div class="about-release-date">可以打开软件后在 设置 -> 会员工单 处提交工单，我们会尽快处理哦~</div>
  </div>

</div>

<style>
/* 基础样式 - 同时适配浅色和深色模式 */
.about-container {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: left;
  margin-top: 0rem;
}

/* 新增软件名称样式 */
.about-title {
  font-size: 2.3rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;
  line-height: 1.2;
  text-align: left;
}

.about-info {
  margin-top: 3rem;
  margin-bottom: 1rem;
}

.about-tag {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-2);
}

.about-number {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.about-release-date {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  margin-top: 1rem;
}

.about-release-date a {
  color: var(--vp-c-brand);
}

.about-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  box-shadow: var(--vp-shadow-1);
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  max-width: 14rem;
}

.about-title-info {
  display: flex;
  align-items: left;
  justify-content: left;
  gap: 12px;
  margin-bottom: 1.5rem;
}

.about-title-icon {
  width: 40px;
  height: 40px;
  color: var(--vp-c-brand);
}

.about-title-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.about-button {
  display: inline-block;
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 1.1rem;
  box-shadow: var(--vp-shadow-1);
  border: 1px solid var(--vp-button-brand-border);
}

.about-button:hover {
  background: var(--vp-button-brand-hover-bg);
  transform: translateY(-2px);
  box-shadow: var(--vp-shadow-2);
}

.changelog-link a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.changelog-link a:hover {
  color: var(--vp-c-brand);
  text-decoration: underline;
}

/* 深色模式特定调整 */
.dark .about-card {
  box-shadow: var(--vp-shadow-2);
}

.dark .about-button {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* 新增深色模式软件名称微调 */
.dark .about-title {
  color: var(--vp-c-text-dark-1);
}
</style>