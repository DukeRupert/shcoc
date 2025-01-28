<script lang="ts">
	import '../app.css';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	let { children } = $props();
</script>

<Header />
<main class="main">
	{@render children()}
</main>
<Footer />
