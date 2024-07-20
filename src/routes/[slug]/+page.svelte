<script lang="ts">
	import type { PageData } from './$types';
	import Page_Header from '$lib/directus/components/Page_Header.svelte';
	import Blocks from '$lib/directus/components/Blocks.svelte';
    import UnderConstruction from '$lib/under_construction.svelte';

	export let data: PageData;
	const { page } = data;
	// console.log(page)
</script>

<Page_Header eyebrow={page?.eyebrow ?? ''} title={page.title} description={page?.description ?? ''}>
	{#if page.blocks && page.blocks.length > 0}
		<Blocks data={page.blocks} />
	{:else}
		<UnderConstruction />
	{/if}
</Page_Header>
