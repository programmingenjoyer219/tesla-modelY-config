<script>
	import { carColor } from '$features/config-menu/states/carColor.svelte';
	import { fly, blur } from 'svelte/transition';

	var exteriorColors = [
		'ultra-red',
		'pearl-white',
		'quicksilver',
		'solid-black',
		'stealth-grey',
		'deep-blue-metallic'
	];
	var carImageSrc = $derived(`/assets/model-y/exterior/${carColor.exterior}.avif`);
</script>

<div class="flex items-center overflow-hidden">
	{#each exteriorColors as exterior}
		{#if exterior == carColor.exterior}
			<img
				fetchpriority="high"
				width="1920"
				height="1080"
				src={carImageSrc}
				alt=""
				in:fly={{ x: -200, delay: 200 }}
				out:blur={{ duration: 150 }}
			/>
		{/if}
	{/each}
</div>
