<script>
	import { base } from '$app/paths';
	import Back from '$lib/Back.svelte';
	import Card from '$lib/Card.svelte';
	import Header from '$lib/Header.svelte';
	import Image from '$lib/Image.svelte';
	import Divider from '$lib/Divider.svelte';
	import Subheader from '$lib/Subheader.svelte';
</script>

<Back><Header>Interior Level Design</Header></Back>
<span>Development Time: 4 weeks</span>
<span>Tools Used: Unreal Engine</span>
<span>Role on Project: Level Design, solo development</span>
<span>Date of Development: April 2023</span>
<div class="grid grid-cols-2 gap-4">
	<Card>
		This is one of my original projects that I created when I started my game development path. 
		This was a final project that was created for a class at DePaul University. The task was to
		create a room that was part of a larger enviroment but could function by itself. I chose to
		creat a living room for an apartment. As I felt a living room could function as it's own space
		and show off how a space can be minimal yet still functional. My level design implements elements 
		of feng shui and modern architecture to give players rich and deep immersive experiences.
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
