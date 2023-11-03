<script>
    import { base } from '$app/paths';
	import Project from '$lib/Project.svelte';

	const cover = {
		src: base + '/puzzle_temp.png',
		title: 'Puzzle Temple',
	};
</script>

<span class="uppercase text-5xl"><b>Puzzle Temple</b></span>
<Project {cover}>
	<p>
		Puzzle Temple is a currently unfinished concept project based on block
		style puzzle games. As someone that really enjoys puzzle games this was
		an attempt to create a game completely on my own with very little
		assistance. Throughout the life of this project I've focused on
		interesting mechanics and the balance of using those mechanics with an
		overarching theme. I've also focused heavily on scalability. Below
		you'll find a link to an early prototype build of the project that's
		downloadable and playable from my itch page.
	</p>
</Project>
