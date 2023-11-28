<script>
	export let /**@type {string}*/ src, /**@type {string}*/ title;
</script>

<div class="w-full rounded-3xl overflow-hidden">
	<iframe
		class="w-full h-full aspect-video"
		{src}
		{title}
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen />
</div>
