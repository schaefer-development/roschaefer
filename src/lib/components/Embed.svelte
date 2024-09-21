<script lang="ts">
	import Youtube from '$lib/components/Youtube/Youtube.svelte';

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
		if (url.hostname === 'www.facebook.com') {
			const embedUrl = new URL('https://www.facebook.com/plugins/video.php');
			embedUrl.searchParams.append('href', url.href);
			return { facebook: embedUrl.href };
		}
		return {};
	};

	$: youtubeId = mapping(url).youtube;
	$: cccId = mapping(url).ccc;
	$: facebookId = mapping(url).facebook;
</script>

{#if youtubeId}
	<Youtube id={youtubeId}>
		<svelte:fragment slot="thumbnail" let:id let:altThumb let:title let:play>
			{#key play}
				<img
					src="https://i.ytimg.com/vi/{id}/{altThumb ? 'hqdefault' : 'maxresdefault'}.jpg"
					{title}
					alt="Youtube video: {title}"
					referrerpolicy="no-referrer"
				/>
			{/key}
		</svelte:fragment>
	</Youtube>
{:else if cccId}
	<iframe title="Talk" src={cccId} frameborder="0" allowfullscreen></iframe>
{:else if facebookId}
	<iframe
		title="Talk"
		src={facebookId}
		style="border:none;overflow:hidden"
		scrolling="no"
		frameborder="0"
		allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
		allowFullScreen={true}
	></iframe>
{/if}

<style>
	iframe {
		height: auto;
		aspect-ratio: 1.7699;
		width: 100%;
	}
  img {
    height: auto;
    aspect-ratio: var(--aspect-ratio);
    width: 100%;
  }
</style>
