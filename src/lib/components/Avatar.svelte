<script lang="ts">
	import { page } from '$app/stores';
	$: basics = $page.data.resume.basics;
	export let classNames = '';
</script>

<img src={basics.image} width="400" height="400" alt={basics.name} class={classNames} />
