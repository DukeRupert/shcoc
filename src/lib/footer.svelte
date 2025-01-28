<script>
	const logoUrl =
		'https://res.cloudinary.com/rr-wholesale/image/upload/v1710183600/South%20Hills%20CoC/logo-main_q6qlxl.png';

	const address = {
		street: '2294 Deerfield Ln',
		city: 'Helena',
		state: 'MT',
		zip: '59601',
		phone: '(406) 442-8950'
	};

	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-white">
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<img class="h-9" src={logoUrl} alt="South Hills Church of Christ" />
				<p class="text-balance text-sm/6 text-gray-600">
					Serving God and our community in Helena, Montana. Come grow with us in faith, fellowship,
					and service.
				</p>
				<div class="flex gap-x-6">
					<a href="https://www.facebook.com/groups/101145653368/" class="text-gray-600 hover:text-gray-800">
						<span class="sr-only">Facebook</span>
						<svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
					<a href="https://www.youtube.com/@southhillscoc/videos" class="text-gray-600 hover:text-gray-800">
						<span class="sr-only">YouTube</span>
						<svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>

			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm/6 font-semibold text-gray-900">About</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">About Us</a>
							</li>
							<li>
								<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Leadership</a>
							</li>
							<li>
								<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Ministries</a>
							</li>
							<li>
								<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Events</a>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm/6 font-semibold text-gray-900">Resources</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Sermons</a>
							</li>
							<li>
								<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Bible Classes</a>
							</li>
							<li>
								<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Community Groups</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm/6 font-semibold text-gray-900">Visit</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li class="text-sm/6 text-gray-600">
								{address.street}<br />
								{address.city}, {address.state}
								{address.zip}
							</li>
							<li>
								<a
									href={`tel:${address.phone.replace(/\D/g, '')}`}
									class="text-sm/6 text-gray-600 hover:text-gray-900"
								>
									{address.phone}
								</a>
							</li>
							<li class="text-sm/6 text-gray-600">
								Sunday Service<br />
								10:00 AM - 11:30 AM
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm/6 font-semibold text-gray-900">Connect</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Contact Us</a>
							</li>
							<li>
								<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Prayer Requests</a>
							</li>
							<li>
								<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Newsletter</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-sm/6 text-gray-600">
				&copy; {currentYear} South Hills Church of Christ. All rights reserved.
			</p>
		</div>
	</div>
</footer>
