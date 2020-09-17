import { I__ } from '@ctx-core/combinators'
import { _a1_present } from '@ctx-core/array'
import { _filter_h1 } from './_filter_h1'
/**
 * Returns a function that calls _filter_h1 with fn
 */
export function _filter_h1_fn(fn = I__) {
	return h1=>_filter_h1(h1, fn)
}
export const _fn__h1__filter = _filter_h1_fn
/**
 * Returns a h1__filter where the value is a
 * boolean of whether the array has items present
 */
export const _h1__present__a1 = _fn__h1__filter(_a1_present)
