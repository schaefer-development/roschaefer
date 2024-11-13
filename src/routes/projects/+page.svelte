<script lang="ts">
	import type { Experiences } from '$lib/data/experiences';

	import { experiences } from '$lib/data/experiences';
	import { createSkills } from '$lib/utils/createSkills';
	import { marked } from 'marked';
	import Divider from '$lib/components/Divider.svelte';
	import Embed from '$lib/components/Embeds/Embed.svelte';
	import Link from '$lib/components/Link.svelte';
	import Keyword from '$lib/components/Keyword.svelte';
	import { SvelteSet } from 'svelte/reactivity';

	const selectedKeywords = new SvelteSet<string>();

	const filterExperiences = (experiences: Experiences) => {
		if (selectedKeywords.size <= 0) {
			return experiences;
		}
		return experiences.filter((experience) =>
			experience.keywords.some((keyword) => selectedKeywords.has(keyword))
		);
	};
	const filteredExperiences = $derived(filterExperiences(experiences));
	const skills = $derived(createSkills(experiences));
</script>

<svelte:head>
	<title>Robert Schäfer - Full Stack Developer - Projects</title>
</svelte:head>

<section class="pb-24">
	<h1 class="mb-12 font-medium text-white">
		Project <span class="text-primary">Experience</span>
	</h1>
	<Divider />
	<div class="pt-14">
		<h3 class="pb-2 font-bold text-white">Skills</h3>
		{#each skills as skill}
			{#snippet slot()}
				<span class="normal-case">({skill.level})</span>
			{/snippet}
			<Keyword keyword={skill.name} {selectedKeywords} {slot}></Keyword>
		{/each}
	</div>
	{#each filteredExperiences as experience}
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
						<Keyword {keyword} {selectedKeywords}></Keyword>
					{/each}
				</div>
			{/if}
			<Link url={experience.url}></Link>
			<div class="h-16 w-full"></div>
			<Divider />
		</div>
	{/each}
</section>
