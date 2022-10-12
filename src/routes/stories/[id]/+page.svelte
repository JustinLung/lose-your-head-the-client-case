<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { storyId } from '$lib/stores/store';
	import { page } from '$app/stores';

	export let data: PageData;

	function getPreviousAndNext(id: string) {
		const currentIndex = $storyId.indexOf(id);
		const next = currentIndex >= $storyId.length - 1 ? 0 : currentIndex + 1;
		const previous = currentIndex - 1 < 0 ? $storyId.length - 1 : currentIndex - 1;
		return [next, previous];
	}

	$: [next, previous] = getPreviousAndNext($page.params.id);

	onMount(() => {
		gsap.fromTo(
			'.story__title',
			{ opacity: 0, y: -50 },
			{ opacity: 1, y: 0, duration: 1.3, ease: 'bounce.out' }
		);
		gsap.fromTo(
			'.story__author',
			{ opacity: 0 },
			{
				duration: 1,
				opacity: 1,
				delay: 0.5
			}
		);
		gsap.fromTo(
			'.story__content',
			{ opacity: 0 },
			{
				duration: 1,
				opacity: 1,
				delay: 0.8
			}
		);
	});
</script>

<svelte:head>
	<title>Ilojo Bar - {data.title}</title>
</svelte:head>

<section class="story">
	<h1 class="story__title">{data.title}</h1>
	<p class="story__author">Written By: {data.createdBy.name}</p>
	<div class="story__content">
		{@html data.content.html}
	</div>
	<div class="story__links">
		<a href={`/stories/${$storyId[previous]}`} class="story__links--link">Previous</a>
		<a href={`/stories/${$storyId[next]}`} class="story__links--link">Next</a>
	</div>
</section>

<style>
	.story {
		max-width: 40rem;
		margin: 0 auto;
	}
	.story__title {
		font-size: 2.5rem;
	}

	.story__author {
		font-size: 1.5rem;
		font-weight: bold;
		padding: 1rem 0;
	}

	.story__content {
		font-size: 1.2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	.story__links {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 1.5rem 0 0;
	}

	.story__links--link {
		position: relative;
		border-radius: 0.7rem;
		padding: 1rem 2rem;
		filter: contrast(110%) brightness(100%);
		background: linear-gradient(40deg, rgba(195, 165, 128, 1), rgba(0, 0, 0, 0)),
			url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
		color: var(--color-white);
		box-shadow: var(--box-shadow);
		text-decoration: none;
		transition: 0.3s ease-in-out;
	}

	.story__links--link:hover {
		transform: scale(1.2);
	}

	:global(img) {
		width: 100%;
		height: 100%;
	}
</style>
