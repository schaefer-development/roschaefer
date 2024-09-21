<script lang="ts">
	import Youtube from '$lib/components/Youtube/Youtube.svelte';

	export let url: string | undefined;
	const youtubeId = url && new URL(url).searchParams.get('v');
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
{/if}
