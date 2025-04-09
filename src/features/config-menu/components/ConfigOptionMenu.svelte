<script>
	/**
	 * @typedef {Object} ConfigOption
	 * @property {string} id
	 * @property {string} description
	 * @property {'radio' | 'checkbox'} optionType
	 */

	/**
	 * @type {{title: string; configOptions: ConfigOption[]}}
	 */
	var { title, configOptions } = $props();
</script>

{#snippet configOption(
	/** @type {string} */ id,
	/** @type {string} */ description,
	/** @type {'radio' | 'checkbox'} */ optionType
)}
	<div
		class="flex flex-row-reverse items-center justify-end gap-4 rounded-md border-2 border-slate-400/75 p-3 shadow-md"
	>
		<label class="flex-1" for={id}>{description}</label>
		<input
			{id}
			class={[
				'size-6 appearance-none border-2 border-slate-500 outline-offset-4 checked:bg-blue-300 focus:outline-blue-300',
				optionType == 'radio' ? 'rounded-full' : 'rounded-sm'
			]}
			type={optionType}
		/>
	</div>
{/snippet}

<div class="space-y-2">
	<p class="font-semibold">{title}</p>
	{#each configOptions as { id, description, optionType } (id)}
		{@render configOption(id, description, optionType)}
	{/each}
</div>
