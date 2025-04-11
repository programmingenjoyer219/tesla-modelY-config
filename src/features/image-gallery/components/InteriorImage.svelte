<script>
	import { carColor } from '$features/config-menu/states/carColor.svelte';
	import { fly, blur } from 'svelte/transition';

	var interiorColors = ['dark', 'light'];
	var interiorImageSrc = $derived(`/assets/model-y/interior/${carColor.interior}.avif`);
</script>

<div class="flex items-center overflow-hidden">
	{#each interiorColors as interior}
		{#if interior == carColor.interior}
			<img
				fetchpriority="high"
				width="1920"
				height="1080"
				src={interiorImageSrc}
				alt=""
				class="rounded-xl"
				in:blur={{ delay: 200 }}
				out:blur={{ duration: 150 }}
			/>
		{/if}
	{/each}
</div>
