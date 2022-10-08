<script lang="ts">
	import { slide } from 'svelte/transition';
	let y: any;
</script>

<svelte:window bind:scrollY={y} />
{#if y >= 80}
	<a href="#" transition:slide>
		<img src="/assets/images/arrow.png" alt="Scroll Back To Top" />
	</a>
{/if}

<style>
	a {
		position: fixed;
		bottom: 2.5em;
		right: 2.5em;
		height: 3em;
		width: 3em;
		transform: rotate(-90deg);
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	a > img {
		width: 100%;
	}
</style>
