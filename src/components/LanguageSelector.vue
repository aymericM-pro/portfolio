<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const isOpen = ref(false);
const selectorRef = ref<HTMLElement>();

const languages = [
    { value: "fr", flag: "🇫🇷", code: "FR" },
    { value: "en", flag: "🇬🇧", code: "EN" },
];

const currentLocale = ref(locale.value);

const currentLanguage = computed(() => {
    return languages.find((lang) => lang.value === currentLocale.value) || languages[0];
});

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const selectLanguage = (language: (typeof languages)[0]) => {
    currentLocale.value = language.value;
    locale.value = language.value;
    isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
    if (selectorRef.value && !selectorRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
});

defineExpose({ selectLanguage, currentLocale, isOpen });
</script>

<template>
    <div ref="selectorRef" class="language-selector">
        <button class="language-button" @click="toggleDropdown">
            <span class="flag">{{ currentLanguage.flag }}</span>
            <span class="code">{{ currentLanguage.code }}</span>
            <svg
                :class="{ rotate: isOpen }"
                class="chevron"
                fill="none"
                height="12"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="12"
            >
                <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
        </button>

        <div v-if="isOpen" class="dropdown">
            <button
                v-for="language in languages"
                :key="language.value"
                :class="{ selected: language.value === currentLocale }"
                class="dropdown-option"
                @click="selectLanguage(language)"
            >
                <span class="flag">{{ language.flag }}</span>
                <span class="code">{{ language.code }}</span>
            </button>
        </div>
    </div>
</template>

<style scoped>
.language-selector {
    @apply relative;
}

.language-button {
    @apply flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-200;
    min-width: 70px;
}

.flag {
    @apply text-sm;
}

.code {
    @apply text-sm font-medium;
}

.chevron {
    @apply transition-transform duration-200;
}

.chevron.rotate {
    @apply rotate-180;
}

.dropdown {
    @apply absolute top-full right-0 mt-1 bg-white/10 backdrop-blur-xl rounded-lg overflow-hidden z-50;
    min-width: 70px;
}

.dropdown-option {
    @apply w-full flex items-center space-x-2 px-3 py-2 text-white hover:bg-white/20 transition-colors duration-200;
}

.dropdown-option.selected {
    @apply bg-white/20;
}
</style>
