<script lang="ts">
	import { formatDistanceToNow } from 'date-fns';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;

	$: post = data.post;
</script>

<div class="w-full flex justify-center items-center flex-col py-5">
	<div class="w-full px-4 py-2 lg:w-1/2 shadow-xl round-lg bg-slate-100">
		<h1 class="text-4xl my-3">{post.title}</h1>
		<hr class="opacity-90 w-1/2 my-2 bg-slate-900" />

		<p class=" w-full whitespace-break-spaces text-lg text-justify truncate ...">
			{post.content}
		</p>

		<span class=" text-xs text-slate-400"
			>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</span
		>

		<form
			action="?/comment"
			use:enhance
			method="post"
			class="flex flex-col gap-2 bg-transparent shadow-lg mt-5"
		>
			<input
				type="text"
				name="comment"
				id="comment"
				placeholder="write a comment..."
				class="placeholder:text-slate-800 placeholder:text-start px-3 py-4 rounded-lg outline-none border-b border-slate-800 border-opacity-20"
			/>
			<input type="text" name="postid" id="postid" class="hidden" value={post.id} />
			<button type="submit" class="px-5 py-3 bg-slate-800 text-white rounded cursor-pointer"
				>add comment</button
			>
		</form>

		<div class="w-full px-4 py-2 round-lg bg-slate-100">
			<span class="text-xs text-slate-400">{post.comments.length} comments</span>
			{#each post.comments as comment}
				<p class="text-base flex justify-between items-center">
					{comment.content}
					<span class="text-xs text-slate-400"
						>{formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}</span
					>
				</p>
			{/each}
		</div>
	</div>
</div>
