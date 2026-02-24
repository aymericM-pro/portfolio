<script lang="ts" setup></script>

<template>
    <section
        id="about"
        class="min-h-screen flex items-center py-20 px-6 relative overflow-hidden">

        <!-- Décor -->
        <div
            class="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
        />
        <div
            class="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
        />

        <div class="max-w-6xl mx-auto w-full">
            <!-- HEADER -->
            <div class="section-header">
                <h2 class="section-title">{{ $t("about.title") }}</h2>
                <div class="section-divider"></div>
            </div>

            <div class="grid md:grid-cols-2 gap-12 items-center">
                <!-- Profil -->
                <div class="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-10 text-center">
                    <h3 class="text-2xl font-bold text-white mb-6">
                        {{ $t("about.jobTitle") }}
                    </h3>
                    <p class="text-gray-300 leading-relaxed mb-6">
                        {{ $t("about.description") }}
                    </p>

                    <div class="flex flex-wrap gap-4 justify-center">
                        <span class="badge purple">{{ $t("about.badges.graduate") }}</span>
                        <span class="badge green">{{ $t("about.badges.experience") }}</span>
                        <span class="badge blue">{{ $t("about.badges.international") }}</span>
                    </div>
                </div>

                <!-- Passions -->
                <div>
                    <h3 class="text-2xl font-bold text-white mb-6 text-center">
                        {{ $t("about.passions.title") }}
                    </h3>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div v-for="key in ['code','craft','nocode','devops']"
                             :key="key"
                             class="passion-card">
                            <span class="text-2xl mb-3 block">
                                {{ key === "code" ? "💻"
                                : key === "craft" ? "🛠️"
                                    : key === "nocode" ? "⚡"
                                        : "🚀" }}
                            </span>
                            <h4 class="passion-title">
                                {{ $t(`about.passions.${key}.title`) }}
                            </h4>
                            <p class="passion-desc">
                                {{ $t(`about.passions.${key}.description`) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section-header {
    @apply text-center mb-16;
}

.section-title {
    @apply text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6;
}

.section-divider {
    @apply w-24 h-1 bg-custom-gradient mx-auto rounded-full;
}

.badge {
    @apply px-4 py-2 rounded-full text-sm;
}

.badge.purple {
    @apply bg-purple-500/20 text-purple-400;
}

.badge.green {
    @apply bg-green-500/20 text-green-400;
}

.badge.blue {
    @apply bg-blue-500/20 text-blue-400;
}

.passion-card {
    @apply bg-white/5 backdrop-blur-xl rounded-xl p-6 text-center hover:bg-white/10 transition;
}

.passion-title {
    @apply text-base font-semibold text-white mb-2;
}

.passion-desc {
    @apply text-gray-300 text-xs;
}
</style>
