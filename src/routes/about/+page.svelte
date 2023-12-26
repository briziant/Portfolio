<script>
	import { base } from "$app/paths";
	import Header from "$lib/Header.svelte";
</script>

<div class="text-3xl">Bryant Humphry</div>
<div class="w-full grid grid-cols-2 gap-4">
	<div class="flex flex-col">
		<span>some dude</span>
		<span>likes game design</span>
		<span class="text-xl">
			Is a Game and Level Designer originally from Belvidere IL.
			Currently pursuing his career in Chicago. Never content on doing
			things the easy way. Since the beginning of my career, I’ve focused
			on channeling my talent and creativity into meaningful and powerful
			results. I take pride in the work I do, as well as the strong
			relationships I’ve built with clients and colleagues. I firmly
			believe in working hard, working together and having fun along the
			way. If you’re interested in learning more about me or my work, feel
			free to reach out! Below you're find a copy of my Resume to explain
			in greater detail some of the work I've done as well as some of the
			organizations that I collaborate with and donate to.
			</span>
			<span>	Level designer with a heavy focus on traditional design philosophies. My
				level design implements elements of feng shui and modern architecture to
				give players rich and deep immersive experiences. I have experience in
				working in 2D and 3D, throughout all stages of development from project
				inception to published software.</span>
	</div>
	<div class="p-2 h-[40rem] bg-slate-800 rounded-3xl">
		<div
			class="overflow-hidden w-full h-full flex items-center align-middle rounded-2xl"
		>
			<img
				class="w-full rounded-3xl shadow-md object-cover"
				src="{base}/bryant.jpg"
				alt="Bryant Humphry"
			/>
		</div>
	</div>
</div>
