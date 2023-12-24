<script>
	import { base } from '$app/paths';
	import Back from '$lib/Back.svelte';
	import Card from '$lib/Card.svelte';
	import Cover from '$lib/Cover.svelte';
	import Header from '$lib/Header.svelte';
	import Image from '$lib/Image.svelte';
	import { IconLink } from '@tabler/icons-svelte';
	import Divider from '$lib/Divider.svelte';
	import Subheader from '$lib/Subheader.svelte';
</script>

<Back><Header>Gameboy Development</Header></Back>
<span>Development Time: 1-2 weeks per project</span>
<span>Tools Used: GB Studio</span>
<span>Role on Project: solo game development</span>
<span>Date of Development: 2022-2023</span>
<Divider />
<Subheader>Introduction</Subheader>
<a
	class="link uppercase transition ease-in-out duration-150 hover:text-pallet-accent inline-flex"
	href="https://briziant.itch.io/">
	Gameboy projects
	<IconLink />
</a>
<div class="grid xl:grid-cols-2 max-lg:grid-rows-2 gap-4">
	<div>
		<Card>
			Below is a collection of various Gameboy games that I've worked on throughout 2022 and 2023.
			The development of these games was an exploration of the limitations
			of older hardware and how those limitations could create unique and
			interesting solutions to meaningful design choices. I used these
			games to try and tell narratives that could be experienced through
			various different approaches. All games are located on my itch page
			at the link above or click the picture below next to the description each game. (Games are mobile friendly and work on android
			and ios!)
		</Card>
	</div>
	<Image src="{base}/gameboy/Cover.png" title="gameboy" />
</div>
<Divider />
<Subheader>Game showcase</Subheader>
<div class="grid xl:grid-cols-2 max-lg:grid-rows-2 gap-4">
		<Card>
			A Long Journey was a game designed for a narrative design project. The goal of this game 
			was to tell a story with limited to no dialogue. I opted to use limited dialogue because
			I felt that the story would hold more meaning and give the game a little bit of replayability
			once you played through the game the first time and saw the conclusion. You would want to go back
			and read the dialogue with a understanding of what happens at the end of the story and it would give
			the interactions more weight and meaning.
		</Card>
	<Cover
		href="https://briziant.itch.io/a-long-journey"
		target="_blank"
		src="{base}/gameboy/3V7IZS.png"
		title="A long journey"
		maxHeight={false} />
			<Card>
				Friend Quest was a game made for the "Game Boy Showdown 2023" game jam.
				Friend Quest was designed to be a lite fun adventure game about collecting 
				items and trading them with your friends and neighbors. The game is reminiscent
				of the old trade quest flash games of the early 2000s.
			</Card>
	<Cover
		href="https://briziant.itch.io/friend-quest"
		target="_blank"
		src="{base}/gameboy/BwqAZS.png"
		title="Friend Quest"
		maxHeight={false} />
			<Card>
				Dad Joke Simulator The Movie: The Game was a short project I completed in early 2023.
				The goal of this project was to make something lite and fun that could be enjoyed by
				anyone of any age. I wanted to experiment with different features that the engine had
				with this project. Something else I really wanted to achieve with this project was having
				a sub-plot interlaced into the game. Which was achieved through the use of framing it as a
				Simulator game. <br>

				Plus who doesn't love a good dad joke?
			</Card>
	<Cover
		href="https://briziant.itch.io/dad-joke-simulator-the-movie-the-game"
		target="_blank"
		src="{base}/gameboy/V3cZjm.png"
		title="Dad Joke Simulator"
		maxHeight={false} />
</div>
