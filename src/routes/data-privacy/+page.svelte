<script lang="ts">
	import Divider from '$lib/components/Divider.svelte';

	import { facebook } from '$lib/stores/embeds';
	import { ccc } from '$lib/stores/embeds';

	let loadFacebookData = false;
	facebook.store.subscribe((value: boolean) => {
		loadFacebookData = value;
	});

	let loadCccData = false;
	facebook.store.subscribe((value: boolean) => {
		loadCccData = value;
	});
</script>

<svelte:head>
	<title>Data privacy</title>
</svelte:head>

<section>
	<h1 class="font-medium text-white mb-12">Data privacy</h1>
	<Divider />

	<div class="flex gap-x-8 items-center flex-col md:flex-row">
		<div class="w-full md:w-57/12">
			<div class="flex gap-y-2 flex-col">
				<label>
					<input
						type="checkbox"
						on:input={() => facebook.store.set(!loadFacebookData)}
						value={loadFacebookData}
					/>
					{facebook.explanation}
				</label>

				<label>
					<input
						type="checkbox"
						on:input={() => ccc.store.set(!loadFacebookData)}
						value={loadCccData}
					/>
					{ccc.explanation}
				</label>
			</div>
		</div>
	</div>
</section>
