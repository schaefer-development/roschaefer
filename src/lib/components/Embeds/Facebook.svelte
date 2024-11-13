<script lang="ts">
	import GdprConsent from './GdprConsent.svelte';
	import { facebook } from '$lib/stores/embeds.svelte';
	import { scale } from 'svelte/transition';

	export let url: string | undefined;

	const animations = { delay: 500, duration: 800 };

	const embedUrl = (url: string) => {
		const embedUrl = new URL('https://www.facebook.com/plugins/video.php');
		embedUrl.searchParams.append('href', url);
		return embedUrl.href;
	};
</script>

{#if url}
	<div class="pb-6">
		{#snippet slot()}
			<iframe
				class="aspect-video w-full"
				title="Talk"
				src={embedUrl(url)}
				style="border:none;overflow:hidden"
				scrolling="no"
				frameborder="0"
				allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
				allowFullScreen
				in:scale={animations}
			></iframe>
		{/snippet}
		<GdprConsent consent={facebook} {slot} />
	</div>
{/if}
