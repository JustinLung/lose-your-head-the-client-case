<script lang="ts">
	import '../styles/style.css';
	import Header from '$lib/components/Header.svelte';
	import BigFooter from 'ilojo-bar-components/components/BigFooter.svelte';
	// import Footer from '$lib/components/Footer.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Header>
	<a data-sveltekit-reload href="/" class="nav-link">Home</a>
	{#each data.stories as story}
		<a data-sveltekit-reload href="/stories/{story.id}" class="nav-link">{story.title}</a>
	{/each}
</Header>
<main>
	<slot />
</main>
<BackToTop />
<BigFooter companyName="Legacy"/>

<style>
	main {
		max-width: 80rem;
		margin: 0 auto;
		padding: 2rem 0;
	}

	.nav-link {
		position: relative;
		color: var(--color-white);
		text-decoration: none;
		font-size: 1.5rem;
	}

	.nav-link:hover {
		color: var(--color-light-red);
	}

	@media (max-width: 80rem) {
		main {
			padding: 2rem 1rem;
		}
	}
</style>
