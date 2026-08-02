/**
 * Frame Timing Collector (Worker-side)
 *
 * Collects frame timing events and sends them to main thread via nonReactiveState
 * This runs in the worker context and updates the shared state
 */
import { NonReactiveState } from '../graphicsBackend';
export interface FrameTimingEvent {
    type: 'frameStart' | 'frameEnd' | 'cameraUpdate' | 'frameDisplay';
    timestamp: number;
    duration?: number;
}
export declare class FrameTimingCollector {
    private nonReactiveState;
    private events;
    private frozenEvents;
    private lastSecondEvents;
    private currentFrameStartTime;
    private lastInteractionTime;
    private lastSecondUpdateTime;
    private readonly timeWindowMs;
    private readonly lastSecondWindowMs;
    private readonly maxEvents;
    private readonly lastSecondUpdateInterval;
    constructor(nonReactiveState: NonReactiveState);
    markFrameStart(): void;
    markFrameEnd(): void;
    markCameraUpdate(posIsFalsey: boolean): void;
    markFrameDisplay(): void;
    private addEvent;
    private trimEvents;
    private trimLastSecondEvents;
    private updateLastSecondTimeline;
    private syncLiveEvents;
    private syncFrozenEvents;
    private syncLastSecondEvents;
    clear(): void;
}
//# sourceMappingURL=frameTimingCollector.d.ts.map