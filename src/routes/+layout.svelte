<script>
	import { page } from '$app/stores';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import '../app.css';
</script>

<div id="page" class="app relative flex flex-col justify-between">
	<Header />
	<PageTransition url={$page.url}>
		<main class="relative max-w-4xl mx-auto mb-auto px-8 pb-12">
			<slot />
		</main>
	</PageTransition>
	<Footer />
</div>
