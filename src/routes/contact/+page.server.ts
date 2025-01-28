import type { Actions } from './$types.js';
import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		// Send email
		const notify = await event.fetch('/api/postmark', {
			method: 'POST',
			body: JSON.stringify({
				name: form.data.name,
				email: form.data.email,
				tel: form.data?.tel ?? '',
				message: form.data.message
			})
		});

		console.log(notify);

		if (notify.ok) {
			console.log(notify);
			throw redirect(301, '/success');
		}

		return message(form, { type: 'error', text: notify.statusText });
	}
};