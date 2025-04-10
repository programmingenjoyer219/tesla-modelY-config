<script>
	import PaymentBreakdown from '$features/expenditure/components/PaymentBreakdown.svelte';
	import TotalPrice from '$features/expenditure/components/TotalPrice.svelte';
	import { expenditure } from '$features/expenditure/states/expenditure.svelte';
	import { formatMonetaryAmount } from '$features/expenditure/utils';
	import { carColor } from '../states/carColor.svelte';
	import { carConfiguration } from '../states/carConfiguration.svelte';
	import ColorSelectionMenu from './ColorSelectionMenu.svelte';

	/**
	 * @param {number} price
	 * @example
	 * getFormattedPrice(2500) // (+$2,500)
	 */
	function getFormattedPrice(price) {
		return `(+${formatMonetaryAmount(expenditure.currencySymbol)(0)(price)})`;
	}
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
		<div class="space-y-2">
			<p class="font-semibold">Wheels</p>

			<div
				class="flex flex-row-reverse items-center justify-end gap-4 rounded-md border-2 border-slate-400/75 p-3 shadow-md"
			>
				<label class="flex-1" for="wheels-standard">Standard</label>
				<input
					id="wheels-standard"
					class="size-6 appearance-none rounded-full border-2 border-slate-500 outline-offset-4 checked:bg-blue-300 focus:outline-blue-300"
					type="radio"
					value="standard"
					bind:group={carConfiguration.wheels}
				/>
			</div>

			<div
				class="flex flex-row-reverse items-center justify-end gap-4 rounded-md border-2 border-slate-400/75 p-3 shadow-md"
			>
				<label class="flex-1" for="wheels-performance"
					>Performance {getFormattedPrice(expenditure.accessoryRates.wheelsPerformance)}</label
				>
				<input
					id="wheels-performance"
					class="size-6 appearance-none rounded-full border-2 border-slate-500 outline-offset-4 checked:bg-blue-300 focus:outline-blue-300"
					type="radio"
					value="performance"
					bind:group={carConfiguration.wheels}
				/>
			</div>
		</div>
		<!-- full self-driving -->
		<div class="space-y-2">
			<p class="font-semibold">Full Self-Driving</p>

			<div
				class="flex flex-row-reverse items-center justify-end gap-4 rounded-md border-2 border-slate-400/75 p-3 shadow-md"
			>
				<label class="flex-1" for="full-self-driving"
					>Full Self-Driving {getFormattedPrice(expenditure.accessoryRates.fullSelfDriving)}</label
				>
				<input
					id="full-self-driving"
					class="size-6 appearance-none rounded-sm border-2 border-slate-500 outline-offset-4 checked:bg-blue-300 focus:outline-blue-300"
					type="checkbox"
					bind:checked={carConfiguration.fullSelfDriving}
				/>
			</div>
		</div>
		<!-- performance package -->
		<div class="space-y-2">
			<p class="font-semibold">Performance Package</p>

			<div
				class="flex flex-row-reverse items-center justify-end gap-4 rounded-md border-2 border-slate-400/75 p-3 shadow-md"
			>
				<label class="flex-1" for="performance-package"
					>Performance Package {getFormattedPrice(
						expenditure.accessoryRates.performancePackage
					)}</label
				>
				<input
					id="performance-package"
					class="size-6 appearance-none rounded-sm border-2 border-slate-500 outline-offset-4 checked:bg-blue-300 focus:outline-blue-300"
					type="checkbox"
					bind:checked={carConfiguration.performancePackage}
				/>
			</div>
		</div>
		<!-- accessories -->
		<div class="space-y-2">
			<p class="font-semibold">Accessories</p>

			<div
				class="flex flex-row-reverse items-center justify-end gap-4 rounded-md border-2 border-slate-400/75 p-3 shadow-md"
			>
				<label class="flex-1" for="center-console-tray"
					>Center Console Tray {getFormattedPrice(
						expenditure.accessoryRates.centerConsoleTray
					)}</label
				>
				<input
					id="center-console-tray"
					class="size-6 appearance-none rounded-sm border-2 border-slate-500 outline-offset-4 checked:bg-blue-300 focus:outline-blue-300"
					type="checkbox"
					value="center-console-tray"
					bind:checked={carConfiguration.centerConsoleTray}
				/>
			</div>

			<div
				class="flex flex-row-reverse items-center justify-end gap-4 rounded-md border-2 border-slate-400/75 p-3 shadow-md"
			>
				<label class="flex-1" for="sunshade"
					>Sunshade {getFormattedPrice(expenditure.accessoryRates.sunshade)}</label
				>
				<input
					id="sunshade"
					class="size-6 appearance-none rounded-sm border-2 border-slate-500 outline-offset-4 checked:bg-blue-300 focus:outline-blue-300"
					type="checkbox"
					value="sunshade"
					bind:checked={carConfiguration.sunshade}
				/>
			</div>

			<div
				class="flex flex-row-reverse items-center justify-end gap-4 rounded-md border-2 border-slate-400/75 p-3 shadow-md"
			>
				<label class="flex-1" for="all-weather-interior-liners"
					>All Weather Interior Liners {getFormattedPrice(
						expenditure.accessoryRates.allWeatherInteriorLiners
					)}</label
				>
				<input
					id="all-weather-interior-liners"
					class="size-6 appearance-none rounded-sm border-2 border-slate-500 outline-offset-4 checked:bg-blue-300 focus:outline-blue-300"
					type="checkbox"
					value="all-weather-interior-liners"
					bind:checked={carConfiguration.allWeatherInteriorLiners}
				/>
			</div>
		</div>
	</section>
	<div class="h-1 w-full rounded bg-slate-300/75"></div>
	<!-- total price -->
	<TotalPrice />
	<div class="h-1 w-full rounded bg-slate-300/75"></div>
	<!-- Payment Breakdown -->
	<PaymentBreakdown />
</section>
