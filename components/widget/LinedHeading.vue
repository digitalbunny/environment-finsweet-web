<script lang="ts" setup>
    const props = defineProps<{
        title: string
    }>();
</script>


<template>
    <div class="flex justify-start items-center space-x-4">
        <h2 class="line-heading">
            {{ props.title }}
        </h2>
        <div class="grow h-px bg-zinc-200"></div>
    </div>
</template>