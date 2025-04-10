<script>
	import { expenditure } from '../states/expenditure.svelte';
	import { formatMonetaryAmount } from '../utils';

	var formattedTotalPrice = $derived.by(function cb() {
		return formatMonetaryAmount(expenditure.currencySymbol)(0)(expenditure.totalPrice);
	});
</script>

<section class="space-y-2">
	<h2 class="text-heading-sm font-light text-slate-900/50">Total Price</h2>
	<p class="text-heading-base font-bold">
		{formattedTotalPrice}
	</p>
</section>
