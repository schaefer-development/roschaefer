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
		<h3 class="text-white">Hi, I'm Robert</h3>
	</div>
	<h1 class="font-medium text-white mb-12">
		Software<br /><span class="text-primary">Developer</span>
	</h1>
	<Divider />
	<p class="py-10">
		At the moment a digital nomad, I work 100% remotely as a freelancer. Since my studies in 2009 I
		am involved in computer science and started 2012 as a full stack developer.
	</p>
	<div class="flex gap-8">
		<a
			class="text-sm bg-primary font-black text-black uppercase tracking-widest px-4 py-2 border-4 border-primary rounded-full hover:text-white hover:bg-primary hover:scale-110 ease-in-out transition-all duration-300"
			href="/projects">Browse Projects</a
		>
		<a
			class="text-sm font-black text-white uppercase tracking-widest px-4 py-2 border-4 border-white rounded-full hover:text-black hover:bg-white hover:border-b-white hover:scale-110 ease-in-out transition-all duration-300"
			href="/contact">Get in touch</a
		>
	</div>
</section>
