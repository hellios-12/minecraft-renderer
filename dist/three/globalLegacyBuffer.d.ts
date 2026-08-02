import * as THREE from 'three';
import { type LegacyDrawSpan } from './legacyMultiDraw';
import { type RenderOrigin } from './shaders/legacyBlockShader';
type PendingMove = {
    key: string;
    oldStart: number;
    newStart: number;
    count: number;
};
/** CPU bytes per allocated quad slot (all legacy vertex/index attrs). */
export declare const LEGACY_BYTES_PER_QUAD: number;
export declare const FULL_DRAW_VISIBLE_FRACTION = 0.75;
/** Initial multi_draw scratch size; arrays auto-grow — not a draw-call cap. */
export declare const MAX_OPAQUE_SPANS = 64;
export type DirtyRange = {
    start: number;
    end: number;
};
/** Split draw spans to exclude quad/face ranges still in pendingRanges (not yet on GPU). */
export declare function carveSpansAroundPendingRanges(spans: Array<{
    start: number;
    count: number;
}>, pendingRanges: ReadonlyArray<DirtyRange>): Array<{
    start: number;
    count: number;
}>;
export type GlobalLegacyBufferOptions = {
    name?: string;
    initialCapacityQuads?: number;
    growthIncrementQuads?: number;
    /** When true, pre-sort blend indices on addSection and support per-quad reorder. */
    sortBlend?: boolean;
};
export type VisibleSectionSpan = {
    key: string;
    distSq: number;
};
export type LegacySectionGeometry = {
    positions: Float32Array;
    colors: Float32Array;
    skyLights: Float32Array;
    blockLights: Float32Array;
    uvs: Float32Array;
    indices: Uint32Array | Uint16Array;
};
export type LegacySectionGeometryData = LegacySectionGeometry & {
    sx: number;
    sy: number;
    sz: number;
};
export type { LegacyDrawSpan } from './legacyMultiDraw';
/**
 * Single GPU mesh for legacy quads (opaque+cutout or transparent blend).
 * Camera-relative via per-vertex a_origin (relative to render origin) + u_originDelta uniforms.
 */
export declare class GlobalLegacyBuffer {
    readonly mesh: THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial | THREE.ShaderMaterial[]>;
    readonly material: THREE.ShaderMaterial;
    private readonly growthIncrementQuads;
    private readonly blendSort;
    private capacityQuads;
    private positions;
    private colors;
    private skyLights;
    private blockLights;
    private uvs;
    private aOrigin;
    private indices;
    /** Section-relative world centroid per physical quad (3 floats each). */
    private quadCentroids;
    /** Per-quad local index template (6 bytes each, values 0..3). */
    private quadIndexTemplate;
    private readonly sectionSlots;
    private freeList;
    private highWatermark;
    private pendingRanges;
    private indexPendingRanges;
    private readonly _spanScratch;
    private renderOrigin;
    private layoutVersion;
    private pendingMove;
    private readonly pendingReplace;
    private uploadEpoch;
    private visibleIndexSpans;
    private readonly _drawScratch;
    /** Reusable scratch for applyBlendSort; grown on demand, never allocated per call. */
    private _sortOrder;
    private _sortDistSq;
    private multiDrawCaps;
    private debugOverlay;
    private _camX;
    private _camY;
    private _camZ;
    private _camInitialized;
    constructor(material: THREE.ShaderMaterial, scene: THREE.Object3D, opts?: GlobalLegacyBufferOptions);
    setDebugOverlay(enabled: boolean): void;
    /**
     * Suppress three's full-buffer indexed draw; onAfterRender issues visible spans only.
     * setDrawRange(0,0) skips bindingStates.setup — use a minimal non-zero range so
     * program/VAO/ELEMENT_ARRAY_BUFFER stay bound while three draws ~nothing.
     * Draws one triangle from index 0 (usually harmless; if quad 0 is culled, one stray tri).
     */
    suppressThreeDraw(): void;
    setVisibleIndexSpans(spans: LegacyDrawSpan[]): void;
    getVisibleIndexSpans(): readonly LegacyDrawSpan[];
    getVisibleQuadCount(): number;
    private syncDefaultDrawGroups;
    addSection(sectionKey: string, geo: LegacySectionGeometry, sx: number, sy: number, sz: number): boolean;
    getLayoutVersion(): number;
    getUploadEpoch(): number;
    hasPendingReplace(): boolean;
    canUseFullDrawShortcut(): boolean;
    isRangeFullyUploaded(start: number, end: number): boolean;
    getPendingDirtyRanges(): ReadonlyArray<DirtyRange>;
    getSectionDrawStart(sectionKey: string): number | undefined;
    getSectionDrawCount(sectionKey: string): number | undefined;
    getPendingMove(): PendingMove | null;
    /** One interior-hole move per frame when fragmentation exceeds threshold; deferred shrink. */
    compactStep(): void;
    updateDrawSpans(visible: VisibleSectionSpan[], mode: 'opaque' | 'sortedBlend'): void;
    /** Merge only physically adjacent section slots (gap === 0). Never bridge interior holes. */
    private mergeOpaqueSpans;
    hasSection(sectionKey: string): boolean;
    getSectionSlot(sectionKey: string): {
        start: number;
        count: number;
    } | undefined;
    takeSectionData(sectionKey: string): LegacySectionGeometryData | undefined;
    getSectionGeometryData(sectionKey: string): LegacySectionGeometryData | undefined;
    removeSection(sectionKey: string): void;
    hasPendingUploads(): boolean;
    hasPendingIndexUploads(): boolean;
    /**
     * Reorder a section's index buffer back-to-front by quad centroid distance to camera.
     * Does not bump layoutVersion or uploadEpoch (draw spans unchanged).
     */
    reorderSectionBlendIndices(sectionKey: string, camX: number, camY: number, camZ: number): boolean;
    /** Rewrite indices for [slotStart, slotStart+slotCount) back-to-front by quad centroid distance. */
    private applyBlendSort;
    uploadDirtyRange(): void;
    uploadDirtyIndexRange(): void;
    setRenderOrigin(renderOrigin: RenderOrigin): void;
    rebase(delta: RenderOrigin): void;
    setCameraOrigin(x: number, y: number, z: number): void;
    getHighWatermark(): number;
    getCapacityQuads(): number;
    getSectionCount(): number;
    getMemoryBytes(): number;
    getUsedMemoryBytes(): number;
    reset(): void;
    dispose(): void;
    private markDirty;
    private markIndexDirty;
    private mergeIndexPendingRanges;
    private mergePendingRanges;
    private takeFreeSlot;
    private insertFreeSlot;
    private mergeFreeList;
    private shrinkHighWatermark;
    private interiorFreeQuads;
    private findMovableSection;
    private findLowestInteriorHole;
    private reserveFreeSlotAt;
    private copySectionRange;
    private rangeFullyUploaded;
    private zeroAndFreeSlot;
    private finalizePendingReplace;
    private finalizePendingMove;
    private growCapacity;
}
//# sourceMappingURL=globalLegacyBuffer.d.ts.map