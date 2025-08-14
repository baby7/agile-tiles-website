---
layout: page
title: 下载
---

<div class="download-container">

  <!-- 新增软件名称标题 -->
  <h1 class="software-title">
    灵卡面板
  </h1>

  <div class="version-info">
    <div class="version-tag">最新版本</div>
    <div class="version-number">V1.1.1</div>
    <div class="release-date">更新时间: 2025年8月14日</div>
  </div>

  <div class="download-card">
    <div class="os-info">
      <svg class="os-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z"/>
      </svg>
      <span class="os-name">Windows 10、11</span>
    </div>
    <a href="https://server.agiletiles.com/update/setup/AgileTilesSetupV1.1.1.exe" class="download-button">
      下载安装包
    </a>
  </div>

  <div class="changelog-link">
    <a href="/history">查看完整更新历史 →</a>
  </div>

</div>

<style>
/* 基础样式 - 同时适配浅色和深色模式 */
.download-container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
}

/* 新增软件名称样式 */
.software-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;
  line-height: 1.2;
  text-align: center;
}

.version-info {
  margin-bottom: 2.5rem;
}

.version-tag {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-2);
}

.version-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--vp-c-brand);
}

.release-date {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}

.download-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid var(--vp-c-divider);
  box-shadow: var(--vp-shadow-1);
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.os-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 1.5rem;
}

.os-icon {
  width: 40px;
  height: 40px;
  color: var(--vp-c-brand);
}

.os-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.download-button {
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

.download-button:hover {
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
.dark .download-card {
  box-shadow: var(--vp-shadow-2);
}

.dark .download-button {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* 新增深色模式软件名称微调 */
.dark .software-title {
  color: var(--vp-c-text-dark-1);
}
</style>