/**
 * WorldView - World data emitter for the renderer.
 * Renamed from WorldDataEmitter for clarity.
 *
 * Handles chunk loading/unloading, block updates, and world events.
 */
import { Vec3 } from 'vec3';
import TypedEmitter from 'typed-emitter';
import type { WorldViewEvents, ChunkPosKey } from './types';
/**
 * Helper to calculate chunk position from absolute position.
 */
export declare const chunkPos: (pos: {
    x: number;
    z: number;
} | Vec3) => [number, number];
/**
 * Helper to calculate section position from absolute position.
 */
export declare const sectionPos: (pos: {
    x: number;
    y: number;
    z: number;
}) => [number, number, number];
/**
 * Delayed iterator for chunk loading with configurable delay.
 */
export declare const delayedIterator: <T>(arr: T[], delay: number, exec: (item: T, index: number) => Promise<void>, chunkSize?: number) => Promise<void>;
declare const WorldViewWorker_base: new () => TypedEmitter<WorldViewEvents>;
/**
 * WorldView for worker thread communication.
 * This is a lightweight version that receives events from the main thread.
 */
export declare class WorldViewWorker extends WorldViewWorker_base {
    static readonly restorerName = "WorldViewWorker";
    static restoreTransferred(_data: any, worker?: Worker): WorldViewWorker;
    /** @internal vitest — remove bridge listener from worker */
    static clearWorkerBridgeForTest(worker: Worker): void;
    /** @internal vitest — count of bridge listeners on worker */
    static getWorkerBridgeListenerCountForTest(worker: Worker): number;
}
/**
 * World data provider interface for different world implementations.
 */
export interface WorldProvider {
    getColumnAt(pos: Vec3): any | null;
    setBlockStateId(pos: Vec3, stateId: number): void | Promise<void>;
    getBiome?(pos: Vec3): number;
}
declare const WorldView_base: new () => TypedEmitter<WorldViewEvents>;
/**
 * WorldView - Main world data emitter for the renderer.
 *
 * Responsible for:
 * - Loading/unloading chunks based on view distance
 * - Emitting block updates to the renderer
 * - Managing loaded chunks state
 * - Spiral chunk loading for optimal player experience
 */
export declare class WorldView extends WorldView_base {
    world: WorldProvider;
    viewDistance: number;
    spiralNumber: number;
    gotPanicLastTime: boolean;
    panicChunksReload: () => void;
    loadedChunks: Record<ChunkPosKey, boolean>;
    inLoading: boolean;
    chunkReceiveTimes: number[];
    lastChunkReceiveTime: number;
    lastChunkReceiveTimeAvg: number;
    panicTimeout?: ReturnType<typeof setTimeout>;
    readonly lastPos: Vec3;
    eventListeners: Record<string, any>;
    debugChunksInfo: Record<ChunkPosKey, {
        loads: Array<{
            dataLength: number;
            reason: string;
            time: number;
        }>;
    }>;
    waitingSpiralChunksLoad: Record<ChunkPosKey, (value: boolean) => void>;
    addWaitTime: number;
    keepChunksDistance: number;
    isPlayground: boolean;
    allowPositionUpdate: boolean;
    constructor(world: WorldProvider, viewDistance: number, position?: Vec3);
    /**
     * Prepare this WorldView for transfer to a worker thread.
     */
    prepareForTransfer(worker?: Worker): {
        __restorer: string;
    };
    /**
     * Set a block state and emit update to renderer.
     */
    setBlockStateId(position: Vec3, stateId: number): void;
    /**
     * Update the view distance and notify renderer.
     */
    updateViewDistance(viewDistance: number): void;
    /**
     * Initialize the world view and start loading chunks.
     */
    init(pos: Vec3, bot?: any): Promise<void>;
    chunkProgress(): void;
    _loadChunks(positions: Vec3[], centerPos: Vec3): Promise<void>;
    /**
     * Load a chunk at the given position.
     */
    loadChunk(pos: {
        x: number;
        z: number;
        y?: number;
    }, isLightUpdate?: boolean, reason?: string): Promise<void>;
    /**
     * Re-fetch and re-emit every loaded chunk (e.g. after mesher workers are recreated).
     */
    reloadLoadedChunks(): Promise<void>;
    /**
     * Unload all chunks.
     */
    unloadAllChunks(): void;
    /**
     * Unload a specific chunk.
     */
    unloadChunk(pos: {
        x: number;
        z: number;
    }): void;
    /**
     * Emit block entities when connected.
     * Only works in main thread (not offscreen/worker context).
     */
    emitterGotConnected(bot?: any): void;
    lastBiomeId: number | null;
    updateBiome(pos: Vec3): void;
    lastPosCheck: Vec3 | null;
    /**
     * Update position and load/unload chunks as needed.
     */
    updatePosition(pos: Vec3, force?: boolean): Promise<void>;
}
export {};
//# sourceMappingURL=worldView.d.ts.map