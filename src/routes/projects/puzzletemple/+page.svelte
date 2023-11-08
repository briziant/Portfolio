<script>
	import { base } from '$app/paths';
	import Card from '$lib/Card.svelte';
	import Image from '$lib/Image.svelte';
	import { IconLink } from '@tabler/icons-svelte';
</script>

<span class="uppercase text-5xl"><b>Puzzle Temple</b></span>
<a
	class="link uppercase transition ease-in-out duration-150 hover:text-pallet-accent inline-flex"
	href="https://briziant.itch.io/puzzle-temple-prototype-v2">
	Puzzle Temple prototype V.2 by briziant
	<IconLink />
</a>
<div class="grid grid-cols-2 gap-4">
	<div>
		<Card>
			Puzzle Temple is a currently unfinished concept project based on
			block style puzzle games. As someone that really enjoys puzzle games
			this was an attempt to create a game completely on my own with very
			little assistance. Throughout the life of this project I've focused
			on interesting mechanics and the balance of using those mechanics
			with an overarching theme. I've also focused heavily on scalability.
			Above you'll find a link to an early prototype build of the project
			that's downloadable and playable from my itch page.
		</Card>
	</div>
	<Image src="{base}/puzzle_temp.png" title="Puzzle Temple" />
</div>
