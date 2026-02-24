<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { marked } from "marked";

const route = useRoute();
const router = useRouter();

const projectId = computed(() => route.params.id as string);
const markdownContent = ref("");
const isLoading = ref(true);
const notFound = ref(false);

// Config Markdown (GFM pour tables)
marked.setOptions({
    gfm: true,
    breaks: false,
});

const mdModules = import.meta.glob("@/content/projects/*.md", {
    query: "?raw",
    import: "default",
});

onMounted(async () => {
    const key = `/src/content/projects/${projectId.value}.md`;
    const loader = mdModules[key];

    if (!loader) {
        notFound.value = true;
        isLoading.value = false;
        return;
    }

    try {
        markdownContent.value = (await loader()) as string;
    } catch {
        notFound.value = true;
    } finally {
        isLoading.value = false;
    }
});

// Version SYNCHRONE (marche avec marked@9)
const parsedHtml = computed(() => {
    if (!markdownContent.value) return "";
    return marked.parse(markdownContent.value);
});

const goBack = () => {
    router.push("/");
};
</script>

<template>
    <div class="project-detail-page">

        <!-- Background -->
        <div class="bg-blobs">
            <div class="blob blob-1" />
            <div class="blob blob-2" />
        </div>

        <!-- Navbar simple -->
        <nav class="detail-nav">
            <button class="back-btn" @click="goBack">
                <svg fill="none" height="18" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="18">
                    <polyline points="15,18 9,12 15,6" />
                </svg>
                <span>Retour</span>
            </button>
            <div class="nav-brand">
                <div class="brand-logo">AM</div>
                <span class="brand-name">Aymeric Maillot</span>
            </div>
        </nav>

        <!-- Loading -->
        <div v-if="isLoading" class="state-center">
            <div class="spinner" />
        </div>

        <!-- Not found -->
        <div v-else-if="notFound" class="state-center">
            <p class="text-gray-400 text-lg">Projet introuvable.</p>
            <button class="back-btn mt-6" @click="goBack">← Retour</button>
        </div>

        <!-- Content -->
        <main v-else class="detail-main">
            <article class="md-article" v-html="parsedHtml" />
        </main>
    </div>
</template>

<style scoped>
.project-detail-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #0a0117 0%, #150b22 50%, #0a0117 100%);
    position: relative;
    overflow-x: hidden;
}

/* Background blobs */
.bg-blobs {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
}

.blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
}

.blob-1 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(180, 124, 246, 0.08) 0%, transparent 70%);
    top: 10%;
    right: -100px;
}

.blob-2 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(254, 140, 175, 0.06) 0%, transparent 70%);
    bottom: 20%;
    left: -80px;
}

/* Nav */
.detail-nav {
    position: sticky;
    top: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background: rgba(10, 1, 23, 0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.back-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #b47cf6;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.2s;
    background: rgba(180, 124, 246, 0.08);
    border: 1px solid rgba(180, 124, 246, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
}

.back-btn:hover {
    background: rgba(180, 124, 246, 0.15);
    transform: translateX(-2px);
}

.nav-brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.brand-logo {
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, #b47cf6, #fe8caf);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 0.9rem;
}

.brand-name {
    color: white;
    font-weight: 600;
}

/* States */
.state-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(180, 124, 246, 0.2);
    border-top-color: #b47cf6;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

/* Main content */
.detail-main {
    position: relative;
    z-index: 1;
    max-width: 860px;
    margin: 0 auto;
    padding: 3rem 2rem 6rem;
}

/* Container */
.md-article {
    color: #e6e9f2;
    line-height: 1.8;
    font-size: 1.05rem;
}

/* Headings */

.md-article :deep(h1) {
    font-size: 2.6rem;
    font-weight: 800;
    margin: 3rem 0 1.5rem;
    letter-spacing: -0.5px;
    background: linear-gradient(135deg, #b47cf6, #fe8caf);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.md-article :deep(h2) {
    font-size: 1.7rem;
    font-weight: 700;
    margin: 3rem 0 1.2rem;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid rgba(180, 124, 246, 0.25);
}

.md-article :deep(h3) {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 2rem 0 1rem;
    color: #c4b5fd;
}

/* Paragraphs */

.md-article :deep(p) {
    margin-bottom: 1.2rem;
    color: #cfd3ff;
}

.md-article :deep(ul) {
    margin: 1.8rem 0 2rem 0;
    padding: 0;
    list-style: none;
}

.md-article :deep(li) {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    line-height: 1.9;
    color: #e2e6ff;
    transition: transform 0.2s ease, color 0.2s ease;
}

/* Bullet */
.md-article :deep(li::before) {
    content: "";
    position: absolute;
    left: 0;
    top: 0.65rem;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: linear-gradient(135deg, #b47cf6, #fe8caf);
    box-shadow: 0 0 10px rgba(180, 124, 246, 0.7);
    transition: transform 0.2s ease;
}

.md-article :deep(hr) {
    margin: 2.5rem 0;
    border: none;
    height: 1px;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(180, 124, 246, 0.4),
        transparent
    );
}

/* ========================= */
/* TABLE STYLING PRO */
/* ========================= */

.md-article :deep(table) {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 2rem 0;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 14px;
    overflow: hidden;
    backdrop-filter: blur(6px);
}

/* Header */

.md-article :deep(thead) {
    background: linear-gradient(
        135deg,
        rgba(180, 124, 246, 0.25),
        rgba(254, 140, 175, 0.15)
    );
}

.md-article :deep(th) {
    padding: 1rem;
    text-align: center;
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    color: #ffffff;
}

/* Body */

.md-article :deep(td) {
    padding: 1rem;
    text-align: center;
    color: #d8dcff;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

/* Row hover */

.md-article :deep(tbody tr) {
    transition: background 0.25s ease;
}

.md-article :deep(tbody tr:hover) {
    background: rgba(180, 124, 246, 0.08);
}

/* First column slightly stronger */

.md-article :deep(tbody td:first-child) {
    font-weight: 500;
    color: #ffffff;
}

/* Code */

.md-article :deep(code) {
    font-family: "JetBrains Mono", monospace;
    background: rgba(180, 124, 246, 0.15);
    padding: 0.2rem 0.5rem;
    border-radius: 6px;
    font-size: 0.85em;
}

.md-article :deep(pre) {
    background: rgba(0, 0, 0, 0.45);
    border-radius: 14px;
    padding: 1.5rem;
    margin: 2rem 0;
    overflow-x: auto;
}
</style>
