<script lang="ts">
	import Button from './/Button.svelte';
	import { loadFacebookData } from '$lib/stores/embeds';

	export let url: string | undefined;

	const explanation = 'Click to load video from Facebook';
	const embedUrl = (url: string) => {
		const embedUrl = new URL('https://www.facebook.com/plugins/video.php');
		embedUrl.searchParams.append('href', url);
		return embedUrl.href;
	};

	let loadData = false;
	loadFacebookData.subscribe((value: boolean) => {
		loadData = value;
	}); // logs '0'
</script>

{#if url}
	{#if loadData}
		<iframe
			class="w-full aspect-video"
			title="Talk"
			src={embedUrl(url)}
			style="border:none;overflow:hidden"
			scrolling="no"
			frameborder="0"
			allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
			allowFullScreen
		></iframe>
	{:else}
		<Button {explanation} on:click={() => loadFacebookData.set(true)}>
			<slot />
		</Button>
	{/if}
{/if}
