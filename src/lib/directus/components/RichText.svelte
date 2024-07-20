<script lang="ts">
	// import { PUBLIC_DIRECTUS_ENDPOINT } from '$env/static/public';
	import type { RichText } from '../types/block_richtext';
	export let data: RichText;
	const { content } = data;
	// const endpoint = PUBLIC_DIRECTUS_ENDPOINT + '/assets/';
	// const transforms = '?height=48';
</script>

<div class="py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto prose lg:prose-xl dark:prose-invert">
			{#if content}
				{@html content}
			{/if}
		</div>
	</div>
</div>
