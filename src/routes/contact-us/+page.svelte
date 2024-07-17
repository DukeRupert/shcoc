<script lang="ts">
	import type { PageData } from './$types';
	import Page_Header from '$lib/directus/components/Page_Header.svelte';
    import Form from './contact-us-form.svelte'

	export let data: PageData;
	const { page } = data;
	console.log(data);
</script>

<Page_Header eyebrow={page?.eyebrow ?? ''} title={page.title} description={page?.description ?? ''}>
	<Form data={data.form} />
</Page_Header>
