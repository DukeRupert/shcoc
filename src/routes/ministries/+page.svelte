<script lang="ts">

  const siteName = "South Hills Church of Christ";
  const siteUrl = "https://southhillscoc.org";

  interface Ministry {
    title: string;
    description: string;
    contact?: {
      email: string;
      note?: string;
    };
    image?: string;
  }

  const ministries = {
    growth: [
      {
        title: "Women's Ministries",
        description: "An afternoon of High Tea launched the South Hills Church of Christ (SHCC) Women's Ministry for 2021. Our primary spring and early summer focus has been to build new relationships and reacquaint prior relationships through a small group study called Women Gather. Our short term goal for this ministry is to foster connection with our sisters in Christ through Bible study, fellowship and time spent together.",
        contact: { email: "office@southhillscoc.org" }
      },
      {
        title: "Men's Ministries",
        description: "The main ministry gathering occurs on Tuesday mornings at 7am. Our primary focus is on studying challenging books and how God is impacting our lives and community through discussion. This group is vibrant, welcoming and desires to grow closer to God. We also have a monthly men's breakfast on the first Saturday of the month and attend the statewide men's retreat each May in Augusta.",
        contact: { email: "office@southhillscoc.org" }
      }
    ],
    nextGen: [
      {
        title: "Youth Ministries",
        description: "The goal of our youth ministry is to come alongside youth in their journey of faith and to equip their parents to be part of the disciple-making process. We have a Sunday morning middle and high school class that occurs during the Bible class time and we have periodic events for fellowship, fun and discipling each month.",
        contact: { email: "office@southhillscoc.org" }
      },
      {
        title: "Children's Ministries",
        description: "We believe every child is a precious gift from God. Our ministry is focused on children and equipping their families to be genuine Christ followers. We offer children's church each Sunday. Children will stay in the worship service until after communion and then will be dismissed to enjoy worshipping God in an exciting age-appropriate atmosphere.",
        contact: { email: "office@southhillscoc.org" }
      }
    ],
    service: [
      {
        title: "Local Service",
        description: "We serve our community by partnering with many non-profits in the Helena area and throughout the state. We support and serve with God's Love, Family Promise, Options Clinic, Hope House and Angel Tree. We also have groups in our community that knit baby hats for our hospitals and sew to serve the community. We host weekly Bible studies at Edgewood Helena.",
        contact: { email: "office@southhillscoc.org" }
      },
      {
        title: "Global Service",
        description: "We are blessed to partner with and support Rhakeem Harris in Amman, Jordan. Rhakeem is currently enrolled in a Master of Divinity program at Harding and is using what he learns to lead small groups and teach."
      },
      {
        title: "Celebrate Recovery",
        description: "CR is a program that was started by Saddleback church and has been around for many years. CR comes alongside individuals who have addictions or struggles of any kind. It is a faith based program that has the intention of calling us all to a deeper relationship with Jesus, our savior.",
        contact: { email: "Celebraterecovery.shcoc@gmail.com" }
      }
    ]
  };
</script>

