export class CarConfiguration {
	/**@type {'standard' | 'performance'}*/
	wheels = $state('standard');
	/**@type {Boolean}*/
	fullSelfDriving = $state(false);
	/**@type {Boolean}*/
	performancePackage = $state(false);
	/**@type {Boolean}*/
	centerConsoleTray = $state(false);
	/**@type {Boolean}*/
	sunshade = $state(false);
	/**@type {Boolean}*/
	allWeatherInteriorLiners = $state(false);
}

export var carConfiguration = new CarConfiguration();
