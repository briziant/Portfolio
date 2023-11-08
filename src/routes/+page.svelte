<script>
	import { base } from '$app/paths';
	import Cover from '$lib/Cover.svelte';
</script>

<span class="uppercase text-5xl"><b>projects</b></span>
<div class="w-full">
	<Cover
		href="{base}/projects/portallevel"
		src="{base}/portal_1.png"
		title="Cinematic Portal Level Design" />
	<Cover
		href="{base}/projects/modernhouse"
		src="{base}/house/HighresScreenshot00044.png"
		title="Modern House project" />
	<Cover
		href="{base}/projects/leveldesign"
		src="{base}/Still_2_Front.jpg"
		title="level design" />
	<Cover
		href="{base}/projects/puzzletemple"
		src="{base}/puzzle_temp.png"
		title="puzzle temple" />
	<Cover
		href="{base}/projects/weathergods"
		src="{base}/Weather.png"
		title="weather gods" />
	<Cover
		href="{base}/projects/gameboydev"
		src="{base}/gameboy/3V7IZS.png"
		title="Gameboy Development" />
</div>
