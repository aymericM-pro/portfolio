<script lang="ts" setup>
import { ref } from "vue";
import type { Project } from "@/models/models";

const projects = ref<Project[]>([
    {
        id: "greencircle",
        emoji: "♻️",
        titleKey: "projects.greencircle.title",
        descKey: "projects.greencircle.description",
        tags: [
            { labelKey: "projects.tags.entrepreneurial", class: "context" },
            { label: "Vue.js", class: "tech" },
            { label: "Java", class: "tech" },
            { label: "Spring Boot", class: "tech" },
            { label: "Keycloak", class: "tech" },
            { label: "Kubernetes", class: "tech" },
            { label: "ArgoCD", class: "tech" },
        ],
        links: [{ type: "code" }, { type: "demo" }, { type: "deploy" }],
    },
    {
        id: "perseus",
        emoji: "🚀",
        titleKey: "projects.perseus.title",
        descKey: "projects.perseus.description",
        tags: [
            { labelKey: "projects.tags.study", class: "context" },
            { labelKey: "projects.tags.team5", class: "context" },
            { label: "Python", class: "tech" },
            { label: "Raspberry Pi", class: "tech" },
            { label: "Traitement vidéo", class: "tech" },
        ],
        links: [{ type: "code" }],
    },
    {
        id: "noe",
        emoji: "📋",
        titleKey: "projects.noe.title",
        descKey: "projects.noe.description",
        tags: [
            { labelKey: "projects.tags.team20", class: "context" },
            { label: "Angular", class: "tech" },
            { label: "Kotlin", class: "tech" },
            { label: "Spring Boot", class: "tech" },
            { label: "PostgreSQL", class: "tech" },
            { label: "Firebase", class: "tech" },
            { label: "Figma", class: "tech" },
            { label: "Segment", class: "tech" },
            { label: "Intercom", class: "tech" },
        ],
    },
    {
        id: "tmdb",
        emoji: "🎬",
        titleKey: "projects.tmdb.title",
        descKey: "projects.tmdb.description",
        tags: [
            { labelKey: "projects.tags.personal", class: "context" },
            { label: "Vue.js", class: "tech" },
            { label: "Java", class: "tech" },
            { label: "Spring Boot", class: "tech" },
            { label: "Pinia", class: "tech" },
            { label: "Tailwind", class: "tech" },
            { label: "PostgreSQL", class: "tech" },
        ],
        links: [{ type: "code" }, { type: "deploy" }],
    },
    {
        id: "smartlanguage",
        emoji: "🎧",
        titleKey: "projects.smartlanguage.title",
        descKey: "projects.smartlanguage.description",
        tags: [
            { labelKey: "projects.tags.personal", class: "context" },
            { label: "Python", class: "tech" },
            { label: "Express", class: "tech" },
            { label: "TypeScript", class: "tech" },
            { label: "Cloud Run", class: "tech" },
            { label: "Supabase", class: "tech" },
            { label: "Vue.js", class: "tech" },
        ],
        links: [{ type: "demo" }],
    },
    {
        id: "football-api",
        emoji: "⚽",
        titleKey: "projects.football.title",
        descKey: "projects.football.description",
        tags: [
            { labelKey: "projects.tags.personal", class: "context" },
            { label: "Vue.js", class: "tech" },
            { label: "TypeScript", class: "tech" },
            { label: "Java", class: "tech" },
            { label: "Spring Boot", class: "tech" },
            { label: "PostgreSQL", class: "tech" },
            { label: "Hexagonal Architecture", class: "tech" },
        ],
        links: [{ type: "code" }],
    },
]);
</script>

<template>
    <section id="projects" class="projects-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">{{ $t("projects.title") }}</h2>
                <div class="section-divider"></div>
                <p class="section-subtitle">
                    {{ $t("projects.subtitle") }}
                </p>
            </div>


            <div class="projects-grid">
                <article
                    v-for="project in projects"
                    :key="project.id"
                    class="project-card"
                >
                    <!-- HEADER -->
                    <header class="project-header">
                        <div class="title-row">
                            <span class="emoji">{{ project.emoji }}</span>
                            <h3 class="project-title">
                                {{ $t(project.titleKey) }}
                            </h3>
                        </div>

                        <!-- CONTEXT TAGS (i18n) -->
                        <div class="project-context">
                            <span
                                v-for="(tag, i) in project.tags.filter(t => t.class === 'context')"
                                :key="i"
                                class="tag context"
                            >
                                {{ $t(tag.labelKey!) }}
                            </span>
                        </div>
                    </header>

                    <!-- DESCRIPTION -->
                    <p class="project-description">
                        {{ $t(project.descKey) }}
                    </p>

                    <!-- TECH STACK (texte brut) -->
                    <div class="project-techs">
                        <span
                            v-for="(tag, i) in project.tags.filter(t => t.class === 'tech')"
                            :key="i"
                            class="tag tech"
                        >
                            {{ tag.label }}
                        </span>
                    </div>

                    <!-- ACTIONS -->
                    <div
                        v-if="project.links?.length"
                        class="project-actions"
                    >
                        <button
                            v-for="(link, i) in project.links"
                            :key="i"
                            class="btn"
                        >
                            {{
                                link.type === "code"
                                    ? "Code"
                                    : link.type === "deploy"
                                        ? "Site"
                                        : "Démo"
                            }}
                        </button>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.projects-section {
    @apply py-20 px-6;
}

.container {
    @apply max-w-6xl mx-auto;
}

.section-header {
    @apply text-center mb-10;
}

.section-title {
    @apply text-3xl md:text-4xl font-bold text-white mb-4;
}

.section-divider {
    @apply w-24 h-1 bg-custom-gradient mx-auto rounded-full mb-4;
}

.section-subtitle {
    @apply text-gray-400 text-sm;
}

.projects-grid {
    @apply grid gap-4 md:grid-cols-2;
}

.project-card {
    @apply border border-white/10 rounded-md p-4
    bg-white/5 hover:bg-white/10;
}

.project-header {
    @apply flex justify-between items-start mb-2;
}

.title-row {
    @apply flex items-center gap-2;
}

.project-title {
    @apply text-base font-semibold text-white;
}

.project-description {
    @apply text-gray-300 text-sm leading-snug mb-2;
}

/* CONTEXT TAGS */
.project-context .tag.context {
    @apply mr-2 mb-1 text-[11px] px-2 py-0.5
    rounded bg-white/10 text-gray-300;
}

/* TECH TAGS */
.project-techs {
    @apply flex flex-wrap gap-1 mb-3;
}

.tag.tech {
    @apply text-[11px] px-2 py-0.5 rounded
    bg-indigo-500/20 text-indigo-300;
}

/* ACTIONS */
.project-actions {
    @apply flex gap-2;
}

.btn {
    @apply text-xs px-2.5 py-1 border border-white/20
    rounded text-white hover:bg-white/10;
}
</style>
