import * as THREE from 'three';
import type { CubeDrawSpan } from './cubeDrawSpans';
import { type RenderOrigin } from './shaders/legacyBlockShader';
/** CPU bytes per instanced cube face (a_w0..a_w3). */
export declare const SHADER_CUBE_BYTES_PER_FACE = 16;
type PendingMove = {
    key: string;
    oldStart: number;
    newStart: number;
    count: number;
};
export type GlobalBlockBufferShaderData = {
    words: Uint32Array;
    count: number;
};
/**
 * Single GPU instanced mesh for all shader-cube faces in the world.
 * Camera-relative positioning via u_originDelta + u_sectionOriginRel; no sceneOrigin tracking.
 */
export declare class GlobalBlockBuffer {
    readonly mesh: THREE.Mesh<THREE.InstancedBufferGeometry, THREE.ShaderMaterial>;
    private capacityFaces;
    private w0;
    private w1;
    private w2;
    private w3;
    private readonly sectionSlots;
    private freeList;
    private highWatermark;
    private pendingRanges;
    private pendingMove;
    private readonly pendingReplace;
    private uploadEpoch;
    private visibleSpans;
    private readonly _drawScratch;
    private multiDrawCaps;
    private tierCVao;
    private tierCAttrs;
    private tierCGl;
    private debugOverlay;
    private layoutVersion;
    constructor(material: THREE.ShaderMaterial, scene: THREE.Object3D);
    setDebugOverlay(enabled: boolean): void;
    /**
     * Suppress three's full-buffer instanced draw; onAfterRender issues visible spans only.
     * setDrawRange(0,0) skips bindingStates.setup in r0.184 — use 6 verts + instanceCount=0
     * so program/VAO stay bound while renderInstances no-ops at primcount===0.
     */
    suppressThreeDraw(): void;
    setVisibleSpans(spans: CubeDrawSpan[]): void;
    getVisibleSpans(): readonly CubeDrawSpan[];
    getVisibleFaceCount(): number;
    forEachSectionSlot(cb: (key: string, slot: {
        start: number;
        count: number;
    }) => void): void;
    getSectionDrawStart(sectionKey: string): number | undefined;
    getSectionDrawCount(sectionKey: string): number | undefined;
    getUploadEpoch(): number;
    hasPendingReplace(): boolean;
    canUseFullDrawShortcut(): boolean;
    isRangeFullyUploaded(start: number, end: number): boolean;
    getPendingDirtyRanges(): ReadonlyArray<{
        start: number;
        end: number;
    }>;
    getHighWatermark(): number;
    getCapacityFaces(): number;
    getSectionCount(): number;
    getMemoryBytes(): number;
    getUsedMemoryBytes(): number;
    hasPendingUploads(): boolean;
    getPendingMove(): PendingMove | null;
    addSection(sectionKey: string, words: Uint32Array, faceCount: number): void;
    getLayoutVersion(): number;
    hasSection(sectionKey: string): boolean;
    getSectionSlot(sectionKey: string): {
        start: number;
        count: number;
    } | undefined;
    /** Fetch fresh each raycast — growCapacity reallocates the backing array. */
    getW0(): Uint32Array;
    /** Copy live GPU words and remove the section (sci-fi reveal hide / restore). */
    takeSectionData(sectionKey: string): GlobalBlockBufferShaderData | undefined;
    removeSection(sectionKey: string): void;
    /** One interior-hole move per frame when fragmentation exceeds threshold; deferred shrink. */
    compactStep(): void;
    uploadDirtyRange(): void;
    setCameraOrigin(renderOrigin: RenderOrigin, x: number, y: number, z: number): void;
    reset(): void;
    dispose(): void;
    private invalidateTierCVao;
    private drawTierCSpans;
    private ensureTierCVao;
    private markDirty;
    private mergePendingRanges;
    private takeFreeSlot;
    private insertFreeSlot;
    private mergeFreeList;
    private interiorFreeFaces;
    private findMovableSection;
    private findLowestInteriorHole;
    private reserveFreeSlotAt;
    private copySectionRange;
    private rangeFullyUploaded;
    private zeroAndFreeSlot;
    private finalizePendingReplace;
    private finalizePendingMove;
    private shrinkHighWatermark;
    private growCapacity;
}
export {};
//# sourceMappingURL=globalBlockBuffer.d.ts.map