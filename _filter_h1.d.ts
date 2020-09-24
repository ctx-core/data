import { I__ } from '@ctx-core/combinators';
import type { filter_h1_type } from './filter_h1_type';
import type { maybe } from '@ctx-core/function';
/**
 * Returns a filter_h1 with the values filtered by `fn`.
 */
export declare function _filter_h1<I extends object = object>(in_h1: maybe<I>, fn?: typeof I__): maybe<filter_h1_type>;
export declare const _h1__filter: typeof _filter_h1;
