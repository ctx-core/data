import { I__ } from '@ctx-core/combinators'
import type { filter_h1_type } from './filter_h1_type'
import type { maybe } from '@ctx-core/function'
/**
 * Returns a filter_h1 with the values filtered by `fn`.
 */
export function _filter_h1<I = object>(in_h1:maybe<I>, fn = I__):maybe<filter_h1_type> {
	if (!in_h1) return
	const h1 = in_h1 as I
	const filter_h1 = {} as Record<string, boolean>
	for (let key in h1) {
		filter_h1[key] = !!(fn(h1[key], key, in_h1))
	}
	return filter_h1
}
export const _h1__filter = _filter_h1
