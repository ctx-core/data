import { a_present_ } from '@ctx-core/array'
import { filter_r__ } from '../filter_r__'
/**
 * Returns a filter_h where the value is a
 * boolean of whether the array has items present
 */ export function r_a_present(h) {
	return filter_r__((val)=>a_present_(val))(h)
}
export {
	r_a_present as h_a_present,
	r_a_present as _h1__present__a1,
}
