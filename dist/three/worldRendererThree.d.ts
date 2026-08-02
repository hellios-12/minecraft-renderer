import * as THREE from 'three';
import { Vec3 } from 'vec3';
import { Biome } from 'minecraft-data';
import { DisplayWorldOptions, GraphicsInitOptions } from '../graphicsBackend/types';
import { WorldRendererCommon } from '../lib/worldrendererCommon';
import { MesherGeometryOutput } from '../mesher-shared/shared';
import { ItemSpecificContextProperties } from '../playerState/types';
import type { IHoldingBlock } from './holdingBlockTypes';
import { CursorBlock } from './world/cursorBlock';
import { Entities } from './entities';
import { type UpdateCameraOptions } from './entity/interpolationPolicy';
import { CameraShake } from './cameraShake';
import { ThreeJsMedia } from './threeJsMedia';
import { Fountain } from './threeJsParticles';
import { WaypointsRenderer } from './waypoints';
import { FireworksRenderer } from './fireworksRenderer';
import { CinimaticScriptRunner } from './cinimaticScript';
import { SkyboxRenderer } from './skyboxRenderer';
import { FireworksManager } from './fireworks';
import { SceneOrigin } from './sceneOrigin';
import { ChunkMeshManager } from './chunkMeshManager';
import type { RendererModuleManifest } from './rendererModuleSystem';
import { PerformanceMonitor } from '../performanceMonitor';
export declare class WorldRendererThree extends WorldRendererCommon {
    renderer: THREE.WebGLRenderer;
    initOptions: GraphicsInitOptions;
    displayOptions: DisplayWorldOptions;
    outputFormat: "threeJs";
    /** r184 removed useLegacyLights; physical intensities ≈ legacy / π. */
    private static readonly LEGACY_TO_PHYSICAL_LIGHT;
    protected isShaderCubeBlocksEnabled(): boolean;
    /** Section occlusion graph (smart / cave cull); forced off in spectator per issue #77. */
    isSmartCullEnabled(): boolean;
    isSectionOcclusionVisible(sectionKey: string): boolean;
    entitySectionKey(worldX: number, worldY: number, worldZ: number): string;
    chunkMeshManager: ChunkMeshManager;
    get sectionObjects(): Record<string, import("./chunkMeshManager").SectionObject>;
    cameraSectionPos: Vec3;
    holdingBlock: IHoldingBlock;
    holdingBlockLeft: IHoldingBlock;
    scene: THREE.Scene<THREE.Object3DEventMap>;
    get realScene(): THREE.Scene<THREE.Object3DEventMap>;
    ambientLight: THREE.AmbientLight;
    directionalLight: THREE.DirectionalLight;
    entities: Entities;
    performanceMonitor: PerformanceMonitor;
    cameraGroupVr?: THREE.Object3D;
    material: THREE.MeshBasicMaterial;
    itemsTexture: THREE.Texture;
    cursorBlock: CursorBlock;
    onRender: Array<(deltaTime: number) => void>;
    private lastRenderTime;
    private lastSciFiTickMs;
    private animatedFov;
    private lastFovAnimTime;
    private static readonly FOV_TRANSITION_MS;
    cameraShake: CameraShake;
    cameraContainer: THREE.Object3D;
    media: ThreeJsMedia;
    get waitingChunksToDisplay(): Record<string, string[]>;
    waypoints: WaypointsRenderer;
    cinimaticScript: CinimaticScriptRunner;
    /**
     * Three.js camera used for rendering.
     *
     * **WARNING:** `camera.position` is scene-local (near origin due to sceneOrigin rebasing),
     * NOT world-space. In first-person mode it's `(0,0,0)`; in third-person it's `(0,0,zOffset)`.
     *
     * Use `getCameraPosition()` or `cameraWorldPos` for actual world-space coordinates.
     */
    camera: THREE.PerspectiveCamera;
    renderTimeAvg: number;
    private pendingSectionUpdates;
    /**
     * Per-section buffering timestamps for `applyPendingSectionUpdates`.
     * Each section gets its own deadline so a continuous stream of updates
     * (e.g. server-side block changes from explosions, pistons, fluid ticks)
     * does not flush freshly added sections together with stale ones via a
     * single global timer.
     */
    private pendingSectionBufferStartTimes;
    private static readonly MAX_SECTION_UPDATE_BUFFER_MS;
    get estimatedMemoryUsage(): string;
    private modules;
    sectionsOffsetsAnimations: {
        [chunkKey: string]: {
            time: number;
            speedX: number;
            speedY: number;
            speedZ: number;
            currentOffsetX: number;
            currentOffsetY: number;
            currentOffsetZ: number;
            limitX?: number;
            limitY?: number;
            limitZ?: number;
        };
    };
    fountains: Fountain[];
    fireworksLegacy: FireworksRenderer;
    DEBUG_RAYCAST: boolean;
    skyboxRenderer: SkyboxRenderer;
    fireworks: FireworksManager;
    sceneOrigin: SceneOrigin;
    /** Camera world position stored in float64 (JS number) for precision */
    cameraWorldPos: {
        x: number;
        y: number;
        z: number;
    };
    /** Whether we've warned about camera.position access (one-time dev warning) */
    private _cameraPositionAccessWarned;
    private readonly _tmpCameraPos;
    private currentPosTween?;
    private currentRotTween?;
    private currentCameraTarget;
    private currentCameraMovementMode;
    private readonly _tpDirection;
    private readonly _tpPitchQuat;
    private readonly _tpYawQuat;
    private readonly _tpFinalQuat;
    private readonly _tpScenePos;
    private readonly _tpAxisX;
    private readonly _tpAxisY;
    private readonly _tpChunkWorldPos;
    get tilesRendered(): number;
    get blocksRendered(): number;
    constructor(renderer: THREE.WebGLRenderer, initOptions: GraphicsInitOptions, displayOptions: DisplayWorldOptions);
    /**
     * Register a renderer module
     */
    registerModule(manifest: RendererModuleManifest): void;
    /**
     * Enable a module
     */
    enableModule(moduleId: string): void;
    /**
     * Disable a module
     */
    disableModule(moduleId: string): void;
    /**
     * Toggle a module on/off, or force a specific state
     */
    toggleModule(moduleId: string, forceState?: boolean): boolean;
    setRain(enabled: boolean): void;
    /**
     * Dispose all modules
     */
    private disposeModules;
    /**
     * Initialize all registered modules
     */
    private initializeModules;
    /**
     * Get a module controller by ID
     */
    getModule<T = any>(moduleId: string): T | undefined;
    protected anyModuleRequiresHeightmap(): boolean;
    /** Returns the active camera container (may differ in VR mode). Used for position resets and rotation. */
    get cameraObject(): THREE.Object3D<THREE.Object3DEventMap>;
    /**
     * Wraps camera.position in a Proxy that logs a one-time warning when .set/.setX/.setY/.setZ
     * or .x/.y/.z assignment is used with values that look like world coords (|v| > 20).
     * camera.position is scene-local (0,0,0 or 0,0,zOffset). Use cameraWorldPos + sceneOrigin.update().
     */
    private _wrapCameraPositionWithWarning;
    worldSwitchActions(): void;
    downloadWorldGeometry(): void;
    updateEntity(e: any, isPosUpdate?: boolean): void;
    updatePlayerEntity(e: any): void;
    resetScene(): void;
    watchReactivePlayerState(): void;
    watchReactiveConfig(): void;
    /**
     * Update module states based on config (force states and auto-enable checks)
     */
    private updateModulesFromConfig;
    changeHandSwingingState(isAnimationPlaying: boolean, isLeft?: boolean): void;
    updateAssetsData(): Promise<void>;
    onAllTexturesLoaded(): void;
    changeBackgroundColor(color: [number, number, number]): void;
    changeCardinalLight(cardinalLight: string): void;
    timeUpdated(newTime: number): void;
    private syncSkyLevelFromTime;
    protected onDayCycleSkyLightChanged(_skyLight: number): void;
    biomeUpdated(biome: Biome): void;
    biomeReset(): void;
    getItemRenderData(item: Record<string, any>, specificProps: ItemSpecificContextProperties): {
        u: number;
        v: number;
        su: number;
        sv: number;
        renderInfo?: ReturnType<typeof import("./renderSlot").renderSlot>;
        modelName: string;
    } | {
        resolvedModel: import("mc-assets").BlockModel;
        modelName: string;
    };
    demoModel(): Promise<void>;
    demoItem(): void;
    debugOverlayAdded: boolean;
    addDebugOverlay(): void;
    /**
     * Optionally update data that are depedendent on the viewer position
     */
    updatePosDataChunk(key: string): void;
    cameraSectionPositionUpdate(): void;
    getDir(current: number, origin: number): 0 | 1 | -1;
    finishChunk(chunkKey: string): void;
    private applyPendingSectionUpdates;
    private clearPendingSectionUpdatesForChunk;
    handleWorkerMessage(data: {
        geometry: MesherGeometryOutput;
        key: any;
        type: any;
    }): void;
    getCameraPosition(target?: THREE.Vector3): THREE.Vector3;
    getSectionCameraPosition(): Vec3;
    updateCameraSectionPos(): void;
    setFirstPersonCamera(pos: Vec3 | null, yaw: number, pitch: number, options?: UpdateCameraOptions): void;
    getThirdPersonCamera(pos: THREE.Vector3 | null, yaw: number, pitch: number): Vec3;
    private debugRaycastHelper?;
    private debugHitPoint?;
    private debugRaycast;
    prevFramePerspective: string | null;
    setCinimaticCamera(pos: Vec3, yaw: number, pitch: number): void;
    setCinimaticFov(fov: number): void;
    private updateSmoothFov;
    updateCamera(pos: Vec3 | null, yaw: number, pitch: number, options?: UpdateCameraOptions): void;
    debugChunksVisibilityOverride(): void;
    render(sizeChanged?: boolean): void;
    renderHead(position: Vec3, rotation: number, isWall: boolean, blockEntity: any): THREE.Group<THREE.Object3DEventMap> | undefined;
    lightUpdate(chunkX: number, chunkZ: number): void;
    rerenderAllChunks(): void;
    updateShowChunksBorder(value: boolean): void;
    resetWorld(): void;
    getLoadedChunksRelative(pos: Vec3, includeY?: boolean): Record<string, import("./chunkMeshManager").SectionObject>;
    readdChunks(): void;
    disableUpdates(children?: THREE.Object3D<THREE.Object3DEventMap>[]): void;
    removeColumn(x: any, z: any): void;
    updateViewerPosition(pos: Vec3): void;
    protected onViewerChunkPositionChanged(): void;
    setSectionDirty(...args: Parameters<WorldRendererCommon['setSectionDirty']>): void;
    static getRendererInfo(renderer: THREE.WebGLRenderer): string | undefined;
    worldStop(): void;
    destroy(): void;
    shouldObjectVisible(object: THREE.Object3D): true;
    handleUserClick(button: 'left' | 'right'): void;
    updateSectionOffsets(): void;
    reloadWorld(): void;
}
//# sourceMappingURL=worldRendererThree.d.ts.map