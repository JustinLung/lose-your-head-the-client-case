<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	onMount(() => {
		gsap.to('.error__title', { opacity: 1, duration: 1.3, ease: 'bounce.out' });
		gsap.to('.error__message', { opacity: 1, duration: 1.3, delay: 0.3, ease: 'bounce.out' });
		gsap.to('.error__status', { opacity: 1, y: 0, duration: 1.3, delay: 0.6, ease: 'bounce.out' });
	});
</script>

<section class="error">
	<h1 class="error__title">Whoops, Something went wrong.</h1>
	{#if $page.status === 404}
		<p class="error__message">
			The page you are looking for was moved, removed, renamed or might never exited
		</p>
		<span class="error__status">{$page.status}</span>
		<a href="/" class="error__link">Go back to stories page</a>
	{:else}
		<p class="error__message">
			It looks like there is something wrong in our end. Please come back later to check our status.
		</p>
		<span class="error__status">{$page.status}</span>
	{/if}
</section>

<style>
	.error {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		text-align: center;
		min-height: 75vh;
	}

	.error__title {
		font-size: 2rem;
		opacity: 0;
	}

	.error__status {
		font-size: 7rem;
		opacity: 0;
		transform: translateY(-50px);
	}

	.error__message {
		max-width: 30rem;
		font-size: 1.2rem;
		opacity: 0;
	}

	.error__link {
		border: none;
		background: linear-gradient(40deg, rgba(195, 165, 128, 1), rgba(0, 0, 0, 0)),
			url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
		color: var(--color-white);
		box-shadow: var(--box-shadow);
		border-radius: 0.7rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		cursor: pointer;
		transition: 0.3s ease-in-out;
		text-decoration: none;
	}

	.error__link:hover {
		transform: scale(1.1);
	}

	@media (max-width: 50rem) {
		.error {
			height: 60vh;
		}

		.error__title {
			font-size: 1.7rem;
		}

		.error__message {
			font-size: 1rem;
		}
	}
</style>
