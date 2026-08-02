/**
 * DocumentRenderer - Manages Three.js WebGLRenderer and render loop.
 *
 * Features:
 * - Automatic canvas sizing with resize event optimization
 * - FPS limiting support
 * - Stats overlay (optional)
 * - Timeout-based rendering option for background tabs
 */
import * as THREE from 'three';
import type { GraphicsBackendConfig, GraphicsInitOptions } from '../graphicsBackend/types';
import { WorldRendererConfig } from '../graphicsBackend';
export type { GraphicsBackendConfig };
export interface FrameTimingEvent {
    type: 'frameStart' | 'frameEnd' | 'cameraUpdate' | 'frameDisplay';
    timestamp: number;
    duration?: number;
}
export interface NonReactiveState {
    fps: number;
    worstRenderTime: number;
    avgRenderTime: number;
    world: {
        chunksLoadedCount: number;
        chunksTotalNumber: number;
    };
    renderer: {
        timeline: {
            live: FrameTimingEvent[];
            frozen: FrameTimingEvent[];
            lastSecond: FrameTimingEvent[];
        };
    };
}
export interface ThreeRendererMainData {
    canvas: OffscreenCanvas;
}
export declare const isWebWorker: boolean;
export declare class DocumentRenderer {
    initOptions: GraphicsInitOptions;
    externalCanvas?: OffscreenCanvas | undefined;
    canvas: HTMLCanvasElement | OffscreenCanvas;
    readonly renderer: THREE.WebGLRenderer;
    private animationFrameId?;
    readonly timeoutId?: number;
    private lastRenderTime;
    private previousCanvasWidth;
    private previousCanvasHeight;
    private currentWidth;
    private currentHeight;
    private pendingResize;
    private renderedFps;
    private fpsInterval;
    private readonly stats;
    private paused;
    disconnected: boolean;
    preRender: () => void;
    render: (sizeChanged: boolean) => void;
    postRender: () => void;
    sizeChanged: () => void;
    droppedFpsPercentage: number;
    config: GraphicsBackendConfig;
    onRender: Array<(sizeChanged: boolean) => void>;
    inWorldRenderingConfig: WorldRendererConfig | undefined;
    nonReactiveState: NonReactiveState | undefined;
    constructor(initOptions: GraphicsInitOptions, externalCanvas?: OffscreenCanvas | undefined, mainData?: ThreeRendererMainData);
    /**
     * Setup resize event listener for optimized size updates.
     * Only reads document.body dimensions when resize event fires.
     */
    private setupResizeListener;
    updatePixelRatio(): void;
    sizeUpdated(): void;
    private addToPage;
    /**
     * Update size from external source (for worker/offscreen scenarios).
     */
    updateSizeExternal(newWidth: number, newHeight: number, pixelRatio: number): void;
    /**
     * Update canvas size from document body.
     * Only called when pendingResize is true (after resize event).
     */
    private updateCanvasSize;
    private setupFpsTracking;
    private startRenderLoop;
    frameRender(sizeChanged: boolean): void;
    setPaused(paused: boolean): void;
    dispose(): void;
}
/**
 * Creates a canvas for worker thread rendering.
 */
export declare const addCanvasForWorker: () => {
    canvas: OffscreenCanvas;
    destroy: () => void;
    onSizeChanged: (cb: (width: number, height: number) => void) => void;
    size: {
        width: number;
        height: number;
    };
};
//# sourceMappingURL=documentRenderer.d.ts.map