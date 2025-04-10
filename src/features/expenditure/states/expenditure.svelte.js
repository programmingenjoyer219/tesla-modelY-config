/** @typedef {import('$features/config-menu/states/carConfiguration.svelte').CarConfiguration} CarConfiguration */
import { carConfiguration } from '$features/config-menu/states/carConfiguration.svelte';

/**
 * @typedef {Object} AccessoryRates
 * @property {number} wheelsPerformance
 * @property {number} fullSelfDriving
 * @property {number} performancePackage
 * @property {number} centerConsoleTray
 * @property {number} sunshade
 * @property {number} allWeatherInteriorLiners
 */

class Expenditure {
	/**@type {number}*/
	totalPrice = $derived.by(() => {
		return calculateTotalPrice(this.basePrice, this.carConfiguration, this.accessoryRates);
	});
	/**@type {number}*/
	downPayment = $derived.by(() => {
		return calculateDownPayment(10)(this.totalPrice);
	});
	/**@type {number}*/
	monthlyPayment = $derived.by(() => {
		return calculateMonthlyPayment(
			this.totalPrice,
			this.downPayment,
			this.interestRate,
			this.loanTerm
		);
	});

	/**
	 * @param {string} currencySymbol
	 * @param {AccessoryRates} accessoryRates
	 * @param {number} basePrice
	 * @param {number} loanTerm
	 * @param {number} interestRate
	 * @param {CarConfiguration} carConfiguration
	 */
	constructor(currencySymbol, accessoryRates, basePrice, loanTerm, interestRate, carConfiguration) {
		this.currencySymbol = currencySymbol;
		this.accessoryRates = accessoryRates;
		this.basePrice = basePrice;
		this.loanTerm = loanTerm;
		this.interestRate = interestRate;
		this.carConfiguration = carConfiguration;
	}
}

export var expenditure = new Expenditure(
	'$',
	{
		wheelsPerformance: 2500,
		fullSelfDriving: 8500,
		performancePackage: 5000,
		centerConsoleTray: 35,
		sunshade: 105,
		allWeatherInteriorLiners: 225
	},
	52490,
	60,
	0.03,
	carConfiguration
);

/**
 * @param {number} percent a number between 0 and 100 (inclusive)
 * @example
 * calculateDownPayment(10)(52_490) // 5249
 */
function calculateDownPayment(percent) {
	/**
	 * @param {number} totalPrice total price of the car
	 */
	return function takeTotalPrice(totalPrice) {
		return (totalPrice * percent) / 100;
	};
}

/**
 *
 * @param {number} totalPrice
 * @param {number} downPayment
 * @param {number} interestRate
 * @param {number} loanTerm
 */
function calculateMonthlyPayment(totalPrice, downPayment, interestRate, loanTerm) {
	var loanAmount = totalPrice - downPayment;
	var monthlyInterestRate = interestRate / 12;

	return (
		(loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm))) /
		(Math.pow(1 + monthlyInterestRate, loanTerm) - 1)
	);
}

/**
 *
 * @param {number} basePrice
 * @param {CarConfiguration} carConfiguration
 * @param {AccessoryRates} accessoryRates
 */
function calculateTotalPrice(basePrice, carConfiguration, accessoryRates) {
	var result = basePrice;

	if (carConfiguration.wheels == 'performance') {
		result += accessoryRates.wheelsPerformance;
	}

	if (carConfiguration.fullSelfDriving) {
		result += accessoryRates.fullSelfDriving;
	}

	if (carConfiguration.performancePackage) {
		result += accessoryRates.performancePackage;
	}

	if (carConfiguration.centerConsoleTray) {
		result += accessoryRates.centerConsoleTray;
	}

	if (carConfiguration.sunshade) {
		result += accessoryRates.sunshade;
	}

	if (carConfiguration.allWeatherInteriorLiners) {
		result += accessoryRates.allWeatherInteriorLiners;
	}

	return result;
}
