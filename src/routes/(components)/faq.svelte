<script lang="ts" context="module">
	interface FAQ {
		question: string;
		answer: string;
	}
</script>

<script lang="ts">
	export let faqs: FAQ[] = [
		{
			question: 'If a tree falls in the forest and no one is around, does it make a sound?',
			answer: 'Only if a squirrel was there to giggle about it.'
		},
		{
			question: 'Why is abbreviation such a long word?',
			answer: 'Things are rarely what they seem...'
		},
		{
			question: 'Can a vegetarian eat animal crackers?',
			answer: 'They can, but it raises some serious philosophical dilemmas.'
		},
		{
			question: 'If you drop a soap on the floor, is the floor clean or the soap dirty?',
			answer: 'Depends on where you aim your shower next.'
		}
	];
</script>

<div class="bg-white">
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
		<div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
			<h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
				Frequently asked questions
			</h2>
			<dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
				{#each faqs as { question, answer }}
        <div class="pt-6">
					<dt>
						<!-- Expand/collapse question button -->
						<button
							type="button"
							class="flex w-full items-start justify-between text-left text-gray-900"
							aria-controls="faq-0"
							aria-expanded="false"
						>
							<span class="text-base font-semibold leading-7"
								>{question}</span
							>
							<span class="ml-6 flex h-7 items-center">
								<!--
                  Icon when question is collapsed.

                  Item expanded: "hidden", Item collapsed: ""
                -->
								<svg
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
								</svg>
								<!--
                  Icon when question is expanded.

                  Item expanded: "", Item collapsed: "hidden"
                -->
								<svg
									class="hidden h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
								</svg>
							</span>
						</button>
					</dt>
					<dd class="mt-2 pr-12" id="faq-0">
						<p class="text-base leading-7 text-gray-600">
							{answer}
						</p>
					</dd>
				</div>
        {/each}
			</dl>
		</div>
	</div>
</div>
