import type { PageLoad } from './$types';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';
import { error } from '@sveltejs/kit';

export const load = (async () => {
	const path = '/';

	const res = await client.request(
		readItems('shcoc_page', {
			filter: {
				slug: {
					_eq: path
				}
			},
			fields: ['*', { blocks: ['collection', { item: ['*', 'logos.*'] }] }]
		})
	);
	if (!res || res.length < 1)
		throw error(404, { message: `Page with the following slug was found:  [ ${path} ]` });
	const page = res[0];
	return {
		page
	};
}) satisfies PageLoad;