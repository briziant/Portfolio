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
<span>Development Time: 2 weeks</span>
<span>Tools Used: Unreal Engine</span>
<span>Role on Project: Level Design, solo development</span>
<span>Date of Development: August 2023</span>
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
			Below is a collection of various Gameboy games that I've worked on.
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
asdf
		</Card>
	<Cover
		href="https://briziant.itch.io/a-long-journey"
		target="_blank"
		src="{base}/gameboy/3V7IZS.png"
		title="A long journey"
		maxHeight={false} />
			<Card>
asdf
			</Card>
	<Cover
		href="https://briziant.itch.io/friend-quest"
		target="_blank"
		src="{base}/gameboy/BwqAZS.png"
		title="Friend Quest"
		maxHeight={false} />
			<Card>
asdf
			</Card>
	<Cover
		href="https://briziant.itch.io/dad-joke-simulator-the-movie-the-game"
		target="_blank"
		src="{base}/gameboy/V3cZjm.png"
		title="Dad Joke Simulator"
		maxHeight={false} />
</div>
