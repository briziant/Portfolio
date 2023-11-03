<script>
	/**
	 * @typedef {{src: string, title: string}} Img
	 */

	/**
	 * @type {Img=}
	 */
	export let cover = undefined;

	/**
	 * @type {Img[]}
	 */
	export let images = [];
</script>

<div class="grid grid-cols-2 mx-16 gap-4">
	<div class="card flex flex-col gap-4">
		<slot />
	</div>
	{#if cover}
		<img
			class="rounded-3xl shadow-md shadow-pallet-text/30 object-cover"
			src={cover.src}
			alt={cover.title} />
	{/if}
</div>
<div class="flex flex-row gap-4 mx-16 flex-wrap">
	{#each images as img}
		<img
			class="shadow-md shadow-pallet-text rounded-3xl object-cover"
			src={img.src}
			alt={img.title} />
	{/each}
	<div />
</div>
