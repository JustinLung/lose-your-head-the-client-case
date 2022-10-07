<script lang="ts">
	export let storyTitle: string = 'Story Image';
	export let storyImage: string;
	export let storyLink: string;
</script>

<article class="story">
	<a href={storyLink} class="story__link">
		<figure class="frame">
			<div class="frame-content">
				<img src={storyImage} alt={storyTitle} class="frame__image" />
			</div>
		</figure>
		<div class="gold-plate">
			<img src="/assets/images/gold-title.png" alt="Gold Plate" class="gold-plate__image" />
			<h3 class="gold-plate__title">{storyTitle}</h3>
		</div>
	</a>
</article>

<style>
	.story {
		max-width: 25rem;
		width: 100%;
	}
	.frame {
		background-image: url('/assets/images/window_bg.webp');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		box-shadow: var(--box-shadow);
		margin: 0;
		aspect-ratio: 354/525;
		position: relative;
		overflow: hidden;
		max-width: 25rem;
	}

	.frame-content {
		width: 71%;
		height: 51%;
		position: absolute;
		top: 70%;
		left: 51%;
		transform: translate(-50%, -50%);
		z-index: -1;
	}

	.frame__image {
		width: 100%;
		object-fit: cover;
		aspect-ratio: 244/261;
		z-index: -1;
	}

	.gold-plate {
		position: relative;
		margin: 0.5rem 0 0;
	}

	.gold-plate__title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		color: var(--color-black);
		max-width: 20rem;
		font-size: 1rem;
	}

	.gold-plate__image {
		position: relative;
		left: 50%;
		width: 80%;
		transform: translateX(-50%);
	}

	@media (max-width: 40rem) {
		.frame {
			margin: 0 auto;
		}
	}
</style>
