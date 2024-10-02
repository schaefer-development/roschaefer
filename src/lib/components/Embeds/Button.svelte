<script lang="ts">
	export let explanation = 'Click to load video';
	import Noise from '$lib/assets/noise.gif';
</script>

<button
	class="w-full aspect-video top-0 left-0 flex flex-col justify-center items-center text-white bg-black transition ease-in-out duration-500"
	on:click
	aria-label="Play video"
>
	<div class="skeletton relative w-full h-full">
		<div
			class="absolute top-0 left-0 w-full h-full bg-cover"
			style="background-image: url('{Noise}')"
			alt="Noise"
		></div>
		<div
			class="shadow_inset absolute top-0 left-0 w-full h-full bg-black/70 flex flex-col items-center justify-center"
		>
			<svg
				class="w-[12vw] max-w-32 aspect-ratio fill-transparent stroke-current"
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
		</div>
	</div>
</button>

<style>
	.shadow_inset {
		-webkit-box-shadow: inset 0px 0px 30vw 5px #000000;
		box-shadow: inset 0px 0px 30vw 5px #000000;
	}
</style>
