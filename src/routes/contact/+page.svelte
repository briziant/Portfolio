<script lang="ts">
	let status: number = 0;
	function handleSubmit(e: SubmitEvent) {
		const form = e.target as HTMLFormElement;
		const url = form.action;
		const formData = new FormData(form);

		fetch(url, {
			method: 'POST',
			body: formData,
		}).then((d) => {
			if (d.status == 201) status = 1;
			else status = 2;
		});
	}
</script>

<span class="text-2xl p-2">Contact me</span>
{#if status == 0}
	<form
		on:submit|preventDefault={handleSubmit}
		class="flex flex-col gap-4 w-2/5"
		action="https://formie.io/form/0b457115-b25f-4cd3-affa-69d1b055000f"
		method="POST">
		<input
			class="w-full h-10 p-2 border bg-transparent border-transparent border-b-pallet-accent"
			name="name"
			type="text"
			placeholder="Name"
			required />
		<input
			class="w-full h-10 p-2 border bg-transparent border-transparent border-b-pallet-accent"
			name="email"
			type="email"
			placeholder="Email"
			required />
		<textarea
			class="w-full h-32 p-2 border bg-transparent border-pallet-accent"
			name="message"
			placeholder="Message"
			required></textarea>

		<div class="flex items-center align-middle justify-center">
			<button
				class="py-4 px-8 hover:text-pallet-accent border border-pallet-accent">
				Send Message
			</button>
		</div>
	</form>
{:else if status == 1}
	<div class="w-2/5 text-2xl p-4 text-center">Message Sent Successfully!</div>
	<button
		class="py-4 px-8 hover:text-pallet-accent border border-pallet-accent"
		on:click={(_) => (status = 0)}>
		Send Another
	</button>
{:else if status == 2}
	<div class="w-2/5 text-2xl p-4 text-center">Oops something happened</div>
	<button
		class="py-4 px-8 hover:text-pallet-accent border border-pallet-accent"
		on:click={(_) => (status = 0)}>
		Try Again
	</button>
{/if}
