import type { PageServerLoad } from './$types';
import { client } from '../vendors/utils';

export const load: PageServerLoad = async () => {
	const query = `
    query Stories {
        stories {
            id
            title
        }
}`;
	const data = await client(query);

	return {
		stories: data.stories
	};
};
