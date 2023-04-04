import { I__ } from '@ctx-core/combinators'
/**
 * Returns a filter_h1 with the values filtered by `fn`.
 * @param {object}in_R
 * @param {(val:any, key:string, h1:object)=>any}fn
 * @returns {import('../_types').filter_r_T|undefined}
 */
export function filter_r_(
	in_R,
	fn = I__
) {
	if (!in_R) return
	const r = in_R
	const filter_r = {}
	for (let key in r) {
		filter_r[key] = !!fn(r[key], key, r)
	}
	return filter_r
}
export {
	filter_r_ as filter_h_,
	filter_r_ as _filter_h1,
	filter_r_ as _h1__filter,
}
