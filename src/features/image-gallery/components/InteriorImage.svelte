<script>
	import { carColor } from '$features/config-menu/states/carColor.svelte';
</script>

<img
	fetchpriority="high"
	width="1920"
	height="1080"
	src="/assets/model-y/interior/{carColor.interior}.avif"
	alt=""
/>
