<script>
	import { base } from '$app/paths';
	import Back from '$lib/Back.svelte';
	import Card from '$lib/Card.svelte';
	import Header from '$lib/Header.svelte';
	import Image from '$lib/Image.svelte';
	import Video from '$lib/Video.svelte';
</script>

<Back><Header>coin party</Header></Back>
<div class="w-full grid grid-cols-2 gap-4">
	<Card>
		Coin party is a capstone project and smash style game, in which players
		must battle each other to collect the most coins in the two minute time
		limit. Which I was one of the level designers for.
	</Card>
	<Video
		src="https://www.youtube.com/embed/9-cLYP2f0zQ"
		title="Coin Party Trailer" />
</div>
<Card>
	For my design goals on this project I tried to use more kitbashing than I
	had on my previous projects. We used Paper ZD to handle displaying the
	sprites and the collision, which let me rapidly prototype levels using the
	art assets that the art team provided.
</Card>
<div class="w-full grid grid-cols-2 gap-4">
	<Image src="{base}/coinparty/1.png" title="Coin Party 1" />
	<Image src="{base}/coinparty/2.png" title="Coin Party 2" />
</div>
<Card>
	The cover and below image are of a prototyped spa level that went un-used in
	the final game. The goal of this level was to have clouds that would drift
	across the screen and create interesting platforming to control the flow of
	battle
</Card>
<div class="w-full grid grid-cols-2 gap-4">
	<Image src="{base}/coinparty/3.png" title="Coin Party 3" />
	<Image src="{base}/coinparty/4.png" title="Coin Party 4" />
</div>
<Card>
	Below are the phases that the forest level went through in order to get to
	its final playable state. Kitbashing with PaperZD allowed me to create an A
	and a B version of the level as well.
</Card>
<div class="w-full grid grid-cols-2 gap-4">
	<Image src="{base}/coinparty/5.png" title="Coin Party 5" />
	<Image src="{base}/coinparty/6.png" title="Coin Party 6" />
</div>
<Image src="{base}/coinparty/7.png" title="Coin Party 7" />
