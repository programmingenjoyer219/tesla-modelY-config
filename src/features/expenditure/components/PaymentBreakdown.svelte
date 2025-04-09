<script>
	import { expenditure } from '../states/expenditure.svelte';
	import MonthlyPayment from './MonthlyPayment.svelte';
</script>

<section class="space-y-2">
	<h2 class="text-heading-sm font-light text-slate-900/50">Estimated Payment Breakdown</h2>

	<table class="w-full table-auto">
		<tbody class="divide-y-1">
			<tr>
				<td>Down Payment</td>
				<td class="font-semibold">
					{expenditure.currencySymbol}{expenditure.downPayment.toLocaleString()}
				</td>
			</tr>

			<tr>
				<td>Loan Term</td>
				<td class="font-semibold">{expenditure.loanTerm} months</td>
			</tr>

			<tr>
				<td>Interest Rate</td>
				<td class="font-semibold">{expenditure.interestRate * 100}% APR</td>
			</tr>
		</tbody>
	</table>

	<MonthlyPayment />
</section>
