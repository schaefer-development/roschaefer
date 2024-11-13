<script lang="ts">
	import ProfileList from '$lib/components/ProfileList.svelte';
	import EmailLink from '$lib/components/EmailLink.svelte';
</script>

<footer
	class="flex w-full flex-col items-center justify-center gap-y-1 bg-black px-8 py-12 text-sm uppercase tracking-widest md:flex-row md:gap-x-12"
>
	<EmailLink classNames="text-white max-w-max"></EmailLink>
	<ProfileList></ProfileList>
	<a class="max-w-max text-white" href="/imprint">imprint & data privacy</a>
</footer>
