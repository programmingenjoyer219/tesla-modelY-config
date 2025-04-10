/**
 * Formats monetary amount
 * @param {string} currencySymbol
 * @example
 * formatMonetaryAmount('$')(0)(2500) // $2,500
 * formatMonetaryAmount('$')(2)(848.346) // $848.35
 */
export function formatMonetaryAmount(currencySymbol) {
	/**
	 * @param {number} decimalPlaces
	 */
	return function takeDecimalPlaces(decimalPlaces) {
		/**
		 * @param {number} amount
		 */
		return function takeAmount(amount) {
			if (decimalPlaces == 0) {
				return `${currencySymbol}${Math.floor(amount).toLocaleString()}`;
			}
			return `${currencySymbol}${amount.toFixed(decimalPlaces)}`;
		};
	};
}

/**
 * Formats loan term value
 * @param {'days' | 'months' | 'years'} duration
 * @example
 * formatLoanTerm('months')(60) // 60 months
 */
export function formatLoanTerm(duration) {
	/**
	 * @param {number} loanTerm
	 */
	return function takeLoanTerm(loanTerm) {
		return `${loanTerm} ${duration}`;
	};
}

/**
 * Formats interest rate value
 * @param {string} suffix
 * @example
 * formatInterestRate('APR')(0.03) // 3% APR
 */
export function formatInterestRate(suffix) {
	/**
	 * @param {number} interestRate
	 */
	return function takeInterestRate(interestRate) {
		return `${interestRate * 100}% ${suffix}`;
	};
}
