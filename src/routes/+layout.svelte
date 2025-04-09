<script>
	import '../app.css';
	import Header from '$components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Tesla Model Y</title>
	<meta name="description" content="Tesla Model Y configuration interface built using SvelteKit" />
</svelte:head>

<main class="inline-wrapper flow">
	<Header />
	{@render children()}
</main>
