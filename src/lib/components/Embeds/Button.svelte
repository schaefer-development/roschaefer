<script lang="ts">
	export let explanation = 'Click to load video';
</script>

<button
	class="w-full aspect-video top-0 left-0 flex flex-col justify-center items-center text-white hover:bg-black hover:bg-opacity-30 transition ease-in-out duration-500"
	on:click
	aria-label="Play video"
>
	<svg
		class="h-20 w-20 fill-transparent stroke-current"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		stroke-width="1.5"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
		/>
	</svg>
	<p>{explanation}</p>
</button>
