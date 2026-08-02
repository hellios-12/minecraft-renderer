export type LegacyMultiDrawTier = 'A' | 'B' | 'C';
export type LegacyDrawSpan = {
    indexStart: number;
    indexCount: number;
};
export type LegacyMultiDrawCaps = {
    tier: LegacyMultiDrawTier;
    ext: MultiDrawElementsExt | null;
};
type MultiDrawElementsExt = {
    multiDrawElementsWEBGL: (mode: number, counts: Int32Array, countsOffset: number, type: number, offsets: Int32Array, offsetsOffset: number, drawCount: number) => void;
};
export type LegacyMultiDrawScratch = {
    counts: Int32Array;
    offsets: Int32Array;
};
export declare function createLegacyMultiDrawScratch(): LegacyMultiDrawScratch;
export declare function detectLegacyMultiDrawCaps(gl: WebGL2RenderingContext): LegacyMultiDrawCaps;
export declare function logLegacyMultiDrawTierOnce(tier: LegacyMultiDrawTier, debug: boolean): void;
/**
 * Issue indexed legacy draws for visible spans. Tier B/C loop drawElements.
 */
export declare function drawLegacySpans(gl: WebGL2RenderingContext, caps: LegacyMultiDrawCaps, spans: readonly LegacyDrawSpan[], scratch: LegacyMultiDrawScratch): void;
export {};
//# sourceMappingURL=legacyMultiDraw.d.ts.map