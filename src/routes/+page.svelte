<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { SITE_DATA } from '$lib/global';
	import Hero from './(components)/hero.svelte';

	const seo = {
		title: `${SITE_DATA.name}, ${SITE_DATA.address.city} ${SITE_DATA.address.state} | ${SITE_DATA.slogan}`,
		description:
			'A community of faith striving to love God & neighbor. Belong, connect, call home. Love God, Love Others.'
	};

	const hero = {
		title: '',
		subtext: ''
	};
</script>

<SvelteSeo {...seo} />
<Hero />
