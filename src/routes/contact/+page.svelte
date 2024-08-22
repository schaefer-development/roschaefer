<script lang="ts">
	import { page } from '$app/stores';
	import Robert from '$lib/images/roschaefer.jpg';
	import Divider from '$lib/components/Divider.svelte';
	import GithubLink from '$lib/components/GithubLink.svelte';
	import LinkedInLink from '$lib/components/LinkedInLink.svelte';
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
				<a class="text-white max-w-max" href="mailto:hello@roschaefer.de">hello@roschaefer.de</a>
				<ul class="pt-6 flex gap-6">
					<li class="hover:scale-110 ease-in-out transition-all duration-300">
						<LinkedInLink></LinkedInLink>
					</li>
					<li class="hover:scale-110 ease-in-out transition-all duration-300">
						<GithubLink></GithubLink>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
