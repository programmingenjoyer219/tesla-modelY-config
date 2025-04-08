<script>
	import ColorSelectionMenu from './ColorSelectionMenu.svelte';
	import ConfigOption from './ConfigOption.svelte';
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
				ultraRed: '/assets/model-y/buttons/ultra-red.avif',
				pearlWhite: '/assets/model-y/buttons/pearl-white.avif',
				quickSilver: '/assets/model-y/buttons/quicksilver.avif',
				solidBlack: '/assets/model-y/buttons/solid-black.avif',
				stealthGrey: '/assets/model-y/buttons/stealth-grey.avif',
				deepBlue: '/assets/model-y/buttons/deep-blue-metallic.avif'
			}}
		/>
		<!-- interior color selection menu -->
		<ColorSelectionMenu
			title="Interior color"
			colorImageMap={{
				dark: '/assets/model-y/buttons/dark.avif',
				light: '/assets/model-y/buttons/light.avif'
			}}
		/>
		<!-- wheels -->
		<div class="space-y-2">
			<p class="font-semibold">Wheels</p>
			<ConfigOption id="standard" description="Standard" optionType="radio" />
			<ConfigOption id="performance" description="Performance (+$2500)" optionType="radio" />
		</div>
		<!-- full self-driving -->
		<div class="space-y-2">
			<p class="font-semibold">Full Self-Driving</p>
			<ConfigOption
				id="full-self-driving"
				description="Full Self-Driving (+$8500)"
				optionType="checkbox"
			/>
		</div>
		<!-- performance package -->
		<div class="space-y-2">
			<p class="font-semibold">Performance Package</p>
			<ConfigOption
				id="performance-package"
				description="Performance Package (+$5000)"
				optionType="checkbox"
			/>
		</div>
		<!-- accessories -->
		<div class="space-y-2">
			<p class="font-semibold">Accessories</p>
			<ConfigOption
				id="center-console-tray"
				description="Center Console Tray (+$35)"
				optionType="checkbox"
			/>
			<ConfigOption id="sunshade" description="Sunshade (+$105)" optionType="checkbox" />
			<ConfigOption
				id="all-weather-interior-liners"
				description="All Weather Interior Liners (+$225)"
				optionType="checkbox"
			/>
		</div>
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
