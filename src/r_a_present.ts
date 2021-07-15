import { a_present_ } from '@ctx-core/array'
import { filter_r_2 } from './filter_r_2.js'
import type { filter_r_T } from './filter_r_T.js'
/**
 * Returns a filter_h where the value is a
 * boolean of whether the array has items present
 */
export function r_a_present</*@formatter:off*/
	Val extends unknown = unknown,
	Obj extends { [key:string]:Val[] } = { [key:string]:Val[] }
/*@formatter:on*/>(h:Obj):filter_r_T|undefined {
	return filter_r_2<Obj>(
		(val:Obj[keyof Obj])=>a_present_<Val>(val)
	)(h)
}
export {
	r_a_present as h_a_present,
	r_a_present as _h1__present__a1,
}
