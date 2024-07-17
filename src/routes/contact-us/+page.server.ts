import type { PageServerLoad, Actions } from './$types.js';
import { fail, error } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';

export const load: PageServerLoad = async () => {
	const path = '/contact-us';
	const res = await client.request(
		readItems('shcoc_page', {
			filter: {
				slug: {
					_eq: path
				},
                status: {
                    _eq: 'published'
                }
			},
			fields: ['*', 'seo.*', { blocks: ['collection', { item: ['*'] }] }]
		})
	);
	if (!res || res.length < 1)
		throw error(404, { message: `Page with the following slug was not found:  [ ${path} ]` });
	const page = res[0];
	return {
        page,
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
        console.log('Fixme: Send mail')
        console.log(form)
		return {
			form
		};
	}
};
