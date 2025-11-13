<script context="module" lang="ts">
	import { page } from '$app/state';
</script>

{#if page.error}
	<section class="flex flex-col items-center">
		<h1 class="text-primary">
			Error {page.status}
		</h1>
		<h2 class="text-white">{page.error.message}</h2>
	</section>
{/if}
