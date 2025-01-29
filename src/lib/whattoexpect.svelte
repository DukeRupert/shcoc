<script>
	export let imageUrl = 'path-to-your-image.jpg';
</script>

<section class="relative">
	<!-- Left Content Column -->
	<div class="grid grid-cols-1 lg:grid-cols-2">
		<div class="bg-violet-700 px-6 py-12 sm:px-12 lg:px-16 xl:px-24">
			<div class="mx-auto max-w-xl lg:mx-0">
				<h2 class="text-3xl font-semibold text-white sm:text-4xl">What to Expect</h2>

				<p class="mt-4 text-lg italic text-violet-100">We can't wait to see you!</p>

				<div class="mt-6 space-y-6 text-base text-violet-100">
					<p>
						At the South Hills Church of Christ, the Sunday morning worship time will be focused on
						singing, prayer, taking part in the Lord's Supper and a Bible focused, relevant
						Gospel-oriented sermon. You will feel welcomed by a warm group of people who have a
						heart for community. We offer children's and youth programs for your family as well.
					</p>

					<p>
						What we believe: Primarily we believe that God created the world, that his Son Jesus
						Christ came to earth, lived among us, died on a cross and was buried but on the third
						day rose again. Through his resurrection, death has been conquered and we can now
						experience eternal life through Jesus. Later Jesus ascended to Heaven and the Holy
						Spirit was given to believers as a counselor and down-payment.
					</p>

					<blockquote class="border-l-4 border-violet-300 pl-4 italic">
						"By this all people will know that you are my disciples, if you have love for one
						another"
						<cite class="mt-2 block text-sm text-violet-200">John 13:35</cite>
					</blockquote>
				</div>

				<div class="mt-8">
					<a
						href="/visit"
						class="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-semibold text-violet-700 shadow-sm transition-colors hover:bg-violet-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
					>
						First timer? Learn more...
					</a>
				</div>
			</div>
		</div>

		<!-- Right Image Column -->
		<div class="relative h-64 lg:h-auto">
			<img loading="lazy" src={imageUrl} alt="Church gathering" class="h-full w-full object-cover" />
			<!-- Optional overlay for better text contrast if needed -->
			<div class="absolute inset-0 bg-gray-900/10"></div>
		</div>
	</div>
</section>
