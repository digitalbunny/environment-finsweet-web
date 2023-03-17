<script lang="ts" setup>
    const props = defineProps<{
        title: string,
        description?: string
        image: string
    }>();
</script>

<template>
    <figure 
        class="relative p-6 md:py-12 md:px-10 bg-no-repeat bg-center bg-cover bg-blend-overlay bg-black/70 text-white rounded-md"
        :style="{'background-image': `url(${props.image})`}">
        <figcaption class="flex flex-col space-y-4">
            <div class="space-y-2 mb-10">
                <h2 class="font-bold ms:text-lg md:text-xl xl:text-2xl">
                    {{ props.title }}
                </h2>
                <p class="text-xs md:text-sm xl:text-base font-light line-clamp-3">
                    {{ props.description }}
                </p>
            </div>

            <button class="px-4 py-3 max-w-max bg-white font-medium text-black text-xs md:text-sm rounded-md">
                See more
            </button>
        </figcaption>
    </figure>
</template>