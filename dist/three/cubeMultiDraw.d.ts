import type { CubeDrawSpan } from './cubeDrawSpans';
export type MultiDrawTier = 'A' | 'B' | 'C';
export type MultiDrawCaps = {
    tier: MultiDrawTier;
    ext: MultiDrawInstancedExt | DrawInstancedBaseExt | null;
};
type MultiDrawInstancedExt = {
    multiDrawArraysInstancedBaseInstanceWEBGL: (mode: number, firsts: Int32Array, firstsOffset: number, counts: Int32Array, countsOffset: number, instanceCounts: Int32Array, instanceCountsOffset: number, baseInstances: Int32Array, baseInstancesOffset: number, drawCount: number) => void;
};
type DrawInstancedBaseExt = {
    drawArraysInstancedBaseInstanceWEBGL: (mode: number, first: number, count: number, instanceCount: number, baseInstance: number) => void;
};
export type CubeMultiDrawScratch = {
    firsts: Int32Array;
    counts: Int32Array;
    instanceCounts: Int32Array;
    baseInstances: Int32Array;
};
export declare function createCubeMultiDrawScratch(): CubeMultiDrawScratch;
export declare function detectMultiDrawCaps(gl: WebGL2RenderingContext): MultiDrawCaps;
export declare function logMultiDrawTierOnce(tier: MultiDrawTier, debug: boolean): void;
/**
 * Issue instanced cube draws for visible spans. Tier C delegates to buffer-owned VAO path.
 */
export declare function drawCubeSpans(gl: WebGL2RenderingContext, caps: MultiDrawCaps, spans: readonly CubeDrawSpan[], scratch: CubeMultiDrawScratch, tierCDraw?: (gl: WebGL2RenderingContext, spans: readonly CubeDrawSpan[]) => void): void;
export {};
//# sourceMappingURL=cubeMultiDraw.d.ts.map