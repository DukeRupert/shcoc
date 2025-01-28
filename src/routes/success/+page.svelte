<!-- src/routes/success/+page.svelte -->
<main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <div class="flex justify-center">
        <div class="rounded-full bg-violet-100 p-2">
          <svg 
            class="h-8 w-8 text-violet-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
      </div>
      <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
        Message Sent
      </h1>
      <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        Thank you for reaching out. We have received your message and will get back to you soon.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a 
          href="/" 
          class="rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
        >
          Return to Home
        </a>
        <a 
          href="/visit" 
          class="text-sm font-semibold text-gray-900 hover:text-violet-600"
        >
          Plan a Visit <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </main>