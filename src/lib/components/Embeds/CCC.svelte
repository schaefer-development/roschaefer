<script lang="ts">
	import GdprConsent from './GdprConsent.svelte';
	import { ccc } from '$lib/stores/embeds';

	export let url: string | undefined;

	const embedUrl = (url: string) => {
		const embedUrl = new URL(url);
		embedUrl.pathname += '/oembed';
		return embedUrl.href;
	};
</script>

{#if url}
	<div class="pb-6">
		<GdprConsent consent={ccc}>
			<iframe title="Talk" class="aspect-video h-auto w-full" src={embedUrl(url)} frameborder="0" allowfullscreen></iframe>
		</GdprConsent>
	</div>
{/if}
