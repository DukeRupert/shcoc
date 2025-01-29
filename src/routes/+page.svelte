<script>
	import Hero from '$lib/hero.svelte';
    import Location from '$lib/location.svelte';
	import WhatToExpect from '$lib/whattoexpect.svelte'

	const siteName = "South Hills Church of Christ";
	const siteUrl = "https://southhillscoc.org";
</script>

<svelte:head>
  <!-- Essential Meta Tags -->
  <title>South Hills Church of Christ | A Welcoming Christian Community in Helena, MT</title>
  <meta name="description" content="We are a family of Jesus-followers in Helena, Montana. Join us Sundays at 10:00 AM for Bible-focused worship, community, and children's programs. All are welcome!" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={siteUrl} />
  <meta property="og:title" content="South Hills Church of Christ - Helena, MT" />
  <meta property="og:description" content="Join our welcoming church family in Helena for worship, community, and spiritual growth. Sunday service at 10:00 AM. Children's programs available." />
  <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={siteUrl} />
  <meta name="twitter:title" content="South Hills Church of Christ - Helena, MT" />
  <meta name="twitter:description" content="Join our welcoming church family in Helena for worship, community, and spiritual growth. Sunday service at 10:00 AM. Children's programs available." />
  <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
  
  <!-- Additional Meta Information -->
  <meta name="keywords" content="church helena mt, christian church helena, bible study helena, worship service helena, church community montana" />
  <meta name="author" content="South Hills Church of Christ" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
  
 <!-- Local Business Schema -->
<script type="application/ld+json">
	{
	  "@context": "https://schema.org",
	  "@type": "Church",
	  "name": "South Hills Church of Christ",
	  "image": "${siteUrl}/og-image.jpg",
	  "description": "A welcoming Christian community in Helena, Montana focused on Bible-based teaching and worship.",
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
	  "url": "${siteUrl}",
	  "telephone": "+14064428950",
	  "openingHoursSpecification": {
		"@type": "OpeningHoursSpecification",
		"dayOfWeek": "Sunday",
		"opens": "10:00",
		"closes": "11:30"
	  }
	}
  </script>
</svelte:head>

<Hero />
<Location />
<WhatToExpect imageUrl="https://res.cloudinary.com/rr-wholesale/image/upload/v1710183600/South%20Hills%20CoC/DSC_07771_jjeagk.jpg" />
