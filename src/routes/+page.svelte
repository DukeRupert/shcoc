<script lang="ts">
	import type { PageData } from './$types';
	// import SvelteSeo from 'svelte-seo';
	import { SITE_DATA } from '$lib/global';
	import Blocks from '$lib/directus/components/Blocks.svelte';

	export let data: PageData;
	const { page } = data;
	// console.log(page)

	const seo = {
		title: `${SITE_DATA.name}, ${SITE_DATA.address.city} ${SITE_DATA.address.state} | ${SITE_DATA.slogan}`,
		description:
			'A community of faith striving to love God & neighbor. Belong, connect, call home. Love God, Love Others.'
	};

</script>

<!-- <SvelteSeo {...seo} /> -->
<Blocks data={page.blocks} />
