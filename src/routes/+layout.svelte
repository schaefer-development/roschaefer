<script lang="ts">
	import { page } from '$app/stores';
	import { basics } from '$lib/data/basics';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import '../app.css';
</script>

<svelte:head>
	<meta name="description" content="Website of {basics.name}" />
</svelte:head>

<div
	id="page"
	class="app relative flex flex-col justify-between bg-gradient-to-r from-gray-950 to-gray-800"
>
	<Header />
	<PageTransition url={$page.url}>
		<main class="relative mx-auto mb-auto max-w-4xl px-8 pb-12">
			<slot />
		</main>
	</PageTransition>
	<Footer />
</div>
