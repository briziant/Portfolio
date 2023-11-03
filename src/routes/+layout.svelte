<script>
	import '../app.css';
	import { IconBrandLinkedin } from '@tabler/icons-svelte';
	const menu = [
		{
			name: 'portfolio',
			link: '/',
		},
		{
			name: 'resume',
			link: '/resume',
		},
		{
			name: 'contact',
			link: '/contact',
		},
		{
			icon: IconBrandLinkedin,
			link: 'https://www.linkedin.com/in/bryant-humphry-594341136',
			target: '_blank'
		},
	];
</script>

<div
	class="w-full h-screen overflow-hidden flex flex-col justify-start items-center">
	<div
		class="w-3/4 p-8 flex flex-row justify-between items-center align-middle text-2xl">
		<div>Bryant Humphry</div>
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
	<div class="border-b-2 rounded-md border-pallet-accent w-3/4 mb-8" />
	<div class="w-3/4 h-auto overflow-y-auto flex flex-col gap-4 align-middle items-center">
		<slot />
	</div>
</div>
