import { I__ } from '@ctx-core/combinators';
/**
 * Returns a function that calls _filter_h1 with fn
 */
export declare function _filter_h1_fn(fn?: typeof I__): (h1: any) => import("@ctx-core/function").maybe<Record<string, boolean>, import("@ctx-core/function").falsy>;
export declare const _fn__h1__filter: typeof _filter_h1_fn;
/**
 * Returns a h1__filter where the value is a
 * boolean of whether the array has items present
 */
export declare const _h1__present__a1: (h1: any) => import("@ctx-core/function").maybe<Record<string, boolean>, import("@ctx-core/function").falsy>;
