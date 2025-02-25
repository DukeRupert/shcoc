<script lang="ts">

  const siteName = "South Hills Church of Christ";
  const siteUrl = "https://southhillscoc.org";

  interface Leader {
    name: string;
    role?: string;
    email?: string;
    bio?: string;
    image?: string;
  }

  const staff: Leader[] = [
    {
      name: "Lance Love",
      role: "Lead Minister",
      email: "lancewlove@gmail.com",
      image: "https://res.cloudinary.com/rr-wholesale/image/upload/v1710183596/South%20Hills%20CoC/lance-love_w85tff.jpg",
      bio: "Lance will be coming on staff in the summer of 2021. Lance and Dorrie have been serving in Moline, AL and bring much experience to South Hills along with hearts for service. Lance will be focusing on developing strong families within our community and will also be ministering to us as he leads our Sunday morning worship experience.\n\nLance and Dorrie love the outdoors whether that is hiking, fishing or hunting with black powder. They are excited to be by their daughter and son-in-law who live in Missoula but very excited to be by their two grandchildren. They also have family in Texas and look forward to visiting the grandkids there as well.",
    },
    {
      name: "Chante' Williams",
      role: "Administrative Coordinator",
      email: "southhillschurchofchrist@gmail.com",
      image: "https://res.cloudinary.com/rr-wholesale/image/upload/v1710183607/South%20Hills%20CoC/IMG_9345_ziigc5.png",
      bio: "Chanté brings warmth and organizational expertise to her role as Administrative Assistant at South Hills Church of Christ, where she coordinates the many moving pieces that keep our church community thriving. Beyond managing the day-to-day operations, she shares her musical gifts as one of our worship leaders, helping guide our congregation in praise. Her heart for ministry and service was cultivated through years of diverse experience, including a background in veterinary medicine and foster care ministry. A Montana native with a BA in Ministry from Anderson Seminary, Chanté is currently pursuing her Master's degree in Christian Counseling, further deepening her ability to serve others. Her combination of practical skills and deep faith make her an invaluable part of our church family."
    }
  ];

  const elders: Leader[] = [
    { name: "Shaun & Ade Peterson",
      image: "https://res.cloudinary.com/rr-wholesale/image/upload/v1739151651/South%20Hills%20CoC/ggutnaxxu8k6ltkzgu56.png"
    },
    { name: "Randy & Donna Yaeger", image: "https://res.cloudinary.com/rr-wholesale/image/upload/f_auto,q_auto/v1/South%20Hills%20CoC/uhr1ed0uum2mawtc1sgr" },
    { name: "John & Debbie Kilpatrick", image: "https://res.cloudinary.com/rr-wholesale/image/upload/v1739151649/South%20Hills%20CoC/urqt14wvsvdofdkdrt3r.png" },
    { name: "Allan & Diane Steinle", image: "https://res.cloudinary.com/rr-wholesale/image/upload/v1739151648/South%20Hills%20CoC/vpfkde7nbifsyhi7dakb.png" },
  ];

  const deacons: Leader[] = [
    { name: "Logan Williams", role: "IT", image: "https://res.cloudinary.com/rr-wholesale/image/upload/v1739151650/South%20Hills%20CoC/l7ks4pdsgkt5p5dmtlar.png" },
    { name: "Chiranjeevi Allada", role: "Finance", image: "https://res.cloudinary.com/rr-wholesale/image/upload/v1739151650/South%20Hills%20CoC/b0giz6xnbsyewsz37tid.png" },
    { name: "Brian Christensen", role: "Benevolence", image: "https://res.cloudinary.com/rr-wholesale/image/upload/f_auto,q_auto/v1/South%20Hills%20CoC/tedbulr5ossnm004uevg"}
  ],
</script>

