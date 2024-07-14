// hooks.server.ts
import type { Handle } from '@sveltejs/kit';
// import { redirect } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    console.log(event.url.pathname)
	// if (event.url.pathname !== '/') {
	// 	// While under construction route all urls to root path
	// 	throw redirect(302, '/');
	// }

	// Apply CORS header for API routes
  
    // Required for CORS to work
    // if(event.request.method === 'OPTIONS') {
    //   return new Response(null, {
    //     headers: {
    //       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Headers': '*',
    //     }
    //   });
    // }
  

  const response = await resolve(event);
  
        // response.headers.append('Access-Control-Allow-Origin', `*`);
  
  return response;
};
