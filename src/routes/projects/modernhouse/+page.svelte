<script>
	import { base } from '$app/paths';
	import Project from '$lib/Project.svelte';

	const cover = {
		src: base + '/house/HighresScreenshot00041.png',
		title: 'Modern House',
	};

	const images = [
		{
			src: base + '/house/HighresScreenshot00023b.png',
			title: 'Modern House 1',
		},
		{
			src: base + '/house/HighresScreenshot00038.png',
			title: 'Modern House 2',
		},
		{
			src: base + '/house/HighresScreenshot00034.png',
			title: 'Modern House 3',
		},
		{
			src: base + '/house/HighresScreenshot00050.png',
			title: 'Modern House 4',
		},
	];
</script>

<span class="uppercase text-5xl"><b>Modern House</b></span>
<Project {cover} {images}>
	<p>
		The concept for this project was to create a modern house using only a
		limited amount of materials. The main two being Concrete and Glass. From
		there I wanted to have a simplistic design that was modern but still
		felt lived in.
	</p>
	<p>
		The design of the house was modeled so that the house would sit in the
		sun line. Using this I strategically placed the bedroom and the kitchen
		in the east facing side of the structure to allow for the morning to
		light those rooms as you would naturally occupy them. I placed the
		office in the west side of the home for the same reason, giving the
		office the mid-day light and into the evening. The project was an
		exercise in modern design, feng shui, as well as real world
		implementations to try to build a house that would be interesting to
		conceptualize
	</p>
</Project>
