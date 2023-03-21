<script lang="ts" setup>
    import { IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin } from "@tabler/icons-vue";
</script>

<template>
    <div>
        <img 
            src="https://images.pexels.com/photos/8837522/pexels-photo-8837522.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" 
            alt="img" 
            class="object-cover w-full rounded-md mb-4">

        <div class="text-center space-y-2">
            <h2 class="card-title">Freddy Busy</h2>
            <p class="card-text">Project Manager</p>
            <div class="flex justify-center space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <IconBrandFacebook color="black" :size="20" stroke-width="1.5" />
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                    <IconBrandTwitter color="black" :size="20" stroke-width="1.5" />
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                    <IconBrandLinkedin color="black" :size="20" stroke-width="1.5" />
                </a>
            </div>
        </div>
    </div>
</template>