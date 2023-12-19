<script>
	import { base } from '$app/paths';
	import Cover from '$lib/Cover.svelte';
	import Header from '$lib/Header.svelte';
</script>

<Header>Level Design</Header>
<div class="w-full grid gap-2">
	<Cover
		href="{base}/projects/hitmanstyle"
		src="{base}/hitmanstyle/Cover.png"
		title="hitman lyra mod" />
	<Cover
		href="{base}/projects/portallevel"
		src="{base}/portal/Cover.png"
		title="Cinematic Portal Level Design" />

		<div class="w-full grid grid-cols-2 gap-2 gap-x-2">
		<Cover
		href="{base}/projects/modernhouse"
		src="{base}/modernhouse/Cover.png"
		title="Modern House project" />
	<Cover
		href="{base}/projects/interiorleveldesign"
		src="{base}/interiorleveldesign/Cover.jpg"
		title="Interior Level Design" />
	</div>


</div>
<Header>other projects</Header>
<div class="w-full grid gap-2">

		<Cover
		href="{base}/projects/gameboydev"
		src="{base}/gameboy/3V7IZS.png"
		title="Gameboy Development" />
	<div class="w-full grid grid-cols-2 gap-2 gap-x-2">
		<Cover
		href="{base}/projects/puzzletemple"
		src="{base}/puzzletemple/Cover.png"
		title="puzzle temple" />
		<Cover
			href="{base}/projects/weathergods"
			src="{base}/weathergods/Cover.png"
			title="weather gods" />
			<Cover
			href="{base}/projects/coinparty"
			src="{base}/coinparty/Cover.png"
			title="Coin Party" />

	</div>
</div>
