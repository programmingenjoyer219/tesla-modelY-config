<script>
	import { carColor } from '../states/carColor.svelte';
	import ColorSelectionMenu from './ColorSelectionMenu.svelte';
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
				<label class="flex-1" for="standard">Standard</label>
				<input
					id="standard"
					class="size-6 appearance-none rounded-full border-2 border-slate-500 outline-offset-4 checked:bg-blue-300 focus:outline-blue-300"
					type="radio"
				/>
			</div>

			<div
				class="flex flex-row-reverse items-center justify-end gap-4 rounded-md border-2 border-slate-400/75 p-3 shadow-md"
			>
				<label class="flex-1" for="performance">Performance</label>
				<input
					id="performance"
					class="size-6 appearance-none rounded-full border-2 border-slate-500 outline-offset-4 checked:bg-blue-300 focus:outline-blue-300"
					type="radio"
				/>
			</div>
		</div>
		<!-- full self-driving -->
		<div class="space-y-2">
			<p class="font-semibold">Full Self-Driving</p>

			<div
				class="flex flex-row-reverse items-center justify-end gap-4 rounded-md border-2 border-slate-400/75 p-3 shadow-md"
			>
				<label class="flex-1" for="full-self-driving">Full Self-Driving (+$8500)</label>
				<input
					id="full-self-driving"
					class="size-6 appearance-none rounded-sm border-2 border-slate-500 outline-offset-4 checked:bg-blue-300 focus:outline-blue-300"
					type="checkbox"
				/>
			</div>
		</div>
		<!-- performance package -->
		<div class="space-y-2">
			<p class="font-semibold">Performance Package</p>

			<div
				class="flex flex-row-reverse items-center justify-end gap-4 rounded-md border-2 border-slate-400/75 p-3 shadow-md"
			>
				<label class="flex-1" for="performance-package">Performance Package (+$5000)</label>
				<input
					id="performance-package"
					class="size-6 appearance-none rounded-sm border-2 border-slate-500 outline-offset-4 checked:bg-blue-300 focus:outline-blue-300"
					type="checkbox"
				/>
			</div>
		</div>
		<!-- accessories -->
		<div class="space-y-2">
			<p class="font-semibold">Accessories</p>

			<div
				class="flex flex-row-reverse items-center justify-end gap-4 rounded-md border-2 border-slate-400/75 p-3 shadow-md"
			>
				<label class="flex-1" for="center-console-tray">Center Console Tray (+$35)</label>
				<input
					id="center-console-tray"
					class="size-6 appearance-none rounded-sm border-2 border-slate-500 outline-offset-4 checked:bg-blue-300 focus:outline-blue-300"
					type="checkbox"
				/>
			</div>

			<div
				class="flex flex-row-reverse items-center justify-end gap-4 rounded-md border-2 border-slate-400/75 p-3 shadow-md"
			>
				<label class="flex-1" for="sunshade">Sunshade (+$105)</label>
				<input
					id="sunshade"
					class="size-6 appearance-none rounded-sm border-2 border-slate-500 outline-offset-4 checked:bg-blue-300 focus:outline-blue-300"
					type="checkbox"
				/>
			</div>

			<div
				class="flex flex-row-reverse items-center justify-end gap-4 rounded-md border-2 border-slate-400/75 p-3 shadow-md"
			>
				<label class="flex-1" for="all-weather-interior-liners"
					>All Weather Interior Liners (+$225)</label
				>
				<input
					id="all-weather-interior-liners"
					class="size-6 appearance-none rounded-sm border-2 border-slate-500 outline-offset-4 checked:bg-blue-300 focus:outline-blue-300"
					type="checkbox"
				/>
			</div>
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
