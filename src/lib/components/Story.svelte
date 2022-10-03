<script lang="ts">
	export let storyTitle: string = 'Story Image';
	export let storyImage: string;
</script>

<a href="/">
	<figure class="frame">
		<img src={storyImage} alt={storyTitle} class="frame__image" />
	</figure>
</a>

<style>
	a {
		position: relative;
		text-decoration: none;
		width: 100%;
	}

	.frame {
		background-image: url('/assets/images/image-frame.png');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		margin: 0;
		aspect-ratio: 127/155;
		position: relative;
		overflow: hidden;
	}

	.frame__image {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 95%;
		height: 95%;
		object-fit: cover;
		aspect-ratio: 127/155;
		z-index: -1;
		position: relative;
	}

	@media (max-width: 40rem) {
		.frame {
			margin: 0 auto;
		}
	}
</style>
