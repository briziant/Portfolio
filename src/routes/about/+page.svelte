<script>
	import { base } from '$app/paths';
	import Header from '$lib/Header.svelte';
</script>

<div class="text-3xl">Bryant Humphry</div>
<div class="w-full grid grid-cols-2 gap-4">
	<div class="flex flex-col">
		<span>some dude</span>
		<span>likes game design</span>
	</div>
	<div class="p-2 h-[40rem] bg-slate-800 rounded-3xl">
		<div
			class="overflow-hidden w-full h-full flex items-center align-middle rounded-2xl">
			<img
				class="w-full rounded-3xl shadow-md object-cover"
				src="{base}/bryant.jpg"
				alt="Bryant Humphry" />
		</div>
	</div>
</div>
