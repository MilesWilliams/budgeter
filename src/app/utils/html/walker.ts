import { Matches } from '../polyfills';

/**
 *
 *
 * @export
 * @param {*} elem
 * @param {*} selector
 * @returns {HTMLElement}
 */
export function GetClosestElm(elem: any, selector: any): HTMLElement {
    Matches();

	// Get closest match
	for (; elem && elem !== document; elem = elem.parentNode) {
		if (elem.matches(selector)) return elem;
	}

	return null;
}
