<script lang="ts">
	import Button from './Facebook/Button.svelte';

	export let url: string | undefined;
	const embedUrl = (url: string) => {
		const embedUrl = new URL('https://www.facebook.com/plugins/video.php');
		embedUrl.searchParams.append('href', url);
		return embedUrl.href;
	};

	let loadData = false;
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
		<Button on:click={() => (loadData = true)}>
			<slot />
		</Button>
	{/if}
{/if}
