<script>
	import { base } from '$app/paths';
	import Project from '$lib/Project.svelte';
	import { IconLink } from '@tabler/icons-svelte';

	const cover = {
		src: base + '/gameboy/3V7IZS.png',
		title: 'gameboy',
	};

	const images = [
		{
			src: base + '/gameboy/BwqAZS.png',
			title: 'Friend Quest',
		},
		{
			src: base + '/gameboy/V3cZjm.png',
			title: 'Dad Joke Simulator',
		},
	];
</script>

<span class="uppercase text-5xl"><b>Gameboy Development</b></span>
<a
	class="link uppercase transition ease-in-out duration-150 hover:text-pallet-accent inline-flex"
	href="https://briziant.itch.io/">
	Itch.io - Briziant
	<IconLink />
</a>
<Project {cover} {images}>
	<p>
		Below is a collection of various Gameboy games that I've worked on. The
		development of these games was an exploration of the limitations of
		older hardware and how those limitations could create unique and
		interesting solutions to meaningful design choices. I used these games
		to try and tell narratives that could be experienced through various
		different approaches. All games are located on my itch page at the link
		below. (Games are mobile friendly and work on android and ios!)
	</p>
</Project>
