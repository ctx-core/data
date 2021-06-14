import type { filter_r_T } from './filter_r_T';
/**
 * Returns a filter_h where the value is a
 * boolean of whether the array has items present
 */
export declare function r_a_present</*@formatter:off*/ Val extends unknown = unknown, Obj extends {
    [key: string]: Val[];
} = {
    [key: string]: Val[];
}>(h: Obj): filter_r_T | undefined;
export { r_a_present as h_a_present, r_a_present as _h1__present__a1, };
