<script lang="ts">
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
      email: "lance@southillscoc.org",
      image: "https://res.cloudinary.com/rr-wholesale/image/upload/v1710183596/South%20Hills%20CoC/lance-love_w85tff.jpg",
      bio: "Lance will be coming on staff in the summer of 2021. Lance and Dorrie have been serving in Moline, AL and bring much experience to South Hills along with hearts for service. Lance will be focusing on developing strong families within our community and will also be ministering to us as he leads our Sunday morning worship experience.\n\nLance and Dorrie love the outdoors whether that is hiking, fishing or hunting with black powder. They are excited to be by their daughter and son-in-law who live in Missoula but very excited to be by their two grandchildren. They also have family in Texas and look forward to visiting the grandkids there as well.",
    },
    {
      name: "Chante' Williams",
      role: "Secretary",
      image: "https://res.cloudinary.com/rr-wholesale/image/upload/v1710183607/South%20Hills%20CoC/IMG_9345_ziigc5.png"
    }
  ];

  const elders: Leader[] = [
    { name: "Shaun Peterson" },
    { name: "Randy Yaeger" },
    { name: "John Kilpatrick" },
    { name: "Tom Anderson" },
    { name: "Terry Chaney" }
  ];

  const deacons: Leader[] = [
    { name: "Logan Williams", role: "IT" },
    { name: "Chiranjeevi Allada", role: "Finance" }
  ];
</script>

{#snippet staffCard(leader: Leader)}
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg overflow-hidden p-6">
    {#if leader.image}
      <div class="relative h-80 overflow-hidden rounded-lg">
        <img 
          src={leader.image} 
          alt={leader.name}
          class="h-full w-full object-cover object-center"
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
      <h2 class="text-3xl font-semibold text-gray-900 mb-8">Elders</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {#each deacons as deacon}
          {@render leaderCard(deacon)}
        {/each}
      </div>
    </div>
  </section>
</div>