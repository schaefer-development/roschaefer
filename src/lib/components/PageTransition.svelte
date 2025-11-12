<script lang="ts">
	import { fade } from 'svelte/transition';
	export let url = URL;
</script>

{#key url}
	<div in:fade={{ duration: 300, delay: 400 }} class="top-0 left-0 z-1 h-full min-h-screen w-full">
		<slot />
	</div>
{/key}
