<script lang="ts">
	import GdprConsent from './GdprConsent.svelte';
	import { youtube } from '$lib/stores/embeds';
	import { scale } from 'svelte/transition';

	export let url: string | undefined;

	const animations = { delay: 500, duration: 800 };

	const embedUrl = (url: string) => {
		const youtubeId = url && new URL(url).searchParams.get('v');
		const embedUrl = new URL(`https://www.youtube-nocookie.com/embed/${youtubeId}?&rel=0`);
		return embedUrl.href;
	};
</script>

{#if url}
	<div class="pb-6">
		<GdprConsent consent={youtube}>
			<iframe
				class="w-full aspect-video"
				title="Talk"
				src={embedUrl(url)}
				style="border:none;overflow:hidden"
				scrolling="no"
				frameborder="0"
				allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
				allowFullScreen
				in:scale={animations}
			></iframe>
		</GdprConsent>
	</div>
{/if}
