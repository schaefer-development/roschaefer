<script lang="ts">
	import ProfileList from '$lib/components/ProfileList.svelte';
	import EmailLink from '$lib/components/EmailLink.svelte';
	import { resolve } from '$app/paths';
</script>

<footer
	class="flex w-full flex-col items-center justify-center gap-y-1 bg-black px-8 py-12 text-sm tracking-widest uppercase md:flex-row md:gap-x-12"
>
	<EmailLink classNames="text-white max-w-max"></EmailLink>
	<ProfileList></ProfileList>
	<a class="max-w-max text-white" href={resolve('/imprint')}>imprint & data privacy</a>
</footer>
