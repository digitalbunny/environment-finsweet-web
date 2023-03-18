<script lang="ts" setup>
    const props = defineProps<{
        year: string,
        title: string,
        description: string
    }>();
</script>

<template>
    <div>
        <img src="~/assets/icons/award-symbol.png" alt="img" class="object-cover mx-auto w-24 h-auto mb-4">

        <div class="text-center space-y-1">
            <h2 class="card-title">{{ props.year }}</h2>
            <h2 class="text-xs md:text-sm lg:text-base font-semibold">{{ props.title }}</h2>
            <h4 class="card-caption text-zinc-400 font-medium uppercase">
                {{ props.description  }}
            </h4>
        </div>
    </div>
</template>