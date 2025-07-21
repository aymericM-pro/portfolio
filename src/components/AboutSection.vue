<template>
  <section id="about" class="h-screen flex items-center py-12 px-6 relative overflow-hidden" style="background: transparent;">
    <!-- Decorative elements -->
    <div class="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
    <div class="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>

    <div class="max-w-6xl mx-auto w-full">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold text-white mb-6">{{ $t('about.title') }}</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-[#B47CF6] to-[#FE8CAF] mx-auto rounded-full"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Profil -->
        <div class="bg-white/5 backdrop-blur-xl rounded-3xl p-10 text-center">
          <h3 class="text-2xl font-bold text-white mb-6">{{ $t('about.jobTitle') }}</h3>
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('about.description') }}
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <span class="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm">{{ $t('about.badges.graduate') }}</span>
            <span class="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm">{{ $t('about.badges.experience') }}</span>
            <span class="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm">{{ $t('about.badges.international') }}</span>
          </div>
        </div>

        <!-- Passions -->
        <div>
          <h3 class="text-2xl font-bold text-white mb-6 text-center">{{ $t('about.passions.title') }}</h3>

          <div class="grid grid-cols-2 gap-3">
            <div class="bg-white/5 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <span class="text-2xl mb-3 block">💻</span>
              <h4 class="text-base font-semibold text-white mb-2">{{ $t('about.passions.code.title') }}</h4>
              <p class="text-gray-300 text-xs">{{ $t('about.passions.code.description') }}</p>
            </div>

            <div class="bg-white/5 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <span class="text-2xl mb-3 block">🛠️</span>
              <h4 class="text-base font-semibold text-white mb-2">{{ $t('about.passions.craft.title') }}</h4>
              <p class="text-gray-300 text-xs">{{ $t('about.passions.craft.description') }}</p>
            </div>

            <div class="bg-white/5 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <span class="text-2xl mb-3 block">⚡</span>
              <h4 class="text-base font-semibold text-white mb-2">{{ $t('about.passions.nocode.title') }}</h4>
              <p class="text-gray-300 text-xs">{{ $t('about.passions.nocode.description') }}</p>
            </div>

            <div class="bg-white/5 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <span class="text-2xl mb-3 block">🚀</span>
              <h4 class="text-base font-semibold text-white mb-2">{{ $t('about.passions.devops.title') }}</h4>
              <p class="text-gray-300 text-xs">{{ $t('about.passions.devops.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
