<script lang="ts">
	import { page } from '$app/stores';
</script>

<section>
	<h1>Whoops, Something went wrong.</h1>
	{#if $page.status === 404}
		<p>The page you are looking for was moved, removed, renamed or might never exited</p>
		<span>{$page.status}</span>
		<a href="/">Go back to stories page</a>
	{:else}
		<p>
			It looks like there is something wrong in our end. Please come back later to chack our status.
		</p>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		text-align: center;
		min-height: 75vh;
	}

	h1 {
		font-size: 2rem;
	}

	span {
		font-size: 7rem;
	}

	p {
		max-width: 30rem;
		font-size: 1.2rem;
	}

	a {
		color: var(--color-white);
		font-size: 1.3rem;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	@media (max-width: 50rem) {
		section {
			height: 60vh;
		}

		h1 {
			font-size: 1.7rem;
		}

		p {
			font-size: 1rem;
		}
	}
</style>
