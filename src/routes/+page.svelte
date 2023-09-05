<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="w-full flex justify-center items-center relative h-screen bg-slate-950 overflow-hidden">
	<div
		class="bg-violet-500 animate-moveAround delay-75 circle-g w-[400px] h-[400px] opacity-50 scale-150 rounded-full blur-[100px] absolute -top-14 -left-16"
	/>
	<div
		class="bg-violet-500 delay-700 circle-g w-[200px] h-[200px] scale-150 rounded-full blur-[100px] absolute top-14 -right-16"
	/>
	<div
		class="bg-violet-500 delay-700 circle-g w-[200px] h-[200px] scale-150 rounded-full blur-[100px] absolute top-14 -left-16"
	/>
	<div class="bg-slate-950 w-full h-screen backdrop-blur-3xl bg-transparent absolute" />
	<div class="absolute px-10">
		<h4 class="text-white text-8xl hover:underline hover:underline-offset-auto ease-in-out">
			welcome to Talks
		</h4>
		<h2 class="text-white bg-transparent text-5xl lg:text-9xl">
			<span class="text-transparent bg-clip-text bg-gradient-to-r from-[#DA22FF] to-[#9733EE]"
				>Talks</span
			> is an place
		</h2>
		<p class="text-white text-7xl">
			where you can share your thoughts without any account or identity
		</p>
	</div>

	<div class="absolute flex self-end mb-16 text-white">
		<button class="px-5 py-3 rounded bg-violet-500 hover:bg-violet-600">
			<a href="/t/talks">Let's talk</a>
		</button>
	</div>

	<nav
		class="absolute px-10 flex self-start mt-4 w-full items-center justify-between text-white font-light"
	>
		<a href="/" class="text-2xl">talks</a>

		<div class=" flex gap-7 text-lg">
			<a href="/about">About</a>
			<a href="/t/talks">Talks</a>
			<a href="/t/addtalk">start a talk</a>
		</div>
	</nav>
</div>
