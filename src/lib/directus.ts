import { createDirectus, rest } from '@directus/sdk';
import { PUBLIC_DIRECTUS_ENDPOINT } from "$env/static/public"

interface Page {
    id: number;
    title: string;
    description: string;
    slug: string;
    blocks: object;
}

interface Schema {
    page_shcoc: Page[]
}

const endpoint = PUBLIC_DIRECTUS_ENDPOINT || ''
if(!endpoint) console.log('ERROR: endpoint not provided for Directus instance')

// Client with REST support
const client = createDirectus<Schema>(endpoint).with(rest());

export default client;