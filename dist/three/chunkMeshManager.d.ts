import * as THREE from 'three';
import { MesherGeometryOutput } from '../mesher-shared/shared';
import { type BlockLightmapParams } from './shaders/cubeBlockShader';
import { type RenderOrigin } from './shaders/legacyBlockShader';
import { GlobalBlockBuffer } from './globalBlockBuffer';
import { GlobalLegacyBuffer, type LegacySectionGeometry } from './globalLegacyBuffer';
import type { WorldRendererThree } from './worldRendererThree';
export interface ChunkMeshPool {
    mesh: THREE.Mesh;
    inUse: boolean;
    lastUsedTime: number;
    sectionKey?: string;
}
export interface SectionObject extends THREE.Group {
    mesh?: THREE.Mesh<THREE.BufferGeometry, THREE.Material>;
    /** Per-section instanced shader mesh (sci-fi reveal defer only). */
    shaderMesh?: THREE.Mesh<THREE.InstancedBufferGeometry, THREE.ShaderMaterial>;
    /** Shader cube words kept for migration to global buffer after reveal. */
    deferredShaderCubes?: {
        words: Uint32Array;
        count: number;
    };
    /** Opaque legacy geometry deferred from global buffer during sci-fi reveal. */
    deferredLegacyOpaque?: LegacySectionGeometry;
    /** Blend legacy geometry deferred from global buffer during sci-fi reveal. */
    deferredLegacyBlend?: LegacySectionGeometry;
    /** Section uses a pooled mesh for blend (reveal defer or invariant fallback). */
    hasBlendMesh?: boolean;
    tilesCount?: number;
    blocksCount?: number;
    signsContainer?: THREE.Group;
    headsContainer?: THREE.Group;
    bannersContainer?: THREE.Group;
    boxHelper?: THREE.BoxHelper;
    /**
     * World-space coordinates of the section origin. Cached so that
     * {@link ChunkMeshManager.updateBoxHelper} can position lazily-created
     * border helpers correctly under camera-relative rendering, where
     * `mesh.position` is proxied to (world - sceneOrigin) and cannot be
     * reused directly for objects that are tracked separately.
     */
    worldX?: number;
    worldY?: number;
    worldZ?: number;
    /** Packed VisibilitySet from mesher (section occlusion graph). */
    visibilitySet?: number;
    foutain?: boolean;
    /**
     * True while the section is held invisible by the "Batch Chunks Display"
     * (`_renderByChunks`) feature, waiting for the parent chunk to finish meshing
     * before being shown together with the rest of the chunk.
     */
    _waitingForChunkDisplay?: boolean;
}
/** Live vs allocated stats for one global GPU buffer (faces or legacy quads). */
export type GlobalBufferSlotStats = {
    used: number;
    capacity: number;
    sections: number;
    usedBytes: number;
    capacityBytes: number;
};
export type GlobalBufferStats = {
    shaderFaces: GlobalBufferSlotStats | null;
    legacyOpaque: GlobalBufferSlotStats | null;
    legacyBlend: GlobalBufferSlotStats | null;
};
export declare class ChunkMeshManager {
    worldRenderer: WorldRendererThree;
    scene: THREE.Object3D;
    material: THREE.Material;
    worldHeight: number;
    private static readonly REBASE_THRESHOLD;
    /** Float64 render origin snapped to section granularity; GPU buffers store origins relative to this. */
    private renderOrigin;
    private readonly meshPool;
    private readonly activeSections;
    readonly sectionObjects: Record<string, SectionObject>;
    /**
     * Sections kept invisible because the "Batch Chunks Display" option is on
     * and their parent chunk hasn't finished meshing yet. Keyed by chunk key
     * (`x,z`); flushed by `WorldRendererThree.finishChunk(chunkKey)`.
     */
    readonly waitingChunksToDisplay: Record<string, string[]>;
    /**
     * Chunks whose mesh batch is fully ready but kept invisible by the
     * WASM near-first reveal gate because at least one nearer column is
     * not yet finished. Value = enqueue timestamp (ms), used by the
     * expected-delivery grace window in `isBlockedByNearer`.
     */
    readonly pendingNearReveal: Map<string, number>;
    private readonly nearRevealTimers;
    private readonly nearRevealGraceTimers;
    private static readonly NEAR_REVEAL_TIMEOUT_MS;
    private static readonly EXPECTED_NEAR_GRACE_MS;
    private poolSize;
    private maxPoolSize;
    private minPoolSize;
    private readonly signHeadsRenderer;
    private readonly blockEntityLightRegistry;
    /**
     * Shared transparent material used as the basis for the wireframe chunk
     * border `BoxHelper` created lazily in {@link updateBoxHelper}. Kept on the
     * manager so the BoxHelper machinery doesn't allocate a new material per
     * section.
     */
    private readonly chunkBoxMaterial;
    /** Shared across all sections — atlas/tint uniforms updated via {@link syncCubeShaderUniforms}. */
    private cubeShaderMaterial;
    /** Per-section blend meshes — atlas + camera origin updated each frame. */
    private legacyShaderMaterial;
    private globalLegacyShaderMaterial;
    private globalLegacyBlendShaderMaterial;
    private readonly _legacyCullFrustum;
    private readonly _legacyCullProjScreen;
    private readonly _legacyCullBox;
    private readonly _legacyCullBoxMin;
    private readonly _legacyCullBoxMax;
    private readonly _visibleSectionSpans;
    /** Sections with geometry in global legacy opaque and/or blend buffers — cull/raycast scan only these. */
    private readonly legacyCullSections;
    private _lastCullFingerprint;
    private lastBufferStateKey;
    /** Drives per-frame cull + span rebuild; cleared after updateSectionCullAndSort. */
    cullDirty: boolean;
    private readonly _lastCullCamPos;
    private readonly _lastCullCamQuat;
    private readonly _cullViewQuat;
    private _cullCamInitialized;
    /** Visible blend section keys from last cull pass — used by per-quad blend sort. */
    private _visibleBlendKeys;
    private readonly _lastBlendSortPos;
    private _lastBlendSortLayoutVersion;
    private _blendSortPosInitialized;
    /** One instanced mesh for all shader-cube faces (single draw call). */
    globalBlockBuffer: GlobalBlockBuffer | null;
    globalLegacyBuffer: GlobalLegacyBuffer | null;
    globalLegacyBlendBuffer: GlobalLegacyBuffer | null;
    /** Tight world AABBs for shader-cube frustum culling (section centers). */
    private readonly shaderSectionRaycastBoxes;
    private readonly sectionOcclusionCull;
    private _lastOcclusionVisibleKeys;
    private _lastSmartCullEnabled;
    private hits;
    private misses;
    bypassPooling: boolean;
    private readonly renderTimes;
    private readonly maxRenderTimeSamples;
    private _performanceOverrideDistance?;
    private lastPerformanceCheck;
    private readonly performanceCheckInterval;
    get performanceOverrideDistance(): number | undefined;
    set performanceOverrideDistance(value: number | undefined);
    constructor(worldRenderer: WorldRendererThree, scene: THREE.Object3D, material: THREE.Material, worldHeight: number, viewDistance?: number);
    private initializePool;
    /** True when section has legacy vertices and/or GPU shader cube instances. */
    sectionHasRenderableContent(geometryData: MesherGeometryOutput): boolean;
    isShaderCubesGpuEnabled(): boolean;
    syncCubeShaderUniforms(): void;
    syncLegacyShaderUniforms(): void;
    /** Render-time sky light cap (0–1, from time-of-day / 15). */
    setSkyLevel(value: number): void;
    setShadingTheme(theme: 'vanilla' | 'high-contrast', cardinalLight: string): void;
    /** Vanilla-like lightmap curve params (live tuning via window.setBlockLightmap). */
    setBlockLightmapParams(params: BlockLightmapParams): void;
    private getLegacyShaderMaterial;
    private getGlobalLegacyShaderMaterial;
    private getGlobalLegacyBuffer;
    private getGlobalLegacyBlendShaderMaterial;
    private getGlobalLegacyBlendBuffer;
    getRenderOrigin(): Readonly<RenderOrigin>;
    maybeRebase(camera: RenderOrigin): void;
    /** Whether a section still holds a pooled legacy mesh (defer / invariant fallback). */
    sectionUsesPooledLegacyMesh(sectionKey: string): boolean;
    private registerLegacyCullSection;
    private maybeUnregisterLegacyCullSection;
    private updatePooledLegacyCullState;
    isSectionOcclusionVisible(sectionKey: string): boolean;
    /** Invalidate occlusion graph and mark cull dirty when smart-cull enablement changes. */
    notifySmartCullChanged(smartCull: boolean): void;
    /**
     * Shared section visibility + span groups for global legacy and cube buffers.
     */
    updateSectionCullAndSort(camera: THREE.Camera, cameraWorldX: number, cameraWorldY: number, cameraWorldZ: number, smartCull: boolean): void;
    private static readonly BLEND_RESORT_DISTANCE;
    /** Per-quad back-to-front reorder within visible blend sections; throttled by camera translation. */
    sortVisibleBlendSections(camX: number, camY: number, camZ: number): void;
    private bufferStateKey;
    /** Mark cull dirty when any buffer's layout or upload state changed since the last cull. */
    markCullDirtyIfBufferStateChanged(): void;
    markCullDirty(): void;
    hasPendingBufferWork(): boolean;
    /** Compare camera pose; mark cull dirty when position or rotation changed. */
    updateCullDirtyFromCamera(camera: THREE.Camera, cameraWorldX: number, cameraWorldY: number, cameraWorldZ: number): void;
    clearCullDirty(): void;
    setLegacyCameraOrigin(x: number, y: number, z: number): void;
    private getCubeShaderMaterial;
    private getGlobalBlockBuffer;
    private shouldDeferLegacyOpaqueToPerSection;
    /** Sci-fi reveal keeps geometry off global buffers until the section finishes reveal. */
    private shouldDeferShaderToPerSection;
    /**
     * Move deferred per-section shader cubes into the global buffer after reveal completes.
     */
    migrateDeferredShaderToGlobal(sectionKey: string): void;
    /**
     * Move deferred per-section opaque legacy into the global buffer after reveal completes.
     */
    migrateDeferredLegacyToGlobal(sectionKey: string): void;
    registerShaderSectionRaycastBox(sectionKey: string, words: Uint32Array, faceCount: number, sectionCenterX: number, sectionCenterY: number, sectionCenterZ: number): void;
    unregisterShaderSectionRaycastBox(sectionKey: string): void;
    /**
     * Update or create a section with new geometry data
     */
    private uploadLegacyPooledMesh;
    private acquirePooledSectionMesh;
    updateSection(sectionKey: string, geometryData: MesherGeometryOutput): SectionObject | null;
    /**
     * Reveal all sections of a chunk that were held invisible by the
     * "Batch Chunks Display" option. Called from `WorldRendererThree.finishChunk`.
     *
     * For the WASM path: if any nearer column is not yet finished, the
     * reveal is deferred (parked in `pendingNearReveal`) and re-checked on
     * the next chunkFinished / player-move / grace-expiry.
     */
    finishChunkDisplay(chunkKey: string): void;
    private flushChunkDisplay;
    tryRevealPending(): void;
    onChunkRemovedFromGate(chunkKey: string): void;
    private isWasmGateActive;
    /**
     * True if some chunk-grid position strictly closer to the viewer than
     * `chunkKey` is not yet `finishedChunks=true`.
     *
     * Two regimes by `ageMs` (time spent in `pendingNearReveal`):
     * - Within `EXPECTED_NEAR_GRACE_MS`: nearer columns in the circle that are
     *   loaded but not finished block (far worker beats near worker).
     * - After grace: only actually-loaded-but-not-finished columns block,
     *   so a never-arriving column does not freeze the view.
     */
    private isBlockedByNearer;
    private armNearRevealTimer;
    private clearNearRevealTimer;
    /**
     * Schedule a re-evaluation just after the grace window expires so that
     * "expected but never arrived" positions stop blocking promptly,
     * without waiting for the next chunkFinished / player-move event.
     */
    private armExpectedGraceTimer;
    private clearExpectedGraceTimer;
    cleanupSection(sectionKey: string, opts?: {
        forRemesh?: boolean;
    }): void;
    /**
     * Release a section and return its mesh to the pool
     */
    private releasePooledMesh;
    releaseSection(sectionKey: string): boolean;
    /**
     * Get section object if it exists
     */
    getSectionObject(sectionKey: string): SectionObject | undefined;
    /**
     * Update box helper for a section
     */
    updateBoxHelper(sectionKey: string, showChunkBorders: boolean, chunkBoxMaterial?: THREE.Material): void;
    /**
     * Create / toggle chunk border helpers for every active section. Used by
     * `WorldRendererThree.updateShowChunksBorder` so the F3+G hotkey works
     * after the move from `WorldBlockGeometry` (which created the helpers
     * eagerly per section) to the pooled `ChunkMeshManager`.
     */
    updateAllBoxHelpers(showChunkBorders: boolean): void;
    /**
     * Debug overlay: tint section borders by occlusion BFS step (Java ChunkCullingDebugRenderer paths mode).
     */
    updateCaveCullingDebug(enabled: boolean, smartCull: boolean): void;
    /**
     * Get mesh for section if it exists
     */
    getSectionMesh(sectionKey: string): THREE.Mesh | undefined;
    /**
     * Check if section is managed by this pool
     */
    hasSection(sectionKey: string): boolean;
    /**
     * Update pool size based on new view distance
     */
    updateViewDistance(maxViewDistance: number): void;
    /**
     * Get pool statistics
     */
    getGlobalBufferStats(): GlobalBufferStats;
    getDrawnStats(): {
        cubeFaces: number;
        legacyOpaqueQuads: number;
        legacyBlendQuads: number;
    };
    getStats(): {
        poolSize: number;
        activeCount: number;
        freeCount: number;
        hitRate: string;
        hits: number;
        misses: number;
        memoryUsage: {
            total: string;
            breakdown: any;
        };
    };
    /**
     * Get total tiles rendered
     */
    getTotalTiles(): number;
    /**
     * Get total blocks rendered
     */
    getTotalBlocks(): number;
    /**
     * Estimate memory usage in MB
     */
    getEstimatedMemoryUsage(): {
        total: string;
        breakdown: any;
    };
    /**
     * Cleanup and dispose resources
     */
    dispose(): void;
    private acquireMesh;
    private expandPool;
    private updateGeometryAttribute;
    private clearGeometry;
    private cleanupExcessMeshes;
    private disposeContainer;
    /**
     * Record render time for performance monitoring
     */
    recordRenderTime(renderTime: number): void;
    /**
     * Get current effective render distance
     */
    getEffectiveRenderDistance(): number;
    /**
     * Force reset performance override
     */
    resetPerformanceOverride(): void;
    /**
     * Get average render time
     */
    getAverageRenderTime(): number;
    /**
     * Check if performance is degraded and adjust render distance
     */
    private checkPerformance;
    /**
     * Hide sections beyond performance override distance
     */
    updateSectionsVisibility(): void;
}
//# sourceMappingURL=chunkMeshManager.d.ts.map