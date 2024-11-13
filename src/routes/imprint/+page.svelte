<script lang="ts">
	import { facebook, youtube, ccc } from '$lib/stores/embeds.svelte';
	const checks = [facebook, youtube, ccc];
</script>

<svelte:head>
	<title>Imprint &amp; Data Privacy</title>
</svelte:head>

<section>
	<h1 class="mb-12 font-medium text-white">
		Imprint &amp;<br /><span class="text-primary">Data Privacy</span>
	</h1>
	<div class="relative flex h-[10vh] w-full items-center pb-12">
		<hr class="relative h-0.5 w-24 -translate-x-12 bg-white" />
	</div>

	<div class="flex flex-col items-center gap-x-8 md:flex-row">
		<div class="md:w-57/12 w-full">
			<div class="flex flex-col gap-y-2">
				{#each checks as check}
					<label class="flex flex-row items-center gap-x-4">
						<input type="checkbox" bind:checked={check.hasConsented} />
						{check.explanation}
					</label>
				{/each}
			</div>
		</div>
	</div>
</section>
