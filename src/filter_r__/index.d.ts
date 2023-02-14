import type { filter_r_T } from '../_types'
/**
 * Returns a function that calls filter_r_ with fn
 */
export declare function filter_r__<
	Obj extends object = object
>(
	fn?:(val:Obj[keyof Obj], key:string, l0_r:Obj)=>any
):((l1_r:Obj|undefined)=>filter_r_T|undefined)
export {
	filter_r__ as filter_h_2,
	filter_r__ as _fn__h1__filter,
}
