<script lang="ts">
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		let tl = gsap.timeline();

		tl.fromTo(
			'.logo',
			{ opacity: 0, y: -50 },
			{ opacity: 1, y: 0, duration: 1.3, ease: 'bounce.out' }
		).fromTo(
			'.subtitle',
			{ opacity: 0, y: -50 },
			{ opacity: 1, y: 0, duration: 1.3, ease: 'bounce.out' }
		);

		let scrollTL = gsap.timeline({
			scrollTrigger: {
				trigger: 'section',
				start: 'top top',
				end: 'bottom top',
				scrub: 1,
				pin: true,
				snap: 1
			}
		});

		scrollTL
			.fromTo('.scroll_btn', { opacity: 1, duration: 0.3 }, { opacity: 0 })
			.from('.scroll_cont', { scale: 1 }, '<')
			.fromTo('#color_building', { opacity: 0 }, { opacity: 1 }, '<')
			.fromTo('#background', { opacity: 1 }, { opacity: 0 }, '-=50%')
			.fromTo('#overlay', { opacity: 1, scale: 1 }, { opacity: 0, scale: 1.05 }, '<25%');
	});
</script>

<header class="home">
	<img src="/assets/images/logo-ilojo-bar.webp" alt="Logo Ilojo bar" class="logo" />
	<p class="subtitle">Discover the stories of Ilojo Bar</p>
</header>

<main>
	<section>
		<div class="scroll_cont">
			<img
				src="/assets/images/ilojo_bar_bw_2.png"
				alt="Colored Ilojo bar"
			/>
			<img
				id="background"
				src="/assets/images/ilojo_bar_bw_1.jpg"
				alt="Ilojo bar old with environment"
			/>
			<img
				id="color_building"
				src="/assets/images/ilojo_bar_bw_2.png"
				alt="Colored Ilojo bar"
			/>
			<img
				id="overlay"
				src="/assets/images/ilojo_bar_bw_3.png"
				alt="Ilojo bar old with environment"
			/>
		</div>
	</section>
</main>

<style>
	header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0;
	}

	header p {
		margin: 1.4em 1em;
		font-size: 1.4em;
		text-shadow: 0 0 5px rgb(0 0 0 / 0.4);
		text-align: center;
	}

	header p  {
		display: inline-block;
		overflow: hidden;
		padding: 5px 5px;
	}

	header img {
		height: 5.5em;
		width: auto;
		margin-top: 3em;
		filter: drop-shadow(0px 0px 5px rgb(0 0 0 / 0.4));
		transform-origin: top right;
	}

	main {
		padding: 0;
		overflow: hidden;
	}
	section {
		background-image: url('/assets/images/bg-red.webp');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		height: 100vh;
		width: 100vw;
		position: relative;
	}

	.scroll_cont {
		transform: scale(1.6);
		transform-origin: 86% 50%;
		height: 100%;
	}

	section img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 69% center;
		display: block;
		position: absolute;
	}

	#overlay {
		transform-origin: 80% 50%;
	}

	#background,
	#overlay,
	#color_building {
		opacity: 0;
	}
</style>
