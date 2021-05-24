import { I__ } from '@ctx-core/combinators';
/**
 * Returns a filter_h1 with the values filtered by `fn`.
 */
export function _filter_h1(in_h1, fn = I__) {
    if (!in_h1)
        return;
    const h1 = in_h1;
    const filter_h1 = {};
    for (let key in h1) {
        filter_h1[key] = !!(fn(h1[key], key, h1));
    }
    return filter_h1;
}
export { _filter_h1 as _h1__filter };
