<script>
	import { base } from '$app/paths';
	import { IconArrowNarrowLeft } from '@tabler/icons-svelte';
</script>

<div
	class="relative w-full h-12 text-2xl flex items-center justify-between align-middle">
	<a
		class="flex-1 inline-flex gap-2 items-center align-middle text-gray-300 link hover:text-pallet-accent"
		href="{base}/">
		<IconArrowNarrowLeft class="w-8 h-auto" />
		<span class="uppercase"><b>back</b></span>
	</a>
	<slot />
	<div class="flex-1" />
</div>
