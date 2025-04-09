<script>
	import { expenditure } from '../states/expenditure.svelte';
</script>

<h3 class="text-md font-medium">Estimated Monthly Payment</h3>
<p class="text-heading-sm font-bold">
	{expenditure.currencySymbol}{expenditure.monthlyPayment.toFixed(2).toLocaleString()}
</p>
