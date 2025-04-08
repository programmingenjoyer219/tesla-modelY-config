<script>
	import ConfigMenu from '$features/config-menu/components/ConfigMenu.svelte';
	import ImageGallery from '$features/image-gallery/components/ImageGallery.svelte';
</script>

<div class="grid gap-4 md:grid-cols-[60%_40%]">
	<ImageGallery />
	<ConfigMenu />
</div>
