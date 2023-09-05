<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types.js';
	export let data: PageData;

	export let form;
</script>

<div class="lg:w-10/12 w-full h-screen flex justify-center items-center flex-col mx-auto px-2">
	<div class="w-full h-full flex justify-center items-center flex-col my-7">
		<form method="post" action="?/post" use:enhance class="flex flex-col w-full h-full shadow-sm">
			<input
				required
				type="text"
				id="title"
				name="title"
				placeholder="write a title..."
				class="input w-full my-1 rounded-xl px-3 py-4 ease-in-out hover:rounded-md placeholder:text-start border-b-2 border-black border-opacity-20 outline-none bg-slate-200"
			/>
			<textarea
				required
				name="content"
				id="content"
				class="textarea w-full h-full rounded-xl px-3 py-4 ease-in-out hover:rounded-md outline-none placeholder:text-start border-b-2 border-black border-opacity-20 bg-slate-200"
				rows="4"
				placeholder="write what you want then press enter!!!"
			/>

			<button class=" px-5 py-3 rounded text-white bg-blue-900">
				<p>Add</p>
			</button>
		</form>
	</div>

	{#await data.posts then posts}
		<p class="text-2xl">Latest Talks</p>
		{#each posts.slice(0, 1) as post}
			<p
				class="sm:w-3/6 w-full text-white my-4 break-words h-20 text-ellipsis bg-blue-900 px-4 py-5 rounded-sm shadow-lg flex justify-around items-center gap-5"
			>
				{post.title}
			</p>
		{/each}
	{/await}

	<a
		href="/t/talks"
		class="px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded shadow-sm my-4">Go to Talks</a
	>
</div>
