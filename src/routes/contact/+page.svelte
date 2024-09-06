<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import ProfileList from '$lib/components/ProfileList.svelte';
	import EmailLink from '$lib/components/EmailLink.svelte';
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
			<Avatar classNames="w-24 md:w-48 aspect-ratio rounded-full my-12 md:my-24"></Avatar>
		</div>
		<div class="w-full md:w-57/12">
			<div class="flex gap-y-2 flex-col">
				<h3 class="text-primary uppercase tracking-widest mb-6">Robert Schäfer</h3>
				<EmailLink classNames="text-white max-w-max pb-6"></EmailLink>
				<ProfileList></ProfileList>
			</div>
		</div>
	</div>
</section>
