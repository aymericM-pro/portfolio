<template>
  <section id="contact" class="h-screen flex items-center contact-section relative overflow-hidden" style="background: transparent;">
    <!-- Decorative elements -->
    <div class="absolute top-12 right-12 w-20 h-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-xl"></div>
    <div class="absolute bottom-12 left-12 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>

    <div class="container w-full">
      <div class="contact-content">
        <h2 class="contact-title">{{ $t('contact.title') }}</h2>
        <p class="contact-subtitle">
          {{ $t('contact.subtitle') }}
        </p>

        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">📧</div>
            <h3>{{ $t('contact.email') }}</h3>
            <p>aymeric.maillot@example.com</p>
          </div>
          <div class="contact-item">
            <a href="https://www.linkedin.com/in/aymeric-maillot-8638721b7/" target="_blank" rel="noopener noreferrer" class="contact-link">
              <div class="contact-icon">💼</div>
              <h3>{{ $t('contact.linkedin') }}</h3>
              <p>aymeric-maillot</p>
            </a>
          </div>
          <div class="contact-item">
            <a href="https://github.com/aymericM-pro" target="_blank" rel="noopener noreferrer" class="contact-link">
              <div class="contact-icon">🐙</div>
              <h3>{{ $t('contact.github') }}</h3>
              <p>aymericM-pro</p>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  @apply py-24 px-6;
}

.container {
  @apply max-w-4xl mx-auto text-center;
}

.contact-title {
  @apply text-4xl md:text-5xl font-bold text-white mb-6;
}

.contact-subtitle {
  @apply text-xl text-gray-300 mb-12;
}

.contact-info {
  @apply bg-white/5 backdrop-blur-xl rounded-3xl p-8 mb-12 grid md:grid-cols-3 gap-8;
}

.contact-item {
  @apply text-center;
}

.contact-icon {
  @apply w-16 h-16 bg-custom-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl;
}

.contact-item h3 {
  @apply text-white font-semibold mb-2;
}

.contact-item p {
  @apply text-gray-300;
}

.contact-button {
  @apply bg-custom-gradient text-white font-bold py-4 px-12 rounded-xl hover:shadow-xl hover:shadow-gradient-purple/30 transition-all duration-300 transform hover:scale-105;
}
</style>
