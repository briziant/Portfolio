<script>
	import { base } from '$app/paths';
	import Project from '$lib/Project.svelte';

	const cover = {
		src: base + '/portal/Concept.jpg',
		title: 'Concept',
	};

	const images = [
		{
			src: base + '/portal/Test2.gif',
			title: 'Lighting Project Still 3',
		},
		{
			src: base + '/portal/HighresScreenshot00023.png',
			title: 'Lighting Project Still 4',
		},
	];
</script>

<span class="uppercase text-5xl"><b>Cinematic Portal Level Design</b></span>
<Project {cover} {images}>
	<p>
		This is a level design project that I completed to conceptualize using
		in game cinematics and atmosphere to tell a story instead of using
		dialogue. The concept for this project was to use level design to tell
		the narrative through player interactions and real time events that
		happen as the player explores the level.
	</p>
	<p>
		The concept for this level was an abandoned space station that the
		player wakes up on and as they explore they realize that there’s
		something happening on the station with them. The player would explore
		through the space station and through the use of triggers the level
		would play out in front of the player.
	</p>
</Project>
<div class="w-full flex flex-row mx-16 px-16 gap-4 video">
	<iframe
		src="https://www.youtube.com/embed/2HZaUgIxEoU"
		title="Level Blockout"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen />
	<iframe
		src="https://www.youtube.com/embed/0WJBZ3eEV9Q"
		title="Door Blueprinting"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen />
	<iframe
		src="https://www.youtube.com/embed/WiN-ecemrY0"
		title="Door Blueprinting"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen />
</div>
<div />
