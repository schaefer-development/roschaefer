<script lang="ts">
	import { page } from '$app/stores';

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
	{#each $page.data.resume.publications as publication}
		<div class="pt-14">
			<Embed url={publication.url}></Embed>
			<p class="mb-6">
				{publication.releaseDate}
			</p>
			<h3 class="font-bold text-white">{publication.name}</h3>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<p class="pt-1">{@html marked(publication.summary)}</p>
			<Link url={publication.url}></Link>
			<div class="w-full h-16" />
			<Divider />
		</div>
	{/each}
</section>
