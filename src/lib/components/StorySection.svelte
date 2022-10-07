<section>
	<h1>Discover Untold Stories</h1>
	<div>
		<slot />
	</div>
</section>

<style>
	h1 {
		font-size: 3rem;
		margin: 2rem 0;
		text-align: center;
	}

	div {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	@media (max-width: 50rem) {
		h1 {
			font-size: 2rem;
		}
	}
</style>
