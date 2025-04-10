<script>
	import '../app.css';
	import Header from '$components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Tesla Model Y</title>
	<meta name="description" content="Tesla Model Y configuration interface built using SvelteKit" />
	<link rel="preload" as="image" href="/assets/model-y/exterior/ultra-red.avif" />
	<link rel="preload" as="image" href="/assets/model-y/interior/dark.avif" />
</svelte:head>

<main class="inline-wrapper flow">
	<Header />
	{@render children()}
</main>
