<script lang="ts">
	import { page } from '$app/stores';
	import { asset } from '$app/paths';
	import { basics } from '$lib/data/basics';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';

	import '../app.css';

	let y = 0;
	let parallaxOffset = 0;
	$: parallaxOffset = y * -0.25;
</script>

<svelte:head>
	<meta name="description" content="Website of {basics.name}" />
</svelte:head>

<svelte:window bind:scrollY={y} />

<div id="page">
	<div
		class="pointer-none fixed top-0 left-0 h-screen w-full bg-linear-to-tr from-gray-950 to-gray-800"
	></div>

	<div class="fixed top-0 left-0 h-screen w-full">
		<div
			style="background-image: url({asset(
				'/bg.svg'
			)}); background-position:50% 0%; transform: translateY({parallaxOffset}px); will-change: transform;"
			class="relative z-1 h-[200vh] w-full bg-cover opacity-70"
		></div>
	</div>

	<div class="app relative flex flex-col justify-between">
		<Header />
		<PageTransition url={$page.url}>
			<main class="relative mx-auto mb-auto max-w-4xl px-8 pb-12">
				<slot />
			</main>
		</PageTransition>
		<Footer />
	</div>
</div>
