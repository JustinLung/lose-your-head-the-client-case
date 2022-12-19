<script lang="ts">
	export let companyName: string;
</script>

<footer>
	<section class="footer-copyright">
		<a href="/">
			<img
				src="/assets/images/logo-ilojo-bar.webp"
				alt="Logo Ilojo Bar"
				width="200"
				height="auto"
				loading="lazy"
			/>
		</a>
		<p>&#169; {new Date().getFullYear()} {companyName}</p>
	</section>

	<section class="footer-links">
		<h2>Stories</h2>
		<slot />
	</section>

	<section class="footer-links-pages">
		<h2 class="footer-links__header">Menu</h2>
		<a href="/" class="footer-link">Home</a>
		<a href="/" class="footer-link">Discover Stories</a>
	</section>
</footer>

<style>
	footer {
		padding: 3em;
		color: var(--color-white);
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		gap: 0;
		background-color: var(--color-black);
	}

	a {
		text-decoration: none;
		color: var(--color-white);
		font-size: 1.2rem;
		line-height: 1.5;
		text-decoration: none;
		width: fit-content;
	}

	.footer-link::after {
		content: '';
		display: block;
		width: 100%;
		transform: scaleX(0);
		height: 3px;
		left: 0;
		background-color: var(--color-white);
		transform-origin: bottom left;
		transition: transform 0.5s;
	}

	.footer-link:hover::after {
		transform: scaleX(1);
	}

	.footer-copyright {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	.footer-links {
		display: none;
	}

	.footer-links__header {
		margin-bottom: 0.25em;
	}

	@media (min-width: 70em) {
		footer {
			text-align: left;
			display: flex;
			justify-content: center;
			flex-direction: row;
			gap: 2em;
		}

		.footer-links-pages,
		.footer-links {
			display: flex;
			flex-direction: column;
			align-items: baseline;
		}

		.footer-links {
			gap: .5rem;
		}
	}
</style>
