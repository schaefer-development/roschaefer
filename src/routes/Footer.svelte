<script lang="ts">
	import GithubLink from '$lib/components/GithubLink.svelte';
	import LinkedInLink from '$lib/components/LinkedInLink.svelte';
</script>

<footer
	class="w-full bg-white py-6 flex flex-col md:flex-row justify-center items-center gap-y-1 md:gap-x-12 px-8"
>
	<a class="text-black max-w-max" href="mailto:hello@roschaefer.de">hello@roschaefer.de</a>
	<div class="flex gap-6">
		<LinkedInLink fill="black"></LinkedInLink>
		<GithubLink fill="black"></GithubLink>
	</div>
	<a class="max-w-max" href="/imprint">imprint & data privacy</a>
</footer>
