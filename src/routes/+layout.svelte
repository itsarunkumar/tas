<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
	<title>TAS</title>
</svelte:head>

<slot />

<style>
	:global(body) {
		@apply bg-slate-100;
	}
</style>
