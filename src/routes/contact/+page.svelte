<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import ProfileList from '$lib/components/ProfileList.svelte';
	import EmailLink from '$lib/components/EmailLink.svelte';
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<section>
	<h1 class="mb-12 font-medium text-white">
		Say<br /><span class="text-primary">Hello</span>
	</h1>
	<Divider />

	<div class="flex flex-col items-center gap-x-8 md:flex-row">
		<div class="w-full md:w-5/12">
			<Avatar classNames="w-24 md:w-48 rounded-full my-12 md:my-24"></Avatar>
		</div>
		<div class="md:w-57/12 w-full">
			<div class="flex flex-col gap-y-2">
				<h3 class="mb-6 uppercase tracking-widest text-primary">Robert Schäfer</h3>
				<EmailLink classNames="text-white max-w-max pb-6"></EmailLink>
				<ProfileList></ProfileList>
			</div>
		</div>
	</div>
</section>
