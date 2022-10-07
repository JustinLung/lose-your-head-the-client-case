<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { story } = data.data;
</script>

<section>
	<h1>{story.title}</h1>
	<p class="author">Written By: {story.createdBy.name}</p>
	<div>
		{@html story.content.html}
	</div>
</section>

<style>
	h1 {
		font-size: 2rem;
	}

	.author {
		font-size: 1.5rem;
		font-weight: bold;
		padding: 1rem 0;
	}

	:global(p) {
		max-width: 40rem;
	}

	div {
		max-width: 80rem;
		font-size: 1.2rem;
	}

	:global(img) {
		padding: 1rem 0;
		max-width: 80rem;
	}
</style>
