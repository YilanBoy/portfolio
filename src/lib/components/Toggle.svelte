<script lang="ts">
	interface Props {
		isEnabled?: boolean;
		onclick?: () => void;
		iconShowOnDisabled?: import('svelte').Snippet;
		iconShowOnEnabled?: import('svelte').Snippet;
	}

	let {
		isEnabled = $bindable(false),
		onclick = () => {
			isEnabled = !isEnabled;
		},
		iconShowOnDisabled,
		iconShowOnEnabled
	}: Props = $props();
</script>

<button
	{onclick}
	class:bg-violet-500={isEnabled}
	class:bg-gray-200={!isEnabled}
	type="button"
	class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
	role="switch"
	aria-checked="false"
>
	<span class="sr-only">Use setting</span>
	<span
		class:translate-x-5={isEnabled}
		class:translate-x-0={!isEnabled}
		class="pointer-events-none relative inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
	>
		<span
			class:opacity-0={isEnabled}
			class:duration-100={isEnabled}
			class:ease-out={isEnabled}
			class:opacity-100={!isEnabled}
			class:duration-200={!isEnabled}
			class:ease-in={!isEnabled}
			class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
			aria-hidden="true"
		>
			{@render iconShowOnDisabled?.()}
		</span>
		<span
			class:opacity-100={isEnabled}
			class:duration-200={isEnabled}
			class:ease-in={isEnabled}
			class:opacity-0={!isEnabled}
			class:duration-100={!isEnabled}
			class:ease-out={!isEnabled}
			class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
			aria-hidden="true"
		>
			{@render iconShowOnEnabled?.()}
		</span>
	</span>
</button>
