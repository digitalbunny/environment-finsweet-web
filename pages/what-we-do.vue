<script lang="ts" setup>
    import { IconBuildingSkyscraper, IconRipple, IconPlant, IconDroplet, IconDog, IconLeaf } from "@tabler/icons-vue"
</script>


<template>
    <div class="container py-12 md:py-32">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-32">
            <section>
                <WidgetHeading 
                caption="What we do"
                title="We are working worldwide"
                class="mb-4 md:mb-10" />

                <p class="text-xs md:text-sm xl:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, ullam officiis distinctio perspiciatis 
                    nihil non earum voluptate blanditiis fuga tempore temporibus assumenda, quos molestiae quisquam nulla esse, 
                    reiciendis mollitia nemo!
                </p>
            </section>

            <img 
                src="https://images.pexels.com/photos/9037222/pexels-photo-9037222.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" 
                alt="img" 
                class="ml-auto object-cover rounded-md">
        </div>
    </div>

    <!-- What we do for the environment -->
    <div class="bg-tertiary-green py-12 md:py-32">
        <div class="container">
            <h2 class="main-heading mb-4 md:mb-10">
                Wha we do for the environment
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-20">
                <section class="flex items-start">
                    <div class="flex justify-center items-center bg-primary-green text-tertiary-green p-2 mr-6 rounded-md">
                        <IconBuildingSkyscraper :size="20" />
                    </div>

                    <div>
                        <h2 class="card-title text-zinc-800 capitalize mb-2">
                            Building healthy cities
                        </h2>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                        </p>
                    </div>
                </section>

                <section class="flex items-start">
                    <div class="flex justify-center items-center bg-primary-green text-tertiary-green p-2 mr-6 rounded-md">
                        <IconRipple :size="20" />
                    </div>

                    <div>
                        <h2 class="card-title text-zinc-800 capitalize mb-2">
                            Protect land and water
                        </h2>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                        </p>
                    </div>
                </section>

                <section class="flex items-start">
                    <div class="flex justify-center items-center bg-primary-green text-tertiary-green p-2 mr-6 rounded-md">
                        <IconPlant :size="20" />
                    </div>

                    <div>
                        <h2 class="card-title text-zinc-800 capitalize mb-2">
                            Tree plantation
                        </h2>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                        </p>
                    </div>
                </section>

                <section class="flex items-start">
                    <div class="flex justify-center items-center bg-primary-green text-tertiary-green p-2 mr-6 rounded-md">
                        <IconDroplet :size="20" />
                    </div>

                    <div>
                        <h2 class="card-title text-zinc-800 capitalize mb-2">
                            Water sustainability
                        </h2>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                        </p>
                    </div>
                </section>

                <section class="flex items-start">
                    <div class="flex justify-center items-center bg-primary-green text-tertiary-green p-2 mr-6 rounded-md">
                        <IconDog :size="20" />
                    </div>

                    <div>
                        <h2 class="card-title text-zinc-800 capitalize mb-2">
                            Animal safety
                        </h2>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                        </p>
                    </div>
                </section>

                <section class="flex items-start">
                    <div class="flex justify-center items-center bg-primary-green text-tertiary-green p-2 mr-6 rounded-md">
                        <IconLeaf :size="20" />
                    </div>

                    <div>
                        <h2 class="card-title text-zinc-800 capitalize mb-2">
                            Biodiversity
                        </h2>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                        </p>
                    </div>
                </section>
            </div>
                            
        </div>
    </div>

    <!-- What we have done -->
    <div class="container py-12 md:py-32">
        <div class="text-center space-y-4 w-full md:max-w-xl xl:max-w-3xl mx-auto mb-10 xl:mb-20">
            <h4 class="card-caption">Projects we have done</h4>

            <h2 class="main-heading">
                We are creating a sustainable society, for everyone.
            </h2>
        </div>

        <WidgetProjects class="mb-10 xl:mb-20" />

        <div class="space-y-10 xl:space-y-20">
            <!-- Jumbotron -->
            <WidgetJumbotron />
            
            <!--News -->
            <WidgetNews />

            <!-- Events -->
            <WidgetEvents />
        </div>
    </div>
</template>