<script lang="ts" setup>
import { ref } from "vue";
import type { Project } from "@/models/models";
import AppCaroussel from "@/components/design-system/AppCaroussel.component.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const projects = ref<Project[]>([
    {
        id: "greencircle",
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
        titleKey: "projects.smartlanguage.md.title",
        descKey: "projects.smartlanguage.md.description",
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

const goToProject = (id: string) => {
    router.push(`/projects/${id}`);
};

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

            <AppCaroussel :items="projects">
                <template #default="{ item }">
                    <article class="project-card" @click="goToProject(item.id)">
                        <header class="project-header">
                            <div class="title-row">
                                <h3 class="project-title">
                                    {{ $t(item.titleKey) }}
                                </h3>
                            </div>

                            <div class="project-context">
                                <span
                                    v-for="(tag, i) in item.tags.filter(
                                        (t: any) => t.class === 'context',
                                    )"
                                    :key="i"
                                    class="tag context"
                                    @click="goToProject(item.id)"
                                >
                                    {{ $t(tag.labelKey!) }}
                                </span>
                            </div>
                        </header>

                        <p class="project-description">
                            {{ $t(item.descKey) }}
                        </p>

                        <div class="project-techs">
                            <span
                                v-for="(tag, i) in item.tags.filter(
                                    (t: any) => t.class === 'tech',
                                )"
                                :key="i"
                                class="tag tech"
                            >
                                {{ tag.label }}
                            </span>
                        </div>
                        
                        <div v-if="item.links?.length" class="project-actions">
                            <div class="project-actions">
                                <button
                                    class="btn"
                                    @click.stop="goToProject(item.id)"
                                >
                                    Voir plus
                                </button>
                            </div>
                        </div>
                    </article>
                </template>
            </AppCaroussel>
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

.project-card {
    @apply border border-white/10 rounded-md p-4
    bg-white/5 hover:bg-white/10 transition-colors duration-200
    flex flex-col h-full;
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
    @apply text-gray-300 text-sm leading-snug mb-2 flex-1;
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
    @apply flex gap-2 mt-auto;
}

.btn {
    @apply text-xs px-2.5 py-1 border border-white/20
    rounded text-white hover:bg-white/10;
}
</style>
