<script lang="ts">
	import '../styles/style.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Header>
	<a data-sveltekit-reload href="/" class="nav-link">Home</a>
	{#each data.stories as story}
		<a data-sveltekit-reload href="/stories/{story.id}" class="nav-link">{story.title}</a>
	{/each}
</Header>
<slot />

<Footer companyName="Legacy">
	{#each data.stories as story}
		<a data-sveltekit-reload href="/stories/{story.id}" class="footer-link">{story.title}</a>
	{/each}
</Footer>

<style>
	.nav-link {
		position: relative;
		color: var(--color-white);
		text-decoration: none;
		font-size: 1.5rem;
	}

	.nav-link:hover {
		color: var(--color-light-red);
	}

	.footer-link {
		text-decoration: none;
		color: var(--color-white);
		font-size: 1.2rem;
		line-height: 1.5;
		text-decoration: none;
		width: fit-content;
		max-width: 19rem;
	}

	.footer-link::after {
		content: '';
		display: block;
		width: 100%;
		transform: scaleX(0);
		height: 3px;
		left: 0;
		background-color: var(--color-white);
		transform-origin: bottom left;
		transition: transform 0.5s;
	}

	.footer-link:hover::after {
		transform: scaleX(1);
	}
</style>
