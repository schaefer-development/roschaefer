<script lang="ts">
	import Divider from '$lib/components/Divider.svelte';

	import { facebook, youtube, ccc } from '$lib/stores/embeds.svelte';
	const checks = [facebook, youtube, ccc];
</script>

<svelte:head>
	<title>Data privacy</title>
</svelte:head>

<section>
	<h1 class="mb-12 font-medium text-white">Data privacy</h1>
	<Divider />

	<div class="flex flex-col items-center gap-x-8 md:flex-row">
		<div class="md:w-57/12 w-full">
			<div class="flex flex-col gap-y-2">
				{#each checks as check}
					<label>
						<input type="checkbox" bind:checked={check.hasConsented} />
						{check.explanation}
					</label>
				{/each}
			</div>
		</div>
	</div>
</section>
