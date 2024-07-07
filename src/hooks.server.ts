// hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    console.log(event.url.pathname)
	if (event.url.pathname !== '/') {
		// While under construction route all urls to root path
		throw redirect(302, '/');
	}

	return await resolve(event);
};
