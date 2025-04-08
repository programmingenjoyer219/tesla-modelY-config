<script>
	import ConfigOption from './ConfigOption.svelte';

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

<div class="space-y-2">
	<p class="font-semibold">{title}</p>
	{#each configOptions as { id, description, optionType } (id)}
		<ConfigOption {id} {description} {optionType} />
	{/each}
</div>
