import type { FramePerformanceSample, PerformanceInstabilityFactors } from './types';
/**
 * Tracks render/FPS signals and writes instability factors into reactive state
 * (alongside `mesherWork`).
 */
export declare class PerformanceMonitor {
    private readonly factors;
    private readonly renderTimeHistory;
    constructor(factors: PerformanceInstabilityFactors);
    onFrame(sample: FramePerformanceSample): void;
    private pushRenderTime;
    private recompute;
    reset(): void;
}
//# sourceMappingURL=PerformanceMonitor.d.ts.map