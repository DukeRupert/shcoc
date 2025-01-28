<script lang="ts">

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
      description: "The Great Falls Church of Christ is a community pulling together to love God, to love His church, and to love the people he has created. We are a \"back to the Bible\" church and find unity by following the model that scripture describes for Christians and God's church.",
      buttonText: "More doctrine...",
      buttonLink: "/about/doctrine",
      image: "https://greatfallscoc.org/media/pages/about/cf8ac10070-1700944295/rod-long-drgrzqqsjda-unsplash-900x.webp",
      background: "bg-violet-50"
    },
    {
      title: "History & Mission",
      description: "We have long been a presence in Great Falls, faithfully meeting every week and ministering to our neighbors since Oct 3rd, 1948. Through all of the years, God has smiled on GFCC, blessing us with a strong core of believers and growth. Together, we are Growing Forward.",
      buttonText: "History & mission",
      buttonLink: "/about/history-and-mission",
      image: "https://greatfallscoc.org/media/pages/about/f2bc486fc3-1700944336/1951-building-and-preachers-home-copy-900x.webp",
      imagePosition: "object-[30.8%_41.4%]"
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