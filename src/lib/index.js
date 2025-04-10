/**
 * @callback callback
 * @returns {void}
 */

/**
 * A function to use view transitions API if supported by the browser
 * @param {callback} callback A callback function which causes changes in the DOM
 */
export function implementViewTransitions(callback) {
	if (document.startViewTransition) {
		document.startViewTransition(callback);
	} else {
		callback;
	}
}
