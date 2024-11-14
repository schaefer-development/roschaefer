<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		keyword: string;
		selectedKeyword: undefined | string;
		slot?: Snippet;
	}
	let { keyword, selectedKeyword = $bindable(), slot }: Props = $props();
	const selected = $derived(selectedKeyword === keyword);
	const onclick = () => {
		selectedKeyword = selectedKeyword === keyword ? undefined : keyword;
	};
	const extraClasses = $derived(
		selected ? 'bg-primary text-white' : 'bg-gray-600 hover:text-primary'
	);
</script>

<button
	{onclick}
	class="{extraClasses} my-1.5 mr-1.5 inline-block rounded-full px-3 py-1 text-xs font-medium uppercase leading-normal tracking-widest shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0"
>
	{keyword}
	{#if slot && selected}
		{@render slot()}
	{/if}
</button>
