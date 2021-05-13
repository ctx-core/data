import type { falsy } from '@ctx-core/function';
import type { filter_h1_type } from './filter_h1_type';
/**
 * Returns a function that calls _filter_h1 with fn
 */
export declare function _filter_h1_fn<H1 extends object = object>(fn?: (val: H1[keyof H1], key: string, h1: H1) => any): ((h1: H1 | falsy) => filter_h1_type | undefined);
/**
 * Returns a h1__filter where the value is a
 * boolean of whether the array has items present
 */
export declare function _a1_present_h1</*@formatter:off*/ Val extends unknown = unknown, H1 extends {
    [key: string]: Val[];
} = {
    [key: string]: Val[];
}>(h1: H1): filter_h1_type | undefined;
export { _a1_present_h1 as _h1__present__a1, _filter_h1_fn as _fn__h1__filter };
