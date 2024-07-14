import type { PageLoad } from './$types';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';
import { error } from '@sveltejs/kit';

export const load = (async () => {
	console.log('[slug] load function');
	const path = '/';
	const res = await client.request(readItems('shcoc_page', { fields: ['*', { blocks: [ 'collection', { item: ['*']} ]}]}));
    console.log(res)
	const page = res.find((el) => el.slug === path);
	if (page === undefined)
		throw error(404, { message: `Page with the following slug was found:  [ ${path} ]` });
	if (page) console.log('success');
	return {
		page
	};
}) satisfies PageLoad;
