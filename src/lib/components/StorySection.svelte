<section class="stories">
	<h1 class="stories__title">Discover Untold Stories</h1>
	<div class="stories__container">
		<slot />
	</div>
</section>

<style>
	.stories__title {
		font-size: 3rem;
		text-align: center;
		margin: 2rem 0;
	}

	.stories__container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	@media (max-width: 50rem) {
		.stories__title {
			font-size: 2rem;
			margin-top: 1rem;
		}
	}
</style>
