<script lang="ts">
	import ProfileList from '$lib/components/ProfileList.svelte';
</script>

<footer
	class="w-full bg-white py-6 flex flex-col md:flex-row justify-center items-center gap-y-1 md:gap-x-12 px-8"
>
	<a class="text-black max-w-max" href="mailto:hello@roschaefer.de">hello@roschaefer.de</a>
	<ProfileList fill="black"></ProfileList>
	<a class="max-w-max" href="/imprint">imprint & data privacy</a>
</footer>
