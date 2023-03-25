<script lang="ts" setup>
    import { ref } from "vue"

    enum Tabs {"OVERVIEW", "IMPACT", "RESULTS"};
    const selectedTab = ref<Tabs>(Tabs.OVERVIEW);
</script>

<template>
    <div class="bg-tertiary-green py-12 md:py-32">
        <div class="container grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-32">
            <section>
                <WidgetHeading 
                    caption="Donate"
                    title="Make donation for nature."
                    class="mb-10" />

                <div class="md:pl-14 xl:pl-20 space-y-6">
                    <p class="card-text">
                        When you donate, you're supporting effective solutions to big environmental 
                        challenges -an investiment in the future of our planet
                    </p>

                    <NuxtLink to="/donate" class="inline-block px-4 py-3 md:px-10 bg-primary-green font-medium text-white text-xs md:text-sm rounded-md">
                        Donate now
                    </NuxtLink>
                </div>
            </section>

            <img 
                src="https://images.pexels.com/photos/6591164/pexels-photo-6591164.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" 
                alt="img" 
                class="ml-auto object-cover rounded-md">
        </div>
    </div>
    <div class="container py-12 md:py-32 space-y-10 md:space-y-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 xl:gap-20 border-b border-zinc-200 pb-10 md:pb-20">
            <div>
                <h2 class="main-heading mb-2">
                    How you can contribute to protect earth
                </h2>
                
                <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque distinctio totam ad nihil fuga, expedita, accusamus id, voluptas quidem doloremque perferendis neque debitis! Quidem inventore totam modi ducimus laborum.
                </p>
            </div>

            <div>
                <div class="flex text-sm lg:text-base mb-6">
                    <span 
                        class="px-4 md:px-10 py-2 border-b-2 font-medium cursor-pointer"
                        :class="[selectedTab === Tabs.OVERVIEW ? 'border-primary-green' : 'border-zinc-200 text-zinc-500']"
                        @click="selectedTab = Tabs.OVERVIEW">
                        Overview
                    </span>
                    <span 
                        class="px-4 md:px-10 py-2 border-b-2 font-medium cursor-pointer"
                        :class="[selectedTab === Tabs.IMPACT ? 'border-primary-green' : 'border-zinc-200 text-zinc-500']"
                        @click="selectedTab = Tabs.IMPACT">
                        Impact
                    </span>
                    <span 
                        class="px-4 md:px-10 py-2 border-b-2 font-medium cursor-pointer"
                        :class="[selectedTab === Tabs.RESULTS ? 'border-primary-green' : 'border-zinc-200 text-zinc-500']"
                        @click="selectedTab = Tabs.RESULTS">
                        What you get
                    </span>
                </div>

                <div class="card-text space-y-2">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate optio praesentium magni quas iste, 
                        harum, soluta quae dolores beatae eligendi, dolor deserunt! Debitis autem molestias quod vero at neque.
                    </p>
                    <p>
                        Congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas 
                        fringilla phasellus faucibus scelerisque eleifend
                    </p>
                </div>
            </div>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
            <h2 class="main-heading">
                How we use your donation
            </h2>

            <p class="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus vitae harum facilis libero. 
                Placeat, quo expedita. Rem, dicta. Unde animi libero corrupti repudiandae fuga corporis 
                dignissimos expedita accusamus rem natus?
            </p>

            <p class="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus vitae harum facilis libero. 
                Placeat, quo expedita. Rem, dicta. Unde animi libero corrupti repudiandae fuga corporis 
                dignissimos expedita accusamus rem natus?
            </p>
        </div>

        <WidgetJumbotron />
    </div>
</template>