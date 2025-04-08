<script>
	/**
	 * @type {{optionType: 'checkbox' | 'radio'; description: string; id: string;}}
	 */
	var { optionType, description, id } = $props();
</script>

<div class="flex items-center gap-4 rounded-md border-2 border-slate-400/75 p-3 shadow-md">
	<input
		{id}
		class={[
			'size-6 appearance-none border-2 border-slate-500 outline-offset-4 checked:bg-blue-300 focus:outline-blue-300',
			optionType == 'radio' ? 'rounded-full' : 'rounded-sm'
		]}
		type={optionType}
	/>
	<span>{description}</span>
</div>
