<script lang="ts">
	import type { PageData } from './$types';
	// import SvelteSeo from 'svelte-seo';
	import { SITE_DATA } from '$lib/global';
	import Hero from './(components)/hero.svelte';
	import Blocks from '../lib/directus/components/Blocks.svelte';
	import Welcome from './(components)/welcome.svelte';
	import Ministry from './(components)/ministry.svelte';
	import Faq from './(components)/faq.svelte';
	import Cta from './(components)/cta.svelte';

	export let data: PageData;
	const { page } = data;
	console.log(page)

	const seo = {
		title: `${SITE_DATA.name}, ${SITE_DATA.address.city} ${SITE_DATA.address.state} | ${SITE_DATA.slogan}`,
		description:
			'A community of faith striving to love God & neighbor. Belong, connect, call home. Love God, Love Others.'
	};

	const hero = {
		title: 'South Hills Church of Christ: A Community of Discipleship',
		subtext:
			'Our site is currently under construction. If you would like to livestream our worship service or view past worship services please click the button below.'
	};

	const welcome = {
		content: {
			eyebrow: 'Welcome',
			title: 'Discover South Hills Church',
			subtext:
				"If you're visiting us for the first time, here's what you can expect on a Sunday morning:"
		},
		features: [
			{
				title: 'Bible-focused Learning',
				text: 'Start your morning with engaging Bible Class at 9:30 AM.'
			},
			{
				title: 'Meaningful Worship',
				text: 'Join us for our worship service at 10:30 AM for passionate music and verse-by-verse teaching from the Bible.'
			},
			{
				title: "Children's Ministries",
				text: "We offer a children's bible class at 9:30am and children's church at 10:30 for those children too young to learn from the sermon."
			}
		],
		image: {
			src: 'https://res.cloudinary.com/rr-wholesale/image/upload/v1710183600/South%20Hills%20CoC/DSC_07771_jjeagk.jpg',
			alt: 'A moment of fellowship inside the sanctuary at South Hills Church of Christ',
			width: 2000,
			height: 1333
		}
	};

	const ministry = {
		content: {
			title: 'Find Purpose. Change Lives.',
			primary:
				"Our diverse ministries offer ways to make a difference locally and globally. Join our community in extending God's love.",
			subtext: 'Explore opportunities for service, spiritual growth, and connection. We offer ministries for children, local outreach, global missions, and more. Find your place to make a difference.'
		},
		images: [

		]
	};
</script>

<!-- <SvelteSeo {...seo} /> -->
<Blocks data={page.blocks} />
<!-- <Welcome {...welcome} />
<Ministry {...ministry} />
<Faq />
<Cta /> -->
