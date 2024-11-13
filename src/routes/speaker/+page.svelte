<script lang="ts">
	import { talks } from '$lib/data/talks';
	import Divider from '$lib/components/Divider.svelte';
	import Embed from '$lib/components/Embeds/Embed.svelte';
	import Link from '$lib/components/Link.svelte';
</script>

<svelte:head>
	<title>Robert Schäfer - Full Stack Developer - Speaker Experience</title>
</svelte:head>

<section class="pb-24">
	<h1 class="mb-12 font-medium text-white">
		Speaker<br /><span class="text-primary">experience</span>
	</h1>
	<Divider />
	{#each talks as talk}
		<div>
			<Embed url={talk.url}></Embed>
			<p class="mb-6">
				{talk.date}
			</p>
			<h3 class="font-bold text-white">{talk.entity}</h3>
			<p class="pt-1">{talk.name}</p>
			{#if talk.description}
				<p>{talk.description}</p>
			{/if}
			<Link url={talk.url}></Link>
			<Divider />
		</div>
	{/each}
</section>
