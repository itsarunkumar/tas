<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="relative">
	<nav class="sticky top-0 flex justify-between px-10 py-5 backdrop-blur-md shadow-sm items-center">
		<div>
			<a href="/">Home</a>
		</div>
		<div class="flex gap-5 items-center justify-center">
			<a href="/t/talks">Talks</a>
			<a href="/t/addtalk">Add Talk</a>
			<a href="/about">About</a>
		</div>
	</nav>
	<slot />
</div>
