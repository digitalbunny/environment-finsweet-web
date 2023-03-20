<template>
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