{#snippet staffCard(leader: Leader)}
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg overflow-hidden p-6">
    {#if leader.image}
      <div class="relative h-80 overflow-hidden rounded-lg">
        <img 
          src={leader.image} 
          alt={leader.name}
          class="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>
    {:else}
      <div class="relative h-80 overflow-hidden rounded-lg bg-violet-100 flex items-center justify-center">
        <span class="text-violet-400 text-4xl">
          {leader.name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
    {/if}
    <div class="flex flex-col space-y-4">
      <div>
        <h3 class="text-2xl font-semibold text-gray-900">{leader.name}</h3>
        {#if leader.role}
          <p class="text-lg text-violet-600">{leader.role}</p>
        {/if}
      </div>
      {#if leader.bio}
        <div class="prose prose-lg text-gray-600">
          {#each leader.bio.split('\n\n') as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
      {/if}
      {#if leader.email}
        <p class="text-gray-600">
          <a href="mailto:{leader.email}" class="text-violet-600 hover:text-violet-700">
            {leader.email}
          </a>
        </p>
      {/if}
    </div>
  </div>
{/snippet}

{#snippet leaderCard(leader: Leader)}
  <div class="bg-white rounded-lg p-4 text-center">
    {#if leader.image}
      <figure>
        <img
          src={leader.image}
          alt="{leader.name}'s photo"
          class="w-80 h-64 rounded-lg mx-auto mb-3 object-cover"
        />
      </figure>
    {/if}
    <h3 class="text-lg font-semibold text-gray-900">{leader.name}</h3>
    {#if leader.role}
      <p class="text-sm text-violet-600">{leader.role}</p>
    {/if}
  </div>
{/snippet}

<div class="bg-white">
  <!-- Page Header with Mission & Vision -->
  <div class="relative bg-white py-12 sm:py-16 lg:py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Breadcrumbs -->
      <div class="flex items-center space-x-2 text-sm text-gray-600 mb-4">
        <a href="/about" class="hover:text-violet-600">About</a>
        <span>&nbsp; › &nbsp;</span>
        <a href="/about/leadership" class="hover:text-violet-600">Leadership</a>
      </div>

      <h1 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-16">
        Leadership
      </h1>

      <!-- Mission & Vision Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div class="bg-violet-50 rounded-2xl p-8">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Mission</h2>
          <p class="text-lg text-gray-600">
            We will be a people defined by our personal discipleship to Jesus, our committed 
            fellowship with one another, and our heartfelt gathered worship.
          </p>
        </div>
        <div class="bg-violet-50 rounded-2xl p-8">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Vision</h2>
          <p class="text-lg text-gray-600">
            We will strive to be a community with a clear plan in our organization, ministries, 
            events and staffing to intentionally develop disciples, create fellowship, and 
            enrich worship.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Staff Section -->
  <section class="py-16 bg-violet-50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-3xl font-semibold text-gray-900 mb-12">Our Staff</h2>
      <div class="space-y-8">
        {#each staff as member}
          {@render staffCard(member)}
        {/each}
      </div>
    </div>
  </section>

  <!-- Elders Section -->
  <section class="py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-3xl font-semibold text-gray-900 mb-8">Shepherds</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each elders as elder}
          {@render leaderCard(elder)}
        {/each}
      </div>
    </div>
  </section>

  <!-- Deacons Section -->
  <section class="py-16 bg-violet-50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-3xl font-semibold text-gray-900 mb-8">Deacons</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each deacons as deacon}
          {@render leaderCard(deacon)}
        {/each}
      </div>
    </div>
  </section>
</div>

<svelte:head>
  <!-- Essential Meta Tags -->
  <title>Our Leadership Team | South Hills Church of Christ - Helena, MT</title>
  <meta name="description" content="Meet our leadership team led by Lance Love. Our elders, deacons, and staff are committed to developing disciples, creating fellowship, and enriching worship in Helena." />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${siteUrl}/about/leadership`} />
  <meta property="og:title" content="Leadership Team - South Hills Church of Christ" />
  <meta property="og:description" content="Led by Minister Lance Love, our team is dedicated to personal discipleship, committed fellowship, and heartfelt worship. Meet our elders, deacons, and staff." />
  <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={`${siteUrl}/about/leadership`} />
  <meta name="twitter:title" content="Leadership Team - South Hills Church of Christ" />
  <meta name="twitter:description" content="Led by Minister Lance Love, our team is dedicated to personal discipleship, committed fellowship, and heartfelt worship. Meet our elders, deacons, and staff." />
  <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
  
  <!-- Additional Meta Information -->
  <meta name="keywords" content="church leadership helena, christian leaders montana, church elders helena, church staff montana, minister lance love" />
  
  <!-- Leadership Organization Schema -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Church",
      "name": "South Hills Church of Christ",
      "url": "${siteUrl}/about/leadership",
      "image": "${siteUrl}/og-image.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2294 Deerfield Ln",
        "addressLocality": "Helena",
        "addressRegion": "MT",
        "postalCode": "59601",
        "addressCountry": "US"
      },
      "member": [
        {
          "@type": "Person",
          "name": "Lance Love",
          "jobTitle": "Lead Minister",
          "description": "Focused on developing strong families and leading worship",
          "email": "lance@southillscoc.org"
        },
        {
          "@type": "Person",
          "name": "Chante' Williams",
          "jobTitle": "Secretary"
        },
        {
          "@type": "Person",
          "name": "Shaun Peterson",
          "jobTitle": "Elder"
        },
        {
          "@type": "Person",
          "name": "Randy Yaeger",
          "jobTitle": "Elder"
        },
        {
          "@type": "Person",
          "name": "John Kilpatrick",
          "jobTitle": "Elder"
        },
        {
          "@type": "Person",
          "name": "Tom Anderson",
          "jobTitle": "Elder"
        },
        {
          "@type": "Person",
          "name": "Terry Chaney",
          "jobTitle": "Elder"
        },
        {
          "@type": "Person",
          "name": "Logan Williams",
          "jobTitle": "Deacon",
          "department": "IT"
        },
        {
          "@type": "Person",
          "name": "Chiranjeevi Allada",
          "jobTitle": "Deacon",
          "department": "Finance"
        }
      ],
      "mission": {
        "@type": "Mission",
        "description": "We will be a people defined by our personal discipleship to Jesus, our committed fellowship with one another, and our heartfelt gathered worship."
      },
      "vision": {
        "@type": "Thing",
        "description": "We will strive to be a community with a clear plan in our organization, ministries, events and staffing to intentionally develop disciples, create fellowship, and enrich worship."
      },
      "leadershipTeam": {
        "@type": "OrganizationRole",
        "roleName": "Church Leadership",
        "description": "Our leadership team consists of our minister, elders, and deacons working together to serve our congregation and community."
      }
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
          "name": "Leadership",
          "item": "${siteUrl}/about/leadership"
        }
      ]
    }
  </script>
</svelte:head>
