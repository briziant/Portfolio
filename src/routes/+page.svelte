<script>
	import { base } from '$app/paths';

	const proj = [
		{
			src: base + '/portal_1.png',
			link: base + '/projects/portallevel',
			title: 'Cinematic Portal Level Design',
		},
		{
			src: base + '/house/HighresScreenshot00044.png',
			link: base + '/projects/modernhouse',
			title: 'Modern House project',
		},
		{
			src: base + '/Still_2_Front.jpg',
			link: base + '/projects/leveldesign',
			title: 'level design',
		},
		{
			src: base + '/puzzle_temp.png',
			link: base + '/projects/puzzletemple',
			title: 'puzzle temple',
		},
		{
			src: base + '/Weather.png',
			link: base + '/projects/weathergods',
			title: 'weather gods',
		},
		{
			src: base + '/gameboy/3V7IZS.png',
			link: base + '/projects/gameboydev',
			title: 'Gameboy Development',
		},
	];
</script>

<span class="uppercase text-5xl"><b>projects</b></span>
<div class="w-full">
	{#each proj as p}
		<a
			href={p.link}
			class="bg-accent w-full shadow-md shadow-pallet-text/30 overflow-hidden relative my-2 rounded-xl flex items-center justify-center align-middle transition ease-in-out text-4xl group">
			<img
				class="w-full max-h-48 transition duration-300 ease-in-out group-hover:brightness-50 rounded-md shadow-md object-cover"
				src={p.src}
				alt={p.title} />
			<div
				class="uppercase absolute x-1/2 text-center transition duration-300 ease-in-out text-transparent group-hover:text-pallet-background">
				{p.title}
			</div>
		</a>
	{/each}
</div>
