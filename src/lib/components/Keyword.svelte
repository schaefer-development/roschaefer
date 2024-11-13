<script lang="ts">
	let { keyword, onclick } = $props();
</script>

<div
	{onclick}
	class="m-1 inline-block cursor-default rounded-full bg-neutral-600 px-3 py-1 text-xs font-medium uppercase leading-normal tracking-widest text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0"
>
	{keyword}
</div>
