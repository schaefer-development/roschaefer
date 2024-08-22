<script>
	import { page } from '$app/stores';
	import Robert from '$lib/images/roschaefer.jpg';
	import Divider from '$lib/components/Divider.svelte';
</script>

<svelte:head>
	<title>Start</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="flex gap-6 items-center">
		<img
			src={Robert}
			width="400"
			height="400"
			class="w-16 aspect-ratio rounded-full my-4"
			alt="Robert Schäfer"
		/>
		<h3 class="text-2xl">Hi, I'm Robert</h3>
	</div>
	<h1 class="text-8xl font-medium uppercase text-white pb-8">
		Software<br /><span class="text-primary">Developer</span>
	</h1>
	<Divider />
	<p class="py-8">
		At the moment a digital nomad, I work 100% remotely as a freelancer. Since my studies in 2009 I
		am involved in computer science and started 2012 as a full stack developer.
	</p>
	<div class="flex gap-4">
		<a href="/projects" class="px-6 py-2 bg-primary rounded-full text-black">Browse Projects</a>
		<a href="/contact" class="px-6 py-2 border-4 border-white rounded-full">Get in Touch</a>
	</div>
</section>
