<script>
	import CircularProgressBar from '$lib/components/CircularProgressBar.svelte';
	import Laravel from '$lib/components/icons/Laravel.svelte';
	import Terraform from '$lib/components/icons/Terraform.svelte';
	import Ansible from '$lib/components/icons/Ansible.svelte';
	import Aws from '$lib/components/icons/Aws.svelte';
	import Azure from '$lib/components/icons/Azure.svelte';
	import Svelte from '$lib/components/icons/Svelte.svelte';
	import TailwindCss from '$lib/components/icons/TailwindCss.svelte';
	import Livewire from '$lib/components/icons/Livewire.svelte';
</script>

<section id="tech-stack" class="flex flex-col gap-24 py-20">
	<div class="flex flex-col gap-2 text-center">
		<h6 class="font-caveat text-2xl md:text-4xl">Let's see what I'm good at.</h6>
		<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
			這些是我
			<span
				class="relative inline-block p-1 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-green-500"
			>
				<span class="relative text-gray-50">擅長的技術</span>
			</span>
		</h3>
	</div>

	<div class="grid grid-cols-1 gap-16 lg:grid-cols-4">
		<div class="flex items-center justify-center">
			<CircularProgressBar progress="65%" barColor="#ff9900">
				<Aws classList="size-20" />
			</CircularProgressBar>
		</div>

		<div class="flex items-center justify-center">
			<CircularProgressBar progress="20%" barColor="#138dd8">
				<Azure classList="size-20" />
			</CircularProgressBar>
		</div>

		<div class="flex items-center justify-center">
			<CircularProgressBar progress="70%" barColor="#ff2c20">
				<Laravel classList="size-20" />
			</CircularProgressBar>
		</div>

		<div class="flex items-center justify-center">
			<CircularProgressBar progress="70%" barColor="#fb70a9">
				<Livewire classList="size-20" />
			</CircularProgressBar>
		</div>

		<div class="flex items-center justify-center">
			<CircularProgressBar progress="20%" barColor="#f73c00">
				<Svelte classList="size-20" />
			</CircularProgressBar>
		</div>

		<div class="flex items-center justify-center">
			<CircularProgressBar progress="50%" barColor="#38bdf8">
				<TailwindCss classList="size-20" />
			</CircularProgressBar>
		</div>

		<div class="flex items-center justify-center">
			<CircularProgressBar progress="90%" barColor="#7c3aec">
				<Terraform classList="size-20" />
			</CircularProgressBar>
		</div>

		<div class="flex items-center justify-center">
			<CircularProgressBar progress="30%" barColor="#424242">
				<Ansible classList="size-20" />
			</CircularProgressBar>
		</div>
	</div>
</section>
