<script>
	import { carColor } from '../states/carColor.svelte';
	import ColorSelectionMenu from './ColorSelectionMenu.svelte';
	import ConfigOptionMenu from './ConfigOptionMenu.svelte';
</script>

<section class="space-y-8">
	<h1 class="text-heading-base md:text-heading-md text-center font-bold md:text-start">Model Y</h1>
	<div class="h-1 w-full rounded bg-slate-300/75"></div>
	<!-- menu -->
	<section class="space-y-4">
		<h2 class="text-heading-sm font-light text-slate-900/50">Customize Your Car</h2>
		<!-- exterior color selection menu -->
		<ColorSelectionMenu
			title="Exterior color"
			colorImageMap={{
				'ultra-red': '/assets/model-y/buttons/ultra-red.avif',
				'pearl-white': '/assets/model-y/buttons/pearl-white.avif',
				quicksilver: '/assets/model-y/buttons/quicksilver.avif',
				'solid-black': '/assets/model-y/buttons/solid-black.avif',
				'stealth-grey': '/assets/model-y/buttons/stealth-grey.avif',
				'deep-blue-metallic': '/assets/model-y/buttons/deep-blue-metallic.avif'
			}}
			bind:selectedColor={carColor.exterior}
		/>
		<!-- interior color selection menu -->
		<ColorSelectionMenu
			title="Interior color"
			colorImageMap={{
				dark: '/assets/model-y/buttons/dark.avif',
				light: '/assets/model-y/buttons/light.avif'
			}}
			bind:selectedColor={carColor.interior}
		/>
		<!-- wheels -->
		<ConfigOptionMenu
			title="Wheels"
			configOptions={[
				{ id: 'standard', description: 'Standard', optionType: 'radio' },
				{ id: 'performance', description: 'Performance', optionType: 'radio' }
			]}
		/>
		<!-- full self-driving -->
		<ConfigOptionMenu
			title="Full Self-Driving"
			configOptions={[
				{
					id: 'full-self-driving',
					description: 'Full Self-Driving (+$8500)',
					optionType: 'checkbox'
				}
			]}
		/>
		<!-- performance package -->
		<ConfigOptionMenu
			title="Performance Package"
			configOptions={[
				{
					id: 'performance-package',
					description: 'Performance Package (+$5000)',
					optionType: 'checkbox'
				}
			]}
		/>
		<!-- accessories -->
		<ConfigOptionMenu
			title="Accessories"
			configOptions={[
				{
					id: 'center-console-tray',
					description: 'Center Console Tray (+$35)',
					optionType: 'checkbox'
				},
				{
					id: 'sunshade',
					description: 'Sunshade (+$105)',
					optionType: 'checkbox'
				},
				{
					id: 'all-weather-interior-liners',
					description: 'All Weather Interior Liners (+$225)',
					optionType: 'checkbox'
				}
			]}
		/>
	</section>
	<div class="h-1 w-full rounded bg-slate-300/75"></div>
	<!-- total price -->
	<section class="space-y-2">
		<h2 class="text-heading-sm font-light text-slate-900/50">Total Price</h2>
		<p class="text-heading-base font-bold">$52,490</p>
	</section>
	<div class="h-1 w-full rounded bg-slate-300/75"></div>
	<!-- Payment Breakdown -->
	<section class="space-y-2">
		<h2 class="text-heading-sm font-light text-slate-900/50">Estimated Payment Breakdown</h2>

		<table class="w-full table-auto">
			<tbody class="divide-y-1">
				<tr>
					<td>Down Payment</td>
					<td class="font-semibold">$5,249</td>
				</tr>

				<tr>
					<td>Loan Term</td>
					<td class="font-semibold">60 months</td>
				</tr>

				<tr>
					<td>Interest Rate</td>
					<td class="font-semibold">3% APR</td>
				</tr>
			</tbody>
		</table>

		<h3 class="text-md font-medium">Estimated Monthly Payment</h3>
		<p class="text-heading-sm font-bold">$848.86</p>
	</section>
</section>
