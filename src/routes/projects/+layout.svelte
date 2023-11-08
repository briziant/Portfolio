<script>
	import { base } from '$app/paths';
	import { IconArrowNarrowLeft } from '@tabler/icons-svelte';
</script>

<div class="px-32 w-full h-12 absolute text-2xl flex items-center align-middle">
	<a
		class="left-0 inline-flex gap-2 items-center align-middle text-pallet-text link hover:text-pallet-accent"
		href="{base}/">
		<IconArrowNarrowLeft class="w-8 h-auto" />
		<span class="uppercase"><b>back</b></span>
	</a>
</div>
<div class="w-full flex flex-col mx-16 px-32 gap-4 items-center pb-4">
	<slot />
</div>
