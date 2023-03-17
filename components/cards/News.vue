<script lang="ts" setup>
    const props = defineProps<{
        image: string,
        title: string,
        description: string
    }>();
</script>

<template>
    <div>
        <img 
            :src="props.image" 
            alt="img"
            class="object-cover w-full rounded-md mb-4">

        <h2 class="card-title mb-2">{{ props.title }}</h2>

        <p class="card-text line-clamp-3">{{ props.description }}</p>
    </div>
</template>