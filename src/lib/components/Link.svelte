<script lang="ts">
	export let url: string | undefined;
</script>

{#if url}
	<a class="flex max-w-max mt-2" href={url}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="4"
			stroke="currentColor"
			class="w-3 md:w-4 mt-1 mr-1.5 md:mr-2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
			/>
		</svg>
		{new URL(url).hostname}
	</a>
{/if}
