<script>
	const proj = [
		{
			img: '/portal_1.png',
			link: '/projects/portallevel',
			title: 'Cinematic Portal Level Design',
		},
		{
			img: '/Still_2_Front.jpg',
			link: '/projects/leveldesign',
			title: 'level design',
		},
		{
			img: '/puzzle_temp.png',
			link: '/projects/puzzletemple',
			title: 'puzzle temple',
		},
		{
			img: '/Weather.png',
			link: '/projects/weathergods',
			title: 'weather gods',
		},
		{
			img: '/',
			link: '/projects/gameboydev',
			title: 'Gameboy Development',
		},
		{
			img: '/',
			link: '/projects/modernhouse',
			title: 'Modern House project',
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
				src={p.img}
				alt={p.title} />
			<div
				class="uppercase absolute x-1/2 text-center transition duration-300 ease-in-out text-transparent group-hover:text-pallet-background">
				{p.title}
			</div>
		</a>
	{/each}
</div>
