<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { story } = data.data;
</script>

<section>
	<h1>{story.title}</h1>
	<p>Written By: {story.createdBy.name}</p>
	{@html story.content.html}
</section>

<style>
	h1 {
		font-size: 1.5rem;
	}

	p {
		font-size: 1.2rem;
		font-weight: bold;
	}
</style>
