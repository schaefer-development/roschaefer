<script lang="ts">
	import ProfileList from '$lib/components/ProfileList.svelte';
	import EmailLink from '$lib/components/EmailLink.svelte';
</script>

<footer
	class="flex w-full flex-col items-center justify-center gap-y-1 bg-black px-8 py-6 md:flex-row md:gap-x-12"
>
	<EmailLink classNames=" max-w-max"></EmailLink>
	<ProfileList fill="black"></ProfileList>
	<a class="max-w-max" href="/imprint">imprint & data privacy</a>
</footer>
