<script lang="ts">
	import StorySection from '$lib/components/StorySection.svelte';
	import Story from '$lib/components/Story.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const pageTitle = 'Stories';
</script>

<svelte:head>
	<title>Ilojo Bar - {pageTitle}</title>
</svelte:head>

<StorySection>
	{#each data.stories as story}
		<Story
			storyTitle={story.title}
			storyImage={story.thumbnail.url}
			storyLink="/stories/{story.id}"
		/>
	{/each}
</StorySection>
