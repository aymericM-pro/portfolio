<template>
    <header class="navbar">
        <div class="nav-container">
            <!-- Brand -->
            <button class="nav-brand" @click="scrollTo('about')">
                <div class="brand-logo">AM</div>
                <span class="brand-name">Aymeric Maillot</span>
            </button>

            <!-- Desktop Menu -->
            <ul class="nav-links">
                <li v-for="item in navItems" :key="item.id">
                    <button
                        class="nav-link group"
                        @click="scrollTo(item.id)"
                    >
                        <span>{{ $t(item.labelKey) }}</span>

                        <span class="underline group-hover:w-full"></span>
                    </button>
                </li>
            </ul>

            <!-- Right Section -->
            <div class="right-section">
                <LanguageSelector />

                <!-- CV Desktop -->
                <button
                    class="cv-button hidden xl:flex"
                    @click="openCV"
                >
                    <span>{{ $t("nav.downloadCV") }}</span>
                </button>

                <!-- Burger -->
                <button
                    class="burger md:hidden"
                    @click="mobileOpen = !mobileOpen"
                >
                    <i :class="mobileOpen ? 'mdi mdi-close' : 'mdi mdi-menu'"></i>
                </button>
            </div>
        </div>

        <!-- MOBILE PANEL -->
        <div
            :class="mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'"
            class="mobile-panel"
        >
            <div class="mobile-content">
                <button
                    v-for="item in navItems"
                    :key="item.id"
                    class="mobile-link"
                    @click="handleMobileClick(item.id)"
                >
    <span class="icon-col">
        <i :class="getIcon(item.id)"></i>
    </span>

                    {{ $t(item.labelKey) }}
                </button>

                <div class="divider"></div>

                <button
                    class="mobile-cv"
                    @click="openCV"
                >
                    <i class="mdi mdi-file-download-outline"></i>
                    {{ $t("nav.downloadCV") }}
                </button>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import LanguageSelector from "@/components/LanguageSelector.vue";
import { NavItem } from "@/models/models";

const props = defineProps<{
    navItems: NavItem[];
    scrollTo: (id: string) => void;
}>();

const mobileOpen = ref(false);

const handleMobileClick = (id: string) => {
    props.scrollTo(id);
    mobileOpen.value = false;
};

const scrollTo = (id: string) => {
    props.scrollTo(id);
};

const iconMap: Record<string, string> = {
    about: "mdi mdi-account-outline",
    skills: "mdi mdi-code-tags",
    projects: "mdi mdi-briefcase-outline",
    contact: "mdi mdi-email-outline",
};

const getIcon = (id: string) => {
    return iconMap[id] || "mdi mdi-circle-small";
};

const openCV = () => {
    window.open("/MaillotAymeric.pdf", "_blank");
};
</script>

<style scoped>
.navbar {
    @apply fixed top-0 left-0 right-0 z-50
    bg-dark-primary/90 backdrop-blur-md
    border-b border-white/10 transition-all duration-300;
}

.nav-container {
    @apply max-w-7xl mx-auto px-6 h-16 flex items-center justify-between;
}

.nav-brand {
    @apply flex items-center gap-3;
}

.brand-logo {
    @apply w-10 h-10 bg-custom-gradient rounded-lg
    flex items-center justify-center text-white font-bold;
}

.brand-name {
    @apply text-white font-semibold text-lg;
}

/* Desktop */

.nav-links {
    @apply hidden md:flex items-center gap-10;
}

.nav-link {
    @apply relative flex items-center gap-2 text-gray-300
    transition-colors duration-200;
}

.nav-link:hover {
    @apply text-white;
}

.icon-col {
    width: 18px;
    display: flex;
    justify-content: center;
    opacity: 0.6;
}

.underline {
    @apply absolute left-0 -bottom-1 h-[2px] bg-white
    w-0 transition-all duration-200 rounded-full;
}

/* Right */

.right-section {
    @apply flex items-center gap-3;
}

.cv-button {
    @apply flex items-center gap-2 px-3 py-1.5
    rounded-lg text-sm font-medium
    bg-white/10 text-white
    hover:bg-white/20 transition-all duration-200;
}

.burger {
    @apply text-white text-2xl p-2 rounded-lg
    hover:bg-white/10 transition;
}

/* Mobile */

.mobile-panel {
    @apply md:hidden overflow-hidden
    transition-all duration-300 ease-in-out
    bg-dark-primary/95 backdrop-blur-md
    border-t border-white/10;
}

.mobile-content {
    @apply px-6 py-6 flex flex-col gap-3;
}

.mobile-link {
    @apply flex items-center gap-3
    px-3 py-2.5 rounded-lg
    text-white/80 text-sm font-medium
    transition-all duration-200;
}

.mobile-link:hover {
    @apply text-white bg-white/10;
}

.mobile-cv {
    @apply flex items-center gap-2
    px-3 py-2.5 rounded-lg
    text-sm font-medium text-white
    bg-white/10 hover:bg-white/20
    transition-all duration-200;
}

.divider {
    @apply border-t border-white/10 my-2;
}
</style>
