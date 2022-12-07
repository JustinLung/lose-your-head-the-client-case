import type { LayoutLoad } from './$types';
import { client } from '../vendors/utils';
import { storyId } from '$lib/stores/store';
export const prerender = true;

export const load: LayoutLoad = async ({ fetch }) => {
	const query = `
    query Stories {
        stories {
            id
            title
        }
}`;
	const data = await client({ query, fetch });
	const ids = data.stories.map((story: any) => story.id);

	storyId.set(ids);

	return {
		stories: data.stories
	};
};
