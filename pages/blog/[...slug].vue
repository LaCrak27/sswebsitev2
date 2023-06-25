<template>
    <div class="min-h-full">
        <Nav/>
        <main>
            <article class="lg:pt-20 pt-10 relative flex items-start lg:space-x-10 px-[5%] lg:px-[10%]">
                <div
					v-if="blog.excerpt"
					class="w-[300px] p-5 sticky top-3 border rounded-md bg-white hidden lg:block"
				>
				</div>
				<ClientOnly>
					<ContentRenderer
						class="prose lg:prose-base prose-sm prose-white blog-link pr-7 max-w-none"
						:value="blog"
					>
						<template #empty>
							<p>No content found.</p>
						</template>
					</ContentRenderer>
				</ClientOnly>
            </article>
        </main>
    </div>
</template>

<script setup>
	const slug = useRoute().params.slug.toString().replace(/,/g, "/");
	const { data: blog } = await useAsyncData(slug, () => {
		return queryContent(slug).findOne();
	});

	useHead({
		title: `${blog.value.title}`,
	});
</script>

<style scoped>
	.blog-link {
		@apply prose-a:text-primary before:prose-headings:content-['#'] before:prose-headings:mr-1 before:prose-headings:text-primary before:prose-h1:content-[''];
	}
</style>