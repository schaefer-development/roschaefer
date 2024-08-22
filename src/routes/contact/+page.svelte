<script lang="ts">
	import Robert from '$lib/images/roschaefer.jpg';
	import Divider from '$lib/components/Divider.svelte';
	import ProfileList from '$lib/components/ProfileList.svelte';
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="font-medium text-white mb-12">
		Say<br /><span class="text-primary">Hello</span>
	</h1>
	<Divider />

	<div class="flex gap-x-8 items-center flex-col md:flex-row">
		<div class="w-full md:w-5/12">
			<img
				src={Robert}
				width="400"
				height="400"
				class="w-24 md:w-48 aspect-ratio rounded-full my-12 md:my-24"
				alt="Robert Schäfer"
			/>
		</div>
		<div class="w-full md:w-57/12">
			<div class="flex gap-y-2 flex-col">
				<h3 class="text-primary uppercase tracking-widest mb-6">Robert Schäfer</h3>
				<a class="text-white max-w-max pb-6" href="mailto:hello@roschaefer.de"
					>hello@roschaefer.de</a
				>
				<ProfileList></ProfileList>
			</div>
		</div>
	</div>
</section>
