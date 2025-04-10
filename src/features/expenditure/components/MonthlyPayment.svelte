<script>
	import { expenditure } from '../states/expenditure.svelte';
	import { formatMonetaryAmount } from '../utils';

	var formattedMonthlyPayment = $derived.by(function cb() {
		return formatMonetaryAmount(expenditure.currencySymbol)(2)(expenditure.monthlyPayment);
	});
</script>

<h3 class="text-md font-medium">Estimated Monthly Payment</h3>
<p class="text-heading-sm font-bold">
	{formattedMonthlyPayment}
</p>
