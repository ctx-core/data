import { I__ } from '@ctx-core/combinators'
import { filter_r_ } from '../filter_r_/index.js'
/**
 * Returns a filter_h where the value is a
 * boolean of whether the array has items present
 * @param {(val:any, key:string, l0_r:object)=>any}fn
 * @returns {(l1_r:object|undefined)=>(import('../_types').filter_r_T|undefined)}
 */
export function filter_r__(fn = I__) {
	return (l1_r)=>filter_r_(l1_r, fn)
}
export {
	filter_r__ as filter_h_2,
	filter_r__ as _fn__h1__filter,
}
