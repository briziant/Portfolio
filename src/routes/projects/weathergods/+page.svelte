<script>
	import { base } from '$app/paths';
	import Card from '$lib/Card.svelte';
	import Image from '$lib/Image.svelte';
</script>

<span class="uppercase text-5xl"><b>Weather Gods</b></span>
<div class="grid grid-cols-2 gap-4">
	<div class="flex flex-col gap-4">
		<Card>
			Weather Gods was a smaller team project that was completed and
			shipped in early 2018 for a game development class at DePaul
			University. Responsible for in game art assets and over all game
			design through the project.
		</Card>
		<Card>
			The idea for this game was to have an original take on a tower
			defense game. The player would control The Kraken and try to keep
			the villagers from escaping the island. The player also had various
			weather controls to also keep the villagers in place. Villagers
			would build bridges to escape the center island and ride boats off
			of the island. Once 100 villagers escaped the island the game was
			over.
		</Card>
	</div>
	<Image src="{base}/Weather.png" title="Weather Gods" />
</div>
