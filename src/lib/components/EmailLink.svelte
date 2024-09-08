<script lang="ts">
	import { basics } from '$lib/data/basics';
	export let classNames = '';
</script>

<a class={classNames} href={`mailto:${basics.email}`}>{basics.email}</a>
