<script>
	import { base } from '$app/paths';
	import Card from '$lib/Card.svelte';
	import Image from '$lib/Image.svelte';
</script>

<span class="uppercase text-5xl"><b>Level Design</b></span>
<div class="grid grid-cols-2 gap-4">
	<div>
		<Card>
			Level designer with a heavy focus on traditional design
			philosophies. My level design implements elements of feng shui and
			modern architecture to give players rich and deep immersive
			experiences. I have experience in working in 2D and 3D, throughout
			all stages of development from project inception to published
			software.
		</Card>
	</div>
	<Image
		src="{base}/Bryant_Humphry_Final_Lighting_Project_Still_1.jpg"
		title="Lighting Project Still 1" />
</div>
<Image
	src="{base}/Bryant_Humphry_Final_Lighting_Project_Still_3.jpg"
	title="Lighting Project Still 3" />
<Image
	src="{base}/Bryant_Humphry_Final_Lighting_Project_Still_4.jpg"
	title="Lighting Project Still 4" />
