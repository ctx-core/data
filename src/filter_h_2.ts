import { a_present_ } from '@ctx-core/array'
import { I__ } from '@ctx-core/combinators'
import { filter_h1_ } from './filter_h1_'
import type { filter_h1_T } from './filter_h1_T'
/**
 * Returns a function that calls _filter_h1 with fn
 */
export function filter_h_2<Obj extends object = object>(
	fn:(val:Obj[keyof Obj], key:string, h:Obj)=>any = I__
):((h1:Obj|undefined)=>filter_h1_T|undefined) {
	return (h1:Obj|undefined)=>filter_h1_<Obj>(h1, fn)
}
/**
 * Returns a filter_h where the value is a
 * boolean of whether the array has items present
 */
export function h_a_present</*@formatter:off*/
	Val extends unknown = unknown,
	Obj extends { [key:string]:Val[] } = { [key:string]:Val[] }
/*@formatter:on*/>(h:Obj) {
	return filter_h_2<Obj>(
		(val:Obj[keyof Obj])=>a_present_<Val>(val)
	)(h)
}
// export const a_present__h1 = _filter_h1_fn(
// 	(val, key, h1)=>a_present_()
// )
export {
	h_a_present as _h1__present__a1,
	filter_h_2 as _fn__h1__filter
}
