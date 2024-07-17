<script lang="ts">
	import type { PageData } from './$types';
	import Seo from '$lib/SEO.svelte';
	import Blocks from '$lib/directus/components/Blocks.svelte';

	export let data: PageData;
	console.log(data)
	const { site_settings, page } = data;
	const { seo, blocks } = page;
</script>

<Seo {seo} {site_settings} />
<Blocks data={blocks} />
