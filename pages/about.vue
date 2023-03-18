<template>

    <div class="container py-12 md:py-32">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-32">
            <WidgetHeading 
                caption="Know about us"
                title="We are a nonprofit team working worldwide" />

            <div>
                <h2 class="font-semibold mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, ullam officiis distinctio perspiciatis
                </h2>

                <p class="text-xs md:text-sm xl:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, ullam officiis distinctio perspiciatis 
                    nihil non earum voluptate blanditiis fuga tempore temporibus assumenda, quos molestiae quisquam nulla esse, 
                    reiciendis mollitia nemo!
                </p>
            </div>
        </div>
    </div>

    <!-- Mission & Vision -->
    <div class="bg-tertiary-green py-12 md:py-32">
        <div class="container space-y-10">
            <section class="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-32">
                <div class="space-y-3">
                    <h2 class="card-caption">Our mission</h2>
                    <h2 class="line-heading font-semibold">
                        We make the world we save our own environment
                    </h2>

                    <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores quam eveniet. Optio ut debitis 
                        dignissimos quaerat perspiciatis rem, quia suscipit ea ex. Harum necessitatibus eum quas ad inventore. Facere?
                    </p>
                </div>

                <div class="space-y-3">
                    <h2 class="card-caption">Our vision</h2>
                    <h2 class="line-heading font-semibold">
                        Plan more trees to make world air pollution free
                    </h2>

                    <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores quam eveniet. Optio ut debitis 
                        dignissimos quaerat perspiciatis rem, quia suscipit ea ex. Harum necessitatibus eum quas ad inventore. Facere?
                    </p>
                </div>
            </section>
            <!-- Suppoeters -->
            <WidgetSupporters />
        </div>
    </div>

    <!-- Awards -->
    <div class="container pt-12 md:pt-32 space-y-12 md:space-y-24">
        <section>
            <h2 class="main-heading text-center mb-10">Awards & Recognition</h2>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
                <WidgetAward year="2022" title="Best NGO award" description="Berlin, German" />

                <WidgetAward year="2021" title="Global award" description="New York, USA" />

                <WidgetAward year="2019" title="Forest award" description="New Delhi, India" />

                <WidgetAward year="2014" title="Earth award" description="Vienna, Austria" />
            </div>
        </section>

        <section class="bg-black text-white grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 py-12 md:py-20 pl-4 md:pl-0 items-center rounded-md">
            <div class="pr-4 md:pl-20 space-y-2 lg:space-y-4">
                <h2 class="card-caption">Our journey</h2>

                <h2 class="main-heading">
                    How we raise 34M
                </h2>

                <p class="text-zinc-400 card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero, sint obcaecati 
                    maxime et est commodi? Labore impedit pariatur in voluptas tempora suscipit inventore quasi 
                    ipsam! Aliquam eius perferendis beatae!
                </p>

                <!-- Statistics -->
                <div class="flex flex-nowrap space-x-4 md:space-x-10 py-6">
                    <section>
                        <h2 class="card-title">34M+</h2>
                        <p class="text-xs lg:text-sm text-zinc-400">
                            Donation received
                        </p>
                    </section>
                    <section>
                        <h2 class="card-title">400+</h2>
                        <p class="text-xs lg:text-sm text-zinc-400">
                            Volunters
                        </p>
                    </section>
                    <section>
                        <h2 class="card-title">40K+</h2>
                        <p class="text-xs lg:text-sm text-zinc-400">
                            Tree planted
                        </p>
                    </section>
                </div>
            </div>

            <img 
                src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" 
                alt="img"
                class="object-cover w-full rounded-l-md">
        </section>

        <section>
            <h2 class="text-center main-heading mb-2">
                Meet our team
            </h2>
            <p class="card-text text-center mx-auto w-full md:max-w-xl xl:max-w-3xl mb-10">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem dolorem a placeat necessitatibus qui voluptates 
                repudiandae eligendi atque illo quia cupiditate temporibus omnis, beatae quas fuga sequi id obcaecati iure!
            </p>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
                <WidgetTeam v-for="i in 8" :key="i" />
            </div>
        </section>
    </div>

    <div class="container py-12 md:py-32 space-y-12">
        <WidgetJumbotron />

        <!-- News -->
        <WidgetNews />

        <!-- Events -->
        <WidgetEvents />
    </div>
</template>