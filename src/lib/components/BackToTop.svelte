<script lang="ts">
	import { slide } from 'svelte/transition';
	let y: any;
</script>

<svelte:window bind:scrollY={y} />
{#if y >= 80}
	<a href="#" transition:slide>
		<img src="/assets/images/arrow.png" alt="Scroll to Top" />
	</a>
{/if}

<style>
	a {
		position: fixed;
		bottom: 1em;
		right: 1em;
		height: 5em;
		width: 5em;
		transform: rotate(-90deg);
		border-radius: 0.5rem;
		cursor: pointer;
		color: var(--color-white);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	a > img {
		width: 70%;
	}

	img:after {
		content: 'Back To Top';
	}
</style>
