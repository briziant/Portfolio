<script>
    import { base } from '$app/paths';
	import Project from '$lib/Project.svelte';

	const cover = {
		src: base + '/Bryant_Humphry_Final_Lighting_Project_Still_1.jpg',
		title: 'Lighting Project Still 1',
	};

	const images = [
		{
			src: base + '/Bryant_Humphry_Final_Lighting_Project_Still_3.jpg',
			title: 'Lighting Project Still 3',
		},
		{
			src: base + '/Bryant_Humphry_Final_Lighting_Project_Still_4.jpg',
			title: 'Lighting Project Still 4',
		},
	];
</script>

<span class="uppercase text-5xl"><b>Cinematic Portal Level Design</b></span>
<Project {cover} {images}>
	<p>
		Level designer with a heavy focus on traditional design philosophies.
		Experienced in working in 2D and 3D throughout all stages of
		development.
	</p>
</Project>
