<script lang="ts">
	import { experiences } from '$lib/data/experiences';

	import { marked } from 'marked';
	import Divider from '$lib/components/Divider.svelte';
	import Embed from '$lib/components/Embeds/Embed.svelte';
	import Link from '$lib/components/Link.svelte';
</script>

<svelte:head>
	<title>Robert Schäfer - Full Stack Developer - Projects</title>
</svelte:head>

<section class="pb-24">
	<h1 class="mb-12 font-medium text-white">
		Project <span class="text-primary">Experience</span>
	</h1>
	<Divider />
	{#each experiences as experience}
		<div class="pt-14">
			<Embed url={experience.url}></Embed>
			<h2 class="decoratefont mt-4">
				{experience.roles}
			</h2>
			<p class="mb-6">
				{experience.startDate} — {experience.endDate ?? 'now'}
			</p>
			{#if experience.url}
				<h3>
					<a class="font-bold text-white hover:border-white hover:text-white" href={experience.url}
						>{experience.name || experience.entity}</a
					>
				</h3>
			{:else}
				<h3 class="font-bold text-white">{experience.name || experience.entity}</h3>
			{/if}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<p class="pt-1">{@html marked(experience.description)}</p>
			{#if experience.keywords.length > 0}
				<div class="py-6">
					{#each experience.keywords as keyword}
						<div
							class="m-1 inline-block cursor-default rounded-full bg-neutral-600 px-3 py-1 text-xs font-medium uppercase leading-normal tracking-widest text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0"
						>
							{keyword}
						</div>
					{/each}
				</div>
			{/if}
			<Link url={experience.url}></Link>
			<div class="h-16 w-full"></div>
			<Divider />
		</div>
	{/each}
</section>
