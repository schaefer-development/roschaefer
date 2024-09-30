<script lang="ts">
	export let explanation = 'Click to load video';
</script>

<button
	class="border-2 border-black w-full aspect-video top-0 left-0 flex flex-col justify-center items-center text-white bg-black transition ease-in-out duration-500"
	on:click
	aria-label="Play video"
>
	<div class="noise w-full h-full top-0 left-0 bg-black flex flex-col items-center justify-center">
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
		<p class="text-shadow">{explanation}</p>
	</div>
</button>


<style>
	.text-shadow{
		text-shadow: 2px 2px 2px rgba(0,0,0,0.8);
	}

	.noise {
		background-image: linear-gradient(#5c5c5c 2px, transparent 2px),
			linear-gradient(90deg, #545454 2px, transparent 2px);
		background-size: 3px 3px;
		animation: staticNoise 5s steps(20) infinite;
		box-shadow: inset 0 0 30vw rgba(0, 0, 0, 1);
	}

	@keyframes staticNoise {
		0% {
			background-position:
				0 0,
				0 0;
		}
		100% {
			background-position:
				100% 100%,
				100% 100%;
		}
	}
</style>
