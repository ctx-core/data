import { I__ } from '@ctx-core/combinators'
import { filter_r_ } from './filter_r_'
import type { filter_r_T } from './filter_r_T'
/**
 * Returns a function that calls _filter_h1 with fn
 */
export function filter_r_2<Obj extends object = object>(
	fn:(val:Obj[keyof Obj], key:string, l0_r:Obj)=>any = I__
):((l1_r:Obj|undefined)=>filter_r_T|undefined) {
	return (l1_r:Obj|undefined)=>filter_r_<Obj>(l1_r, fn)
}
// export const a_present__h1 = _filter_h1_fn(
// 	(val, key, h1)=>a_present_()
// )
export {
	filter_r_2 as filter_h_2,
	filter_r_2 as _fn__h1__filter,
}
