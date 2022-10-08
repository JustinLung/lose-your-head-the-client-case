<script lang="ts">
	import '../styles/style.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Ilojo Bar</title>
	<style>
		@font-face {
			font-family: 'Austral-Sans_Stamp-Regular';
			font-display: swap;
			src: url('/assets/fonts/AustralSansStamp-Regular.woff2') format('woff2'),
				url('/assets/fonts/AustralSansStamp-Regular.woff') format('woff');
			font-weight: normal;
			font-style: normal;
			font-display: swap;
		}

		:root {
			--color-white: #ffffff;
			--color-black: #000000;
			--color-red: #8c0500;
			--color-light-red: #da2a2a;
			--box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
		}
	</style>
</svelte:head>
<Header>
	<a href="/" class="header__nav--link">Home</a>
	{#each data.stories as story}
		<a href="stories/{story.id}" class="header__nav--link">{story.title}</a>
	{/each}
</Header>
<main>
	<slot />
</main>
<BackToTop />
<Footer />

<style>
	main {
		max-width: 80rem;
		margin: 0 auto;
		padding: 2rem 0;
	}

	a {
		position: relative;
		color: var(--color-white);
		text-decoration: none;
		font-size: 1.5rem;
	}

	a:hover {
		color: var(--color-light-red);
	}

	@media (max-width: 80rem) {
		main {
			padding: 2rem 1rem;
		}
	}
</style>
