<script>
	import { base } from '$app/paths';
	import '../app.css';
	import { IconBrandLinkedin } from '@tabler/icons-svelte';
	const menu = [
		{
			name: 'portfolio',
			link: base + '/',
		},
		{
			name: 'resume',
			link: base + '/bryant_humphry_resume.pdf',
			target: '_blank',
		},
		{
			name: 'contact',
			link: 'mailto:contact@briziant.com',
		},
		{
			icon: IconBrandLinkedin,
			link: 'https://www.linkedin.com/in/bryant-humphry-594341136',
			target: '_blank',
		},
	];
</script>

<svelte:head>
	<title>Bryant Humphry</title>
</svelte:head>
<div
	class="w-full overflow-hidden flex flex-col justify-start items-center relative h-auto overflow-y-auto align-middle bg-slate-950 text-slate-300">
	<div
		class="w-3/4 p-8 flex flex-row justify-between items-center align-middle text-2xl">
		<a
			href="{base}/about"
			class="transition ease-in-out duration-150 hover:text-pallet-accent">
			Bryant Humphry
		</a>
		<div class="flex flex-row gap-4 align-middle items-center">
			{#each menu as m}
				<a
					href={m.link}
					target={m.target}
					class="uppercase transition ease-in-out duration-150 hover:text-pallet-accent">
					{#if m.name}
						{m.name}
					{:else}
						<svelte:component this={m.icon} class="w-8 h-auto" />
					{/if}
				</a>
			{/each}
		</div>
	</div>
	<div class="border-b-2 rounded-md border-pallet-accent w-3/4 mb-4" />
	<div
		class="relative w-3/4 h-auto flex flex-col gap-4 align-middle items-center pb-4">
		<slot />
	</div>
	<div
		class="flex gap-4 justify-center items-center w-full p-8 bg-slate-950 text-center text-pallet-background">
		<div class="flex flex-col">
			<span>Bryant Humphry</span>
			<span>humphrybryant@gmail.com</span>
		</div>
		<a
			href="https://www.linkedin.com/in/bryant-humphry-594341136"
			target="_blank"
			class="uppercase transition ease-in-out duration-150 hover:text-pallet-accent">
			<IconBrandLinkedin class="w-8 h-auto" />
		</a>
	</div>
</div>
