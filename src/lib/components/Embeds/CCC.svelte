<script lang="ts">
	import Button from './/Button.svelte';

	export let url: string | undefined;

	const explanation = 'Click to load video from media.ccc.de';
	const embedUrl = (url: string) => {
		const embedUrl = new URL(url);
		embedUrl.pathname += '/oembed';
		return embedUrl.href;
	};

	let loadData = false;
</script>

{#if url}
	{#if loadData}
	<iframe title="Talk" src={embedUrl(url)} frameborder="0" allowfullscreen></iframe>
	{:else}
		<Button {explanation} on:click={() => (loadData = true)}>
			<slot />
		</Button>
	{/if}
{/if}

<style>
	iframe {
		height: auto;
		aspect-ratio: 1.7699;
		width: 100%;
	}
</style>
