<script lang="ts">

  interface Ministry {
    title: string;
    description: string;
    imageUrl: string;
    href: string;
  }

  const learningMinistries: Ministry[] = [
    {
      title: "Sunday Bible Class",
      description: "Conveniently scheduled at 9:30am before our main service, join us for Bible study and discussion!",
      imageUrl: "https://res.cloudinary.com/rr-wholesale/image/upload/v1710183607/South%20Hills%20CoC/IMG_9345_ziigc5.png",
      href: "/ministries/sunday-bible-class"
    },
  ];

  const communityMinistries: Ministry[] = [
    {
      title: "Life Groups",
      description: "Small groups of believers who gather regularly to spend time building relationships and studying scripture. Come see what community can look like!",
      imageUrl: "https://res.cloudinary.com/rr-wholesale/image/upload/v1710183596/South%20Hills%20CoC/lance-love_w85tff.jpg",
      href: "/ministries/life-groups"
    },
  ];
</script>

{#snippet ministryCard(title: string, description: string, imageUrl: string, href: string)}
  <div class="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
    <div class="aspect-[4/5] overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title}
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p class="text-gray-600 mb-4">{description}</p>
      <a 
        {href}
        class="inline-flex items-center text-violet-600 hover:text-violet-700 font-semibold"
      >
        Learn more <span class="ml-2">→</span>
      </a>
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
          We are blessed to be full of talented and passionate "doers". Join with them in one of our 
          ministries to heal and grow in love, wisdom, and knowledge.
        </p>
      </div>
    </div>
  </div>

  <!-- Continue Learning Section -->
  <section class="bg-violet-50 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-3xl font-semibold text-gray-900 mb-12">Continue Learning</h2>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {#each learningMinistries as { title, description, imageUrl, href }}
          {@render ministryCard(title, description, imageUrl, href)}
        {/each}
      </div>
    </div>
  </section>

  <!-- Live Well Section -->
  <section class="py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-3xl font-semibold text-gray-900 mb-12">Live Well</h2>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {#each communityMinistries as { title, description, imageUrl, href }}
          {@render ministryCard(title, description, imageUrl, href)}
        {/each}
      </div>
    </div>
  </section>

  <!-- Serve Others Section -->
  <section class="bg-violet-50 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-3xl font-semibold text-gray-900 mb-12">Serve Others</h2>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {@render ministryCard(
          "Annual Clothing Giveaway",
          "Every fall we host a free clothing giveaway, fueled by donations from our loving church family.",
          "https://res.cloudinary.com/rr-wholesale/image/upload/v1710183596/South%20Hills%20CoC/lance-love_w85tff.jpg",
          "/ministries/clothing-our-community"
        )}
      </div>
    </div>
  </section>
</div>