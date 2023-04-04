import { a_present_ } from '@ctx-core/array'
import { filter_r__ } from '../filter_r__/index.js'
/** @typedef {import('../_types').filter_r_T}filter_r_T */
/**
 * Returns a filter_h where the value is a
 * boolean of whether the array has items present
 * @param {object}o
 * @returns {filter_r_T|undefined}
 */
export function r_a_present(o) {
	return filter_r__(val=>
		a_present_(val)
	)(o)
}
export {
	r_a_present as h_a_present,
	r_a_present as _h1__present__a1,
}
