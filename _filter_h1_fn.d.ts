import { I__ } from '@ctx-core/combinators';
/**
 * Returns a function that calls _filter_h1 with fn
 */
export declare function _filter_h1_fn(fn?: typeof I__): (h1: any) => import("@ctx-core/function").maybe<import("./filter_h1_type").filter_h1_type, import("@ctx-core/function").falsy>;
/**
 * Returns a h1__filter where the value is a
 * boolean of whether the array has items present
 */
export declare const _h1__present__a1: (h1: any) => import("@ctx-core/function").maybe<import("./filter_h1_type").filter_h1_type, import("@ctx-core/function").falsy>;
export { _filter_h1_fn as _fn__h1__filter };
