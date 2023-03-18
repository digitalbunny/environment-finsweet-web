<script lang="ts" setup>
    import { ref } from "vue"

    const router = useRoute();
    const links = ref<Array<{name: string, route: string}>>([
        { name: "Home", route: "/"},
        { name: "About us", route: "/about"},
        { name: "What we do", route: "/what-we-do"},
        { name: "Media", route: "/media"},
        { name: "Media", route: "/contact"},
    ]);
</script>

<template>
    <nav class="bg-white py-3">
        <div class="container flex flex-nowrap justify-between items-center">
            <h2 class="text-2xl font-bold">{ Finsweet</h2>

            <div class="hidden md:flex items-center space-x-4 lg:space-x-10">
                <ul class="flex text-zinc-500">
                    <li 
                        class="px-4 hover:text-black" 
                        :class="[router.path == link.route ? 'text-black' : '']" 
                        v-for="link in links" 
                        :key="link.name">
                        <NuxtLink :to="link.route">
                            {{ link.name }}
                        </NuxtLink>
                    </li>
                </ul>

                <button class="px-6 py-2 md:px-10 text-white bg-mirage rounded-md">
                    Donate
                </button>
            </div>
        </div>
    </nav>
</template>