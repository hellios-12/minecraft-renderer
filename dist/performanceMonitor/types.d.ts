/** Low-FPS / instability factors written to reactive renderer state. */
export interface PerformanceInstabilityFactors {
    longRenderTime: boolean;
    constantLongRenderTime: boolean;
    tooManyEntities: boolean;
    tooManyTextures: boolean;
    unknownReason: boolean;
}
export declare const defaultPerformanceInstabilityFactors: () => PerformanceInstabilityFactors;
export interface FramePerformanceSample {
    /** Full `WorldRendererThree.render()` duration in ms. */
    totalMs: number;
    /** Time spent in `entities.render()` this frame (0 if skipped). */
    entitiesMs: number;
    loadedTextureCount: number;
    /** FPS from the last completed 1s window (0 before first sample). */
    fps: number;
}
//# sourceMappingURL=types.d.ts.map