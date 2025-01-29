<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	const logoUrl =
		'https://res.cloudinary.com/rr-wholesale/image/upload/v1710183600/South%20Hills%20CoC/logo-main_q6qlxl.png';

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/visit', label: 'Visit' },
		{ href: '/events', label: 'Events' },
		{ href: '/ministries', label: 'Ministries' },
		{
			href: '/about',
			label: 'About',
			submenu: [
				{
					href: '/about/doctrine',
					title: 'Doctrine',
					description:
						'A "back to the Bible" church, we find unity by following the model that scripture describes for Christians and God\'s church.'
				},
				{
					href: '/about/leadership',
					title: 'Leadership',
					description:
						"Meet some of the faces that have been working diligently for God's kingdom and God's purpose in our church."
				},
				{
					href: '/about/history-and-mission',
					title: 'Mission & History',
					description:
						'We have long been a presence in Great Falls, faithfully meeting every week and ministering to our neighbors since Oct 3rd, 1948. Learn about our history and current mission.'
				}
			]
		},
		{ href: '/contact', label: 'Contact' }
	];

  let isMenuOpen = $state(false);

  function closeMenu() {
    isMenuOpen = false;
  }

  // Close menu on escape key
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<header class="bg-white">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">South Hills Church of Christ</span>
				<img class="h-8 w-auto" src={logoUrl} alt="South Hills Church of Christ Logo" />
			</a>
		</div>

		<!-- Toggle Button -->
		<button
			type="button"
			class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-gray-900 lg:hidden"
			onclick={() => (isMenuOpen = !isMenuOpen)}
			aria-expanded={isMenuOpen}
		>
			<span class="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
			{#if !isMenuOpen}
				<svg
					class="size-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			{:else}
				<svg
					class="size-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{/if}
		</button>

		<div class="hidden lg:flex lg:gap-x-12">
			{#each navItems as item}
				<a
					href={item.href}
					class="text-sm/6 font-semibold text-gray-900 transition-colors hover:text-gray-600"
				>
					{item.label}
				</a>
			{/each}
		</div>

		<div class="hidden lg:flex lg:flex-1 lg:justify-end">
			<a
				href="/visit"
				class="text-sm/6 font-semibold text-gray-900 transition-colors hover:text-gray-600"
			>
				Plan Your Visit <span aria-hidden="true">→</span>
			</a>
		</div>
	</nav>

	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<div class="fixed inset-0 z-50" role="dialog" aria-modal="true">
			<!-- Backdrop -->
			<div
				class="fixed inset-0 bg-gray-500/50 backdrop-blur-sm"
				onclick={closeMenu}
				transition:fade={{ duration: 200 }}
			/>

			<!-- Menu Panel -->
			<div
				class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
				transition:fly={{ x: 300, duration: 300, opacity: 1 }}
			>
				<!-- Menu Content -->
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">South Hills Church of Christ</span>
						<img src="https://res.cloudinary.com/rr-wholesale/image/upload/f_auto,q_auto/v1/South%20Hills%20CoC/logo-main_q6qlxl" alt="South Hills Church of Christ Logo" class="h-8 w-auto" />
					</a>
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-gray-900"
						onclick={closeMenu}
					>
						<span class="sr-only">Close menu</span>
						<svg
							class="size-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<!-- Navigation Links -->
				<nav class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							{#each navItems as item}
								<a
									href={item.href}
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-50"
									onclick={closeMenu}
								>
									{item.label}
								</a>
							{/each}
						</div>
						<div class="py-6">
							<a
								href="/visit"
								class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-50"
								onclick={closeMenu}
							>
								Plan Your Visit
							</a>
						</div>
					</div>
				</nav>
			</div>
		</div>
	{/if}
</header>
