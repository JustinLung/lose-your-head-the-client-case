<script lang="ts">
	import '../styles/style.css';
	import '../styles/theme.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header>
	<a href="/" class="header__nav--link">Home</a>
	<a href="/" class="header__nav--link">About</a>
	<a href="/" class="header__nav--link">Contact</a>
</Header>
<main>
	<slot />
</main>
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
		padding: 0.5rem 0;
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
