<script lang="ts">
  const siteName = "South Hills Church of Christ";
  const siteUrl = "https://southhillscoc.org";

  interface AboutSection {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image: string;
    imagePosition?: string;
    background?: string;
  }

  const sections: AboutSection[] = [
    {
      title: "Leadership",
      description: "We are blessed with an incredible team of talented and Godly leaders in our congregation. Meet some of the faces that have been working diligently for God's kingdom and God's purpose in our church.",
      buttonText: "Meet our team...",
      buttonLink: "/about/leadership",
      image: "https://res.cloudinary.com/rr-wholesale/image/upload/v1710183596/South%20Hills%20CoC/lance-love_w85tff.jpg",
    },
    {
      title: "Doctrine",
      description: "South Hills Church of Christ is a community pulling together to love God, to love His church, and to love the people He has created. We are a \"back to the Bible\" church and find unity by following the model that scripture describes for Christians and God's church.",
      buttonText: "More doctrine...",
      buttonLink: "/about/doctrine",
      image: "https://res.cloudinary.com/rr-wholesale/image/upload/v1710183605/South%20Hills%20CoC/DSC_1346_vxtuk0.jpg",
      background: "bg-violet-50"
    },
    {
      title: "History & Mission",
      description: "Founded in 2011, South Hills Church of Christ emerged from the unification of three Helena congregations - Rocky Mountain Church of Christ, Helena Church of Christ, and Big Sky Church of Christ. Through shared activities like youth missions and VBS, these congregations discovered the strength of working together. Today, we continue this spirit of unity as we grow together in faith and service to our Helena community.",
      buttonText: "History & mission",
      buttonLink: "/about/history-and-mission",
      image: "https://res.cloudinary.com/rr-wholesale/image/upload/v1710183605/South%20Hills%20CoC/DSC_1346_vxtuk0.jpg",
      imagePosition: "object-center"
    }
  ];
</script>

{#snippet contentSection(section: AboutSection)}
  <section class={`py-16 ${section.background || 'bg-white'}`}>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div class="max-w-xl">
          <h2 class="text-3xl font-semibold text-gray-900 mb-4">{section.title}</h2>
          <p class="text-lg text-gray-600 mb-6">{section.description}</p>
          <a 
            href={section.buttonLink}
            class="inline-flex items-center px-4 py-2 rounded-md bg-violet-600 text-white hover:bg-violet-700 transition-colors"
          >
            {section.buttonText}
          </a>
        </div>
        <div class="relative h-64 overflow-hidden rounded-lg lg:h-auto">
          <img 
            src={section.image} 
            alt={section.title}
            class={`h-full w-full object-cover ${section.imagePosition || 'object-center'}`}
          />
        </div>
      </div>
    </div>
  </section>
{/snippet}

<div class="bg-white">
  <!-- Page Header -->
  <div class="relative bg-white py-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h1 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">About</h1>
    </div>
  </div>

  <!-- Content Sections -->
  {#each sections as section}
    {@render contentSection(section)}
  {/each}
</div>

<svelte:head>
  <!-- Essential Meta Tags -->
  <title>About Us | South Hills Church of Christ - Helena, Montana</title>
  <meta name="description" content="Founded in 2011 through the unification of three congregations, South Hills Church of Christ serves Helena with Bible-based teaching and a heart for community. Learn about our leadership, doctrine, and journey of faith together." />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${siteUrl}/about`} />
  <meta property="og:title" content="About South Hills Church of Christ in Helena" />
  <meta property="og:description" content="A unified congregation serving Helena since 2011. Discover our Bible-based approach, leadership team, and commitment to growing together in Christ while serving our community." />
  <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={`${siteUrl}/about`} />
  <meta name="twitter:title" content="About South Hills Church of Christ in Helena" />
  <meta name="twitter:description" content="A unified congregation serving Helena since 2011. Discover our Bible-based approach, leadership team, and commitment to growing together in Christ while serving our community." />
  <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
  
  <!-- Additional Meta Information -->
  <meta name="keywords" content="church helena mt, bible church helena, churches of christ montana, christian church helena, unified congregation, bible based church montana" />
  
  <!-- Organization Schema with Additional Details -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Church",
      "name": "South Hills Church of Christ",
      "image": "${siteUrl}/og-image.jpg",
      "description": "A unified Bible-based church in Helena, Montana, formed in 2011 through the coming together of three congregations with a shared vision for serving God and community.",
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
      "url": "${siteUrl}/about",
      "telephone": "+14064428950",
      "sameAs": [
        "${siteUrl}",
        "https://www.youtube.com/@southhillscoc"
      ],
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Religious Affiliation",
          "value": "Churches of Christ"
        },
        {
          "@type": "PropertyValue",
          "name": "Worship Style",
          "value": "Bible-based, A cappella worship"
        },
        {
          "@type": "PropertyValue",
          "name": "Mission",
          "value": "Growing in faith, serving our community, and sharing God's love"
        },
        {
          "@type": "PropertyValue",
          "name": "History",
          "value": "Formed in 2011 through the unification of three Helena congregations: Rocky Mountain Church of Christ, Helena Church of Christ, and Big Sky Church of Christ"
        }
      ],
      "knowsAbout": [
        "Biblical Studies",
        "Christian Worship",
        "Community Service",
        "Family Ministry",
        "Church Unity"
      ],
      "foundingDate": "2011",
      "isAccessibleForFree": true,
      "keywords": [
        "Bible-based church",
        "Christian community",
        "Churches of Christ",
        "Helena church",
        "Family worship",
        "Biblical teaching",
        "Unified congregation"
      ]
    }
  </script>
</svelte:head>