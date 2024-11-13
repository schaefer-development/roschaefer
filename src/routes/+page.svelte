<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import { basics } from '$lib/data/basics';
</script>

<svelte:head>
	<title>Robert Schäfer - Full Stack Developer</title>
	<meta name="description" content="Website of {basics.name}" />
</svelte:head>

<section>
	<div class="flex items-center gap-6">
		<Avatar classNames="w-20 rounded-full my-4"></Avatar>
		<h3 class="text-white">Hi, I'm {basics.name}</h3>
	</div>
	<h1 class="mb-12 font-medium text-white">
		{basics.label.split(' ').slice(0, -1).join(' ')}
		<br /><span class="text-primary">
			{basics.label.split(' ').slice(-1).join(' ')}
		</span>
	</h1>
	<div class="relative flex h-[10vh] w-full items-center pb-12">
		<hr class="relative h-0.5 w-24 -translate-x-12 bg-white" />
	</div>
	<p class="pb-12">
		{basics.summary}
	</p>
	<div class="flex gap-8">
		<a
			class="rounded-full border-4 border-primary bg-primary px-4 py-2 text-sm font-black uppercase tracking-widest text-black transition-all duration-300 ease-in-out hover:scale-110 hover:bg-primary hover:text-white"
			href="/projects">Browse Projects</a
		>
		<a
			class="rounded-full border-4 border-white px-4 py-2 text-sm font-black uppercase tracking-widest text-white transition-all duration-300 ease-in-out hover:scale-110 hover:border-b-white hover:bg-white hover:text-black"
			href="/contact">Get in touch</a
		>
	</div>
</section>
