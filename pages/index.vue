<template>
    <div class="min-h-screen h-max">
        <Nav/>
        <main>
            <section class="lg:px-[15%] px-[5%] pt-20">
				<h1
					class="text-[1rem] leading-normal font-semibold text-center text-gray-600"
				>
					The ultimate space combat game:
				</h1>
				<h1
					class="text-[7rem] text-center leading-normal font-bold rainbow-text"
				>
					Star Strike
				</h1>
			</section>
            <section class="lg:px-[15%] px-[5%]">
				<p
					class="text-center uppercase font-medium tracking-wider mb-10 text-gray-400 lg:pt-20 pt-14">
					About
				</p>
				<p class="text-lg font-semibold">
					Star Strike is an upcoming (actively in-development) spaceship combat game. It aims to be a competitive experience where skill differientiates the good pilots from the bad ones, and where there is no grind/engineering (I have gone through the pain too) required. Depending on the success of the online multiplayer mode, there will also be a story mode released at a later date.
				</p>
				<p
					class="text-center uppercase font-medium tracking-wider mb-10 text-gray-400 lg:pt-20 pt-14">
					Pricing
				</p>
				<p class="text-lg font-semibold">
					Star Strike is, and will ever be free forever with no ADS! Even though I will be gaining no money at all for this (<a href="https://www.buymeacoffee.com/lacrak27">buy me a coffee!</a>), I think it is the best choice for both me and the community, since that makes the game accesible to everyone that wants to play it!
				</p>
			</section>
        </main>
		<Footer/>
    </div>
</template>

<script setup>
const { data: blogNav } = await useAsyncData("navigation", () => {
    return fetchContentNavigation(queryContent("posts"));
});
useHead({
		title: `Star Strike`,
	});
</script>
