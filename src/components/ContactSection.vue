<script lang="ts" setup>
import { ref } from "vue";
import type { ContactItem } from "@/models/models";

const contactItems = ref<ContactItem[]>([
    {
        id: "email",
        icon: "email",
        labelKey: "contact.email",
        value: "aymeric.maillot@efrei.net",
    },
    {
        id: "linkedin",
        icon: "linkedin",
        labelKey: "contact.linkedin",
        value: "aymeric-maillot",
        href: "https://www.linkedin.com/in/aymeric-maillot-8638721b7/",
    },
    {
        id: "github",
        icon: "github",
        labelKey: "contact.github",
        value: "aymericM-pro",
        href: "https://github.com/aymericM-pro",
    },
]);
</script>

<template>
    <section id="contact" class="h-screen flex items-center py-24 px-6 relative">
        <div class="max-w-4xl mx-auto w-full text-center">
            <!-- HEADER -->
            <div class="section-header">
                <h2 class="section-title">{{ $t("contact.title") }}</h2>
                <div class="section-divider"></div>
                <p class="section-subtitle">{{ $t("contact.subtitle") }}</p>
            </div>

            <div class="contact-info">
                <component
                    :is="item.href ? 'a' : 'div'"
                    v-for="item in contactItems"
                    :key="item.id"
                    :href="item.href"
                    class="contact-item group"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <div class="contact-icon">
                        <!-- EMAIL -->
                        <svg
                            v-if="item.icon === 'email'"
                            class="icon"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5Z"
                                fill="currentColor"
                            />
                        </svg>

                        <!-- LINKEDIN -->
                        <svg
                            v-else-if="item.icon === 'linkedin'"
                            class="icon"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-9.75 6H6.5V17h2.75V9Zm7.25 0h-2.6v1.1c.37-.66 1.25-1.35 2.57-1.35 2.75 0 3.25 1.8 3.25 4.15V17h-2.75v-3.2c0-.9-.02-2.05-1.25-2.05s-1.45.98-1.45 1.98V17h-2.75V9h2.6v1.1ZM7.88 5.5A1.38 1.38 0 1 0 7.9 8.25a1.38 1.38 0 0 0-.02-2.75Z"
                                fill="currentColor"
                            />
                        </svg>

                        <!-- GITHUB -->
                        <svg
                            v-else
                            class="icon"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>

                    <h3>{{ $t(item.labelKey) }}</h3>
                    <p>{{ item.value }}</p>
                </component>
            </div>
        </div>
    </section>
</template>


<style scoped>
.section-header {
    @apply mb-16;
}

.section-title {
    @apply text-5xl font-bold text-white mb-6;
}

.section-divider {
    @apply w-24 h-1 bg-custom-gradient mx-auto rounded-full mb-6;
}

.section-subtitle {
    @apply text-gray-400 text-sm;
}

.contact-info {
    @apply bg-white/5 backdrop-blur-xl rounded-3xl p-8
    grid md:grid-cols-3 gap-8;
}

/* Carte */
.contact-item {
    @apply text-center rounded-2xl px-4 py-6
    transition-all duration-300
    hover:bg-white/5 hover:-translate-y-1;
}

/* Icône */
.contact-icon {
    @apply w-14 h-14 bg-white/10
    rounded-2xl flex items-center justify-center
    mx-auto mb-4
    transition-all duration-300
    group-hover:bg-custom-gradient;
}

.icon {
    @apply w-6 h-6 text-white transition-transform duration-300
    group-hover:scale-110;
}

.contact-item h3 {
    @apply text-white font-semibold text-sm mb-1;
}

.contact-item p {
    @apply text-gray-400 text-sm break-all;
}

a.contact-item {
    @apply cursor-pointer;
}

</style>