{#snippet ministryCard(ministry: Ministry)}
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
    {#if ministry.image}
      <div class="aspect-[3/2] overflow-hidden">
        <img 
          src={ministry.image} 
          alt={ministry.title}
          class="w-full h-full object-cover"
        />
      </div>
    {/if}
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">{ministry.title}</h3>
      <div class="prose prose-sm text-gray-600">
        <p>{ministry.description}</p>
      </div>
      {#if ministry.contact}
        <div class="mt-4 pt-4 border-t border-gray-100">
          <p class="text-sm text-gray-600">
            <span class="font-medium">Contact:</span>
            <a href="mailto:{ministry.contact.email}" class="text-violet-600 hover:text-violet-700">
              {ministry.contact.email}
            </a>
            {#if ministry.contact.note}
              <br>
              <span class="text-gray-500 text-xs">{ministry.contact.note}</span>
            {/if}
          </p>
        </div>
      {/if}
    </div>
  </div>
{/snippet}

<div class="bg-white">
  <!-- Page Header -->
  <div class="relative bg-white py-12 sm:py-16 lg:py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-6">
          Ministries
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          We are blessed to be full of talented and passionate servants of Christ. Join with us in 
          one of our ministries to grow in love, wisdom, and knowledge while serving our community.
        </p>
      </div>
    </div>
  </div>

  <!-- Growth & Fellowship Section -->
  <section class="bg-violet-50 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-3xl font-semibold text-gray-900 mb-12">Growth & Fellowship</h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        {#each ministries.growth as ministry}
          {@render ministryCard(ministry)}
        {/each}
      </div>
    </div>
  </section>

  <!-- Next Generation Section -->
  <section class="py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-3xl font-semibold text-gray-900 mb-12">Next Generation</h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        {#each ministries.nextGen as ministry}
          {@render ministryCard(ministry)}
        {/each}
      </div>
    </div>
  </section>

  <!-- Service Section -->
  <section class="bg-violet-50 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-3xl font-semibold text-gray-900 mb-12">Service & Support</h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {#each ministries.service as ministry}
          {@render ministryCard(ministry)}
        {/each}
      </div>
    </div>
  </section>
</div>

<svelte:head>
  <!-- Essential Meta Tags -->
  <title>Church Ministries | South Hills Church of Christ Helena, MT</title>
  <meta name="description" content="Join our diverse ministries in Helena - Women's & Men's groups, Youth programs, Children's ministry, Local & Global outreach, and Celebrate Recovery. Growing together in faith and service." />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${siteUrl}/ministries`} />
  <meta property="og:title" content="Ministry Programs at South Hills Church of Christ" />
  <meta property="og:description" content="Discover our ministry programs in Helena, MT. From Bible studies to community service, youth programs to recovery support - find your place to grow and serve." />
  <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={`${siteUrl}/ministries`} />
  <meta name="twitter:title" content="Ministry Programs at South Hills Church of Christ" />
  <meta name="twitter:description" content="Discover our ministry programs in Helena, MT. From Bible studies to community service, youth programs to recovery support - find your place to grow and serve." />
  <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
  
  <!-- Additional Meta Information -->
  <meta name="keywords" content="church ministries helena, youth ministry montana, celebrate recovery helena, women's ministry, men's ministry, children's church, community service helena" />
  
  <!-- Organization Schema with Programs -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Church",
      "name": "South Hills Church of Christ",
      "image": "${siteUrl}/og-image.jpg",
      "description": "A welcoming church community offering diverse ministries for spiritual growth and community service in Helena, Montana.",
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
      "url": "${siteUrl}/ministries",
      "telephone": "+14064428950",
      "programSchedule": [
        {
          "@type": "Event",
          "name": "Men's Bible Study",
          "description": "Weekly men's ministry gathering for Bible study and discussion",
          "startDate": "T07:00",
          "dayOfWeek": "Tuesday",
          "location": {
            "@type": "Place",
            "name": "South Hills Church of Christ"
          }
        },
        {
          "@type": "Event",
          "name": "Children's Church",
          "description": "Age-appropriate worship and Bible learning for children",
          "startDate": "T10:30",
          "dayOfWeek": "Sunday",
          "location": {
            "@type": "Place",
            "name": "South Hills Church of Christ"
          }
        }
      ],
      "offers": [
        {
          "@type": "Offer",
          "name": "Women's Ministry",
          "description": "Bible study and fellowship for women",
          "category": "Growth & Fellowship"
        },
        {
          "@type": "Offer",
          "name": "Youth Ministry",
          "description": "Faith development for middle and high school students",
          "category": "Next Generation"
        },
        {
          "@type": "Offer",
          "name": "Children's Ministry",
          "description": "Age-appropriate worship and learning for children",
          "category": "Next Generation"
        },
        {
          "@type": "Offer",
          "name": "Celebrate Recovery",
          "description": "Faith-based recovery and support program",
          "category": "Service & Support"
        },
        {
          "@type": "Offer",
          "name": "Local Service",
          "description": "Community partnerships and outreach programs in Helena",
          "category": "Service & Support"
        },
        {
          "@type": "Offer",
          "name": "Global Missions",
          "description": "Supporting mission work in Amman, Jordan",
          "category": "Service & Support"
        }
      ]
    }
  </script>
</svelte:head>