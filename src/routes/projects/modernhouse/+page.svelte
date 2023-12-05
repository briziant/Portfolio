<script>
	import { base } from '$app/paths';
	import Back from '$lib/Back.svelte';
	import Card from '$lib/Card.svelte';
	import Header from '$lib/Header.svelte';
	import Image from '$lib/Image.svelte';
</script>

<Back><Header>Modern House</Header></Back>
<div class="grid grid-cols-2 gap-4">
	<Card>
		The concept for this project was to create a modern house using only a
		limited amount of materials. The main two being Concrete and Glass. From
		there I wanted to have a simplistic design that was modern but still
		felt lived in.
	</Card>
	<Image src="{base}/modernhouse/Cover.png" title="Modern House" />
</div>
<Card>
	The design of the house was modeled so that the house would sit in the sun
	line. Using this I strategically placed the bedroom and the kitchen in the
	east facing side of the structure to allow for the morning to light those
	rooms as you would naturally occupy them. I placed the office in the west
	side of the home for the same reason, giving the office the mid-day light
	and into the evening.
</Card>
<Image src="{base}/modernhouse/1.png" title="Modern House" />
<div class="w-full grid grid-cols-[1fr_1.25fr] gap-4">
	<Card>
		The project was an exercise in modern design, feng shui, as well as real
		world implementations to try to build a house that would be interesting
		to conceptualize a futuristic yet modern design.
	</Card>
	<Image src="{base}/modernhouse/2.png" title="Modern House 2" />
</div>
<Image src="{base}/modernhouse/3.png" title="Modern House 3" />
<div class="w-full grid grid-cols-2 gap-4">
	<Image src="{base}/modernhouse/4.png" title="Modern House 4" />
	<Image src="{base}/modernhouse/5.png" title="Modern House 5" />
</div>
