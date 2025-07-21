<template>
  <transition name="fade">
    <button
        v-if="showButton"
        @click="scrollToTop"
        class="scroll-to-top-btn"
        aria-label="Remonter en haut"
    >
      <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="arrow-icon"
      >
        <polyline points="18,15 12,9 6,15"></polyline>
      </svg>
    </button>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-to-top-btn {
  @apply fixed bottom-8 right-8 z-50;
  @apply w-14 h-14 rounded-full;
  @apply bg-gradient-to-r from-purple-600 to-pink-600;
  @apply text-white shadow-lg;
  @apply flex items-center justify-center;
  @apply transition-all duration-300;
  @apply hover:shadow-xl hover:shadow-purple-500/25;
  @apply hover:scale-110 active:scale-95;
  @apply backdrop-blur-sm;
}

.arrow-icon {
  @apply transition-transform duration-300;
}

.scroll-to-top-btn:hover .arrow-icon {
  @apply -translate-y-1;
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-300;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0 scale-75 translate-y-4;
}

.fade-enter-to,
.fade-leave-from {
  @apply opacity-100 scale-100 translate-y-0;
}
</style>
