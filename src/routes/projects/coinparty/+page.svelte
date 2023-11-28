<script>
	import { base } from '$app/paths';
	import Back from '$lib/Back.svelte';
	import Card from '$lib/Card.svelte';
	import Header from '$lib/Header.svelte';
	import Image from '$lib/Image.svelte';
</script>

<Back><Header>coin party</Header></Back>
<div class="w-full grid grid-cols-2 gap-4">
	<Card></Card>
	<Image src="{base}/coinparty/Cover.png" title="Coin Party" />
</div>
