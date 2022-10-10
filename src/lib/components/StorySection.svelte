<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.fromTo(
			'h1',
			{ opacity: 0, y: -50 },
			{ opacity: 1, y: 0, duration: 1.3, ease: 'bounce.out' }
		);
	});
</script>

<section class="stories">
	<h1 class="stories__title">Discover Untold Stories</h1>
	<div class="stories__container">
		<slot />
	</div>
</section>

<style>
	.stories__title {
		font-size: 3rem;
		text-align: center;
	}

	.stories__container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	@media (max-width: 50rem) {
		.stories__title {
			font-size: 2rem;
			margin-top: 1rem;
		}
	}
</style>
