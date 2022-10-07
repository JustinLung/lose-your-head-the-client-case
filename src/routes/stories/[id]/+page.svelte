<script lang="ts">
	// import { onMount } from 'svelte/types/runtime/internal/lifecycle';
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
	section {
		max-width: 40rem;
		margin: 0 auto;
	}
	h1 {
		font-size: 2.5rem;
	}

	.author {
		font-size: 1.5rem;
		font-weight: bold;
		padding: 1rem 0;
	}

	div {
		font-size: 1.2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	:global(img) {
		width: 100%;
		height: 50%;
		margin: 1.5rem 0;
		border-radius: 0.5rem;
	}
</style>
