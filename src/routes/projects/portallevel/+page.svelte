<script>
	import { base } from '$app/paths';
	import Back from '$lib/Back.svelte';
	import Card from '$lib/Card.svelte';
	import Header from '$lib/Header.svelte';
	import Image from '$lib/Image.svelte';
	import Video from '$lib/Video.svelte';
	import Divider from '$lib/Divider.svelte';
	import Subheader from '$lib/Subheader.svelte';
</script>

<Back><Header>Cinematic Portal Level Design</Header></Back>
<span>Development Time: 2 weeks</span>
<span>Tools Used: Unreal Engine</span>
<span>Role on Project: Level Design, solo development</span>
<span>Date of Development: August 2023</span>

<Divider />
<Subheader>Initial Design</Subheader>
<div class="w-full grid grid-cols-2 gap-4">
	<Card>
		This is a level design project that I completed to conceptualize using
		in game cinematics and atmosphere to tell a story instead of using
		dialogue. The concept for this project was to use level design to tell
		the narrative through player interactions and real time events that
		happen as the player progresses through the level.
	</Card>
	<Image src="{base}/portal/Cover.png" title="portal 1" />
</div>
<Divider />
<Subheader>Blockout</Subheader>
<div class="w-full grid grid-cols-2 gap-4">
<Card>
	The concept for this level was an abandoned space station that the player
	wakes up on and as they explore into the station they realize that there’s something
	happening on the station with them. <br>
	As the player explores through the space station I strategically used 
	triggers and VFX props throughout the level to play out the story of the space 
	station in front of the player. 
</Card>

	<div class="flex flex-col gap-4">
	<Image src="{base}/portal/1.jpg" title="portal 1" />
	<Image src="{base}/portal/2.gif" title="gif" />
</div>
</div>
<Divider />
<Subheader>Design Elements</Subheader>
<div class="w-full grid grid-cols-2 gap-4">
	<Card>
		Here is a timelapse of my inital blockout for the level. The idea behind this level was
		to have a level that told a story without any dialogue. Through the use of cutscenes and ambient
		effects to create a hostle feeling environment. 
	</Card>
	<Video
		src="https://www.youtube.com/embed/2HZaUgIxEoU"
		title="Level Blockout" />
</div>
<div class="w-full grid grid-cols-2 gap-4">
	<Card>
		Here is a quick setup of some simple door mechanics to set up
		the correct speed and animation of doors to give the player a proper
		reveal of the space station. The goal was to have each door open in a way to give
		the player a sense of suspense as they progressed through the station.
	</Card>
	<Video
		src="https://www.youtube.com/embed/0WJBZ3eEV9Q"
		title="Door Blueprinting" />
</div>
<div class="w-full grid grid-cols-2 gap-4">
	<Card>
		This video is to show setting up the level blueprints for the
		basics of the cinematics that the level would follow. The blueprints
		were created to allow me to use the sequencer to set up the cinematic
		elements of the level using triggers. That way I could decide how and
		when the player expereinced the story, that way if the player wanted to
		examine part of the level it would not affect the pacing I wanted them 
		to experience.
	</Card>
	<Video
		src="https://www.youtube.com/embed/WiN-ecemrY0"
		title="Door Blueprinting" />
</div>
<Divider />
<Subheader>Post-Mortem</Subheader>
<Card>
	This project taught me a lot and was able to achieve a lot in the short amount of time working on it. Telling a story
	though methods other than dialogue was an interesting challenge, one that I had taken on with my
	gameboy development projects as well. However with this project I was able to use more props and visual effects
	due to the higher limitations of the hardware and engine. So it was challenging to achieve the atmosphere I was going for.
	The biggest take away for me is how all the parts came together to make a cohesive product.
</Card>