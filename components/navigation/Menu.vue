<script lang="ts" setup>
    import { ref } from "vue"
    import { IconMenu2, IconX } from "@tabler/icons-vue"

    const router = useRoute();
    const show = ref<boolean>(false);
    const links = ref<Array<{name: string, route: string}>>([
        { name: "Home", route: "/"},
        { name: "About us", route: "/about"},
        { name: "What we do", route: "/what-we-do"},
        { name: "Media", route: "/news"},
        { name: "Contact", route: "/contact"},
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

                <NuxtLink to="/donate" class="px-6 py-2 md:px-10 text-white bg-mirage rounded-md">
                    Donate
                </NuxtLink>
            </div>

            <div class="md:hidden py-2">
                <button @click="show=true">
                    <IconMenu2 :size="20" />
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <Transition 
            name="mobile-sidebar-transition"
            enter-active-class="transition-transform duration-300 ease-linear origin-right"
            enter-from-class="scale-x-0"
            enter-to-class="scale-x-100"
            
            leave-active-class="transition-transform duration-300 ease-linear origin-right"
            leave-from-class="scale-x-100"
            leave-to-class="scale-x-0">

            <div class="fixed right-0 inset-y-0 w-60 z-20 bg-mirage" v-if="show">
                <div class="flex justify-end py-4 px-2">
                    <button class="text-white px-4 py-2" @click="show=false">
                        <IconX :size="20" />
                    </button>
                </div>

                <div class="flex flex-col font-medium text-xs uppercase">
                    <NuxtLink 
                        :to="link.route"
                        class="p-4 text-white hover:text-white" 
                        :class="[router.path == link.route ? ' bg-primary-green' : '']" 
                        v-for="link in links" 
                        :key="link.name"
                        @click="show = false">
                        {{ link.name }}
                    </NuxtLink>
                </div>

            </div>
        </Transition>
    </nav>
</template>