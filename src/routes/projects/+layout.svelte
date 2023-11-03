<script>
	import { base } from '$app/paths';
	import { IconArrowNarrowLeft } from '@tabler/icons-svelte';
</script>

<div class="px-16 w-3/4 h-12 absolute text-2xl flex items-center align-middle">
	<a
		class="left-0 inline-flex gap-2 items-center align-middle text-pallet-text link hover:text-pallet-accent"
		href="{base}/">
		<IconArrowNarrowLeft class="w-8 h-auto" />
		<span class="uppercase"><b>back</b></span>
	</a>
</div>
<slot />
