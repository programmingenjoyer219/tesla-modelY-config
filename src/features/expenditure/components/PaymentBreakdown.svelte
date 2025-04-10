<script>
	import { expenditure } from '../states/expenditure.svelte';
	import { formatMonetaryAmount, formatInterestRate, formatLoanTerm } from '../utils';
	import MonthlyPayment from './MonthlyPayment.svelte';

	var formattedDownPayment = $derived.by(function cb() {
		return formatMonetaryAmount(expenditure.currencySymbol)(0)(expenditure.downPayment);
	});

	var formattedLoanTerm = $derived.by(function cb() {
		return formatLoanTerm('months')(expenditure.loanTerm);
	});

	var formattedInterestRate = $derived.by(function cb() {
		return formatInterestRate('APR')(expenditure.interestRate);
	});
</script>

<section class="space-y-2">
	<h2 class="text-heading-sm font-light text-slate-900/50">Estimated Payment Breakdown</h2>

	<table class="w-full table-auto">
		<tbody class="divide-y-1">
			<tr>
				<td>Down Payment</td>
				<td class="font-semibold">
					{formattedDownPayment}
				</td>
			</tr>

			<tr>
				<td>Loan Term</td>
				<td class="font-semibold">{formattedLoanTerm}</td>
			</tr>

			<tr>
				<td>Interest Rate</td>
				<td class="font-semibold">{formattedInterestRate}</td>
			</tr>
		</tbody>
	</table>

	<MonthlyPayment />
</section>
