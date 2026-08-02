import { FULL_DRAW_VISIBLE_FRACTION, MAX_OPAQUE_SPANS, type DirtyRange } from './globalLegacyBuffer';
export { FULL_DRAW_VISIBLE_FRACTION, MAX_OPAQUE_SPANS as MAX_CUBE_SPANS };
export type CubeDrawSpan = {
    start: number;
    count: number;
};
export type VisibleCubeSlot = {
    start: number;
    count: number;
};
/**
 * Merge visible face-instance ranges for WEBGL_multi_draw (option B).
 * Instance indices — no *6 scaling on span values.
 */
export declare function buildVisibleCubeSpans(visibleSlots: VisibleCubeSlot[], highWatermark: number, canFullDraw?: boolean, _isRangeUploaded?: (start: number, end: number) => boolean, pendingRanges?: ReadonlyArray<DirtyRange>): CubeDrawSpan[];
//# sourceMappingURL=cubeDrawSpans.d.ts.map