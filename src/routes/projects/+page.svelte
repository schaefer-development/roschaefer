<script lang="ts">
	import type { PageData } from './$types';

	import { marked } from 'marked';
	import Divider from '$lib/components/Divider.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="font-medium text-white mb-12">
		My<br /><span class="text-primary">Experience</span>
	</h1>
	<Divider />
	{#each data.resume.projects as project, index}
		<div class="py-12">
			<p class="stroke text-9xl mb-6">{index + 1}</p>
			<h2 class="decoratefont mt-4">
				{project.roles}
			</h2>
			<p class="mb-6">
				{project.startDate} — {project.endDate}
			</p>
			<h3 class="font-bold text-white">{project.name}</h3>
			<p class="pt-1">{@html marked(project.description)}</p>
			{#if project.keywords.length > 0}
				<div class="py-10">
					{#each project.keywords as keyword}
						<div
							class="m-1 inline-block rounded-full bg-neutral-200 px-3 py-1 text-xs tracking-widest font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400"
						>
							{keyword}
						</div>
					{/each}
				</div>
			{/if}
			{#if project.url}
				<a class="flex mb-16 max-w-max" href={project.url}
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="3"
						stroke="currentColor"
						class="w-4 md:w-5 mr-1.5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
						/>
					</svg>
					{project.url}</a
				>
			{/if}
			<Divider />
		</div>
	{/each}
</section>

<style>
	.stroke {
		font-family: 'Jost Variable', sans-serif;
		font-weight: 600;
		-webkit-text-fill-color: rgba(0, 0, 0, 0);
		-webkit-text-stroke-width: 1.2px;
		-webkit-text-stroke-color: rgba(184, 192, 204, 0.8);
		/* #9ca3af */
	}
</style>
