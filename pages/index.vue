<script lang="ts" setup>
    import { IconBuildingSkyscraper, IconRipple, IconPlant, IconDroplet, IconDog, IconLeaf } from "@tabler/icons-vue"
</script>

<template>
    <div 
        class="bg-no-repeat bg-center bg-cover bg-blend-overlay bg-black/40"
        :style="{'background-image': `url(${'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'})`}">
        <div class="container py-12 md:pt-32 text-white">
            <h2 class="font-bold text-3xl md:text-4xl xl:text-5xl leading-8 mb-8 lg:mb-10 w-full md:w-1/2 xl:w-2/5">
                Save the environment today for a better tomorrow
            </h2>

            <div class="flex space-x-4 mb-24 md:mb-48">
                <NuxtLink to="/what-we-do" class="inline-block px-4 py-3 md:px-10 bg-white font-medium text-black text-xs md:text-sm rounded-md">
                    What we do
                </NuxtLink>

                <button class="px-4 py-3 md:px-10 font-medium text-white text-xs md:text-sm border border-transparent hover:border-white flex items-center space-x-2 rounded-md">
                    <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>

                    <span>Play video</span>
                </button>
            </div>

            <div class="flex items-center space-x-4 text-xs md:text-sm xl:text-base">
                <div>
                    23,800 tree planted
                </div>

                <div class="grow h-px bg-white"></div>

                <div>
                    5840 donations collected
                </div>
            </div>
        </div>
    </div>

    <!-- About us summary -->
    <div class="container py-12 md:py-32">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-32 mb-8 items-center">
            <div>
                <WidgetHeading 
                    caption="Know about us"
                    title="We help nature smile and survive everywhere."
                    class="mb-10" />

                <div class="flex justify-start md:space-x-4">
                    <div class="hidden md:block md:w-[10%] h-full"></div>

                    <div class="w-full md:w-[90%] text-xs md:text-sm xl:text-base text-justify text-zinc-500 space-y-6">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, ullam officiis distinctio perspiciatis nihil non earum voluptate blanditiis fuga tempore temporibus assumenda, quos molestiae quisquam nulla esse, reiciendis mollitia nemo!
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, ullam officiis distinctio perspiciatis nihil non earum voluptate blanditiis fuga tempore temporibus assumenda, quos molestiae quisquam nulla esse, reiciendis mollitia nemo!
                        </p>

                        <NuxtLink to="/about" class="inline-block px-4 py-3 bg-primary-green font-medium text-white text-xs md:text-sm rounded-md">
                            Learn more
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="relative">
                <img 
                    src="https://images.pexels.com/photos/9721506/pexels-photo-9721506.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" 
                    alt="img" 
                    class="object-cover w-full xl:h-[720px] rounded-md">

                <button class="absolute top-1/2 right-1/2 flex justify-center items-center w-10 h-10 md:w-14 md:h-14 bg-white text-black rounded-full">
                    <svg class="w-5 h-5 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Supporters -->
        <WidgetSupporters />
    </div>

    <!-- What we do -->
    <div class="bg-tertiary-green py-12 md:py-32">
        <div class="container grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-32 items-center">
            <section>
                <WidgetHeading 
                    caption="What we do"
                    title="We care for earch, care for the coming birth"
                    class="mb-10" />

                <div class="flex justify-start md:space-x-4">
                    <div class="hidden md:block md:w-[10%] h-full"></div>

                    <div class="w-full md:w-[90%] text-xs md:text-sm xl:text-base text-justify text-zinc-500 space-y-6">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, ullam officiis distinctio perspiciatis nihil non earum voluptate blanditiis fuga tempore temporibus assumenda, quos molestiae quisquam nulla esse, reiciendis mollitia nemo!
                        </p>

                        <ul class="border-l border-zinc-200 pl-4 md:pl-6 text-xs md:text-sm xl:text-base space-y-8">
                            <li class="flex items-start">
                                <div class="flex justify-center items-center bg-primary-green text-tertiary-green p-2 mr-6 rounded-md">
                                    <IconBuildingSkyscraper :size="20" />
                                </div>

                                <div>
                                    <h2 class="card-title text-zinc-800 capitalize mb-2">
                                        Building healthy cities
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                    </p>
                                </div>
                            </li>

                            <li class="flex items-start">
                                <div class="flex justify-center items-center bg-primary-green text-tertiary-green p-2 mr-6 rounded-md">
                                    <IconPlant :size="20" />
                                </div>

                                <div>
                                    <h2 class="card-title text-zinc-800 capitalize mb-2">
                                        Tree plantantion
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                    </p>
                                </div>
                            </li>

                            <li class="flex items-start">
                                <div class="flex justify-center items-center bg-primary-green text-tertiary-green p-2 mr-6 rounded-md">
                                    <IconRipple :size="20" />
                                </div>

                                <div>
                                    <h2 class="card-title text-zinc-800 capitalize mb-2">
                                        Protect land and water
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                    </p>
                                </div>
                            </li>

                            <li class="flex items-start">
                                <div class="flex justify-center items-center bg-primary-green text-tertiary-green p-2 mr-6 rounded-md">
                                    <IconDog :size="20" />
                                </div>

                                <div>
                                    <h2 class="card-title text-zinc-800 capitalize mb-2">
                                        Animal safety
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <img 
                    src="https://images.pexels.com/photos/7469233/pexels-photo-7469233.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" 
                    alt="img"
                    class="object-cover w-full rounded-md" >
            </section>
        </div>
    </div>

    <!-- Project summary -->
    <div class="container py-12 md:py-32">
        <WidgetHeading 
            caption="Project with have done"
            title="We are Creating sustainable society, for everyone and forever."
            class="w-full md:w-1/2 mb-10 md:mb-20" />

        <WidgetProjects />
    </div>

    <div class="container py-12 md:py-32 space-y-12">
        <WidgetJumbotron />

        <!-- News -->
        <WidgetNews />

        <!-- Events -->
        <WidgetEvents />
    </div>
</template>