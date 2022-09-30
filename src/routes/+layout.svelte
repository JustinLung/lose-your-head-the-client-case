<script lang="ts">
	import '../styles/style.css';
	import '../styles/theme.css';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<main>
	<slot />
</main>

<style>
	main {
		padding: 2rem 5rem;
	}

	@media (max-width: 50rem) {
		main {
			padding: 2rem 1rem;
		}
	}
</style>
