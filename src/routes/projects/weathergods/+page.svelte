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
<span>Development Time: 10 weeks</span>
<span>Tools Used: Unity</span>
<span>Role on Project: Level Design, Game Design</span>
<span>Date of Development: Spring 2018</span>
<Divider />
<Subheader>Introduction</Subheader>
<div class="grid grid-cols-2 gap-4">
	<div class="flex flex-col gap-4">
		<Card>
			Weather Gods was a small team project that was completed and
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
		The basic mechanic of the game was a teleport that the Kraken could utilize to
		move across the map more affectively. The teleport can be used when the bar on the left
		side of the screen is full. The bar can be recharged by getting sacrifices.
		</Card>
		<Image src="{base}/weathergods/1.gif" title="Weather Gods Gif1" />
		<Card>
		The player is able to upgrade their skills in between play throughs
		of each game. The player can take these upgrades into their next play through
		of the game.
		</Card>
		<Image src="{base}/weathergods/2.gif" title="Weather Gods Gif2" />
		<Card>
		This skill is a thunderstorm that the player can spawn in where their mouse is placed.
		The thunderstorm skill slows and damages enemy ships that pass through it. The player can
		spawn thunderstorms at will as long as they have enough souls.
		</Card>
		<Image src="{base}/weathergods/3.gif" title="Weather Gods Gif3" />
		<Card>
			This is a whirlpool skill that the player can spawn at will. The 
			whirlpool skill will send ships that pass through it back to their
			spawn. The player can spawn whirlpools at will as long as they have enough souls.
		</Card>
		<Image src="{base}/weathergods/4.gif" title="Weather Gods Gif4" />
		<Card>
		The final skill is a volcano that the player can choose where to place. 
		The volcano randomly shoots out rocks in random directions and deals massive 
		damage to any enemy that it hits. The player can spawn volcano at will as 
		long as they have enough souls.
		</Card>
		<Image src="{base}/weathergods/5.gif" title="Weather Gods Gif5" />	
</div>
