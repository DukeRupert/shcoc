<script>
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<!-- Keep an eye on light/dark mode preference -->
<ModeWatcher />
<Navbar />
<main>
	<slot />
</main>
<Footer />
