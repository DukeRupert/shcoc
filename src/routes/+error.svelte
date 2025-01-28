<script lang="ts">
  import { page } from '$app/state';

  // Use $derived for reactive values
  const status = $derived(page.status);
  const errorMessage = $derived(page.error?.message);

  // Helper function to get a user-friendly error message
  function getErrorMessage(status: number, message: string | undefined): string {
    switch (status) {
      case 404:
        return "We're currently working on this page. Please check back soon!";
      case 500:
        return "Internal server error. Our team has been notified.";
      case 503:
        return "Service temporarily unavailable. Please try again later.";
      default:
        return message || "An unexpected error occurred. Please try again later.";
    }
  }

  const displayMessage = $derived(getErrorMessage(status, errorMessage));
  const isNotFound = $derived(status === 404 || errorMessage?.includes('not found'));
</script>

<svelte:head>
  <title>{status} - {isNotFound ? 'Under Construction' : 'Error'} | South Hills Church of Christ</title>
  <meta name="description" content={displayMessage} />
</svelte:head>

<main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center">
    <p class="text-base font-semibold text-violet-600">
      {status}
    </p>
    
    <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
      {#if isNotFound}
        Under Construction
      {:else if errorMessage}
        {errorMessage}
      {:else}
        Something went wrong
      {/if}
    </h1>
    
    <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
      {displayMessage}
    </p>
    
    <div class="mt-10 flex items-center justify-center gap-x-6">
      {#if isNotFound}
        <a 
          href="/" 
          class="rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
        >
          Go back home
        </a>
      {:else}
        <button 
          onclick={() => window.history.back()}
          class="rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
        >
          Go back
        </button>
      {/if}
      
      <a 
        href="/contact" 
        class="text-sm font-semibold text-gray-900 hover:text-violet-600"
      >
        Contact us <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>
</main>