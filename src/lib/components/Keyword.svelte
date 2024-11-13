<script lang="ts">
	import type { SvelteSet } from 'svelte/reactivity';
	interface Props {
		keyword: string;
		selectedKeywords: SvelteSet<string>;
	}
	const { keyword, selectedKeywords }: Props = $props();
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
	class="{extraClasses} m-1 inline-block rounded-full bg-neutral-600 px-3 py-1 text-xs font-medium uppercase leading-normal tracking-widest shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0"
>
	{keyword}
</button>
