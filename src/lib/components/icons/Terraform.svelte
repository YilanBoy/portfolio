<script lang="ts">
	interface Props {
		className?: string;
	}

	let { className = 'size-6' }: Props = $props();
</script>

<svg class={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
	<polygon fill="#6042ea" points="17,23 5,16 5,2 17,9"></polygon><polygon
		fill="#6042ea"
		points="31,31 19,24 19,10 31,17"
	></polygon><polygon fill="#4040b2" points="33,31 45,24 45,10 33,17"></polygon><polygon
		fill="#6042ea"
		points="31,47 19,40 19,26 31,33"
	></polygon>
</svg>
