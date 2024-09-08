<script lang="ts">
	import { talks } from '$lib/data/talks';
	import { marked } from 'marked';
	import Divider from '$lib/components/Divider.svelte';
	import Embed from '$lib/components/Embed.svelte';
	import Link from '$lib/components/Link.svelte';
</script>

<svelte:head>
	<title>Speaker</title>
</svelte:head>

<section class="pb-24">
	<h1 class="font-medium text-white mb-12">
		My<br /><span class="text-primary">Speaker experience</span>
	</h1>
	<Divider />
	{#each talks as talk}
		<div class="pt-14">
			<Embed url={talk.url}></Embed>
			<p class="mb-6">
				{talk.date}
			</p>
			<h3 class="font-bold text-white">{talk.name}</h3>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<p class="pt-1">{@html marked(talk.summary)}</p>
			<Link url={talk.url}></Link>
			<div class="w-full h-16" />
			<Divider />
		</div>
	{/each}
</section>
