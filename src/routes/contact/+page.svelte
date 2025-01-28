<!-- src/routes/contact/+page.svelte -->
<div class="relative isolate bg-white">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <!-- Contact Information Section -->
      <div class="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <!-- Decorative background pattern -->
          <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
            <svg class="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
              <defs>
                <pattern id="contact-pattern" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#contact-pattern)" />
            </svg>
          </div>
  
          <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Us</h2>
          <p class="mt-6 text-lg text-gray-600">
            If you would like to contact the South Hills Church of Christ, please fill out the form, 
            visit us during open hours, or call us.
          </p>
  
          <!-- Contact Details -->
          <dl class="mt-10 space-y-4 text-base text-gray-600">
            <!-- Visit Us -->
            <div class="space-y-4 pb-4 border-b border-gray-100">
              <dt class="font-semibold text-gray-900">Visit Us</dt>
              <dd>
                <p>We welcome visitors.</p>
                <p class="mt-2">
                  <span class="font-semibold">Sunday Bible Class</span> – 9:30 AM<br>
                  <span class="font-semibold">Sunday Worship</span> – 10:30 AM<br>
                  <span class="font-semibold">Office Hours</span> – By Appointment
                </p>
              </dd>
            </div>
  
            <!-- Address -->
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <svg class="h-7 w-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Z" />
                </svg>
              </dt>
              <dd>
                2294 Deerfield Ln<br>
                Helena, MT 59601
              </dd>
            </div>
  
            <!-- Phone -->
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <svg class="h-7 w-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </dt>
              <dd>
                <a href="tel:+14064428950" class="hover:text-violet-600 transition-colors">(406) 442-8950</a>
              </dd>
            </div>
  
            <!-- Email -->
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <svg class="h-7 w-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </dt>
              <dd>
                <a href="mailto:office@southhillscoc.org" class="hover:text-violet-600 transition-colors">
                  office@southhillscoc.org
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
  
      <!-- Contact Form Section -->
      <form method="POST" class="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-sm font-semibold text-gray-900">First name</label>
              <div class="mt-2.5">
                <input 
                  type="text" 
                  name="first-name" 
                  id="first-name" 
                  autocomplete="given-name" 
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                >
              </div>
            </div>
  
            <div>
              <label for="last-name" class="block text-sm font-semibold text-gray-900">Last name</label>
              <div class="mt-2.5">
                <input 
                  type="text" 
                  name="last-name" 
                  id="last-name" 
                  autocomplete="family-name" 
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                >
              </div>
            </div>
  
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold text-gray-900">Email *</label>
              <div class="mt-2.5">
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  autocomplete="email" 
                  required
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                >
              </div>
            </div>
  
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold text-gray-900">Message *</label>
              <div class="mt-2.5">
                <textarea 
                  name="message" 
                  id="message" 
                  rows="4" 
                  required
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>
  
          <div class="mt-8 flex justify-end">
            <button
              type="submit"
              class="rounded-md bg-violet-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
            >
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>