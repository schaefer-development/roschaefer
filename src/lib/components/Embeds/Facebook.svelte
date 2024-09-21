<script lang="ts">
	export let url: string | undefined;
	const embedUrl = (url: string) => {
		const embedUrl = new URL('https://www.facebook.com/plugins/video.php');
		embedUrl.searchParams.append('href', url);
		return embedUrl.href;
	};
</script>

{#if url}
	<iframe
		title="Talk"
		src={embedUrl(url)}
		style="border:none;overflow:hidden"
		scrolling="no"
		frameborder="0"
		allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
		allowFullScreen
	></iframe>
{/if}

<style>
	iframe {
		height: auto;
		aspect-ratio: 1.7699;
		width: 100%;
	}
</style>
