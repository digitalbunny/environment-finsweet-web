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

    <div class="container py-12 md:py-32">
        <form class="max-w-full md:max-w-2xl xl:max-w-4xl mx-auto space-y-4 lg:space-y-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
                <div class="space-y-2">
                    <label for="firstName" class="text-zinc-500 text-sm xl:text-base">First Name</label>
                    <input type="text" class="input-basic" required>
                </div>

                <div class="space-y-2">
                    <label for="lastName" class="text-zinc-500 text-sm xl:text-base">Last Name</label>
                    <input type="text" class="input-basic" required>
                </div>

                <div class="space-y-2">
                    <label for="email" class="text-zinc-500 text-sm xl:text-base">Email</label>
                    <input type="email" class="input-basic" required>
                </div>

                <div class="space-y-2">
                    <label for="subject" class="text-zinc-500 text-sm xl:text-base">Subject</label>
                    <input type="text" class="input-basic" required>
                </div>
            </div>

            <div class="space-y-2">
                <label for="message" class="text-zinc-500 text-sm xl:text-base">Message</label>
                <textarea name="message" rows="6" placeholder="Type your message" class="input-textarea"></textarea>
            </div>

            <button type="submit" class="mx-auto block px-4 py-3 md:px-10 bg-primary-green font-medium text-white text-xs md:text-sm rounded-md">
                Send Message
            </button>
        </form>
    </div>
</template>