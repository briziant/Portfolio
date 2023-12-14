<script>
	export let /**@type {string}*/ src, /**@type {string}*/ title;
</script>

<div class="flex bg-slate-800 rounded-3xl ">
	<img
		class="w-full p-2 rounded-3xl shadow-md object-cover shadow-pallet-text/30"
		{src}
		alt={title} />
</div>
