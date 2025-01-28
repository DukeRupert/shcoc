<script lang="ts">
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