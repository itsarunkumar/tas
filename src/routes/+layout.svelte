<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	import '../app.css';
</script>

<svelte:head>
	<title>Talk about sh*t</title>
</svelte:head>

<div class="w-full flex justify-center items-center flex-col">
	<h1
		class="text-6xl bg-transparent text-clip my-10 opacity-90 hover:opacity-100 cursor-pointer drop-shadow-lg"
	>
		<a href="/">TAS</a>
	</h1>
	<h4 class="flex justify-center items-center gap-2 -mt-5">
		Talk Stuff <p class="text-xs text-slate-500 font-bold">nobody knows and nobody cares</p>
	</h4>
</div>

<slot />

<style>
	:global(body) {
		background: rgb(5, 0, 56);
	}

	:global(h1, h2, h3, h4, h5, h6, p, a) {
		color: rgb(247, 247, 247);
	}
</style>
