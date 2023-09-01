<script lang="ts">
	import { getThings, addThing, removeThing } from '$lib/store';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';

	$: query = '';
	let things = getThings();
</script>

<svelte:window on:keydown={(e) => (e.key === 'Enter' ? (query = '') : null)} />

<div class="lg:w-10/12 h-full flex justify-center items-center flex-col mx-auto">
	<div class="w-full flex justify-center items-center flex-col my-7">
		<div class="flex flex-col sm:w-3/5">
			<textarea
				class="textarea w-full rounded-xl px-3 py-4 ease-in-out hover:rounded-md outline-none border-none placeholder:text-slate-100 placeholder:text-start bg-slate-800 text-slate-50"
				rows="4"
				on:keydown={(e) => (e.key === 'Enter' ? addThing(query) : null)}
				bind:value={query}
				placeholder="write what you want then press enter!!!"
			/>

			<button on:click={() => addThing(query)} class=" px-5 py-3 rounded bg-blue-900">
				<p>Add {$things.length}</p>
			</button>
		</div>
	</div>

	{#if $things.length > 0}
		<div class="w-full flex justify-center items-center gap-5 flex-wrap">
			<p
				transition:fly
				class="w-3/6 bg-blue-900 px-4 py-5 rounded-sm shadow-lg flex justify-around items-center"
			>
				{$things[0]}
				<span on:click={() => removeThing($things[0])} class="btn cursor-pointer text-red-500"
					>remove</span
				>
			</p>
			{#if $things.length > 1}
				<p
					class="w-3/6 bg-blue-900 px-4 py-5 rounded-sm shadow-lg flex justify-around items-center"
				>
					{$things[1]}
					<span on:click={() => removeThing($things[1])} class="btn cursor-pointer text-red-500"
						>remove</span
					>
				</p>
			{/if}
		</div>
	{/if}

	<a href="/talks" class="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded shadow-sm my-4"
		>Go to Talks</a
	>
</div>
