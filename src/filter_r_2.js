import { I__ } from '@ctx-core/combinators';
import { filter_r_ } from './filter_r_';
/**
 * Returns a function that calls _filter_h1 with fn
 */
export function filter_r_2(fn = I__) {
    return (l1_r) => filter_r_(l1_r, fn);
}
// export const a_present__h1 = _filter_h1_fn(
// 	(val, key, h1)=>a_present_()
// )
export { filter_r_2 as filter_h_2, filter_r_2 as _fn__h1__filter, };
//# sourceMappingURL=src/filter_r_2.js.map