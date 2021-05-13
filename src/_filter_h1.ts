import type { falsy } from '@ctx-core/function'
import { I__ } from '@ctx-core/combinators'
import type { filter_h1_type } from './filter_h1_type'
/**
 * Returns a filter_h1 with the values filtered by `fn`.
 */
export function _filter_h1<H1 extends object = object>(
	in_h1:H1|falsy,
	fn:(val:H1[keyof H1], key:string, h1:H1)=>H1[keyof H1] = I__
):filter_h1_type|undefined {
	if (!in_h1) return
	const h1 = in_h1 as H1
	const filter_h1 = {} as Record<string, boolean>
	for (let key in h1) {
		filter_h1[key] = !!(fn(h1[key], key, h1))
	}
	return filter_h1
}
export {
	_filter_h1 as _h1__filter
}
