<button class="button" on:click>
	<slot />
</button>

<style>
	.button {
		border: none;
		background: linear-gradient(40deg, rgba(195, 165, 128, 1), rgba(0, 0, 0, 0)),
			url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
		color: var(--color-white);
		box-shadow: var(--box-shadow);
		border-radius: 0.7rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		cursor: pointer;
		transition: 0.3s ease-in-out;
	}

	.button:hover {
		transform: scale(1.1);
	}
</style>
