<script lang="ts">
  import type { Snippet } from 'svelte';

  interface StaffMember {
    name: string;
    title: string;
    image: string;
    bio: string;
    contact?: {
      email?: string;
      phone?: string;
      hours?: string;
    };
  }

  interface Leader {
    names: string;
    image: string;
    role?: string;
  }

  // Sample data - Replace with actual data
  const staffMembers: StaffMember[] = [
    {
      name: "Matt Burleson",
      title: "Evangelist",
      image: "matt-image-url",
      bio: "Matt Burleson grew up attending Churches of Christ in North Alabama...",
      contact: {
        email: "hackburleson@yahoo.com",
        hours: "Mon-Thurs, 10-5, by appointment"
      }
    }
    // Add other staff members...
  ];

  const shepherds: Leader[] = [
    {
      names: "Bob & Pam Alfred",
      image: "/path-to-image.jpg"
    }
    // Add other shepherds...
  ];

  const deacons: Leader[] = [
    {
      names: "Logan Williams",
      image: "/path-to-image.jpg"
    }
    // Add other shepherds...
  ];
</script>

{#snippet staffCard(member: StaffMember)}
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
    <div class="relative h-64 lg:h-auto overflow-hidden rounded-lg">
      <img 
        src={member.image} 
        alt={member.name}
        class="w-full h-full object-cover"
      />
    </div>
    <div>
      <h3 class="text-2xl font-semibold text-gray-900 mb-4">{member.name}, {member.title}</h3>
      <div class="prose prose-lg text-gray-600">
        <p>{member.bio}</p>
        {#if member.contact}
          <div class="mt-4">
            {#if member.contact.hours}
              <p><strong>Office hours:</strong> {member.contact.hours}</p>
            {/if}
            {#if member.contact.email}
              <p><strong>Email:</strong> <a href="mailto:{member.contact.email}">{member.contact.email}</a></p>
            {/if}
            {#if member.contact.phone}
              <p><strong>Phone:</strong> {member.contact.phone}</p>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </div>
{/snippet}

{#snippet leaderCard(leader: Leader)}
  <div class="flex flex-col">
    <img 
      src={leader.image} 
      alt={leader.names}
      class="w-full aspect-[8/7] object-cover rounded-lg"
    />
    <div class="mt-4 text-center">
      <h3 class="text-lg font-semibold text-gray-900">{leader.names}</h3>
      {#if leader.role}
        <p class="text-sm text-gray-600">{leader.role}</p>
      {/if}
    </div>
  </div>
{/snippet}

<div class="bg-white">
  <!-- Page Header -->
  <div class="relative bg-white py-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex flex-col space-y-4">
        <div class="flex items-center space-x-2 text-sm text-gray-600">
          <a href="/about" class="hover:text-violet-600">About</a>
          <span> &nbsp; ›  &nbsp;</span>
          <a href="/about/leadership" class="hover:text-violet-600">Leadership</a>
        </div>
        <h1 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Leadership</h1>
      </div>
    </div>
  </div>

  <!-- Quick Links -->
  <div class="mx-auto max-w-7xl px-6 lg:px-8 py-8">
    <p class="text-lg text-gray-600 mb-4">Skip to...</p>
    <div class="flex flex-wrap gap-4">
      <a href="#staff" class="px-4 py-2 rounded-md bg-violet-600 text-white hover:bg-violet-700 transition-colors">
        Staff
      </a>
      <a href="#shepherds" class="px-4 py-2 rounded-md bg-violet-600 text-white hover:bg-violet-700 transition-colors">
        Shepherds
      </a>
      <a href="#deacons" class="px-4 py-2 rounded-md bg-violet-600 text-white hover:bg-violet-700 transition-colors">
        Deacons
      </a>
    </div>
  </div>

  <!-- Staff Section -->
  <section id="staff" class="mx-auto max-w-7xl px-6 lg:px-8 py-12">
    <h2 class="text-3xl font-semibold text-gray-900 mb-8">Church Staff</h2>
    <div class="space-y-12">
      {#each staffMembers as member}
        {@render staffCard(member)}
      {/each}
    </div>
  </section>

  <!-- Shepherds Section -->
  <section id="shepherds" class="mx-auto max-w-7xl px-6 lg:px-8 py-12">
    <h2 class="text-3xl font-semibold text-gray-900 mb-4">Shepherds</h2>
    <p class="text-lg text-gray-600 mb-8">
      The men below are serving as Shepherds with the invaluable support and partnership of their wives.
    </p>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {#each shepherds as shepherd}
        {@render leaderCard(shepherd)}
      {/each}
    </div>
  </section>

  <!-- Deacons Section -->
  <section id="deacons" class="mx-auto max-w-7xl px-6 lg:px-8 py-12">
    <h2 class="text-3xl font-semibold text-gray-900 mb-4">Deacons</h2>
    <p class="text-lg text-gray-600 mb-8">
      The men below are serving as Deacons with the invaluable support and partnership of their wives.
    </p>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {#each deacons as deacon}
        {@render leaderCard(deacon)}
      {/each}
    </div>
  </section>
</div>