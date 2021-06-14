import type { filter_r_T } from './filter_r_T';
/**
 * Returns a filter_h1 with the values filtered by `fn`.
 */
export declare function filter_r_<Obj extends object = object>(in_r: Obj | undefined, fn?: (val: Obj[keyof Obj], key: string, h1: Obj) => Obj[keyof Obj]): filter_r_T | undefined;
export { filter_r_ as filter_h_, filter_r_ as _filter_h1, filter_r_ as _h1__filter, };
