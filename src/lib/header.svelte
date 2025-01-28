<script>
  import { onMount } from 'svelte';
  
  let isMenuOpen = false;
  let isMounted = false;

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/visit', label: 'Visit' },
    { href: '/events', label: 'Events' },
    { href: '/ministries', label: 'Ministries' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  const logoUrl = "https://res.cloudinary.com/rr-wholesale/image/upload/v1710183600/South%20Hills%20CoC/logo-main_q6qlxl.png";

  onMount(() => {
    isMounted = true;
  });

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
</script>

<header class="bg-white">
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="sr-only">South Hills Church of Christ</span>
        <img class="h-8 w-auto" src={logoUrl} alt="South Hills Church of Christ Logo">
      </a>
    </div>

    <div class="flex lg:hidden">
      <button 
        type="button" 
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-gray-900"
        on:click={toggleMenu}
        aria-expanded={isMenuOpen}
      >
        <span class="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
        {#if !isMenuOpen}
          <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        {:else}
          <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {/if}
      </button>
    </div>

    <div class="hidden lg:flex lg:gap-x-12">
      {#each navItems as item}
        <a 
          href={item.href} 
          class="text-sm/6 font-semibold text-gray-900 hover:text-gray-600 transition-colors"
        >
          {item.label}
        </a>
      {/each}
    </div>

    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <a 
        href="/visit" 
        class="text-sm/6 font-semibold text-gray-900 hover:text-gray-600 transition-colors"
      >
        Plan Your Visit <span aria-hidden="true">→</span>
      </a>
    </div>
  </nav>

  {#if isMounted}
    <div 
      class="lg:hidden {isMenuOpen ? 'fixed' : 'hidden'}"
      role="dialog" 
      aria-modal="true"
    >
      {#if isMenuOpen}
        <div 
          class="fixed inset-0 z-10 bg-gray-500/50 backdrop-blur-sm"
          on:click={toggleMenu}
        />
      {/if}

      <div 
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10
        transform transition-transform duration-300 ease-in-out {isMenuOpen ? 'translate-x-0' : 'translate-x-full'}"
      >
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">South Hills Church of Christ</span>
            <img class="h-8 w-auto" src={logoUrl} alt="South Hills Church of Christ Logo">
          </a>
          <button 
            type="button" 
            class="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-gray-900"
            on:click={toggleMenu}
          >
            <span class="sr-only">Close menu</span>
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              {#each navItems as item}
                <a 
                  href={item.href}
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  on:click={toggleMenu}
                >
                  {item.label}
                </a>
              {/each}
            </div>
            <div class="py-6">
              <a 
                href="/visit" 
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                on:click={toggleMenu}
              >
                Plan Your Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>