<!-- src/routes/about/history-and-mission/+page.svelte -->
<script lang="ts">
    const siteName = "South Hills Church of Christ";
    const siteUrl = "https://southhillscoc.org";
  </script>

<div class="bg-white">
    <!-- Page Header -->
    <div class="relative bg-white py-12 sm:py-16 lg:py-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Breadcrumbs -->
        <div class="flex items-center space-x-2 text-sm text-gray-600 mb-4">
          <a href="/about" class="hover:text-violet-600">About</a>
          <span>›</span>
          <a href="/about/history-and-mission" class="hover:text-violet-600">History & Mission</a>
        </div>
        
        <h1 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-8">
          Our History & Mission
        </h1>
      </div>
    </div>
  
    <!-- Main Content -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
      <!-- History Section -->
      <div class="prose prose-lg max-w-none">
        <h2 class="text-3xl font-semibold text-gray-900 mb-6">A Story of Unity</h2>
        
        <div class="bg-violet-50 rounded-2xl p-8 mb-12">
          <p class="text-lg text-gray-600 italic">
            "We can be better and more effective, and offer more to one another and more to our community, as one body."
            <span class="block mt-2 text-sm">- Shaun Peterson, Elder</span>
          </p>
        </div>
  
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">The Journey to Unity</h3>
            <p class="text-gray-600 mb-4">
              The story of South Hills Church of Christ began in 2011 when three Helena congregations - 
              the Rocky Mountain Church of Christ (125 members), the Helena Church of Christ (50 members), 
              and the Big Sky Church of Christ (25 members) - made the courageous decision to unite as one body.
            </p>
            <p class="text-gray-600">
              This unification wasn't just about combining numbers; it represented a deeper commitment to 
              putting aside differences and coming together for a greater purpose. The process began 
              naturally, with joint activities like Vacation Bible School and youth mission trips to 
              Mexico, which helped build relationships between families and youth groups.
            </p>
          </div>
          <div class="relative h-64 overflow-hidden rounded-lg lg:h-auto">
            <img
              src="https://res.cloudinary.com/rr-wholesale/image/upload/v1710183605/South%20Hills%20CoC/DSC_1346_vxtuk0.jpg"
              alt="South Hills Church building"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
  
        <!-- Mission Section -->
        <div class="bg-violet-50 rounded-2xl p-8 mb-16">
          <h2 class="text-3xl font-semibold text-gray-900 mb-6">Our Mission Today</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 class="text-xl font-semibold text-violet-800 mb-3">Revealing God</h3>
              <p class="text-gray-600">
                Through Bible-based teaching and worship, we strive to reveal God's nature 
                and His plan for our lives.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-violet-800 mb-3">Renewing Lives</h3>
              <p class="text-gray-600">
                We are committed to personal and spiritual growth, supporting each other 
                as we grow in Christ.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-violet-800 mb-3">Rejoicing Together</h3>
              <p class="text-gray-600">
                We celebrate God's work in our lives and community through worship, 
                fellowship, and service.
              </p>
            </div>
          </div>
        </div>
  
        <!-- Looking Forward Section -->
        <div>
          <h2 class="text-3xl font-semibold text-gray-900 mb-6">Looking Forward</h2>
          <p class="text-gray-600 mb-6">
            Today, South Hills Church of Christ stands as a testament to the power of unity 
            in Christ. Our congregation continues to grow and serve, guided by our commitment 
            to Bible-based teaching and community service.
          </p>
          <p class="text-gray-600">
            We invite you to be part of our story as we continue to grow together in faith, 
            serving our Helena community, and sharing God's love with all.
          </p>
  
          <div class="mt-8 flex gap-4">
            <a 
              href="/visit" 
              class="inline-flex items-center rounded-md bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-500 transition-colors"
            >
              Plan Your Visit
            </a>
            <a 
              href="/contact" 
              class="inline-flex items-center rounded-md border border-violet-600 px-4 py-2.5 text-sm font-semibold text-violet-600 hover:bg-violet-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <svelte:head>
    <!-- Essential Meta Tags -->
    <title>History & Mission | South Hills Church of Christ - Helena, Montana</title>
    <meta name="description" content="Formed in 2011 through the unification of three congregations, South Hills Church of Christ continues our mission of Revealing God, Renewing Lives, and Rejoicing Together in Helena, MT." />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${siteUrl}/about/history-and-mission`} />
    <meta property="og:title" content="Our History & Mission - South Hills Church of Christ" />
    <meta property="og:description" content="Discover the story of unity that formed South Hills Church of Christ in Helena, MT. Three congregations united in 2011 to better serve God and our community together." />
    <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={`${siteUrl}/about/history-and-mission`} />
    <meta name="twitter:title" content="Our History & Mission - South Hills Church of Christ" />
    <meta name="twitter:description" content="Discover the story of unity that formed South Hills Church of Christ in Helena, MT. Three congregations united in 2011 to better serve God and our community together." />
    <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
    
    <!-- Additional Meta Information -->
    <meta name="keywords" content="church history helena, christian unity, church mission montana, churches of christ helena, bible based church, community church helena" />
    
    <!-- Organization History Schema -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Church",
        "name": "South Hills Church of Christ",
        "image": "${siteUrl}/og-image.jpg",
        "description": "South Hills Church of Christ was formed in 2011 through the unification of three Helena congregations, focused on revealing God, renewing lives, and rejoicing together.",
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
        "url": "${siteUrl}/about/history-and-mission",
        "foundingDate": "2011",
        "founder": {
          "@type": "Organization",
          "name": "Unified congregation of Rocky Mountain, Helena, and Big Sky Churches of Christ"
        },
        "mission": "Revealing God, Renewing Lives, and Rejoicing Together",
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Historical Formation",
            "value": "Formed through the unification of three congregations: Rocky Mountain Church of Christ (125 members), Helena Church of Christ (50 members), and Big Sky Church of Christ (25 members)"
          },
          {
            "@type": "PropertyValue",
            "name": "Unification Date",
            "value": "2011"
          },
          {
            "@type": "PropertyValue",
            "name": "Core Values",
            "value": "Bible-based teaching, Community service, Unity in Christ"
          }
        ],
        "event": {
          "@type": "Event",
          "name": "Church Unification",
          "description": "Three Helena Churches of Christ united to form South Hills Church of Christ",
          "startDate": "2011",
          "location": {
            "@type": "Place",
            "name": "Helena, Montana"
          }
        }
      }
    </script>
  </svelte:head>