<script lang="ts">
	import Youtube from '$lib/components/Embeds/Youtube.svelte';
	import Ccc from '$lib/components/Embeds/CCC.svelte';
	import Facebook from '$lib/components/Embeds/Facebook.svelte';

	export let url: string | undefined;

	const dispatch = (givenUrl: string | undefined) => {
		if (!givenUrl) {
			return;
		}
		const url = new URL(givenUrl);
		if (url.hostname === 'www.youtube.com') {
			return Youtube;
		}
		if (url.hostname === 'media.ccc.de') {
			return Ccc;
		}
		if (url.hostname === 'www.facebook.com' && url.pathname === '/watch') {
			return Facebook;
		}
	};
	const component = dispatch(url);
</script>

{#if component}
	<svelte:component this={component} {url}></svelte:component>
{/if}
