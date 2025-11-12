<script lang="ts">
	import type { Experiences } from '$lib/data/experiences';

	import { experiences } from '$lib/data/experiences';
	import { createSkills } from '$lib/utils/createSkills';
	import { marked } from 'marked';
	import Divider from '$lib/components/Divider.svelte';
	import Embed from '$lib/components/Embeds/Embed.svelte';
	import Link from '$lib/components/Link.svelte';
	import Keyword from '$lib/components/Keyword.svelte';
	import { send, receive } from '$lib/transitions/transition';
	import { flip } from 'svelte/animate';

	let selectedKeyword: undefined | string = $state(undefined);

	const filterExperiences = (experiences: Experiences, selectedKeyword: undefined | string) => {
		if (!selectedKeyword) {
			return experiences;
		}
		return experiences.filter((experience) => experience.keywords.includes(selectedKeyword));
	};
	const filteredExperiences = $derived(filterExperiences(experiences, selectedKeyword));
	const skills = $derived(createSkills(experiences));
</script>

<svelte:head>
	<title>Robert Schäfer - Full Stack Developer - Projects</title>
</svelte:head>

<section class="pb-24">
	<h1 class="mb-12 font-medium text-white">
		Project <span class="text-primary">Experience</span>
	</h1>
	<div class="relative flex h-[10vh] w-full items-center pb-12">
		<hr class="relative h-0.5 w-24 -translate-x-12 bg-white" />
	</div>
	<div>
		<h3 class="pb-2 font-bold text-white">
			Skills<span class="text-primary absolute animate-bounce pl-6 font-normal"
				>Select to filter</span
			>
		</h3>
		<div class="flex flex-wrap justify-between">
			{#each skills as skill (skill.name)}
				<Keyword keyword={skill.name} bind:selectedKeyword>
					{#snippet slot()}
						<span class="normal-case">({skill.level})</span>
					{/snippet}
				</Keyword>
			{/each}
		</div>
	</div>
	<Divider />
	<ul>
		{#each filteredExperiences as experience (experience.name)}
			<li
				in:receive={{ key: experience.name }}
				out:send={{ key: experience.name }}
				animate:flip={{ duration: 2000 }}
			>
				<Embed url={experience.url}></Embed>
				<h2 class="decoratefont mt-4">
					{experience.roles}
				</h2>
				<p class="mb-6">
					{experience.startDate} — {experience.endDate ?? 'now'}
				</p>
				{#if experience.url}
					<h3>
						<!-- eslint-disable svelte/no-navigation-without-resolve -->
						<a
							class="border-none font-bold text-white hover:border-none hover:text-white"
							href={experience.url}>{experience.name || experience.entity}</a
						>
						<!-- eslint-enable -->
					</h3>
				{:else}
					<h3 class="font-bold text-white">{experience.name || experience.entity}</h3>
				{/if}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<p class="pt-1">{@html marked(experience.description)}</p>
				{#if experience.keywords.length > 0}
					<div class="py-6">
						{#each experience.keywords as keyword (keyword)}
							<Keyword {keyword} bind:selectedKeyword></Keyword>
						{/each}
					</div>
				{/if}
				<Link url={experience.url}></Link>

				<Divider />
			</li>
		{/each}
	</ul>
</section>
