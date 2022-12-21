<script lang="ts">
	export let storyTitle: string = 'Story Image';
	export let storyImage: string;
	export let storyLink: string;
</script>

<article class="story">
	<a href={storyLink} class="story__link" data-sveltekit-reload>
		<figure class="story__link__frame">
			<div class="story__link__frame-content">
				<img
					src={storyImage}
					alt={storyTitle}
					class="story__link__frame-image"
					width="244"
					height="250"
				/>
			</div>
			<div class="window-doors-container">
				<img src="/assets/images/window_L.png" alt="Window Left" class="window-door window_L" />
				<img src="/assets/images/window_R.png" alt="Window Left" class="window-door window_R" />
			</div>
		</figure>
		<div class="story__link__plate">
			<h2 class="story__link__plate-title">{storyTitle}</h2>
		</div>
	</a>
</article>

<style>
	.story__link {
		text-decoration: none;
	}

	.window-door {
		position: absolute;
		top: 0;
		left: 0;
		transition: transform 1s ease, filter 1s ease;
	}

	.window_L {
		transform-origin: 16.28%;
	}

	.window_R {
		transform-origin: 86.04%;
	}

	.story {
		position: relative;
		max-width: 20rem;
		width: 100%;
		margin: var(--top) 0 0;
		animation-delay: var(--delay);
		transform-origin: top center;
	}

	.story:hover .window_L {
		transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-110deg);
		-webkit-filter: drop-shadow(10px 6px 5px rgba(0, 0, 0, 0.2));
		filter: drop-shadow(10px 6px 5px rgba(0, 0, 0, 0.2));
	}

	.story:hover .window_R {
		transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(110deg);
		-webkit-filter: drop-shadow(-10px 6px 5px rgba(0, 0, 0, 0.2));
		filter: drop-shadow(-10px 6px 5px rgba(0, 0, 0, 0.2));
	}

	.story__link__frame {
		background-image: url('/assets/images/window_bg.webp');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		margin: 0;
		aspect-ratio: 354/525;
		position: relative;
		overflow: hidden;
		max-width: 25rem;
	}

	.window-doors-container {
		width: 71%;
		height: 51%;
		position: absolute;
		top: 68%;
		left: 32%;
		transform: translate(-50%, -150%);
		z-index: 2;
	}

	.story__link__frame-content {
		width: 71%;
		height: 51%;
		position: absolute;
		top: 70%;
		left: 51%;
		transform: translate(-50%, -50%);
		z-index: -1;
	}

	.story__link__frame-image {
		width: 100%;
		object-fit: cover;
		aspect-ratio: 244/261;
		z-index: -1;
	}

	.story__link__plate {
		position: relative;
		margin: 0.5rem auto 0;
		width: 70%;
		border-radius: 0.7rem;
		height: 5rem;
		filter: contrast(110%) brightness(100%);
		background: linear-gradient(40deg, rgba(195, 165, 128, 1), rgba(0, 0, 0, 0)),
			url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
		color: var(--color-white);
		box-shadow: var(--box-shadow);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.story__link__plate-title {
		font-size: 1rem;
		text-decoration: none;
		text-align: center;
	}

	@media (max-width: 40rem) {
		.story__link__frame {
			margin: 0 auto;
		}

		.story {
			margin: 1rem 0;
		}
	}
</style>
