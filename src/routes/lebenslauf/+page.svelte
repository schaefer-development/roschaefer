<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Lebenslauf</title>
	<meta name="description" content="Curriculum Vitae" />
</svelte:head>


<h1>{data.resume.basics.name}</h1>
<h2>{data.resume.basics.summary}</h2>

{#each data.resume.basics.profiles as profile}
<a href={profile.url}>{profile.network}</a>
{/each}


