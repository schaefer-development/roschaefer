<script lang="ts">
	import Button from './/Button.svelte';
	import { loadCccData } from '$lib/stores/embeds';

	export let url: string | undefined;

	const explanation = 'Click to load video from media.ccc.de';
	const embedUrl = (url: string) => {
		const embedUrl = new URL(url);
		embedUrl.pathname += '/oembed';
		return embedUrl.href;
	};

	let loadData = false;
	loadCccData.subscribe((value: boolean) => {
		loadData = value;
	}); // logs '0'
</script>

{#if url}
	<div class="pb-6">
	{#if loadData}
		<iframe title="Talk" src={embedUrl(url)} frameborder="0" allowfullscreen></iframe>
	{:else}
		<Button {explanation} on:click={() => loadCccData.set(true)}>
			<slot />
		</Button>
	{/if}
</div>
{/if}

<style>
	iframe {
		height: auto;
		aspect-ratio: 1.7699;
		width: 100%;
	}
</style>
