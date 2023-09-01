<script lang="ts">
	import { getThings, removeThing } from '$lib/store';
	import type { PageData } from './$types';

	let things = getThings();

	export let data: PageData;
</script>

<div class="w-10/12 mx-auto flex justify-center items-center my-10">
	{#if $things.length > 0}
		<div class="w-full flex justify-center items-center gap-5 flex-col">
			{#each $things as thing}
				<p
					class="w-3/6 bg-blue-900 px-4 py-5 rounded-sm shadow-lg flex justify-around items-center"
				>
					{thing}
					<span on:click={() => removeThing(thing)} class="btn cursor-pointer text-red-500"
						>remove</span
					>
				</p>
			{/each}
		</div>
	{:else}
		<h1
			class="text-6xl bg-transparent text-clip my-10 opacity-90 hover:opacity-100 cursor-pointer drop-shadow-lg"
		>
			No Talks Yet
		</h1>
	{/if}
</div>
