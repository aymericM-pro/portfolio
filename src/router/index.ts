import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue"),
    },
    {
        path: "/projects/:id",
        name: "project-detail",
        component: () => import("@/views/ProjectDetail.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/",
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
