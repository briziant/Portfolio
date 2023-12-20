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
		happen as the player explores the level.
	</Card>
	<Image src="{base}/portal/Cover.png" title="portal 1" />
</div>
<Card>
	The concept for this level was an abandoned space station that the player
	wakes up on and as they explore they realize that there’s something
	happening on the station with them. The player would explore through the
	space station and through the use of triggers the level would play out in
	front of the player.
</Card>
<div class="w-full grid grid-cols-2 gap-4">
	<Image src="{base}/portal/1.jpg" title="portal 1" />
	<Image src="{base}/portal/2.gif" title="gif" />
</div>
<div class="w-full grid grid-cols-2 gap-4">
	<Card>
		is a picture and video of the initial concept and blockout of the level
		design process.
	</Card>
	<Video
		src="https://www.youtube.com/embed/2HZaUgIxEoU"
		title="Level Blockout" />
</div>
<div class="w-full grid grid-cols-2 gap-4">
	<Card>
		The video below is a quick setup of some simple door mechanics to set up
		the correct speed and animation of doors to give the player a proper
		reveal of the space station.
	</Card>
	<Video
		src="https://www.youtube.com/embed/0WJBZ3eEV9Q"
		title="Door Blueprinting" />
</div>
<div class="w-full grid grid-cols-2 gap-4">
	<Card>
		The final video is to show setting up the level blueprints for the
		basics of the cinematics that the level flow would follow.
	</Card>
	<Video
		src="https://www.youtube.com/embed/WiN-ecemrY0"
		title="Door Blueprinting" />
</div>
