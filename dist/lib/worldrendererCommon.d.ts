import { Vec3 } from 'vec3';
import TypedEmitter from 'typed-emitter';
import { WorldBlockProvider } from 'mc-assets/dist/worldBlockProvider';
import type { ResourcesManagerTransferred } from '../resourcesManager/resourcesManager';
import { DisplayWorldOptions, GraphicsInitOptions, RendererReactiveState, SoundSystem, UpdateCameraOptions } from '../graphicsBackend/types';
import { HighestBlockInfo, CustomBlockModels, BlockStateModelInfo, MesherConfig } from '../mesher-shared/shared';
import { getPlayerStateUtils } from '../graphicsBackend/playerState';
type PlayerStateUtils = ReturnType<typeof getPlayerStateUtils>;
import { MesherLogReader } from './mesherlogReader';
import { WorldViewWorker } from '../worldView';
import { PlayerStateReactive } from '../playerState/playerState';
import { IndexedData } from 'minecraft-data';
import { WorldRendererConfig } from '../graphicsBackend/config';
import { CameraCollisionBlockCache } from '../three/cameraCollisionBlockCache';
declare global {
    interface WorkerGlobalScope {
    }
}
export declare abstract class WorldRendererCommon<WorkerSend = any, WorkerReceive = any> {
    readonly resourcesManager: ResourcesManagerTransferred;
    displayOptions: DisplayWorldOptions;
    initOptions: GraphicsInitOptions;
    worldReadyResolvers: PromiseWithResolvers<void>;
    worldReadyPromise: Promise<void>;
    timeOfTheDay: number;
    lastMesherSkyLight: number;
    worldSizeParams: {
        minY: number;
        worldHeight: number;
    };
    /** Block columns for third-person voxel DDA (renderer thread). */
    cameraCollisionBlockCache: CameraCollisionBlockCache;
    reactiveDebugParams: {
        stopRendering: boolean;
        chunksRenderAboveOverride: number | undefined;
        chunksRenderAboveEnabled: boolean;
        chunksRenderBelowOverride: number | undefined;
        chunksRenderBelowEnabled: boolean;
        chunksRenderDistanceOverride: number | undefined;
        chunksRenderDistanceEnabled: boolean;
        disableEntities: boolean;
        /** Tint section borders by occlusion BFS step (perf debug overlay). */
        caveCullingDebug: boolean;
        smartCull: boolean;
    };
    active: boolean;
    loadedChunks: Record<string, boolean>;
    finishedChunks: Record<string, boolean>;
    finishedSections: Record<string, boolean>;
    sectionsWaiting: Map<string, number>;
    queuedChunks: Set<string>;
    queuedFunctions: Array<() => void>;
    renderUpdateEmitter: TypedEmitter<{
        dirty(pos: Vec3, value: boolean): void;
        update(): void;
        chunkFinished(key: string): void;
        heightmap(key: string, heightmap: Int16Array): void;
    }>;
    customTexturesDataUrl: string | undefined;
    workers: any[];
    viewerChunkPosition?: Vec3;
    private lastViewerChunkGridX?;
    private lastViewerChunkGridZ?;
    lastCamUpdate: number;
    droppedFpsPercentage: number;
    initialChunkLoadWasStartedIn: number | undefined;
    initialChunksLoad: boolean;
    enableChunksLoadDelay: boolean;
    texturesVersion?: string;
    viewDistance: number;
    onRenderDistanceChanged?: (viewDistance: number) => void;
    chunksLength: number;
    allChunksFinished: boolean;
    messageQueue: any[];
    isProcessingQueue: boolean;
    ONMESSAGE_TIME_LIMIT: number;
    handleResize: () => void;
    highestBlocksByChunks: Map<string, {
        [chunkKey: string]: HighestBlockInfo;
    }>;
    blockEntities: {};
    workersProcessAverageTime: number;
    workersProcessAverageTimeCount: number;
    maxWorkersProcessTime: number;
    workersPreAverageTime: number;
    workersWasmAverageTime: number;
    workersPostAverageTime: number;
    workersPhaseSampleCount: number;
    workersPreTargetConvertAverageTime: number;
    workersPreNeighborConvertAverageTime: number;
    workersPreNeighborCountAverage: number;
    workersPreTypedArrayBuildAverageTime: number;
    workersPreOtherAverageTime: number;
    workersPreCacheHitsTotal: number;
    workersPreCacheMissesTotal: number;
    private static readonly PHASE_PERF_LOG_INTERVAL;
    geometryReceiveCount: Record<number, number>;
    allLoadedIn: undefined | number;
    onWorldSwitched: Array<() => void>;
    renderTimeMax: number;
    renderTimeAvg: number;
    renderTimeAvgCount: number;
    edgeChunks: Record<string, boolean>;
    lastAddChunk: null | {
        timeout: any;
        x: number;
        z: number;
    };
    neighborChunkUpdates: boolean;
    lastChunkDistance: number;
    debugStopGeometryUpdate: boolean;
    protocolCustomBlocks: Map<string, CustomBlockModels>;
    private mesherPoolSnapshot;
    private mesherReconfigureQueue;
    private heightmapDebounceTimers;
    private sectionDirtyCount;
    private sectionDirtyTimers;
    private sectionDirtyPendingArgs;
    private static readonly GEOMETRY_THROTTLE_THRESHOLD;
    private static readonly GEOMETRY_THROTTLE_DELAY;
    blockStateModelInfo: Map<string, BlockStateModelInfo>;
    abstract outputFormat: 'threeJs' | 'webgpu';
    worldBlockProvider: WorldBlockProvider;
    soundSystem: SoundSystem | undefined;
    abstract changeBackgroundColor(color: [number, number, number]): void;
    abstract changeCardinalLight(cardinalLight: string): void;
    /** Override in subclass to check if any enabled module requires heightmap data */
    protected anyModuleRequiresHeightmap(): boolean;
    /**
     * Effective instanced cube-shader path (config + runtime caps).
     * WorldRendererThree adds WebGL2; worker uses {@link getMesherConfig}.shaderCubeBlocks.
     */
    protected isShaderCubeBlocksEnabled(): boolean;
    shaderCubeBlocksEnabled(): boolean;
    worldRendererConfig: WorldRendererConfig;
    playerStateReactive: PlayerStateReactive;
    playerStateUtils: PlayerStateUtils;
    reactiveState: RendererReactiveState;
    mesherLogReader: MesherLogReader | undefined;
    forceCallFromMesherReplayer: boolean;
    stopMesherMessagesProcessing: boolean;
    abortController: AbortController;
    private valtioUnsubs;
    lastRendered: number;
    renderingActive: boolean;
    geometryReceiveCountPerSec: number;
    mesherLogger: {
        contents: string[];
        active: boolean;
    };
    currentRenderedFrames: number;
    fpsAverage: number;
    lastFps: number;
    fpsWorst: number | undefined;
    fpsSamples: number;
    backendInfoReport: string;
    chunksFullInfo: string;
    workerCustomHandleTime: number;
    get version(): string;
    get displayAdvancedStats(): boolean;
    constructor(resourcesManager: ResourcesManagerTransferred, displayOptions: DisplayWorldOptions, initOptions: GraphicsInitOptions);
    fpsUpdate(): void;
    logWorkerWork(message: string | (() => string)): void;
    init(): Promise<void>;
    snapshotInitialValues(): void;
    wasChunkSentToWorker(chunkKey: string): boolean;
    getHighestBlocks(chunkKey: string): Promise<{
        [chunkKey: string]: HighestBlockInfo;
    } | undefined>;
    updateCustomBlock(chunkKey: string, blockPos: string, model: string): void;
    getBlockInfo(blockPos: {
        x: number;
        y: number;
        z: number;
    }, stateId: number): Promise<{
        customBlockName: string | undefined;
        modelInfo: BlockStateModelInfo | undefined;
    }>;
    private getMesherWorkerScript;
    private createMesherWorker;
    initWorkers(numWorkers?: number): void;
    private syncMesherPoolSnapshot;
    private watchMesherPoolConfig;
    private enqueueMesherWorkersReconfigure;
    private clearMesherPendingState;
    private terminateAllMesherWorkers;
    private bootstrapMesherWorkers;
    reconfigureMesherWorkers(): Promise<void>;
    private requestLoadedChunksReload;
    onReactivePlayerStateUpdated<T extends keyof PlayerStateReactive>(key: T, callback: (value: PlayerStateReactive[T]) => void, initial?: boolean): () => void;
    onReactiveConfigUpdated<T extends keyof typeof this.worldRendererConfig>(key: T, callback: (value: (typeof this.worldRendererConfig)[T]) => void, initial?: boolean): () => void;
    onReactiveDebugUpdated<T extends keyof typeof this.reactiveDebugParams>(key: T, callback: (value: (typeof this.reactiveDebugParams)[T]) => void): void;
    watchReactivePlayerState(): void;
    watchReactiveConfig(): void;
    processMessageQueue(source: string): Promise<void>;
    handleMessage(rawData: any): void;
    downloadMesherLog(): void;
    checkAllFinished(): void;
    changeHandSwingingState(isAnimationPlaying: boolean, isLeftHand: boolean): void;
    abstract handleWorkerMessage(data: WorkerReceive): void;
    abstract updateCamera(pos: Vec3 | null, yaw: number, pitch: number, options?: UpdateCameraOptions): void;
    abstract render(): void;
    /**
     * Optionally update data that are depedendent on the viewer position
     */
    updatePosDataChunk?(key: string): void;
    allChunksLoaded?(): void;
    timeUpdated?(newTime: number): void;
    /** Called when day-cycle sky-light bucket changes; Three.js overrides to remesh. */
    protected onDayCycleSkyLightChanged?(_skyLight: number): void;
    biomeUpdated?(biome: any): void;
    biomeReset?(): void;
    updateViewerPosition(pos: Vec3): void;
    /**
     * Fired only when the viewer crosses a chunk-grid boundary.
     * Three subclass overrides this to refresh the near-first reveal gate.
     */
    protected onViewerChunkPositionChanged(): void;
    sendWorkers(message: WorkerSend): void;
    getDistance(posAbsolute: Vec3): [number, number];
    abstract updateShowChunksBorder(value: boolean): void;
    resetWorld(): void;
    resetWorkers(): Promise<void>;
    getMesherConfig(): MesherConfig;
    sendMesherMcData(): void;
    updateAssetsData(): Promise<void>;
    getSectionHeight(): number;
    get worldMinYRender(): number;
    updateChunksStats(): void;
    addColumn(x: number, z: number, chunk: any, isLightUpdate: boolean): void;
    markAsLoaded(x: any, z: any): void;
    removeColumn(x: any, z: any): void;
    setBlockStateId(pos: Vec3, stateId: number | undefined, needAoRecalculation?: boolean): void;
    updateEntity(e: any, isUpdate?: boolean): void;
    abstract updatePlayerEntity?(e: any): void;
    lightUpdate(chunkX: number, chunkZ: number): void;
    connect(worldView: WorldViewWorker): void;
    setBlockStateIdInner(pos: Vec3, stateId: number | undefined, needAoRecalculation?: boolean): void;
    abstract worldStop?(): any;
    queueAwaited: boolean;
    toWorkerMessagesQueue: {
        [workerIndex: string]: any[];
    };
    getWorkerNumber(pos: Vec3, updateAction?: boolean): number;
    debugGetWorkerCustomBlockModel(pos: Vec3): Promise<string[]>;
    setSectionDirty(pos: Vec3, value?: boolean, useChangeWorker?: boolean): void;
    /** Dispatch dirty message to worker without throttle (original logic) */
    private _dispatchDirtyImmediate;
    dispatchMessages(): void;
    waitForChunksToRender(): Promise<void>;
    waitForChunkToLoad(pos: Vec3): Promise<void>;
    destroy(): void;
}
export declare const initMesherWorker: (onGotMessage: (data: any) => void, workerName?: string) => any;
export declare const meshersSendMcData: (workers: Worker[], version: string, mcDataKeys: {
    blocks: string;
    blockCollisionShapes: string;
    biomes: string;
    tints: string;
} | undefined, mcDataFull: IndexedData) => void;
/** Wait for worker `mcDataApplied` after {@link meshersSendMcData}. */
export declare const meshersSendMcDataAwait: (workers: Worker[], version: string, mcDataKeys: {
    blocks: string;
    blockCollisionShapes: string;
    biomes: string;
    tints: string;
} | undefined, mcDataFull: IndexedData, timeoutMs?: number) => Promise<void>;
export {};
//# sourceMappingURL=worldrendererCommon.d.ts.map