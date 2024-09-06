<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import { page } from '$app/stores';
	$: basics = $page.data.resume.basics;
</script>

<svelte:head>
	<title>Start</title>
	<meta name="description" content="Website of {basics.name}" />
</svelte:head>

<section>
	<div class="flex gap-6 items-center">
		<Avatar classNames="w-16 aspect-ratio rounded-full my-4"></Avatar>
		<h3 class="text-white">Hi, I'm {basics.name}</h3>
	</div>
	<h1 class="font-medium text-white mb-12">
		Software<br /><span class="text-primary">Developer</span>
	</h1>
	<Divider />
	<p class="py-10">
		{basics.summary}
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
