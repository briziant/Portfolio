<script>
	import { base } from '$app/paths';
	import Back from '$lib/Back.svelte';
	import Card from '$lib/Card.svelte';
	import Header from '$lib/Header.svelte';
	import Image from '$lib/Image.svelte';
</script>

<Back><Header>Interior Level Design</Header></Back>
<div class="grid grid-cols-2 gap-4">
	<Card>
		Level designer with a heavy focus on traditional design philosophies. My
		level design implements elements of feng shui and modern architecture to
		give players rich and deep immersive experiences. I have experience in
		working in 2D and 3D, throughout all stages of development from project
		inception to published software.
	</Card>
	<Image
		src="{base}/interiorleveldesign/Cover.jpg"
		title="Lighting Project Still 1" />
</div>
<Image
	src="{base}/interiorleveldesign/1.jpg"
	title="Lighting Project Still 1" />
<div class="w-full grid grid-cols-2 gap-4">
	<Image
		src="{base}/interiorleveldesign/2.jpg"
		title="Lighting Project Still 3" />
	<Image
		src="{base}/interiorleveldesign/3.jpg"
		title="Lighting Project Still 4" />
</div>
