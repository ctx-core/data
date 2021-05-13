import type { falsy } from '@ctx-core/function'
import { _a1_present } from '@ctx-core/array'
import { I__ } from '@ctx-core/combinators'
import { _filter_h1 } from './_filter_h1'
import type { filter_h1_type } from './filter_h1_type'
/**
 * Returns a function that calls _filter_h1 with fn
 */
export function _filter_h1_fn<H1 extends object = object>(
	fn:(val:H1[keyof H1], key:string, h1:H1)=>any = I__
):((h1:H1|falsy)=>filter_h1_type|undefined) {
	return (h1:H1|falsy)=>_filter_h1<H1>(h1, fn)
}
/**
 * Returns a h1__filter where the value is a
 * boolean of whether the array has items present
 */
export function _a1_present_h1</*@formatter:off*/
	Val extends unknown = unknown,
	H1 extends { [key:string]:Val[] } = { [key:string]:Val[] }
/*@formatter:on*/>(h1:H1) {
	return _filter_h1_fn<H1>(
		(val:H1[keyof H1])=>_a1_present<Val>(val)
	)(h1)
}
// export const _a1_present_h1 = _filter_h1_fn(
// 	(val, key, h1)=>_a1_present()
// )
export {
	_a1_present_h1 as _h1__present__a1,
	_filter_h1_fn as _fn__h1__filter
}
