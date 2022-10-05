<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { story } = data.data;
</script>

<h1>{story.title}</h1>
{@html story.content.html}
