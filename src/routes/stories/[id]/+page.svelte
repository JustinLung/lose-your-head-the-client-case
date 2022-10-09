<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { story } = data.data;

	onMount(() => {
		gsap.fromTo(
			'.story__title',
			{ opacity: 0, y: -50 },
			{ opacity: 1, y: 0, duration: 1.3, ease: 'bounce.out' }
		);
		gsap.to('.story__author', {
			duration: 1,
			opacity: 1,
			stagger: 0.3,
			delay: 0.5
		});
		gsap.to('.story__content', {
			duration: 1,
			opacity: 1,
			stagger: 0.3,
			delay: 0.8
		});
	});
</script>

<svelte:head>
	<title>Ilojo Bar - {story.title}</title>
</svelte:head>

<section class="story">
	<h1 class="story__title">{story.title}</h1>
	<p class="story__author">Written By: {story.createdBy.name}</p>
	<div class="story__content">
		{@html story.content.html}
	</div>
	<div class="story__buttons">
		<Button>Previous Story</Button>
		<Button>Next Story</Button>
	</div>
</section>

<style>
	.story {
		max-width: 40rem;
		margin: 0 auto;
	}
	.story__title {
		font-size: 2.5rem;
		opacity: 0;
	}

	.story__author {
		font-size: 1.5rem;
		font-weight: bold;
		padding: 1rem 0;
		opacity: 0;
	}

	.story__content {
		font-size: 1.2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		opacity: 0;
	}

	.story__buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 1.5rem 0 0;
	}

	:global(img) {
		width: 100%;
		height: 100%;
	}
</style>
