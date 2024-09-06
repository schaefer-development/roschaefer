<script lang="ts">
	import { page } from '$app/stores';
	$: basics = $page.data.resume.basics;
	export let classNames = '';
</script>

<a class={classNames} href={`mailto:${basics.email}`}>{basics.email}</a>
