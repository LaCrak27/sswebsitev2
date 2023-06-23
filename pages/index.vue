<template>
    <div class="min-h-screen">
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
            <section class="lg:px-[15%] px-[5%] lg:pt-20 pt-14">
				<p
					class="text-center uppercase font-medium tracking-wider mb-10 text-gray-400">
					About
				</p>
				<p class="text-lg font-semibold">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit natus reiciendis ipsam consequatur impedit modi, tenetur culpa repellat, laborum ducimus, laudantium dolorem enim perspiciatis? Aspernatur illo magnam similique rerum quisquam atque vero sapiente impedit repudiandae. Quae deleniti quam, accusantium, exercitationem aut enim earum ullam iure suscipit distinctio sapiente. Magni, provident. Obcaecati aspernatur esse iusto dolorum amet harum mollitia quis sunt dolore laborum quidem suscipit enim, dicta nemo nostrum perferendis cupiditate quam adipisci perspiciatis tempore laudantium expedita ratione debitis rerum! Doloribus vitae adipisci nobis rerum aspernatur veritatis soluta! Odio iure maxime deserunt itaque aperiam dolore consectetur, quaerat asperiores nihil? Veniam necessitatibus temporibus esse recusandae dolorum mollitia natus quae voluptas, ab ducimus quos sequi perferendis distinctio rerum similique culpa ex eveniet repellendus officia! Aliquam soluta distinctio ipsa voluptatum accusamus, perferendis blanditiis possimus, dolor incidunt doloremque ducimus non sunt pariatur nisi. Corporis in aspernatur consectetur! Sed inventore officia aperiam nulla cumque eos unde nostrum quaerat labore numquam enim placeat, earum neque vitae consectetur itaque vel corrupti, aliquid dolor odit doloremque sit possimus modi saepe. Cumque obcaecati impedit quidem nulla voluptates molestiae, sunt labore? Delectus sunt praesentium quae, officiis tempora vero quisquam ratione fugiat. Earum magnam assumenda expedita perferendis delectus, fugit error alias soluta.
				</p>
				<p
					class="text-center uppercase font-medium tracking-wider mb-10 text-gray-400">
					Pricing
				</p>
				<p class="text-lg font-semibold">
					Star Strike is, and will ever be free forever with no ADS! Even though I will be gaining no money at all for this (donations are accepted, see footer), I think it is the best choice for both me and the community.
				</p>
			</section>
        </main>
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
