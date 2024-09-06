<script lang="ts">
	import Youtube from 'svelte-youtube-embed';

	export let url: string | undefined;

	const mapping = (givenUrl: string | undefined) => {
		if (!givenUrl) {
			return {};
		}
		const url = new URL(givenUrl);
		if (url.hostname === 'www.youtube.com') {
			return { youtube: url.searchParams.get('v') };
		}
		if (url.hostname === 'media.ccc.de') {
			const embedUrl = new URL(url);
			embedUrl.pathname += '/oembed';
			return { ccc: embedUrl.href };
		}
		return {};
	};

	$: youtubeId = mapping(url).youtube;
	$: cccId = mapping(url).ccc;
</script>

{#if youtubeId}
	<Youtube id={youtubeId}></Youtube>
{:else if cccId}
	<iframe class="ccc" title="Talk" src={cccId} frameborder="0" allowfullscreen></iframe>
{/if}

<style>
	iframe.ccc {
		height: auto;
		aspect-ratio: 1.7699;
		width: 100%;
	}
</style>
