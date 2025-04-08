<script>
	import '../app.css';
	import Header from '$components/Header.svelte';

	let { children } = $props();
</script>

<main class="inline-wrapper flow">
	<Header />
	{@render children()}
</main>
