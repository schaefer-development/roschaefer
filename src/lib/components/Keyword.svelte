<script lang="ts">
	import type { SvelteSet } from 'svelte/reactivity';
	import type { Snippet } from 'svelte';
	interface Props {
		keyword: string;
		selectedKeywords: SvelteSet<string>;
		slot?: Snippet;
	}
	const { keyword, selectedKeywords, slot }: Props = $props();
	const selected = $derived(selectedKeywords.has(keyword));
	const onclick = () => {
		if (!selectedKeywords.delete(keyword)) {
			selectedKeywords.add(keyword);
		}
	};
	const extraClasses = $derived(selected ? 'text-primary border border-primary' : 'text-white');
</script>

<button
	{onclick}
	class="{extraClasses} m-1 inline-block rounded-full bg-gray-600 px-3 py-1 text-xs font-medium uppercase leading-normal tracking-widest shadow-md transition duration-150 ease-in-out hover:text-primary hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0"
>
	{keyword}
	{#if slot && selected}
		{@render slot()}
	{/if}
</button>
