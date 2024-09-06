<script lang="ts">
	import type { LayoutData } from './$types';

	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import '../app.css';

	// eslint-disable-next-line svelte/valid-compile
	export let data: LayoutData;
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
