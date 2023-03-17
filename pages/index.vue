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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 xl:gap-32 mb-8 items-center">
            <div>
                <div class="flex justify-start items-center space-x-4 mb-4">
                    <div class="w-[10%] h-px bg-black"></div>
                    <h2 class="text-xs md:text-sm xl:text-base font-medium uppercase">Know about us</h2>
                </div>

                <div class="flex justify-start md:space-x-4">
                    <div class="hidden md:block md:w-[10%] h-full"></div>

                    <div class="w-full md:w-[90%] text-xs md:text-sm xl:text-base text-justify space-y-6">
                        <h2 class="font-bold text-2xl md:text-4xl xl:text-5xl leading-8 text-left">
                            We help nature smile and survive everywhere
                        </h2>

                        <p class="text-zinc-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, ullam officiis distinctio perspiciatis nihil non earum voluptate blanditiis fuga tempore temporibus assumenda, quos molestiae quisquam nulla esse, reiciendis mollitia nemo!
                        </p>

                        <p class="text-zinc-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, ullam officiis distinctio perspiciatis nihil non earum voluptate blanditiis fuga tempore temporibus assumenda, quos molestiae quisquam nulla esse, reiciendis mollitia nemo!
                        </p>

                        <button class="px-4 py-3 bg-theme-green font-medium text-white text-xs md:text-sm rounded-md">
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

    <!-- Project summary -->
    <div class="container py-12 md:py-32">
        <section class="w-full md:w-1/2 mb-10 md:mb-20">
            <div class="flex justify-start items-center space-x-4 mb-4">
                <div class="w-[10%] h-px bg-black"></div>
                <h2 class="text-xs md:text-sm xl:text-base font-medium uppercase">
                    Project with have done
                </h2>
            </div>

            <div class="flex justify-start md:space-x-4">
                <div class="hidden md:block md:w-[10%] h-full"></div>
                <div class="w-full md:w-[90%]">
                    <h2 class="font-bold text-2xl md:text-4xl xl:text-5xl leading-8 text-left">
                        We are Creating sustainable society, for everyone and forever.
                    </h2>
                </div>
            </div>
        </section>

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
                image="https://images.pexels.com/photos/12492222/pexels-photo-12492222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

            <CardsProject 
                title="Wildlife safety program 2023"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nisi ullam 
                dolor animi eligendi quas quae explicabo veritatis expedita dolorum, placeat nostrum in hic 
                perspiciatis, delectus officiis distinctio, soluta cum."
                image="https://images.pexels.com/photos/4577808/pexels-photo-4577808.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" />
        </section>
    </div>
</template>