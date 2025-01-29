<!-- src/routes/contact/+page.svelte -->
<script lang="ts">
	import { page } from '$app/state';
	import SuperDebug, { superForm } from 'sveltekit-superforms';

	let { data } = $props();
	const { form, errors, constraints, message, enhance } = superForm(data.form);

    const siteName = "South Hills Church of Christ";
    const siteUrl = "https://southhillscoc.org";
</script>

<!-- Message Component -->
{#if $message}
	<div
		class="fixed right-4 top-4 z-50 rounded-md p-4 shadow-lg {page.status === 200
			? 'bg-green-50 text-green-700'
			: 'bg-red-50 text-red-700'}"
		role="alert"
	>
		<div class="flex">
			<div class="flex-shrink-0">
				{#if page.status === 200}
					<!-- Success Icon -->
					<svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clip-rule="evenodd"
						/>
					</svg>
				{:else}
					<!-- Error Icon -->
					<svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
							clip-rule="evenodd"
						/>
					</svg>
				{/if}
			</div>
			<div class="ml-3">
				<p class="text-sm font-medium">
					{$message}
				</p>
			</div>
		</div>
	</div>
{/if}

<div class="relative isolate bg-white">
	<div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
		<!-- Contact Information Section -->
		<div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
			<div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
				<!-- Decorative background element -->
				<div
					class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2"
				>
					<svg
						class="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="contact-pattern"
								width="200"
								height="200"
								x="100%"
								y="-1"
								patternUnits="userSpaceOnUse"
							>
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

				<dl class="mt-10 space-y-4 text-base text-gray-600">
					<!-- Visit Us -->
					<div class="space-y-4 border-b border-gray-100 pb-4">
						<dt class="font-semibold text-gray-900">Visit Us</dt>
						<dd>
							<p>We welcome visitors.</p>
							<p class="mt-2">
								<span class="font-semibold">Sunday Bible Class</span> – 9:30 AM<br />
								<span class="font-semibold">Sunday Worship</span> – 10:30 AM<br />
								<span class="font-semibold">Office Hours</span> – By Appointment
							</p>
						</dd>
					</div>

					<!-- Address -->
					<div class="flex gap-x-4">
						<dt class="flex-none">
							<span class="sr-only">Address</span>
							<svg
								class="h-7 w-6 text-violet-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Z"
								/>
							</svg>
						</dt>
						<dd>
							2294 Deerfield Ln<br />
							Helena, MT 59601
						</dd>
					</div>

					<!-- Phone -->
					<div class="flex gap-x-4">
						<dt class="flex-none">
							<span class="sr-only">Telephone</span>
							<svg
								class="h-7 w-6 text-violet-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
								/>
							</svg>
						</dt>
						<dd>
							<a href="tel:+14064428950" class="transition-colors hover:text-violet-600"
								>(406) 442-8950</a
							>
						</dd>
					</div>

					<!-- Email -->
					<div class="flex gap-x-4">
						<dt class="flex-none">
							<span class="sr-only">Email</span>
							<svg
								class="h-7 w-6 text-violet-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
								/>
							</svg>
						</dt>
						<dd>
							<a
								href="mailto:office@southhillscoc.org"
								class="transition-colors hover:text-violet-600"
							>
								office@southhillscoc.org
							</a>
						</dd>
					</div>
				</dl>
			</div>
		</div>

		<!-- Contact Form Section -->
		<form method="POST" use:enhance class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
			<div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
				{#if $message}
					<div class="mb-6 rounded-md bg-violet-50 p-4 text-violet-700">
						{$message}
					</div>
				{/if}

				<div class="grid grid-cols-1 gap-y-6">
					<!-- Name -->
					<div>
						<label for="name" class="block text-sm font-semibold text-gray-900">Name *</label>
						<div class="mt-2.5">
							<input
								type="text"
								id="name"
								name="name"
								bind:value={$form.name}
								aria-invalid={$errors.name ? 'true' : undefined}
								{...$constraints.name}
								class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
							/>
							{#if $errors.name}
								<p class="mt-1 text-sm text-red-600">{$errors.name}</p>
							{/if}
						</div>
					</div>

					<!-- Email -->
					<div>
						<label for="email" class="block text-sm font-semibold text-gray-900">Email *</label>
						<div class="mt-2.5">
							<input
								type="email"
								id="email"
								name="email"
								bind:value={$form.email}
								aria-invalid={$errors.email ? 'true' : undefined}
								{...$constraints.email}
								class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
							/>
							{#if $errors.email}
								<p class="mt-1 text-sm text-red-600">{$errors.email}</p>
							{/if}
						</div>
					</div>

					<!-- Phone (Optional) -->
					<div>
						<label for="tel" class="block text-sm font-semibold text-gray-900">
							Phone Number <span class="text-gray-500">(Optional)</span>
						</label>
						<div class="mt-2.5">
							<input
								type="tel"
								id="tel"
								name="tel"
								bind:value={$form.tel}
								aria-invalid={$errors.tel ? 'true' : undefined}
								{...$constraints.tel}
								class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
							/>
							{#if $errors.tel}
								<p class="mt-1 text-sm text-red-600">{$errors.tel}</p>
							{/if}
						</div>
					</div>

					<!-- Message -->
					<div>
						<label for="message" class="block text-sm font-semibold text-gray-900">
							Message * <span class="font-normal text-gray-500">(Minimum 40 characters)</span>
						</label>
						<div class="mt-2.5">
							<textarea
								id="message"
								name="message"
								rows="4"
								bind:value={$form.message}
								aria-invalid={$errors.message ? 'true' : undefined}
								{...$constraints.message}
								class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
							></textarea>
							{#if $errors.message}
								<p class="mt-1 text-sm text-red-600">{$errors.message}</p>
							{/if}
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
  
  <svelte:head>
    <!-- Essential Meta Tags -->
    <title>Contact Us | South Hills Church of Christ - Helena, Montana</title>
    <meta name="description" content="Connect with South Hills Church of Christ in Helena, MT. Join us for Sunday Bible Class (9:30 AM) and Worship (10:30 AM). Call (406) 442-8950 or visit us at 2294 Deerfield Ln." />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${siteUrl}/contact`} />
    <meta property="og:title" content="Contact South Hills Church of Christ" />
    <meta property="og:description" content="Get in touch with South Hills Church of Christ in Helena. Multiple ways to connect: visit us on Sundays, call, email, or use our contact form." />
    <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={`${siteUrl}/contact`} />
    <meta name="twitter:title" content="Contact South Hills Church of Christ" />
    <meta name="twitter:description" content="Get in touch with South Hills Church of Christ in Helena. Multiple ways to connect: visit us on Sundays, call, email, or use our contact form." />
    <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
    
    <!-- Additional Meta Information -->
    <meta name="keywords" content="church helena mt, contact church helena, sunday worship times, church location helena, christian church contact" />
    
    <!-- Contact Information Schema -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Church",
        "name": "South Hills Church of Christ",
        "image": "${siteUrl}/og-image.jpg",
        "description": "A welcoming church community in Helena, Montana. Contact us to learn more about our services and ministries.",
        "url": "${siteUrl}/contact",
        "telephone": "+14064428950",
        "email": "office@southhillscoc.org",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2294 Deerfield Ln",
          "addressLocality": "Helena",
          "addressRegion": "MT",
          "postalCode": "59601",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 46.570233,
          "longitude": -111.9714227
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "09:30",
            "closes": "10:15",
            "name": "Bible Class"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "10:30",
            "closes": "11:30",
            "name": "Worship Service"
          }
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-406-442-8950",
            "contactType": "office",
            "email": "office@southhillscoc.org",
            "availableLanguage": "English"
          }
        ],
        "areaServed": {
          "@type": "City",
          "name": "Helena",
          "sameAs": "https://en.wikipedia.org/wiki/Helena,_Montana"
        }
      }
    </script>
  
    <!-- Breadcrumb Schema -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "${siteUrl}"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact",
            "item": "${siteUrl}/contact"
          }
        ]
      }
    </script>
  </svelte:head>
