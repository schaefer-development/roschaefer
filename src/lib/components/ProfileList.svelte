<script lang="ts">
	import GithubLink from '$lib/components/GithubLink.svelte';
	import LinkedInLink from '$lib/components/LinkedInLink.svelte';

	export let fill = 'current';
</script>

<ul class="flex gap-6 fill-{fill}">
	<li class="transition-all duration-300 ease-in-out hover:scale-110">
		<LinkedInLink></LinkedInLink>
	</li>
	<li class="transition-all duration-300 ease-in-out hover:scale-110">
		<GithubLink></GithubLink>
	</li>
</ul>
