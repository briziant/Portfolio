<script>
	import { base } from "$app/paths";
	import Back from "$lib/Back.svelte";
	import Card from "$lib/Card.svelte";
	import Header from "$lib/Header.svelte";
	import Image from "$lib/Image.svelte";
	import Divider from "$lib/Divider.svelte";
	import Subheader from "$lib/Subheader.svelte";
</script>

<Back><Header>Weather Gods</Header></Back>
<span>Development Time: 2 weeks</span>
<span>Tools Used: Unreal Engine</span>
<span>Role on Project: Level Design, solo development</span>
<span>Date of Development: August 2023</span>
<Divider />
<Subheader>Introduction</Subheader>
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
		<Image src="{base}/weathergods/Cover.png" title="Weather Gods" />
	
</div>
<Divider />
<Subheader>Game Mechanics</Subheader>
<div class="grid grid-cols-2 gap-4">
		<Card>
			Weather Gods was a smaller team project that was completed and
			shipped in early 2018 for a game development class at DePaul
			University. Responsible for in game art assets and over all game
			design through the project.
		</Card>
		<Image src="{base}/weathergods/1.gif" title="Weather Gods Gif1" />
		<Card>
			Weather Gods was a smaller team project that was completed and
			shipped in early 2018 for a game development class at DePaul
			University. Responsible for in game art assets and over all game
			design through the project.
		</Card>
		<Image src="{base}/weathergods/2.gif" title="Weather Gods Gif2" />
		<Card>
			Weather Gods was a smaller team project that was completed and
			shipped in early 2018 for a game development class at DePaul
			University. Responsible for in game art assets and over all game
			design through the project.
		</Card>
		<Image src="{base}/weathergods/3.gif" title="Weather Gods Gif3" />
		<Card>
			Weather Gods was a smaller team project that was completed and
			shipped in early 2018 for a game development class at DePaul
			University. Responsible for in game art assets and over all game
			design through the project.
		</Card>
		<Image src="{base}/weathergods/4.gif" title="Weather Gods Gif4" />
		<Card>
			Weather Gods was a smaller team project that was completed and
			shipped in early 2018 for a game development class at DePaul
			University. Responsible for in game art assets and over all game
			design through the project.
		</Card>
		<Image src="{base}/weathergods/5.gif" title="Weather Gods Gif5" />	
</div>
