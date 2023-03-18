<template>
    <div 
        class="bg-cover bg-scroll bg-no-repeat bg-center bg-black/50 bg-blend-overlay py-12 md:py-32 px-4 text-center text-white rounded-md" 
        :style="{'background-image': `url(${'https://images.pexels.com/photos/6135900/pexels-photo-6135900.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'})`}">

        <h2 class="font-bold line-heading max-w-md md:max-w-lg mx-auto mb-4">
            You can contribute to make the environment greener
        </h2>

        <div class="flex justify-center space-x-4">
            <NuxtLink to="/volunteer" class="px-4 py-3 md:px-10 bg-primary-green font-medium text-white text-xs md:text-sm rounded-md">
                Join as a volunteer
            </NuxtLink>

            <NuxtLink to="/donate" class="px-4 py-3 md:px-10 bg-white font-medium text-zinc-800 text-xs md:text-sm rounded-md">
                Donate
            </NuxtLink>
        </div>
    </div>
</template>