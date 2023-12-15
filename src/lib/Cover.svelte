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
	class="w-full  overflow-hidden relative rounded-xl flex items-center justify-center align-middle transition ease-in-out text-4xl group bg-slate-800">
	<img
		class="w-full max-h-48 transition duration-300 ease-in-out group-hover:brightness-50 rounded-2xl object-cover p-2 shadow-pallet-text/30 shadow-inner"
		class:max-h-48={maxHeight}
		{src}
		alt={title} />
	<div
		class="uppercase absolute x-1/2 text-center transition duration-300 ease-in-out text-transparent group-hover:text-pallet-background p-2">
		{title}
	</div>
</a>
