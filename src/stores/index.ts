import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMainStore = defineStore("main", () => {
    const title = ref("Bienvenue");
    const isLoading = ref(false);

    const formattedTitle = computed(() => {
        return title.value.toUpperCase();
    });

    const setTitle = (newTitle: string) => {
        title.value = newTitle;
    };

    const setLoading = (loading: boolean) => {
        isLoading.value = loading;
    };

    return {
        title,
        isLoading,
        formattedTitle,
        setTitle,
        setLoading,
    };
});
