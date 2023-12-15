<script>
	import { base } from '$app/paths';
	import Back from '$lib/Back.svelte';
	import Card from '$lib/Card.svelte';
	import Divider from '$lib/Divider.svelte';
	import Header from '$lib/Header.svelte';
	import Image from '$lib/Image.svelte';
	import Subheader from '$lib/Subheader.svelte';
	import Subtitle from '$lib/Subheader.svelte';
</script>

<Back><Header>hitman lyra mod</Header></Back>
<span>Development Time: 10 weeks</span>
<span>Tools Used: Unreal Engine, Lyra game kit</span>
<span>Role on Project: Level Design</span>
<span>Date of Development: November 2022</span>
<div class="w-full grid grid-cols-2 gap-4">
	<Card>
		This was an untitled project that I worked on for a game modification
		class while at DePaul. The idea was to create a stealth based game from
		the Lyra game pack created by Epic. I worked within the level design
		team and designed the concept of the three lane approach to create an
		easy, medium, hard path for the player to choose how they would like to
		complete the level.
	</Card>
	<Image src="{base}/hitmanstyle/Cover.png" title="hitman style 1" />
</div>
<Divider />
<Subheader>Pre-Production</Subheader>
<Card></Card>
<Divider />
<Subheader>Initial Design</Subheader>
<div class="w-full grid grid-cols-2 gap-4">
	<Card>
		Each path offered the player a different option on how to play. The left
		lane was a high visibility lane that offered more rewards and ammunition
		if the player chose to explore that path, while the middle lane was
		easier but offered less rewards and opportunities to find items. <br>
	</Card>
	<Image src="{base}/hitmanstyle/1.jpg" title="hitman style 1" />
</div>
<Divider />
<Subheader>Blockout</Subheader>
<Card>
	The team also decided to make the level multi-layered so that the player had
	different options for each lane as well. With different difficulties for
	each of the lanes they branched off of. If the player felt they got in too
	deep on one lane they could switch to a different lane, or if they didn’t
	feel challenged enough they could take an alley and spike up the difficulty
	for themself.
</Card>
<div class="w-full grid grid-cols-2 gap-4">
	<Card>
		Here you can see how the map was changed and how each of the lanes was
		reduced in size to make each lane feel and play more confined.</Card>
	<Image src="{base}/hitmanstyle/4.png" title="hitman style 4" />
</div>
<div class="w-full grid grid-cols-2 gap-4">
	<Card
		>This is a final blockout of the street level part of the map. The
		enemies and cameras were added in to give playtesters the ability to
		sneak through the level and test enemy and camera placements.</Card>
	<Image src="{base}/hitmanstyle/5.png" title="hitman style 5" />
</div>
<Divider />
<Subheader>Gameplay Elements</Subheader>
<div class="w-full grid grid-cols-2 gap-4">
	<Card></Card>
	<Image src="{base}/hitmanstyle/1.gif" title="hitman style 6" />
</div>
<div class="w-full grid grid-cols-2 gap-4">
	<Card></Card>
	<Image src="{base}/hitmanstyle/2.gif" title="hitman style 7" />
</div>
