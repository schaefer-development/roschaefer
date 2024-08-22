<script lang="ts">
	import GithubLink from '$lib/components/GithubLink.svelte';
	import LinkedInLink from '$lib/components/LinkedInLink.svelte';

	export let fill = 'current';
</script>

<ul class="flex gap-6 fill-{fill}">
	<li class="hover:scale-110 ease-in-out transition-all duration-300">
		<LinkedInLink></LinkedInLink>
	</li>
	<li class="hover:scale-110 ease-in-out transition-all duration-300">
		<GithubLink></GithubLink>
	</li>
</ul>
