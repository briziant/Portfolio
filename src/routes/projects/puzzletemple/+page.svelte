<script>
	import { base } from '$app/paths';
	import Back from '$lib/Back.svelte';
	import Card from '$lib/Card.svelte';
	import Header from '$lib/Header.svelte';
	import Image from '$lib/Image.svelte';
	import { IconLink } from '@tabler/icons-svelte';
	import Divider from '$lib/Divider.svelte';
	import Subheader from '$lib/Subheader.svelte';
</script>

<Back><Header>Puzzle Temple</Header></Back>
<span>Development Time: in development</span>
<span>Tools Used: Unity</span>
<span>Role on Project: Level Design, solo development</span>
<span>Date of Development: Currently in development</span>


<Divider />
<Subheader>Introduction</Subheader>
<div class="grid grid-cols-2 gap-4">
	<div class="flex flex-col gap-4">
	<Card>
		Puzzle Temple is a currently in development concept project based on block
		style puzzle games. As someone that really enjoys puzzle games this was
		an attempt to create a game completely on my own with very little
		assistance. Throughout the life of this project I've focused on
		interesting mechanics and the balance of using those mechanics with an
		overarching theme. I've also focused heavily on scalability. Below
		you'll find a link to an early prototype build of the project that's
		downloadable and playable from my itch page.
	</Card>
<a
	class="link uppercase transition ease-in-out duration-150 hover:text-pallet-accent inline-flex"
	href="https://briziant.itch.io/puzzle-temple-prototype-v2">
	Puzzle Temple prototype V.2 by briziant
	<IconLink />
</a>
</div>
	<Image src="{base}/puzzletemple/Cover.png" title="Puzzle Temple" />
</div>
<Divider />
<Subheader>Design Choices</Subheader>
		<Card>
		My design process for this project was to create interesting puzzles that 
		would follow a theme and progressively get harder. This would allow me to create
		new mechanics that could build off of one another. In this way the player could start
		with levels and themes that were less mechanically driven and understand the basics of
		the game and then work into harder puzzles as they progressed through the story. Some of
		the intro puzzles are pictured below and include themes such as "In Order", "Relience", 
		and "All In Time."
	</Card>
<div class="grid grid-cols-2 gap-4">
	<Image src="{base}/puzzletemple/1.jpg" title="Notebook 1" />
	<Image src="{base}/puzzletemple/2.jpg" title="Notebook 2" />
</div>
<Divider />
<Subheader>Post-Mortem</Subheader>
<Card>
	The biggest take away I've had with this project is how much work goes
	into making a whole game by yourself. Learning a whole new platform takes time
	and time management skills on top of the skills needed to create the game. So this
	project is an excerise in all of those things. <br>
	This project also taught me the importance of playtesting a game. There's times where
	I create a complicated puzzle and I take it in for playtesting and the players find a shortcut
	and the level is solved in half the moves that I wanted the player to make.
</Card>
