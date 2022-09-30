<header class="header">
	<a href="/" class="header__link">
		<img
			src="/assets/images/logo-ilojo-bar.webp"
			alt="Logo Ilojo Bar"
			class="header__link__image"
		/>
	</a>
	<p class="header__text">Discover Untold Stories</p>
</header>

<style>
	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 2rem 5rem;
	}

	.header__link__image {
		width: 10rem;
	}

	@media (max-width: 50rem) {
		.header {
			padding: 2rem 1rem;
		}

		.header__link__image {
			width: 8rem;
		}

		.header__text {
			display: none;
		}
	}
</style>
