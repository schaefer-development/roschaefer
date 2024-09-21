<script lang="ts">
	export let url: string | undefined;
	const embedUrl = (url: string) => {
		const embedUrl = new URL(url);
		embedUrl.pathname += '/oembed';
		return embedUrl.href;
	};
</script>

{#if url}
	<iframe title="Talk" src={embedUrl(url)} frameborder="0" allowfullscreen></iframe>
{/if}

<style>
	iframe {
		height: auto;
		aspect-ratio: 1.7699;
		width: 100%;
	}
</style>
