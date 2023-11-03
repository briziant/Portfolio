<script>
	import Project from '$lib/Project.svelte';

	const cover = {
		src: base + '/Weather.png',
		title: 'Weather Gods',
	};
</script>

<span class="uppercase text-5xl"><b>Weather Gods</b></span>
<Project {cover}>
	<p>
		Weather Gods was a smaller team project that was completed and shipped
		in early 2018 for a game development class at DePaul University.
		Responsible for in game art assets and over all game design through the
		project.
	</p>
	<p>
		The idea for this game was to have an original take on a tower defense
		game. The player would control The Kraken and try to keep the villagers
		from escaping the island. The player also had various weather controls
		to also keep the villagers in place. Villagers would build bridges to
		escape the center island and ride boats off of the island. Once 100
		villagers escaped the island the game was over.
	</p>
</Project>
