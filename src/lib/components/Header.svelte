<script lang="ts">
	import { fly } from 'svelte/transition';
	let isActive = false;
</script>

<header class="header">
	<a href="/" class="header__link">
		<img
			src="/assets/images/logo-ilojo-bar.webp"
			alt="Logo Ilojo Bar"
			class="header__link__image"
		/>
	</a>
	{#if isActive}
		<nav in:fly={{ x: 100 }} out:fly={{ opacity: 0, x: 100 }} class="header__nav">
			<slot />
		</nav>
	{/if}
	<button class="header__menu" on:click={() => (isActive = !isActive)}>
		<span class="header__menu-line" />
		<span class="header__menu-line" />
	</button>
</header>

<style>
	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		max-width: 80rem;
		margin: 0 auto;
		padding: 2rem 0 0;
	}

	.header__nav {
		position: fixed;
		top: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		padding-right: 5rem;
		font-size: 2rem;
		font-weight: bold;
		gap: 0.8rem;
		width: 20rem;
		height: 100vh;
		background-color: var(--color-black);
		overflow: hidden;
		z-index: 20;
	}

	.header__link__image {
		width: 10rem;
	}

	.header__menu {
		all: unset;
		position: relative;
		cursor: pointer;
		z-index: 30;
	}

	.header__menu:after {
		content: 'MENU';
	}

	.header__menu-line {
		display: block;
		width: 100%;
		height: 0.3rem;
		margin-bottom: 5px;
		position: relative;
		background-color: var(--color-white);
		border-radius: 6px;
		transform-origin: 0 0;
		transition: 0.4s;
	}

	@media (max-width: 80rem) {
		.header {
			padding: 2rem 1rem 0;
		}

		.header__link__image {
			width: 8rem;
		}

		.header__nav {
			padding: 0 1rem;
		}
	}
</style>
