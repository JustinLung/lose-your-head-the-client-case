<script lang="ts">
	// import '../styles/style.css';
	// import '../styles/theme.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<link rel="stylesheet" href="../src/styles/style.css" />
	<link rel="stylesheet" href="../src/styles/theme.css" />
	<title>Ilojo Bar</title>
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
