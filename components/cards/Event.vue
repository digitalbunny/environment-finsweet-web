<script lang="ts" setup>
    const props = defineProps<{
        date: string
        title: string
    }>();
</script>

<template>
    <div class="bg-secondary-green py-8 px-6 flex flex-wrap md:flex-nowrap items-start space-y-4 md:space-y-0 md:space-x-10 rounded-md">
        <section class="w-auto md:w-12">
            <h2 class="font-semibold text-3xl md:text-4xl xl:text-5xl">23</h2>
            <div class="font-medium text-xs md:text-sm xl:text-base">SEP</div>
        </section>

        <section class="grow flex justify-between items-center space-x-4">
            <div class="space-y-2">
                <div class="flex items-center">
                    <h2 class="text-xs md:text-sm xl:text-base font-medium uppercase pr-4">Next event</h2>
                    <div class="w-12 h-px bg-black"></div>
                </div>

                <h2 class="font-bold text-lg md:text-xl xl:text-2xl">{{ props.title }}</h2>
            </div>

            <div class="flex justify-center items-center p-2 md:p-4 bg-white rounded-full">
                <svg class="w-3 h-3 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </div>
        </section>
    </div>
</template>