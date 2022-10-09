<script lang="ts">
	import { slide } from 'svelte/transition';
	let y: any;
</script>

<svelte:window bind:scrollY={y} />
{#if y >= 80}
	<a href="#" class="scroll-to-top-link" transition:slide>
		<img src="/assets/images/arrow.png" alt="Scroll Back To Top" class="scroll-to-top-link__img" />
	</a>
{/if}

<style>
	.scroll-to-top-link {
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

	.scroll-to-top-link__img {
		width: 100%;
	}
</style>
