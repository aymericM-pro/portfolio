<template>
  <section class="h-screen flex items-center justify-center px-6 relative overflow-hidden" style="background: transparent;">
    <!-- Subtle background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
    </div>

    <div class="text-center max-w-4xl relative z-10">
      <h1 class="text-6xl md:text-8xl font-bold text-white mb-8">
        {{ $t('hero.title') }}
        <span class="bg-gradient-to-r from-[#B47CF6] to-[#FE8CAF] bg-clip-text text-transparent">
          {{ $t('hero.titleHighlight') }}
        </span>
      </h1>

      <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
        {{ $t('hero.subtitle') }}
      </p>

      <!-- Technologies -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <span class="tech-tag bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300">
          Java
        </span>
        <span class="tech-tag bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300">
          Angular
        </span>
        <span class="tech-tag bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300">
          Kotlin
        </span>
        <span class="tech-tag bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300">
          Vue.js
        </span>
      </div>

      <div class="flex justify-center">
        <button
            @click="handleCTAClick"
            class="bg-gradient-to-r from-[#B47CF6] to-[#FE8CAF] text-white font-semibold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
          {{ $t('hero.cta') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const emit = defineEmits();

const handleCTAClick = () => {
  emit('cta-clicked');
};
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(1deg);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(15px) rotate(-1deg);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 10s ease-in-out infinite;
  animation-delay: 2s;
}

.tech-tag {
  cursor: pointer;
}
</style>
