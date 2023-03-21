<template>
    <div class="bg-tertiary-green py-12 md:py-32">
        <div class="container grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-32">
            <section>
                <WidgetHeading 
                    caption="Top news"
                    title="Our goal is to make water available for everyone"
                    class="mb-10" />

                <div class="md:pl-10 lg:pl-20 space-y-6">
                    <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores iure praesentium quia 
                        minima voluptatem accusantium veritatis, illum molestiae.
                    </p>

                    <NuxtLink to="/news" class="inline-block px-4 py-3 md:px-10 bg-primary-green font-medium text-white text-xs md:text-sm rounded-md">
                        Read more
                    </NuxtLink>
                </div>
            </section>

            <section class="bg-white rounded-md p-4 space-y-4">
                <article class="flex flex-wrap md:flex-nowrap items-center gap-4 lg:gap-6">
                    <img 
                        src="https://images.pexels.com/photos/2682683/pexels-photo-2682683.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" 
                        alt="img" 
                        class="hidden md:inline-block object-cover w-full md:w-1/3 rounded-md">
                    <div>
                        <h2 class="font-bold xl:text-lg mb-2">
                            Beyond Recycling: Innovative Solutions for Combatting Climate Change
                        </h2>
                        <p class="text-xs lg:text-sm line-clamp-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat quasi quas distinctio nisi magni 
                            velit magnam nihil consequatur. Cum iusto error neque nisi nobis accusamus sed recusandae nemo voluptatem.
                        </p>
                    </div>
                </article>

                <article class="flex flex-wrap md:flex-nowrap items-center gap-4 lg:gap-6">
                    <img 
                        src="https://images.pexels.com/photos/751821/pexels-photo-751821.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" 
                        alt="img" 
                        class="hidden md:inline-block object-cover w-full md:w-1/3 rounded-md">
                    <div>
                        <h2 class="font-bold xl:text-lg mb-2">
                            Why saving wildlife is extremely important
                        </h2>
                        <p class="text-xs lg:text-sm line-clamp-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat quasi quas distinctio nisi magni 
                            velit magnam nihil consequatur. Cum iusto error neque nisi nobis accusamus sed recusandae nemo voluptatem.
                        </p>
                    </div>
                </article>

                <article class="flex flex-wrap md:flex-nowrap items-center gap-4 lg:gap-6">
                    <img 
                        src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" 
                        alt="img" 
                        class="hidden md:inline-block object-cover w-full md:w-1/3 rounded-md">
                    <div>
                        <h2 class="font-bold xl:text-lg mb-2">
                            A Call to Action: Why Environmental Conservation is Critical for Our Future
                        </h2>
                        <p class="text-xs lg:text-sm line-clamp-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat quasi quas distinctio nisi magni 
                            velit magnam nihil consequatur. Cum iusto error neque nisi nobis accusamus sed recusandae nemo voluptatem.
                        </p>
                    </div>
                </article>
            </section>
        </div>
    </div>

    <!-- Recent News -->
    <div class="container py-12 md:py-32">
        <div class="text-center space-y-4 w-full md:max-w-xl xl:max-w-3xl mx-auto mb-10 xl:mb-20">
            <h4 class="card-caption">News from our sources</h4>

            <h2 class="main-heading">
                Read our recent news
            </h2>
        </div>

        <div class="space-y-10 xl:space-y-20">
            <!--News -->
            <WidgetNews :show-heading="false" />

            <!-- Events -->
            <WidgetEvents />
        </div>
    </div>
</template>