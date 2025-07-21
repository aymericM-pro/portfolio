<template>
  <section id="projects" class="h-screen flex items-center projects-section relative overflow-hidden" style="background: transparent;">
    <!-- Decorative elements -->
    <div class="absolute top-16 left-16 w-28 h-28 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
    <div class="absolute bottom-16 right-16 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-xl"></div>

    <div class="container w-full">
      <div class="section-header">
        <h2 class="section-title">{{ $t('projects.title') }}</h2>
        <div class="section-divider"></div>
      </div>

      <div class="projects-grid">
        <div class="project-card">
          <div class="project-image greencircle">
            <span class="project-emoji">♻️</span>
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ $t('projects.greencircle.title') }}</h3>
            <p class="project-description">
              {{ $t('projects.greencircle.description') }}
            </p>
            <div class="project-tags">
              <span class="tag entrepreneurial">{{ $t('projects.greencircle.tags.entrepreneurial') }}</span>
              <span class="tag spring">Spring Boot</span>
              <span class="tag angular">Angular</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image perseus">
            <span class="project-emoji">🚀</span>
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ $t('projects.perseus.title') }}</h3>
            <p class="project-description">
              {{ $t('projects.perseus.description') }}
            </p>
            <div class="project-tags">
              <span class="tag study">{{ $t('projects.perseus.tags.study') }}</span>
              <span class="tag team">{{ $t('projects.perseus.tags.team') }}</span>
              <span class="tag java">Java</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image noe">
            <span class="project-emoji">📋</span>
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ $t('projects.noe.title') }}</h3>
            <p class="project-description">
              {{ $t('projects.noe.description') }}
            </p>
            <div class="project-tags">
              <span class="tag team">{{ $t('projects.noe.tags.team') }}</span>
              <span class="tag spring">Spring Boot</span>
              <span class="tag angular">Angular</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  @apply py-24 px-6;
}

.container {
  @apply max-w-7xl mx-auto;
}

.section-header {
  @apply text-center mb-16;
}

.section-title {
  @apply text-4xl md:text-5xl font-bold text-white mb-6;
}

.section-divider {
  @apply w-24 h-1 bg-custom-gradient mx-auto rounded-full;
}

.projects-grid {
  @apply grid md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.project-card {
  @apply bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10;
}

.project-image {
  @apply h-32 flex items-center justify-center;
}

.project-image.greencircle {
  @apply bg-gradient-to-br from-green-500 to-emerald-500;
}

.project-image.perseus {
  @apply bg-gradient-to-br from-blue-600 to-indigo-600;
}

.project-image.noe {
  @apply bg-gradient-to-br from-purple-500 to-pink-500;
}

.project-emoji {
  @apply text-4xl;
}

.project-content {
  @apply p-4;
}

.project-title {
  @apply text-lg font-bold text-white mb-2;
}

.project-description {
  @apply text-gray-300 text-sm mb-3 leading-relaxed;
}

.project-tags {
  @apply flex flex-wrap gap-1 mb-3;
}

.tag {
  @apply px-2 py-1 rounded text-xs;
}

.tag.entrepreneurial {
  @apply bg-green-500/20 text-green-400;
}

.tag.study {
  @apply bg-blue-500/20 text-blue-400;
}

.tag.team {
  @apply bg-purple-500/20 text-purple-400;
}

.tag.spring {
  @apply bg-green-600/20 text-green-300;
}

.tag.angular {
  @apply bg-red-500/20 text-red-400;
}

.tag.java {
  @apply bg-orange-500/20 text-orange-400;
}

.project-actions {
  @apply flex gap-2;
}

.btn-project-primary {
  @apply bg-custom-gradient text-white px-3 py-1 rounded text-sm hover:shadow-lg transition-all duration-300;
}

.btn-project-secondary {
  @apply bg-white/10 text-white px-3 py-1 rounded text-sm hover:bg-white/20 transition-all duration-300;
}
</style>
<script setup lang="ts">
</script>
