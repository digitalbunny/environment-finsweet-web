<script lang="ts" setup>
</script>

<template>
    <div class="bg-tertiary-green py-12 md:py-32">
        <div class="container grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-32">
            <section>
                <WidgetHeading 
                    caption="Donate"
                    title="Make donation for nature."
                    class="mb-10" />

                <div class="md:pl-14 xl:pl-20 space-y-6">
                    <p class="card-text">
                        When you donate, you're supporting effective solutions to big environmental 
                        challenges -an investiment in the future of our planet
                    </p>

                    <NuxtLink to="/donate" class="inline-block px-4 py-3 md:px-10 bg-primary-green font-medium text-white text-xs md:text-sm rounded-md">
                        Donate now
                    </NuxtLink>
                </div>
            </section>

            <img 
                src="https://images.pexels.com/photos/6591164/pexels-photo-6591164.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" 
                alt="img" 
                class="ml-auto object-cover rounded-md">
        </div>
    </div>
    <div class="container py-12 md:py-32 space-y-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
            <h2 class="main-heading">
                How we use your donation
            </h2>

            <p class="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus vitae harum facilis libero. 
                Placeat, quo expedita. Rem, dicta. Unde animi libero corrupti repudiandae fuga corporis 
                dignissimos expedita accusamus rem natus?
            </p>

            <p class="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus vitae harum facilis libero. 
                Placeat, quo expedita. Rem, dicta. Unde animi libero corrupti repudiandae fuga corporis 
                dignissimos expedita accusamus rem natus?
            </p>
        </div>

        <WidgetJumbotron />
    </div>
</template>