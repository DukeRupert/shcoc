<script>
	const services = [
		{
			name: 'Sunday Worship',
			time: '10:00 AM - 11:30 AM'
		}
	];

	const googleMapsUrl = 'https://maps.google.com/?q=2294+Deerfield+Ln,+Helena,+MT+59601';
	const youtubeUrl = 'https://www.youtube.com/@southhillscoc/videos';
</script>

<section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
			<div class="space-y-6">
				<h2 class="text-3xl font-semibold text-gray-900">Join Us This Week!</h2>

				<div class="space-y-4">
					<p class="text-lg text-gray-600">
						Join us at our location in Helena, Montana. We'd love to have you worship with us!
					</p>

					<div class="space-y-2">
						<p class="text-gray-700">
							2294 Deerfield Ln<br />
							Helena, MT 59601
						</p>

						<p class="text-gray-700">
							Phone: <a
								href="tel:+14064428950"
								class="text-violet-600 transition-colors hover:text-violet-800"
							>
								(406) 442-8950
							</a>
						</p>
					</div>
				</div>

				<div class="flex flex-col gap-4 sm:flex-row">
					<a
						href={googleMapsUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center justify-center rounded-md border border-transparent bg-violet-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-violet-700"
					>
						Open in Google Maps
					</a>

					<a
						href="/visit"
						class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
					>
						What To Expect
					</a>
				</div>
			</div>
			<div class="space-y-6 rounded-xl bg-gray-50 p-8">
				<div class="space-y-6">
					{#each services as service}
						<div class="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
							<h3 class="mb-2 text-xl font-semibold text-gray-900">
								{service.name}
							</h3>
							<p class="text-lg text-gray-600">{service.time}</p>
						</div>
					{/each}
				</div>

				<div class="pt-4">
					<a
						href={youtubeUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center text-violet-600 transition-colors hover:text-violet-800"
					>
						Watch our services online →
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
