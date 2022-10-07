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

<section>
	<h1>Discover Untold Stories</h1>
	<div>
		<slot />
	</div>
</section>

<style>
	h1 {
		font-size: 3rem;
		text-align: center;
		opacity: 0;
	}

	div {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	@media (max-width: 50rem) {
		h1 {
			font-size: 2rem;
			margin-top: 1rem;
		}
	}
</style>
