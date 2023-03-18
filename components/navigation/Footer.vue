<template>
    <footer class="bg-black text-white py-10 md:py-20">
        <div class="container flex flex-wrap md:flex-nowrap items-start space-y-8 md:space-y-0">
            <section class="w-full md:w-3/4 xl:w-3/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                <h2 class="text-2xl font-bold col-span-2 sm:col-span-1">{ Finsweet</h2>
                
                <div class="text-xs md:text-sm xl:text-base">
                    <h2 class="font-semibold text-base lg:text-lg mb-6">Our Team</h2>

                    <div class="flex flex-col space-y-4 xl:space-y-6 text-zinc-500">
                        <NuxtLink to="/about" class="hover:text-white">
                            About us
                        </NuxtLink>

                        <NuxtLink to="/" class="hover:text-white">
                            Team
                        </NuxtLink>

                        <NuxtLink to="/what-we-do" class="hover:text-white">
                            What we do
                        </NuxtLink>

                        <NuxtLink to="/contact" class="hover:text-white">
                            Contact
                        </NuxtLink>
                    </div>
                </div>

                <div class="text-xs md:text-sm xl:text-base">
                    <h2 class="font-semibold text-base lg:text-lg mb-6">More</h2>

                    <div class="flex flex-col space-y-4 xl:space-y-6 text-zinc-500">
                        <NuxtLink to="/projects" class="hover:text-white">
                            Projects
                        </NuxtLink>

                        <NuxtLink to="/events" class="hover:text-white">
                            Events
                        </NuxtLink>

                        <NuxtLink to="/donate" class="hover:text-white">
                            Donate
                        </NuxtLink>

                        <NuxtLink to="/blog" class="hover:text-white">
                            Blog
                        </NuxtLink>
                    </div>
                </div>

                <div class="text-xs md:text-sm xl:text-base">
                    <h2 class="font-semibold text-base lg:text-lg mb-6">Connect</h2>

                    <div class="flex flex-col space-y-4 xl:space-y-6 text-zinc-500">
                        <NuxtLink to="/" class="hover:text-white">
                            Facebook
                        </NuxtLink>

                        <NuxtLink to="/" class="hover:text-white">
                            Instagram
                        </NuxtLink>

                        <NuxtLink to="/" class="hover:text-white">
                            Twitter
                        </NuxtLink>

                        <NuxtLink to="/" class="hover:text-white">
                            LinkedIn
                        </NuxtLink>
                    </div>
                </div>
            </section>

            <section class="w-full md:w-1/4 xl:w-2/5">
                <h2 class="font-bold text-2xl md:text-4xl mb-4 lg:mb-6">
                    Subscribe to get lastest updates
                </h2>

                <div class="flex flex-nowrap">
                    <input 
                        type="email" 
                        placeholder="Your email" 
                        class="grow p-3 md:p-5 text-zinc-200 placeholder-zinc-500 bg-transparent border border-r-0 border-zinc-800 focus:border-zinc-500 focus:outline-none rounded-md rounded-r-none">
                    
                    <button 
                        type="submit"
                        class="w-32 md:w-40 py-3 md:py-5 font-medium text-zinc-800 bg-white rounded-md">
                        Subscribe
                    </button>
                </div>
            </section>
        </div>
    </footer>
</template>