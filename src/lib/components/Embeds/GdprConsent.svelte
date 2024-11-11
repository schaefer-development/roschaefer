<script lang="ts">
	import type { Consent } from '$lib/stores/embeds';
	export let consent: Consent;
	import Noise from '$lib/assets/noise.gif';

	let loadData = false;
	consent.store.subscribe((value: boolean) => {
		loadData = value;
	}); // logs '0'
</script>

{#if loadData}
	<slot></slot>
{:else}
	<div
		class="left-0 top-0 flex aspect-video w-full flex-col items-center justify-center bg-black text-white"
	>
		<div class="relative h-full w-full">
			<img class="absolute left-0 top-0 h-full w-full bg-cover" src={Noise} alt="Noise" />
			<div
				class="shadow_inset absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black/70"
			>
				<svg
					class="w-[12vw] max-w-32 fill-transparent stroke-current"
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
				<label class="flex items-center gap-2">
					<input type="checkbox" on:input={() => consent.store.set(true)} value="false" />
					{consent.explanation}
				</label>
			</div>
		</div>
	</div>
{/if}

<style>
	.shadow_inset {
		-webkit-box-shadow: inset 0px 0px 30vw 5px #000000;
		box-shadow: inset 0px 0px 30vw 5px #000000;
	}
</style>
