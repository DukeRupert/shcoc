<!-- src/routes/visit/+page.svelte -->
<script>
	const siteName = 'South Hills Church of Christ';
	const siteUrl = 'https://southhillscoc.org';
</script>

<div class="bg-white">
	<!-- Page Header -->
	<div class="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
		<h1 class="text-4xl font-semibold text-gray-900 sm:text-5xl">Visit Us</h1>
	</div>

	<!-- Welcome Section -->
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="max-w-3xl">
			<p class="mb-6 text-lg text-gray-600">
				South Hills Church of Christ is a non-denominational church focused on Revealing God,
				Renewing Lives, and Rejoicing Together.
			</p>
			<p class="mb-6 text-lg text-gray-600">
				Join us every Sunday for Bible Class at 9:30am and Worship at 10:30am.
			</p>
			<p class="text-lg text-gray-600">
				<strong>For families – we <em>love</em> to hear the sounds of children and babies!</strong> Everyone
				is welcome! Join us when you are in Helena, MT!
			</p>
		</div>
	</div>

	<!-- What to Expect Section -->
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
		<h2 class="mb-12 text-3xl font-semibold text-gray-900">What does Sunday service look like?</h2>

		<!-- Service Steps -->
		<div class="space-y-12">
			<!-- Step 1: Singing -->
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
				<div class="relative h-64 overflow-hidden rounded-lg lg:h-auto">
					<img
						src="https://greatfallscoc.org/media/pages/about/doctrine/7b33f4ee96-1700942039/jackson-david-2hjzf52ur9k-unsplash-900x.webp"
						alt="Worship service"
						class="h-full w-full object-cover"
					/>
				</div>
				<div>
					<h3 class="mb-4 text-2xl font-semibold text-gray-900">1) It Starts With Singing</h3>
					<p class="text-lg text-gray-600">
						We begin our Sunday services each week with a time of singing spiritual songs. We do
						this in <strong><em>a cappella</em></strong> style, which means that we sing as a group,
						lifting our voices together, without instrumental accompaniment. The lyrics will be up on
						a screen, so join with us and sing out!
					</p>
				</div>
			</div>

			<!-- Step 2: Lord's Supper -->
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
				<div class="relative h-64 overflow-hidden rounded-lg lg:h-auto">
					<img
						src="https://greatfallscoc.org/media/pages/visit/5191b02c2c-1700944659/nico-smit-9uw_8avn8ma-unsplash-900x.webp"
						alt="Lord's Supper"
						class="h-full w-full object-cover"
					/>
				</div>
				<div>
					<h3 class="mb-4 text-2xl font-semibold text-gray-900">2) The Lord's Supper</h3>
					<p class="text-lg text-gray-600">
						After singing, we recognize a tradition that reminds us of Jesus. After a brief message
						on Jesus, we will pass trays with unleavened bread and small cups of grape juice, which
						you may eat and drink immediately as you pass the tray.
					</p>
				</div>
			</div>

			<!-- Step 3: Sermon -->
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
				<div class="relative h-64 overflow-hidden rounded-lg lg:h-auto">
					<img
						src="https://greatfallscoc.org/media/pages/visit/52ccf2b86d-1700537454/hero-900x.webp"
						alt="Sermon"
						class="h-full w-full object-cover"
					/>
				</div>
				<div>
					<h3 class="mb-4 text-2xl font-semibold text-gray-900">3) The Sermon</h3>
					<p class="text-lg text-gray-600">
						After we recognize The Lord's Supper, our minister will direct us in a Bible-based,
						challenging, and relevant study of God's Word. Sit back, lend your ears, and learn. The
						sermon will be 20 to 30 minutes long.
					</p>
				</div>
			</div>

			<!-- Step 4: Fellowship -->
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
				<div class="relative h-64 overflow-hidden rounded-lg lg:h-auto">
					<img
						src="https://greatfallscoc.org/media/pages/visit/34b6354886-1705105924/8j5a3927-900x.webp"
						alt="Fellowship"
						class="h-full w-full object-cover"
					/>
				</div>
				<div>
					<h3 class="mb-4 text-2xl font-semibold text-gray-900">4) Fellowship</h3>
					<p class="text-lg text-gray-600">
						Once the sermon is concluded, we are dismissed for the week. For many of us, what
						follows is a time of fellowship with our friends, checking-in to see how the week went,
						and hatching plans for the week to come.
					</p>
				</div>
			</div>
		</div>

		<p class="mt-12 text-center text-2xl text-gray-900">And that's a Sunday morning!</p>
	</div>

	<!-- Safety Section -->
	<div class="bg-violet-900 text-white">
		<div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
			<h2 class="mb-4 text-3xl font-semibold">Safety and Security</h2>
			<p class="mb-6 text-lg">
				Your safety is important to us. Our team works diligently to maintain a secure environment
				during services, with special attention to protecting our children and families.
			</p>
		</div>
	</div>

	<!-- Next Steps Section -->
	<div class="bg-violet-50">
		<div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
				<div>
					<h2 class="mb-4 text-3xl font-semibold text-gray-900">Next Steps</h2>
					<p class="mb-6 text-lg text-gray-600">
						When you are ready to take your next steps into christianity, join one of our
						<strong>Compass</strong> classes to get the low-down on what a life with Christ looks like!
					</p>
					<a
						href="/ministries/compass"
						class="inline-block rounded-md bg-violet-600 px-4 py-2 text-base font-semibold text-white hover:bg-violet-700"
					>
						Compass Class
					</a>
				</div>
				<div class="relative h-64 overflow-hidden rounded-lg lg:h-auto">
					<img
						src="https://greatfallscoc.org/media/pages/visit/0c052d5868-1705105402/8j5a3801-900x.webp"
						alt="Next Steps"
						class="h-full w-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<svelte:head>
	<!-- Essential Meta Tags -->
	<title>Visit Us | Sunday Services at South Hills Church of Christ in Helena, MT</title>
	<meta
		name="description"
		content="Join us Sundays for Bible Class (9:30 AM) and Worship (10:30 AM). Experience a cappella singing, communion, Bible-based teaching, and warm fellowship. Family-friendly, children welcome!"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${siteUrl}/visit`} />
	<meta property="og:title" content="Visit South Hills Church of Christ - What to Expect" />
	<meta
		property="og:description"
		content="Join our Sunday services in Helena, MT. Featuring a cappella worship, communion, and Bible teaching in a welcoming environment. Bible Class 9:30 AM, Worship 10:30 AM."
	/>
	<meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={`${siteUrl}/visit`} />
	<meta name="twitter:title" content="Visit South Hills Church of Christ - What to Expect" />
	<meta
		name="twitter:description"
		content="Join our Sunday services in Helena, MT. Featuring a cappella worship, communion, and Bible teaching in a welcoming environment. Bible Class 9:30 AM, Worship 10:30 AM."
	/>
	<meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />

	<!-- Additional Meta Information -->
	<meta
		name="keywords"
		content="church service helena, sunday worship montana, family friendly church helena, a cappella worship, bible study helena"
	/>

	<!-- Service Times Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Church",
			"name": "South Hills Church of Christ",
			"image": "${siteUrl}/og-image.jpg",
			"description": "A non-denominational church focused on Revealing God, Renewing Lives, and Rejoicing Together. Features a cappella worship, communion, and Bible-based teaching.",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "2294 Deerfield Ln",
				"addressLocality": "Helena",
				"addressRegion": "MT",
				"postalCode": "59601",
				"addressCountry": "US"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": 46.570233,
				"longitude": -111.9714227
			},
			"url": "${siteUrl}/visit",
			"telephone": "+14064428950",
			"openingHoursSpecification": [
				{
					"@type": "OpeningHoursSpecification",
					"dayOfWeek": "Sunday",
					"opens": "09:30",
					"closes": "10:15",
					"name": "Bible Class"
				},
				{
					"@type": "OpeningHoursSpecification",
					"dayOfWeek": "Sunday",
					"opens": "10:30",
					"closes": "11:30",
					"name": "Worship Service"
				}
			],
			"additionalProperty": [
				{
					"@type": "PropertyValue",
					"name": "Worship Style",
					"value": "A cappella singing"
				},
				{
					"@type": "PropertyValue",
					"name": "Family Friendly",
					"value": "Yes - Children welcome"
				},
				{
					"@type": "PropertyValue",
					"name": "Service Components",
					"value": "Singing, Lord's Supper, Biblical sermon, Fellowship"
				}
			]
		}
	</script>
</svelte:head>
