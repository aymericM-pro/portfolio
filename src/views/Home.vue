<script lang="ts" setup>
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";
import AppHeader from "@/components/design-system/AppHeader.vue";
import { NavItem } from "@/models/models";
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
</script>

<template>
    <div class="landing-page">
        <!-- Header -->
        <AppHeader
            :nav-items="navItems"
            :scroll-to="scrollToSection"
        />

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

        <ScrollToTop />
    </div>
</template>

<style scoped>
.landing-page {
    @apply min-h-screen;
    background: linear-gradient(135deg, #0a0117 0%, #150b22 50%, #0a0117 100%);
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
