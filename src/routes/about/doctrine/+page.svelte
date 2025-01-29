<script lang="ts">

  const siteName = "South Hills Church of Christ";
  const siteUrl = "https://southhillscoc.org";

  interface Belief {
    title: string;
    content: string;
    image: string;
  }

  const beliefs: Belief[] = [
    {
      title: "God",
      content: "God is one God, existing in three persons (Father, Son and Holy Spirit), who created all things and made them \"very good\" for relationship with Him (<a href='https://www.biblegateway.com/passage/?search=Gen%201:31' target='_blank' class='text-violet-600 hover:text-violet-800'>Gen 1:31</a>).",
      image: "https://greatfallscoc.org/media/pages/about/doctrine/7b33f4ee96-1700942039/jackson-david-2hjzf52ur9k-unsplash-900x.webp"
    },
    {
      title: "The Bible",
      content: "The Bible is God's inspired and authoritative word (<a href='https://www.biblegateway.com/passage/?search=2%20Tim%203:16-17' target='_blank' class='text-violet-600 hover:text-violet-800'>2 Tim 3:16-17</a>, <a href='https://www.biblegateway.com/passage/?search=2%20Pet%201:20-21' target='_blank' class='text-violet-600 hover:text-violet-800'>2 Pet 1:20-21</a>). It points us to Jesus, who shows us who God is and how God wants us to live.",
      image: "https://greatfallscoc.org/media/pages/about/doctrine/9fff236d6b-1700929791/rod-long-drgrzqqsjda-unsplash-900x.webp"
    }
  ];
</script>

{#snippet beliefSection(belief: Belief)}
  <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
    <!-- Image Section -->
    <div class="relative h-64 overflow-hidden rounded-lg lg:h-auto">
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <img 
        src={belief.image} 
        alt={belief.title}
        class="h-full w-full object-cover"
      />
      <h3 class="absolute bottom-6 left-6 text-3xl font-semibold text-white">
        {belief.title}
      </h3>
    </div>

    <!-- Content Section -->
    <div class="flex items-center">
      <div class="prose prose-lg max-w-none">
        {@html belief.content}
      </div>
    </div>
  </div>
{/snippet}

<div class="bg-white">
  <!-- Page Header -->
  <div class="relative bg-white py-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Breadcrumbs -->
      <div class="flex items-center space-x-2 text-sm text-gray-600 mb-4">
        <a href="/about" class="hover:text-violet-600">About</a>
        <span> &nbsp; › &nbsp;</span>
        <a href="/about/doctrine" class="hover:text-violet-600">Doctrine</a>
      </div>
      
      <h1 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-8">
        Doctrine
      </h1>

      <div class="prose prose-lg max-w-none mb-16">
        <p>
          South Hills Church of Christ is an independent (autonomous), un-denominational, <em>back to the Bible</em> church. 
          We do our best to seek unity for the sake of God's mission by following Scripture.
        </p>
      </div>
      
      <h2 class="text-3xl font-semibold text-gray-900 mb-12">What we believe</h2>
    </div>
  </div>

  <!-- Beliefs Sections -->
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="space-y-16 py-8">
      {#each beliefs as belief}
        {@render beliefSection(belief)}
      {/each}
    </div>
  </div>

  <!-- Next Steps Section -->
  <div class="mx-auto max-w-7xl px-6 lg:px-8 py-16">
    <h2 class="text-3xl font-semibold text-gray-900 mb-4">Next Steps</h2>
    <p class="text-lg text-gray-600 mb-8">
      When you are ready to take your next steps into christianity, join one of our 
      <strong>Compass</strong> classes to get the low-down on what a life with Christ looks like!
    </p>
    <a 
      href="/ministries/compass"
      class="inline-flex items-center px-4 py-2 rounded-md bg-violet-600 text-white hover:bg-violet-700 transition-colors"
    >
      Compass Class
    </a>
  </div>
</div>

<svelte:head>
  <!-- Essential Meta Tags -->
  <title>Our Beliefs & Doctrine | South Hills Church of Christ - Helena, MT</title>
  <meta name="description" content="Discover our Bible-based beliefs at South Hills Church of Christ. An independent, non-denominational church focused on Scripture and building relationships with God." />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${siteUrl}/about/doctrine`} />
  <meta property="og:title" content="Biblical Beliefs & Teachings - South Hills Church of Christ" />
  <meta property="og:description" content="Learn about our foundational beliefs in God, Scripture, and Christian living. Join our Compass class to explore what a life with Christ looks like." />
  <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={`${siteUrl}/about/doctrine`} />
  <meta name="twitter:title" content="Biblical Beliefs & Teachings - South Hills Church of Christ" />
  <meta name="twitter:description" content="Learn about our foundational beliefs in God, Scripture, and Christian living. Join our Compass class to explore what a life with Christ looks like." />
  <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
  
  <!-- Additional Meta Information -->
  <meta name="keywords" content="bible based church helena, christian beliefs montana, church doctrine helena, compass class, biblical teaching, churches of christ beliefs" />
  
  <!-- Church Beliefs Schema -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Church",
      "name": "South Hills Church of Christ",
      "url": "${siteUrl}/about/doctrine",
      "image": "${siteUrl}/og-image.jpg",
      "description": "An independent, Bible-based church seeking unity through Scripture.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2294 Deerfield Ln",
        "addressLocality": "Helena",
        "addressRegion": "MT",
        "postalCode": "59601",
        "addressCountry": "US"
      },
      "beliefs": [
        {
          "@type": "CreativeWork",
          "name": "God",
          "description": "One God existing in three persons (Father, Son and Holy Spirit), creator of all things",
          "citation": "Genesis 1:31"
        },
        {
          "@type": "CreativeWork",
          "name": "The Bible",
          "description": "God's inspired and authoritative word, pointing us to Jesus",
          "citation": "2 Timothy 3:16-17, 2 Peter 1:20-21"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Compass Class",
        "description": "Introductory class exploring Christian life and beliefs",
        "availability": "https://schema.org/InStock"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Church Type",
          "value": "Independent, non-denominational"
        },
        {
          "@type": "PropertyValue",
          "name": "Teaching Approach",
          "value": "Bible-based, Scripture-focused"
        },
        {
          "@type": "PropertyValue",
          "name": "Mission Focus",
          "value": "Unity through Biblical teaching"
        }
      ],
      "knowsAbout": [
        "Biblical Studies",
        "Christian Doctrine",
        "Spiritual Formation",
        "Christian Living"
      ]
    }
  </script>

  <!-- Breadcrumb Schema -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "${siteUrl}"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "${siteUrl}/about"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Doctrine",
          "item": "${siteUrl}/about/doctrine"
        }
      ]
    }
  </script>
</svelte:head>