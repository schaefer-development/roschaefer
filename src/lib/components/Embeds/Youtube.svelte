<script lang="ts">
	import Youtube from '$lib/components/Youtube/Youtube.svelte';

	export let url: string | undefined;
	const youtubeId = url && new URL(url).searchParams.get('v');
</script>

{#if youtubeId}
	<Youtube id={youtubeId}></Youtube>
{/if}
