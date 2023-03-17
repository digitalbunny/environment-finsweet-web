<template>
    <div 
        class="bg-no-repeat bg-center bg-cover bg-blend-overlay bg-black/40"
        :style="{'background-image': `url(${'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'})`}">
        <div class="container py-12 md:pt-32 text-white">
            <h2 class="font-bold text-3xl md:text-4xl xl:text-5xl leading-8 mb-8 lg:mb-10 w-full md:w-1/2 xl:w-2/5">
                Save the environment today for a better tomorrow
            </h2>

            <div class="flex space-x-4 mb-24 md:mb-48">
                <button class="px-4 py-3 md:px-10 bg-white font-medium text-black text-xs md:text-sm rounded-md">
                    What we do
                </button>

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

                        <button class="px-4 py-3 bg-primary-green font-medium text-white text-xs md:text-sm rounded-md">
                            Learn more
                        </button>
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
        <div>
            <div class="flex justify-start items-center space-x-4 mb-8">
                <h2 class="text-xs md:text-sm xl:text-base font-medium uppercase">Our supporters</h2>
                <div class="grow h-px bg-zinc-200"></div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 items-center gap-6">
                <img 
                    src="https://depave.org/wp/wp-content/uploads/2017/08/Depave-Trademark-ARR.png" 
                    alt="supporter" 
                    class="object-cover grayscale hover:grayscale-0 w-full">

                <img 
                    src="https://www.earthday.org/wp-content/uploads/2020/04/Connect4Climate-300x122.png" 
                    alt="supporter" 
                    class="object-cover grayscale hover:grayscale-0 w-full">

                <img 
                    src="https://www.earthday.org/wp-content/uploads/2020/01/FCR-Logo-long-300x122.png" 
                    alt="supporter" 
                    class="object-cover grayscale hover:grayscale-0 w-full">

                <img 
                    src="https://www.earthday.org/wp-content/uploads/2019/12/82559367_ccan-logo-transparent-250x107.png" 
                    alt="supporter" 
                    class="object-cover grayscale hover:grayscale-0 w-full">

                <img 
                    src="https://www.earthday.org/wp-content/uploads/2019/12/2019-09-10_1658_005.png" 
                    alt="supporter" 
                    class="object-cover grayscale hover:grayscale-0 w-full">
                    
                <img 
                    src="https://www.earthday.org/wp-content/uploads/2020/01/logo.png" 
                    alt="supporter" 
                    class="object-cover grayscale hover:grayscale-0 w-full">
            </div>
        </div>
    </div>

    <!-- What we do -->
    <div class="bg-tertiary-green py-12 md:py-32">
        <div class="container grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-32 mb-8 items-center">
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
                            <li class="flex">
                                <div class="flex justify-center items-center bg-primary-green text-tertiary-green w-14 h-8 md:h-10 mr-6 rounded-md">
                                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                    </svg>
                                </div>

                                <div>
                                    <h2 class="font-bold text-lg md:text-xl xl:text-2xl text-zinc-800 capitalize mb-2">
                                        Building healthy cities
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                    </p>
                                </div>
                            </li>

                            <li class="flex">
                                <div class="flex justify-center items-center bg-primary-green text-tertiary-green w-14 h-8 md:h-10 mr-6 rounded-md">
                                    <svg class="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z"></path>
                                        <path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3"></path>
                                        <path d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3"></path>
                                        <path d="M12 15l0 -6"></path>
                                    </svg>
                                </div>

                                <div>
                                    <h2 class="font-bold text-lg md:text-xl xl:text-2xl text-zinc-800 capitalize mb-2">
                                        Tree plantantion
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                    </p>
                                </div>
                            </li>

                            <li class="flex">
                                <div class="flex justify-center items-center bg-primary-green text-tertiary-green w-14 h-8 md:h-10 mr-6 rounded-md">
                                    <svg class="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 7c3 -2 6 -2 9 0s6 2 9 0"></path>
                                        <path d="M3 17c3 -2 6 -2 9 0s6 2 9 0"></path>
                                        <path d="M3 12c3 -2 6 -2 9 0s6 2 9 0"></path>
                                    </svg>
                                </div>

                                <div>
                                    <h2 class="font-bold text-lg md:text-xl xl:text-2xl text-zinc-800 capitalize mb-2">
                                        Protect land and water
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                    </p>
                                </div>
                            </li>

                            <li class="flex">
                                <div class="flex justify-center items-center bg-primary-green text-tertiary-green w-14 h-8 md:h-10 mr-6 rounded-md">
                                    <svg class="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M11 5h2"></path>
                                        <path d="M19 12c-.667 5.333 -2.333 8 -5 8h-4c-2.667 0 -4.333 -2.667 -5 -8"></path>
                                        <path d="M11 16c0 .667 .333 1 1 1s1 -.333 1 -1h-2z"></path>
                                        <path d="M12 18v2"></path>
                                        <path d="M10 11v.01"></path>
                                        <path d="M14 11v.01"></path>
                                        <path d="M5 4l6 .97l-6.238 6.688a1.021 1.021 0 0 1 -1.41 .111a.953 .953 0 0 1 -.327 -.954l1.975 -6.815z"></path>
                                        <path d="M19 4l-6 .97l6.238 6.688c.358 .408 .989 .458 1.41 .111a.953 .953 0 0 0 .327 -.954l-1.975 -6.815z"></path>
                                    </svg>
                                </div>

                                <div>
                                    <h2 class="font-bold text-lg md:text-xl xl:text-2xl text-zinc-800 capitalize mb-2">
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

        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
            <CardsProject 
                title="Mission 40K: Tree plantation"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nisi ullam 
                dolor animi eligendi quas quae explicabo veritatis expedita dolorum, placeat nostrum in hic 
                perspiciatis, delectus officiis distinctio, soluta cum."
                image="https://images.pexels.com/photos/11534117/pexels-photo-11534117.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" />

            <CardsProject 
                title="Weekly cleanliness program in city"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nisi ullam 
                dolor animi eligendi quas quae explicabo veritatis expedita dolorum, placeat nostrum in hic 
                perspiciatis, delectus officiis distinctio, soluta cum."
                image="https://images.pexels.com/photos/12492222/pexels-photo-12492222.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" />

            <CardsProject 
                title="Wildlife safety program 2023"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nisi ullam 
                dolor animi eligendi quas quae explicabo veritatis expedita dolorum, placeat nostrum in hic 
                perspiciatis, delectus officiis distinctio, soluta cum."
                image="https://images.pexels.com/photos/4577808/pexels-photo-4577808.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" />
        </section>
    </div>
</template>