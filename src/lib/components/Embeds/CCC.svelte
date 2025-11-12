<script lang="ts">
	import { SvelteURL } from 'svelte/reactivity';
	import GdprConsent from './GdprConsent.svelte';
	import { ccc } from '$lib/stores/embeds.svelte';
	import { scale } from 'svelte/transition';

	export let url: string | undefined;

	const animations = { delay: 500, duration: 800 };

	const embedUrl = (url: string) => {
		const embedUrl = new SvelteURL(url);
		embedUrl.pathname += '/oembed';
		return embedUrl.href;
	};
</script>

{#if url}
	<div class="pb-6">
		<GdprConsent consent={ccc}>
			{#snippet slot()}
				<iframe
					title="Talk"
					class="aspect-video h-auto w-full"
					src={embedUrl(url)}
					frameborder="0"
					allowfullscreen
					in:scale={animations}
				></iframe>
			{/snippet}
		</GdprConsent>
	</div>
{/if}
