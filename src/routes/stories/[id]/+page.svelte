<script lang="ts">
	import type { PageData } from './$types';
	import { storyId } from '$lib/stores/store';
	import { page } from '$app/stores';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	export let data: PageData;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from('.story__title', {
			delay: 0.25,
			yPercent: 100,
			ease: 'back.out',
			duration: 1.5
		});

			gsap.from('.story__content p', {
				delay: .5,
				x: -800,
				ease: "back.out(1)",
				duration: 3,
			});
	});
	// onMount(() => {
	// 	gsap.registerPlugin(ScrollTrigger)
	// 	gsap.from("h1 span", {
	// 		delay: .25,
	// 		yPercent: 100,
	// 		ease: "back.out",
	// 		duration: 1.5
	// 	});

	// 	gsap.from('.story__content p:not(.block-img):nth-child(1)', {
	// 		delay: .5,
	// 		x: -800,
	// 		ease: "back.out(1)",
	// 		duration: 3,
	// 	});

	// 	gsap.from('.block-img:nth-child(2)', {
	// 		delay: .75,
	// 		x: 800,
	// 		ease: "back.out(1)",
	// 		duration: 3,
	// 	});

	// 	gsap.from('.block-img:nth-child(3)', {
	// 		scrollTrigger: {
	// 			trigger: '.block-img:nth-child(3)',
	// 			toggleActions:"restart none restart restart"
	// 		},
	// 		delay: .20,
	// 		x: -100,
	// 		ease: "back.out(1)",
	// 		duration: 1.25,
	// 	});

	// 	gsap.from('.story__content p:not(.block-img):nth-child(4)', {
	// 		scrollTrigger: {
	// 			trigger: '.story__content p:not(.block-img):nth-child(4)',
	// 			toggleActions:"restart none restart restart"
	// 		},
	// 		delay: .2,
	// 		x: 100,
	// 		ease: "back.out(1)",
	// 		duration: 1.25,
	// 	});

	// 	gsap.from('.block-img:nth-child(5)', {
	// 		scrollTrigger: {
	// 			trigger: '.block-img:nth-child(5)',
	// 			toggleActions:"restart none"
	// 		},
	// 		delay: .2,
	// 		x: -100,
	// 		ease: "back.out(1)",
	// 		duration: 1.25,
	// 	});

	// 	gsap.from('.block-img:nth-child(6)', {
	// 		scrollTrigger: {
	// 			trigger: '.block-img:nth-child(6)',
	// 			toggleActions:"restart none"
	// 		},
	// 		delay: .2,
	// 		x: 65,
	// 		ease: "back.out(1)",
	// 		duration: 1.25,
	// 	});
	// });

	function getPreviousAndNext(id: string) {
		const currentIndex = $storyId.indexOf(id);
		const next = currentIndex >= $storyId.length - 1 ? 0 : currentIndex + 1;
		const previous = currentIndex - 1 < 0 ? $storyId.length - 1 : currentIndex - 1;
		return [next, previous];
	}

	$: [next, previous] = getPreviousAndNext($page.params.id);
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
		<a href={`/stories/${$storyId[previous]}`} class="story__links--link" data-sveltekit-reload
			>Previous</a
		>
		<a href={`/stories/${$storyId[next]}`} class="story__links--link" data-sveltekit-reload>Next</a>
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

	:global(.story__content > img) {
		width: 100%;
		height: 100%;
	}
</style>
