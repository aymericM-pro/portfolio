<script lang="ts" setup>
import {SkillCategory} from "../models/models.ts";

const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    icon: '💻',
    titleKey: 'skills.frontend.title',
    descriptionKey: 'skills.frontend.description',
    tags: [
      { name: 'Angular', type: 'primary' },
      { name: 'TypeScript', type: 'primary' },
      { name: 'Vue.js', type: 'secondary' },
      { name: 'JavaScript', type: 'secondary' },
      { name: 'HTML/CSS', type: 'secondary' },
      { name: 'Tailwind CSS', type: 'secondary' },
      { name: 'Karma', type: 'tool' },
      { name: 'Jasmine', type: 'tool' },
      { name: 'Vitest', type: 'tool' },
      { name: 'ESLint', type: 'tool' },
    ],
  },
  {
    id: 'backend',
    icon: '⚙️',
    titleKey: 'skills.backend.title',
    descriptionKey: 'skills.backend.description',
    tags: [
      { name: 'Java', type: 'primary' },
      { name: 'Spring Boot', type: 'primary' },
      { name: 'Kotlin', type: 'secondary' },
      { name: 'Node.js', type: 'secondary' },
      { name: 'PostgreSQL', type: 'secondary' },
      { name: 'MySQL', type: 'secondary' },
      { name: 'JUnit', type: 'tool' },
      { name: 'Mockito', type: 'tool' },
      { name: 'Maven', type: 'tool' },
    ],
  },
  {
    id: 'devops',
    icon: '🚀',
    titleKey: 'skills.devops.title',
    descriptionKey: 'skills.devops.description',
    tags: [
      { name: 'Docker', type: 'primary' },
      { name: 'Git', type: 'primary' },
      { name: 'Kubernetes', type: 'secondary' },
      { name: 'Google Cloud Platform', type: 'secondary' },
      { name: 'Nginx', type: 'secondary' },
      { name: 'DigitalOcean', type: 'secondary' },
      { name: 'Terraform', type: 'tool' },
      { name: 'Helm', type: 'tool' },
      { name: 'GitLab CI', type: 'tool' },
    ],
  },
];
</script>

<template>
  <section id="skills" class="skills-section relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-20 right-20 w-24 h-24 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-xl"></div>
    <div class="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-xl"></div>

    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ $t('skills.title') }}</h2>
        <div class="section-divider"></div>
      </div>

      <div class="skills-grid">
        <div
            v-for="category in skillCategories"
            :key="category.id"
            class="skill-category group"
            :class="category.id"
        >
          <div class="category-header">
            <div class="category-icon">{{ category.icon }}</div>
            <h3 class="category-title">{{ $t(category.titleKey) }}</h3>
            <p class="category-description">{{ $t(category.descriptionKey) }}</p>
          </div>
          <div class="skills-list">
            <div
                v-for="(tag, index) in category.tags"
                :key="index"
                class="skill-tag"
                :class="tag.type"
            >
              {{ tag.name }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.skills-section {
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

.skills-grid {
  @apply grid md:grid-cols-3 gap-8;
}

.skill-category {
  @apply bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300;
}

.skill-category.frontend {
  @apply hover:border-blue-500/30;
}

.skill-category.backend {
  @apply hover:border-orange-500/30;
}

.skill-category.devops {
  @apply hover:border-green-500/30;
}

.category-header {
  @apply text-center mb-8;
}

.category-icon {
  @apply w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl bg-white/10 group-hover:scale-110 transition-transform duration-300;
}

.category-title {
  @apply text-2xl font-bold text-white mb-2;
}

.category-description {
  @apply text-gray-400 text-sm;
}

.skills-list {
  @apply flex flex-wrap gap-2 justify-center;
}

.skill-tag {
  @apply px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105;
}

.skill-tag.primary {
  @apply bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30;
}

.skill-tag.secondary {
  @apply bg-white/10 text-gray-300 border border-white/20;
}

.skill-tag.tool {
  @apply bg-white/5 text-gray-400 border border-white/10;
}
</style>
