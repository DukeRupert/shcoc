<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { SITE_DATA } from '$lib/global';
	import Hero from './(components)/hero.svelte';
	import Welcome from './(components)/welcome.svelte';

	const seo = {
		title: `${SITE_DATA.name}, ${SITE_DATA.address.city} ${SITE_DATA.address.state} | ${SITE_DATA.slogan}`,
		description:
			'A community of faith striving to love God & neighbor. Belong, connect, call home. Love God, Love Others.'
	};

	const hero = {
		title: 'South Hills Church of Christ: A Community of Discipleship',
		subtext:
			'We believe the church extends beyond our building, shaping our lives and our community. Join us in deepening our faith, strengthening our fellowship, and expressing our love for God through worship.'
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
			alt: 'A moment of fellowship inside the sanctuary at South Hills Church of Christ'
		}
	};
</script>

<SvelteSeo {...seo} />
<Hero {...hero} />
<Welcome {...welcome} />
