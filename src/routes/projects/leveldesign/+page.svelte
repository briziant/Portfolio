<script>
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

<span class="uppercase text-5xl"><b>Level Design</b></span>
<Project {cover} {images}>
	<p>
		Level designer with a heavy focus on traditional design philosophies. My
		level design implements elements of feng shui and modern architecture to
		give players rich and deep immersive experiences. I have experience in
		working in 2D and 3D, throughout all stages of development from project
		inception to published software.
	</p>
</Project>
