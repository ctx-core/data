import { I__ } from '@ctx-core/combinators';
/**
 * Returns a filter_h1 with the values filtered by `fn`.
 */
export function filter_r_(in_r, fn = I__) {
    if (!in_r)
        return;
    const r = in_r;
    const filter_r = {};
    for (let key in r) {
        filter_r[key] = !!(fn(r[key], key, r));
    }
    return filter_r;
}
export { filter_r_ as filter_h_, filter_r_ as _filter_h1, filter_r_ as _h1__filter, };
//# sourceMappingURL=src/filter_r_.js.map