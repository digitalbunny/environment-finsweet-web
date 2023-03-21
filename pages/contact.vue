<script lang="ts" setup>
    import { IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin } from "@tabler/icons-vue";
</script>

<template>
    <div class="bg-tertiary-mirage py-12 md:py-32">
        <div class="container grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-32">
            <section>
                <WidgetHeading 
                    caption="Contact us"
                    title="We'd love to hear from you"
                    class="mb-10" />

                <div class="md:pl-14 xl:pl-20 space-y-6">
                    <p class="card-text">
                        Have any question in mind or want to enquire? Please feel free to contact ius through the form or the following details
                    </p>
                </div>
            </section>

            <section class="space-y-4 md:space-y-10">
                <div>
                    <h2 class="card-title mb-2">Let's talk!</h2>
                    <div class="card-text space-x-4 md:space-x-10">
                        <span>+1 23 456 789</span>
                        <span>hello@finsweet.com</span>
                    </div>
                </div>

                <div>
                    <h2 class="card-title mb-2">Head Office</h2>
                    <div class="card-text">
                        8 Brewery Drive, Hudson, NH 03051
                    </div>
                </div>

                <div>
                    <h2 class="card-title mb-2">Branch Office</h2>
                    <div class="card-text">
                        178 Marconi St. Venice 34293
                    </div>
                </div>

                <div class="flex space-x-6">
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
            </section>
        </div>
    </div>
</template>