import type { falsy } from '@ctx-core/function';
import type { filter_h1_type } from './filter_h1_type';
/**
 * Returns a filter_h1 with the values filtered by `fn`.
 */
export declare function _filter_h1<H1 extends object = object>(in_h1: H1 | falsy, fn?: (val: H1[keyof H1], key: string, h1: H1) => H1[keyof H1]): filter_h1_type | undefined;
export { _filter_h1 as _h1__filter };
