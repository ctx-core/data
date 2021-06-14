import type { filter_r_T } from './filter_r_T';
/**
 * Returns a function that calls _filter_h1 with fn
 */
export declare function filter_r_2<Obj extends object = object>(fn?: (val: Obj[keyof Obj], key: string, l0_r: Obj) => any): ((l1_r: Obj | undefined) => filter_r_T | undefined);
export { filter_r_2 as filter_h_2, filter_r_2 as _fn__h1__filter, };
