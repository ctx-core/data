import { I__ } from '@ctx-core/combinators'
import type { filter_r_T } from './filter_r_T.js'
/**
 * Returns a filter_h1 with the values filtered by `fn`.
 */
export function filter_r_<Obj extends object = object>(
	in_r:Obj|undefined,
	fn:(val:Obj[keyof Obj], key:string, h1:Obj)=>Obj[keyof Obj] = I__
):filter_r_T|undefined {
	if (!in_r) return
	const r = in_r as Obj
	const filter_r:Record<string, boolean> = {}
	for (let key in r) {
		filter_r[key] = !!(fn(r[key], key, r))
	}
	return filter_r
}
export {
	filter_r_ as filter_h_,
	filter_r_ as _filter_h1,
	filter_r_ as _h1__filter,
}
