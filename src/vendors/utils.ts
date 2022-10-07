import { HYPGRAPH_ENDPOINT } from '$env/static/private';

export async function client(query: string, variables?: object) {
	const response = await fetch(HYPGRAPH_ENDPOINT, {
		method: 'POST',
		body: JSON.stringify({ query, variables })
	});

	const { data } = await response.json();

	return data;
}
