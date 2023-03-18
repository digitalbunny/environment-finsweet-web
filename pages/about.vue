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

    <div class="container py-12 md:py-32 space-y-12">
        <WidgetJumbotron />

        <!-- News -->
        <WidgetNews />

        <!-- Events -->
        <WidgetEvents />
    </div>
</template>