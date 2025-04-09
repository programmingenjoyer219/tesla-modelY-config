class CarConfiguration {
	/**@type {'standard' | 'performance'} */
	wheels = $state('standard');
	fullSelfDriving = $state(false);
	performancePackage = $state(false);
	centerConsoleTray = $state(false);
	sunshade = $state(false);
	allWeatherInteriorLiners = $state(false);
}

export var carConfiguration = new CarConfiguration();
