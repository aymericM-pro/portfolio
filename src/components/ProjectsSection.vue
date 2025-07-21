<script setup lang="ts">

import {ref} from "vue";
import {Project} from "../models/models.ts";


const projects = ref<Project[]>([
  {
    id: 'greencircle',
    emoji: '♻️',
    titleKey: 'projects.greencircle.title',
    descKey: 'projects.greencircle.description',
    tags: [
      { labelKey: 'projects.greencircle.tags.entrepreneurial', class: 'entrepreneurial' },
      { label: 'Spring Boot', class: 'spring' },
      { label: 'Angular', class: 'angular' },
    ],
  },
  {
    id: 'perseus',
    emoji: '🚀',
    titleKey: 'projects.perseus.title',
    descKey: 'projects.perseus.description',
    tags: [
      { labelKey: 'projects.perseus.tags.study', class: 'study' },
      { labelKey: 'projects.perseus.tags.team', class: 'team' },
      { label: 'Java', class: 'java' },
    ],
  },
  {
    id: 'noe',
    emoji: '📋',
    titleKey: 'projects.noe.title',
    descKey: 'projects.noe.description',
    tags: [
      { labelKey: 'projects.noe.tags.team', class: 'team' },
      { label: 'Spring Boot', class: 'spring' },
      { label: 'Angular', class: 'angular' },
    ],
  },
])
</script>

<template>
  <section id="projects" class="h-screen flex items-center projects-section relative overflow-hidden" style="background: transparent;">
    <div class="absolute top-16 left-16 w-28 h-28 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
    <div class="absolute bottom-16 right-16 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-xl"></div>

    <div class="container w-full">
      <div class="section-header">
        <h2 class="section-title">{{ $t('projects.title') }}</h2>
        <div class="section-divider"></div>
      </div>

      <div class="projects-grid">
        <div
            v-for="project in projects"
            :key="project.id"
            class="project-card"
        >
          <div :class="['project-image', project.id]">
            <span class="project-emoji">{{ project.emoji }}</span>
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ $t(project.titleKey) }}</h3>
            <p class="project-description">{{ $t(project.descKey) }}</p>
            <div class="project-tags">
        <span
            v-for="(tag, index) in project.tags"
            :key="index"
            :class="['tag', tag.class]"
        >
          {{ tag.labelKey ? $t(tag.labelKey) : tag.label }}
        </span>
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
