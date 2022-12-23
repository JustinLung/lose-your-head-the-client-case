<script lang="ts">
	import type { PageData } from './$types';
	import { storyId } from '$lib/stores/store';
	import { page } from '$app/stores';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	export let data: PageData;

	onMount(() => {
		gsap.from('.story__title span, .story__author span', {
			delay: 0.25,
			yPercent: 100,
			ease: 'back.out',
			duration: 1.5
		});

		gsap.from('.story__content *:nth-child(1)', {
			delay: .5,
			x: -900,
			ease: "back.out(.6)",
			duration: 3,
		});

		gsap.from('.story__content *:nth-child(2)', {
			delay: .75,
			x: 900,
			ease: "back.out(.6)",
			duration: 3,
		});

		gsap.from('.story__content *:nth-child(3)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(3)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: -100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content *:nth-child(4)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(4)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: 100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content *:nth-child(5)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(5)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: -100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content *:nth-child(6)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(6)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: 100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content *:nth-child(7)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(7)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: -100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content *:nth-child(8)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(8)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: 100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content *:nth-child(9)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(9)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: -100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content *:nth-child(10)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(10)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: 100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content *:nth-child(11)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(11)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: -100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content *:nth-child(12)', {
			scrollTrigger: {
				trigger: '.story__content *:nth-child(12)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: 100,
			ease: "back.out(1)",
			duration: 1.25,
		});
	});

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
	<h1 class="story__title"><span>{data.title}</span></h1>
	<p class="story__author"><span>Written By: {data.createdBy.name}</span></p>
	<div class="story__content">
		{@html data.content.html}
	</div>
	<div class="story__links">
		<a href={`/stories/${$storyId[previous]}`} class="story__links--link" data-sveltekit-reload>Previous</a>
		<a href={`/stories/${$storyId[next]}`} class="story__links--link" data-sveltekit-reload>Next</a>
	</div>
</section>

<style>
	.story {
		padding: 9em 1em;
	}

	.story__title {
		font-size: 2.5rem;
		text-align: center;
		overflow: hidden;
	}

	.story__title span,
	.story__author span {
    display: block;
	}

	.story__author {
		font-size: 1.5rem;
		font-weight: bold;
		padding: 1rem 0 4rem 0;
		text-align: center;
		overflow: hidden;
	}

	.story__content {
		font-size: 1.5rem;
		line-height: 2rem;
		display: grid;
		grid-template-columns: 1fr;
		justify-items: center;
		gap: 2rem;
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
		background: var(--link-background);
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
    height: 20em;
		object-fit: cover;
		object-position: left top;
	}

	:global(.story__content > p:not(:last-child), img:not(:last-child)) {
		margin-bottom: 8em;
	}

	@media (min-width: 70em) {
		.story {
			padding: 9em 20em;
		}

		.story__content {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
