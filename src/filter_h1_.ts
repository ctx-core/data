import { I__ } from '@ctx-core/combinators'
import type { filter_h1_T } from './filter_h1_T'
/**
 * Returns a filter_h1 with the values filtered by `fn`.
 */
export function filter_h1_<Obj extends object = object>(
	in_h:Obj|undefined,
	fn:(val:Obj[keyof Obj], key:string, h1:Obj)=>Obj[keyof Obj] = I__
):filter_h1_T|undefined {
	if (!in_h) return
	const h = in_h as Obj
	const filter_h1 = {} as Record<string, boolean>
	for (let key in h) {
		filter_h1[key] = !!(fn(h[key], key, h))
	}
	return filter_h1
}
export {
	filter_h1_ as _filter_h1,
	filter_h1_ as _h1__filter,
}
