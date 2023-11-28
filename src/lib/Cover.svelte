<script>
	export let /** @type {string} */ href,
		/** @type {string} */ src,
		/** @type {string} */ title,
		/** @type {string | undefined}*/ target = undefined,
		/** @type {boolean}*/ maxHeight = true;
</script>

<a
	{href}
	{target}
	class="bg-accent w-full shadow-md shadow-pallet-text/30 overflow-hidden relative rounded-xl flex items-center justify-center align-middle transition ease-in-out text-4xl group">
	<img
		class="w-full max-h-48 transition duration-300 ease-in-out group-hover:brightness-50 rounded-md shadow-md object-cover"
		class:max-h-48={maxHeight}
		{src}
		alt={title} />
	<div
		class="uppercase absolute x-1/2 text-center transition duration-300 ease-in-out text-transparent group-hover:text-pallet-background">
		{title}
	</div>
</a>
