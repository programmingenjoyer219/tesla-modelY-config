<script>
	/**
	 * @type {{label: string; colorImageMap: {[key: string]: string}}}
	 */
	var { label, colorImageMap } = $props();
</script>

{#snippet colorSelectionBtn(/** @type {string} */ color, /** @type {string} */ src)}
	<div class="relative grid max-w-18 place-content-center">
		<input
			type="radio"
			id={color}
			name={color}
			oninput={function () {
				console.log(color);
			}}
			class="absolute top-1/2 left-1/2 z-10 size-[90%] -translate-1/2 opacity-0"
		/>
		<img {src} alt="" class="" />
	</div>
{/snippet}

<label class="block space-y-2">
	<p class="font-semibold">{label}</p>
	<div class="grid grid-cols-6 gap-4">
		{#each Object.entries(colorImageMap) as [color, src]}
			{@render colorSelectionBtn(color, src)}
		{/each}
	</div>
</label>
