<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from "vue";

interface Props {
    items: any[];
}

const props = defineProps<Props>();

const currentIndex = ref(0);
const screenWidth = ref(window.innerWidth);

let resizeTimer: ReturnType<typeof setTimeout> | null = null;

const updateScreen = () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        screenWidth.value = window.innerWidth;
    }, 150);
};

onMounted(() => {
    window.addEventListener("resize", updateScreen);
});

onUnmounted(() => {
    window.removeEventListener("resize", updateScreen);
    if (resizeTimer) clearTimeout(resizeTimer);
});

const itemsPerPage = computed(() => {
    if (screenWidth.value < 768) return 1;
    if (screenWidth.value < 1024) return 2;
    return 6;
});

const totalGroups = computed(() => Math.ceil(props.items.length / itemsPerPage.value));

const visibleItems = computed(() => {
    const start = currentIndex.value * itemsPerPage.value;
    return props.items.slice(start, start + itemsPerPage.value);
});

const nextSlide = () => {
    currentIndex.value =
        currentIndex.value + 1 >= totalGroups.value ? 0 : currentIndex.value + 1;
};

const prevSlide = () => {
    currentIndex.value =
        currentIndex.value - 1 < 0 ? totalGroups.value - 1 : currentIndex.value - 1;
};

const goToDotGroup = (index: number) => {
    currentIndex.value = index;
};
</script>

<template>
    <div class="w-full">
        <!-- GRID : 1 col mobile / 2 col tablette / 2 col desktop (3 lignes × 2) -->
        <div
            :class="[
                'gap-4',
                itemsPerPage === 1
                    ? 'grid grid-cols-1'
                    : 'grid grid-cols-2',
            ]"
        >
            <slot
                v-for="(item, index) in visibleItems"
                :key="index"
                :item="item"
            />
        </div>

        <!-- CONTROLS -->
        <div class="flex flex-col items-center mt-10">
            <div class="flex items-center justify-center gap-8">
                <!-- Arrow Left -->
                <button
                    class="w-[50px] h-[50px] bg-white/5 border-2 border-[#B47CF6] rounded-full flex items-center justify-center text-[#B47CF6] transition-all duration-300 shadow hover:bg-[#B47CF6] hover:text-white hover:scale-110 text-2xl leading-none"
                    @click="prevSlide"
                >
                    ‹
                </button>

                <!-- DOTS -->
                <div class="flex gap-2 items-center">
                    <button
                        v-for="i in totalGroups"
                        :key="i"
                        :class="
                            i - 1 === currentIndex
                                ? 'bg-[#B47CF6] scale-125 shadow-[0_0_0_3px_rgba(180,124,246,0.3)]'
                                : 'bg-white/20 hover:bg-[#B47CF6]'
                        "
                        class="w-[12px] h-[12px] rounded-full transition-all duration-300"
                        @click="goToDotGroup(i - 1)"
                    />
                </div>

                <!-- Arrow Right -->
                <button
                    class="w-[50px] h-[50px] bg-white/5 border-2 border-[#B47CF6] rounded-full flex items-center justify-center text-[#B47CF6] transition-all duration-300 shadow hover:bg-[#B47CF6] hover:text-white hover:scale-110 text-2xl leading-none"
                    @click="nextSlide"
                >
                    ›
                </button>
            </div>

            <!-- COUNTER -->
            <div class="mt-4 text-[0.9rem] text-gray-400 font-medium">
                {{ currentIndex + 1 }} / {{ totalGroups }}
            </div>
        </div>
    </div>
</template>
