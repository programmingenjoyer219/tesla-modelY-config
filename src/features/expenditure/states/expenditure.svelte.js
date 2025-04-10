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
	totalPrice = $derived.by(this.calculateTotalPrice.bind(this));
	/**@type {number}*/
	downPayment = $derived.by(this.calculateDownPayment.bind(this));
	/**@type {number}*/
	monthlyPayment = $derived.by(this.calculateMonthlyPayment.bind(this));

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

	/**
	 * @returns {number} total price of the car
	 */
	calculateTotalPrice() {
		var result = this.basePrice;

		if (this.carConfiguration.wheels == 'performance') {
			result += this.accessoryRates.wheelsPerformance;
		}

		if (this.carConfiguration.fullSelfDriving) {
			result += this.accessoryRates.fullSelfDriving;
		}

		if (this.carConfiguration.performancePackage) {
			result += this.accessoryRates.performancePackage;
		}

		if (this.carConfiguration.centerConsoleTray) {
			result += this.accessoryRates.centerConsoleTray;
		}

		if (this.carConfiguration.sunshade) {
			result += this.accessoryRates.sunshade;
		}

		if (this.carConfiguration.allWeatherInteriorLiners) {
			result += this.accessoryRates.allWeatherInteriorLiners;
		}

		return result;
	}
	/**
	 * @returns {number} car's monthly payment
	 */
	calculateMonthlyPayment() {
		var loanAmount = this.totalPrice - this.downPayment;
		var monthlyInterestRate = this.interestRate / 12;

		return (
			(loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, this.loanTerm))) /
			(Math.pow(1 + monthlyInterestRate, this.loanTerm) - 1)
		);
	}
	/**
	 * @returns {number} car's down payment
	 */
	calculateDownPayment() {
		return this.totalPrice * 0.1;
	}
	/**
	 * @param {number} amount
	 * @returns {string}
	 * @example
	 * console.log(getFormattedPrice(2500)) // (+$2,500)
	 */
	getFormattedPrice(amount) {
		return `(+${this.currencySymbol}${amount.toLocaleString()})`;
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
