<script lang="ts">
	import { page } from '$app/stores';

	import { marked } from 'marked';
	import Divider from '$lib/components/Divider.svelte';
	import Embed from '$lib/components/Embed.svelte';

  const youtubeId = (givenUrl: string | undefined) => {
    if (!givenUrl) { return undefined }
    const url = new URL(givenUrl)
    return url.searchParams.get('v')
  }
</script>

<svelte:head>
	<title>Speaker</title>
</svelte:head>

<section class="pb-24">
	<h1 class="font-medium text-white mb-12">
		My<br /><span class="text-primary">Speaker experience</span>
	</h1>
	<Divider />
	{#each $page.data.resume.publications as publication, index}
		<div class="pt-14">
      <Embed url={publication.url}></Embed>
			<p class="mb-6">
				{publication.releaseDate}
			</p>
			<h3 class="font-bold text-white">{publication.name}</h3>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<p class="pt-1">{@html marked(publication.summary)}</p>
			{#if publication.url}
				<a class="flex max-w-max mt-2" href={publication.url}
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="4"
						stroke="currentColor"
						class="w-3 md:w-4 mt-1 mr-1.5 md:mr-2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
						/>
					</svg>
					{new URL(publication.url).hostname}</a
				>
			{/if}
			<div class="w-full h-16" />
			<Divider />
		</div>
	{/each}
</section>

<style>
	.stroke {
		font-weight: 700;
		-webkit-text-fill-color: rgba(0, 0, 0, 0);
		-webkit-text-stroke-width: 1.2px;
		-webkit-text-stroke-color: rgba(184, 192, 204, 0.8);
		/* #9ca3af */
	}
</style>
