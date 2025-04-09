/** @typedef {import('../types/index.js').ExteriorColor} ExteriorColor */
/** @typedef {import('../types/index.js').InteriorColor} InteriorColor */

class CarColor {
	/**
	 * @type {ExteriorColor}
	 */
	exterior = $state('ultra-red');
	/**
	 * @type {InteriorColor}
	 */
	interior = $state('dark');
}

export var carColor = new CarColor();
