<script context="module" lang="ts">
	import { page } from '$app/stores';
</script>

<section class="flex flex-col items-center">
	<h1 class="text-primary">
		Error {$page.status}
	</h1>
	<h2 class="text-white">{$page.error.message}</h2>
</section>
