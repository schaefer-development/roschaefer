<script lang="ts">
	import GdprConsent from './GdprConsent.svelte';
	import { ccc } from '$lib/stores/embeds.svelte';

	export let url: string | undefined;

	const embedUrl = (url: string) => {
		const embedUrl = new URL(url);
		embedUrl.pathname += '/oembed';
		return embedUrl.href;
	};
</script>

{#if url}
	<div class="pb-6">
		{#snippet slot()}
			<iframe
				title="Talk"
				class="aspect-video h-auto w-full"
				src={embedUrl(url)}
				frameborder="0"
				allowfullscreen
			></iframe>
		{/snippet}
		<GdprConsent consent={ccc} {slot} />
	</div>
{/if}
