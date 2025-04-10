class CarColor {
	/**@type {'ultra-red' | 'pearl-white' | 'quicksilver' | 'solid-black' | 'stealth-grey' | 'deep-blue-metallic'}*/
	exterior = $state('ultra-red');
	/**@type {'dark' | 'light'}*/
	interior = $state('dark');
}

export var carColor = new CarColor();
