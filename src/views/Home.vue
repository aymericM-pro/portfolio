<template>
  <div class="landing-page">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <div class="brand-logo">AM</div>
          <span class="brand-name">Aymeric Maillot</span>
        </div>
        
        <div class="nav-links">
          <a @click="scrollToSection('about')" class="nav-link cursor-pointer">{{ $t('nav.about') }}</a>
          <a @click="scrollToSection('skills')" class="nav-link cursor-pointer">{{ $t('nav.skills') }}</a>
          <a @click="scrollToSection('projects')" class="nav-link cursor-pointer">{{ $t('nav.projects') }}</a>
          <a @click="scrollToSection('contact')" class="nav-link cursor-pointer">{{ $t('nav.contact') }}</a>
        </div>

        <div class="flex items-center space-x-4">
          <select 
            v-model="currentLocale" 
            @change="changeLanguage"
            class="bg-white/10 backdrop-blur-xl text-white px-3 py-2 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <option value="fr">🇫🇷 FR</option>
            <option value="en">🇬🇧 EN</option>
          </select>

          <button
              @click="openCV"
              class="bg-white/10 backdrop-blur-xl text-white px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            {{ $t('nav.downloadCV') }}
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="section-wrapper">
      <HeroSection @scrollTo="scrollToSection" />
    </div>

    <!-- About Section -->
    <div class="section-wrapper section-alternate">
      <AboutSection />
    </div>

    <!-- Skills Section -->
    <div class="section-wrapper">
      <SkillsSection />
    </div>

    <!-- Projects Section -->
    <div class="section-wrapper section-alternate">
      <ProjectsSection />
    </div>

    <!-- Contact Section -->
    <div class="section-wrapper">
      <ContactSection />
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <p class="footer-text">
          {{ $t('footer.copyright') }}
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import ContactSection from '../components/ContactSection.vue'

const { locale } = useI18n()
const currentLocale = ref(locale.value)

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const changeLanguage = () => {
  locale.value = currentLocale.value
}


const openCV = () => {
  window.open('/MaillotAymeric.pdf', '_blank')
}

</script>

<style scoped>
.landing-page {
  @apply min-h-screen bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary;
}

.navbar {
  @apply fixed top-0 w-full z-50 bg-dark-primary/80 backdrop-blur-xl border-b border-white/10;
}

.nav-container {
  @apply max-w-7xl mx-auto px-6 py-4 flex items-center justify-between;
}

.nav-brand {
  @apply flex items-center space-x-3;
}

.brand-logo {
  @apply w-10 h-10 bg-custom-gradient rounded-lg flex items-center justify-center text-white font-bold text-lg;
}

.brand-name {
  @apply text-white font-bold text-xl;
}

.nav-links {
  @apply hidden md:flex items-center space-x-8;
}

.nav-link {
  @apply text-gray-300 hover:text-white transition-colors duration-300;
}

.nav-button {
  @apply bg-custom-gradient text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-gradient-purple/25 transition-all duration-300;
}

.footer {
  @apply py-8 px-6 border-t border-white/10;
}

.footer-container {
  @apply max-w-7xl mx-auto text-center;
}

.footer-text {
  @apply text-gray-400;
}

/* Section transitions */
.section-wrapper {
  @apply relative;
}

.section-wrapper:nth-child(odd) {
  background: linear-gradient(135deg, #0A0117 0%, #150B22 50%, #1a0b2e 100%);
}

.section-wrapper:nth-child(even) {
  background: linear-gradient(135deg, #150B22 0%, #0A0117 50%, #2a1b3d 100%);
}

/* Transition douce entre sections */
.section-wrapper {
  position: relative;
  overflow: hidden;
}

.section-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(180deg, 
    rgba(180, 124, 246, 0.05) 0%, 
    transparent 100%
  );
  pointer-events: none;
}

.section-wrapper::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(0deg, 
    rgba(254, 140, 175, 0.05) 0%, 
    transparent 100%
  );
  pointer-events: none;
}

select {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

select option {
  background-color: #0A0117;
  color: white;
}
</style>
