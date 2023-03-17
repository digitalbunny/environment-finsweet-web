<script lang="ts" setup>
    const props = defineProps<{
        caption: string,
        title: string
    }>();
</script>

<template>
    <div>
        <div class="flex justify-start items-center space-x-4 mb-4">
            <div class="w-[10%] h-px bg-zinc-800"></div>
            <h2 class="text-xs md:text-sm xl:text-base font-medium uppercase">
                {{ props.caption }}
            </h2>
        </div>

        <div class="flex justify-start md:space-x-4">
            <div class="hidden md:block md:w-[10%] h-full"></div>
            <div class="w-full md:w-[90%]">
                <h2 class="font-bold text-2xl md:text-4xl xl:text-5xl leading-8 text-left">
                    {{ props.title }}
                </h2>
            </div>
        </div>
    </div>
</template>