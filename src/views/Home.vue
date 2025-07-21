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
                    <a
                        v-for="item in navItems"
                        :key="item.id"
                        @click="scrollToSection(item.id)"
                        class="nav-link cursor-pointer"
                    >
                        {{ $t(item.labelKey) }}
                    </a>
                </div>

                <div class="flex items-center space-x-4">
                    <LanguageSelector />
                    <button
                        @click="openCV"
                        class="bg-white/10 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition-all duration-200"
                    >
                        {{ $t("nav.downloadCV") }}
                    </button>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <div class="section-wrapper">
            <HeroSection @cta-clicked="scrollToSection('projects')" />
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
                    {{ $t("footer.copyright") }}
                </p>
            </div>
        </footer>

        <!-- Scroll to Top Button -->
        <ScrollToTop />
    </div>
</template>

<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";
import { NavItem } from "@/models/models.ts";
import { ref } from "vue";

const navItems = ref<NavItem[]>([
    { id: "about", labelKey: "nav.about" },
    { id: "skills", labelKey: "nav.skills" },
    { id: "projects", labelKey: "nav.projects" },
    { id: "contact", labelKey: "nav.contact" },
]);

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

const openCV = () => {
    window.open("/MaillotAymeric.pdf", "_blank");
};
</script>

<style scoped>
.landing-page {
    @apply min-h-screen;
    background: linear-gradient(135deg, #0a0117 0%, #150b22 50%, #0a0117 100%);
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
</style>
