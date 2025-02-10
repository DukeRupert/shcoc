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

	const footerLinks = {
		about: [
			{ label: 'About Us', href: '/about' },
			{ label: 'Leadership', href: '/about/leadership' },
			{ label: 'Our Doctrine', href: '/about/doctrine' },
			{ label: 'History & Mission', href: '/about/history-and-mission' }
		],
		worship: [
			{ label: 'Visit Us', href: '/visit' },
			{ label: 'Service Times', href: '/visit#times' },
			{ label: 'What to Expect', href: '/visit#what-to-expect' },
			{ label: 'Watch Online', href: 'https://www.youtube.com/@southhillscoc' },
		   { 
            label: 'Online Giving', 
            href: 'https://secure.myvanco.com/YKAN/home',
            target: '_blank',
            rel: 'noopener noreferrer'
        }
    ],
		ministries: [
			{ label: 'All Ministries', href: '/ministries' },
			{ label: "Women's Ministry", href: '/ministries#womens' },
			{ label: "Men's Ministry", href: '/ministries#mens' },
			{ label: 'Youth Ministry', href: '/ministries#youth' },
			{ label: "Children's Ministry", href: '/ministries#children' }
		],
		contact: {
			address: {
				street: '2294 Deerfield Ln',
				city: 'Helena',
				state: 'MT',
				zip: '59601'
			},
			phone: '(406) 442-8950',
			email: 'office@southhillscoc.org',
			times: {
				bibleClass: 'Bible Class: 9:30 AM',
				worship: 'Worship Service: 10:30 AM'
			}
		}
	};
</script>

<footer class="bg-white">
	<div class="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8 lg:py-20">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<!-- Logo and Contact Info -->
			<div class="space-y-8">
				<img class="h-12" src={logoUrl} alt="South Hills Church of Christ" />
				<div class="space-y-4 text-gray-600">
					<p class="text-sm">
						{footerLinks.contact.address.street}<br />
						{footerLinks.contact.address.city}, {footerLinks.contact.address.state}
						{footerLinks.contact.address.zip}
					</p>
					<p class="text-sm">
						<strong>Phone:</strong>
						<a href={`tel:${footerLinks.contact.phone}`} class="hover:text-violet-600">
							{footerLinks.contact.phone}
						</a>
					</p>
					<p class="text-sm">
						<strong>Email:</strong>
						<a href={`mailto:${footerLinks.contact.email}`} class="hover:text-violet-600">
							{footerLinks.contact.email}
						</a>
					</p>
					<p class="text-sm">
						<strong>Sunday Services:</strong><br />
						{footerLinks.contact.times.bibleClass}<br />
						{footerLinks.contact.times.worship}
					</p>
				</div>
			</div>

			<!-- Links Grid -->
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<!-- About Links -->
					<div>
						<h3 class="text-sm font-semibold text-gray-900">About</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each footerLinks.about as link}
								<li>
									<a href={link.href} target={link.target} 
    rel={link.rel} class="text-sm text-gray-600 hover:text-violet-600">
										{link.label}
									</a>
								</li>
							{/each}
						</ul>
					</div>

					<!-- Worship Links -->
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold text-gray-900">Worship</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each footerLinks.worship as link}
								<li>
									<a href={link.href} target={link.target} 
    rel={link.rel} class="text-sm text-gray-600 hover:text-violet-600">
										{link.label}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</div>

				<!-- Ministries Links -->
				<div>
					<h3 class="text-sm font-semibold text-gray-900">Ministries</h3>
					<ul role="list" class="mt-6 space-y-4">
						{#each footerLinks.ministries as link}
							<li>
								<a href={link.href} target={link.target} 
    rel={link.rel} class="text-sm text-gray-600 hover:text-violet-600">
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>

		<!-- Copyright -->
		<div class="mt-16 border-t border-gray-900/10 pt-8">
			<p class="text-sm text-gray-600">
				© {new Date().getFullYear()} South Hills Church of Christ. All rights reserved.
			</p>
		</div>
	</div>
</footer>
