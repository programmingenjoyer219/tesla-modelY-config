class CarColor {
	/**
	 * @property {import('../types/index.js').ExteriorColor} exterior
	 */
	exterior = $state('ultra-red');
	/**
	 * @property {import('../types/index.js').InteriorColor} interior
	 */
	interior = $state('dark');
}

export var carColor = new CarColor();
