<script>
	import { base } from '$app/paths';
	import Header from '$lib/Header.svelte';
</script>

<span class="text-2xl">All About</span>
<div class="text-3xl underline underline-offset-4">Bryant Humphry</div>
<div class="w-full grid max-md:grid-rows-2 p-2 md:p-0 md:grid-cols-2 gap-4">
	<div class="flex flex-col">
		<span class="md:text-xl">
			Is a Game and Level Designer originally from Illinois. Currently
			pursuing his career in Chicago. Never content on doing things the
			easy way. Since the beginning of my career, I’ve focused on
			channeling my talent and creativity into meaningful and powerful
			results. A large part of my design philosophy is to tell stories
			that have an emotional impact on those experiencing the story. I
			think giving the player the opportunity to make their own choices in
			those experiences is what creates that emotional connection and
			that's something I try to add to all of the work that I do. <br />
			My Level design has a heavy focus on traditional design philosophies.
			It also implements elements of feng shui and modern architecture to give
			players rich and deep immersive experiences. I have experience in working
			in 2D and 3D, throughout all stages of development from project inception
			to published software.<br />
			I take pride in the work I do, as well as the strong relationships I’ve
			built with clients and colleagues. I firmly believe in working hard,
			working together and having fun along the way. If you’re interested in
			learning more about me or my work, feel free to reach out! In the links
			in the top right you'll find a copy of my resume and projects page to
			explain in greater detail some of the work I've done as well as some
			of the organizations that I collaborate with and donate to.<br />
			Outside of game development I enjoy photography, learning new skills
			and trades, and a healthy dose of metal music. In my free time I write
			and take pictures, I also collect Final Fantasy memorabilia and classic
			metal albums and band shirts.
		</span>
		<span> </span>
	</div>
	<div class="flex items-center h-[40rem] rounded-3xl overflow-hidden border-8 border-slate-800">
		<img
			class="max-md:h-full w-auto md:w-full shadow-md object-cover "
			src="{base}/bryant.jpg"
			alt="Bryant Humphry" />
	</div>
</div>
