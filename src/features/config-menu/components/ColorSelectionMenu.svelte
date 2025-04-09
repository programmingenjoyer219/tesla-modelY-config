<script>
	/**
	 * @type {{title: string; colorImageMap: {[key: string]: string}; selectedColor: string}}
	 */
	var { title, colorImageMap, selectedColor = $bindable('') } = $props();
</script>

{#snippet colorSelectionBtn(/** @type {string} */ color, /** @type {string} */ src)}
	<label class="relative grid max-w-18 place-content-center">
		<span class="sr-only">{color}</span>
		<input
			type="radio"
			id={color}
			name={color}
			value={color}
			class="absolute top-1/2 left-1/2 -z-10 size-[90%] -translate-1/2 outline-offset-6 focus:outline-2 focus:outline-blue-300"
			bind:group={selectedColor}
		/>
		<img {src} alt="" class="" />
	</label>
{/snippet}

<fieldset class="space-y-2">
	<legend class="font-semibold">{title}</legend>
	<div class="grid grid-cols-4 gap-3">
		{#each Object.entries(colorImageMap) as [color, src]}
			{@render colorSelectionBtn(color, src)}
		{/each}
	</div>
</fieldset>
