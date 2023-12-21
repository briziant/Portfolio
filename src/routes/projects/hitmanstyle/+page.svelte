<script>
	import { base } from "$app/paths";
	import Back from "$lib/Back.svelte";
	import Card from "$lib/Card.svelte";
	import Divider from "$lib/Divider.svelte";
	import Header from "$lib/Header.svelte";
	import Image from "$lib/Image.svelte";
	import Subheader from "$lib/Subheader.svelte";
</script>

<Back><Header>hitman lyra mod</Header></Back>
<span>Development Time: 10 weeks</span>
<span>Tools Used: Unreal Engine, Lyra game kit</span>
<span>Role on Project: Level Design</span>
<span>Date of Development: November 2022</span>
<Image src="{base}/hitmanstyle/Cover.png" title="hitman style 1" />
<Divider />
<Subheader>Pre-Production</Subheader>
<div class="w-full grid grid-cols-2 gap-4">
	<Card
		>The concept for this game was to create a stealth game using the Lyra
		game kit created by Epic. The initial design was a game that had strong
		stealth elements and limited resources forcing the player to make
		stratigic meaningful gameplay decisions. Games like I Am Alive, Last of
		Us, and Splinter Cell.</Card
	>
	<Image src="{base}/hitmanstyle/top.png" title="hitman style top" />
</div>
<Divider />
<Subheader>Initial Design</Subheader>
<div class="w-full grid grid-cols-2 gap-4">
	<div class="flex flex-col gap-4">
		<Card>
			This was a project that I worked on for a game modification class
			while at DePaul University. The idea was to create a stealth based
			game from the Lyra game pack created by Epic. I worked within the
			level design team and designed the concept of the three lane
			approach to create an easy, medium, hard path for the player to
			choose how they would like to complete the level.
		</Card>
		<Card>
			Each path offered the player a different option on how to play. The
			left lane was a high visibility lane that offered more rewards and
			ammunition if the player chose to explore that path, while the
			middle lane was easier but offered less rewards and opportunities to
			find items. <br />
		</Card>
	</div>
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
		reduced in size to make each lane feel and play more confined.</Card
	>
	<Image src="{base}/hitmanstyle/4.png" title="hitman style 4" />
</div>
<div class="w-full grid grid-cols-2 gap-4">
	<Card
		>This is a final blockout of the street level part of the map. The
		enemies and cameras were added in to give playtesters the ability to
		sneak through the level and test enemy and camera placements.</Card
	>
	<Image src="{base}/hitmanstyle/5.png" title="hitman style 5" />
</div>
<Divider />
<Subheader>Gameplay Elements</Subheader>
<div class="w-full grid grid-cols-2 gap-4">
	<Card>
		Enemies were able to change their status based on whether or not they
		decided to sneak through the level or run through gun blazing. The
		player was given limited ammunition to encourage them to be more
		stealthy. <br />
		Pictured right: is the enemy status system. The player is able to alert enemies
		if they make too much noise.
	</Card>
	<Image src="{base}/hitmanstyle/1.gif" title="hitman style 6" />
</div>
<div class="w-full grid grid-cols-2 gap-4">
	<Card>
		The enviroment was designed to complimented the abilities the player had
		available to them. Enemies were set at specific vantage points to
		encourage more stealth from the player. <br />
		Pictured right: The player used their cloaking ability to sneak past one
		of the stationed enemies.
	</Card>
	<Image src="{base}/hitmanstyle/2.gif" title="hitman style 7" />
</div>
<Divider />
<Subheader>Post-Mortem</Subheader>
<Card>
	A huge take away from the project for me was how much mission and objective
	design can become an interitive process. The level can change from the
	inital design to a finished product drastically from team and player
	feedback. I noticed how players in the play test would pick up on certain
	mechanics built in or ignore other designs. Then find creative solutions to
	get through obsticles/puzzles which also affected the final design of the
	level.<br />
	Over all I think this project taught me how much of an iterative process
	level development really was. Player's ingenuity gave me the opportunity to
	create new solutions for the gaps that they would find in the tested design.
	Taking player feedback and going back to the drawing board with the data we
	received we were able to focus on routing the player and control their
	options, this was key in the iterative process.
</Card>
