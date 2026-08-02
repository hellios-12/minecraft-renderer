import * as THREE from 'three';
import type { RenderOrigin } from './shaders/legacyBlockShader';
/** Half-extent of a section mesh AABB in section-local space. */
export declare const LEGACY_SECTION_HALF_EXTENT = 8;
/**
 * Set a legacy section mesh world translation once at build time.
 * Position proxy is not used — camera-relative math lives in the shader.
 */
export declare function setupLegacySectionMatrix(mesh: THREE.Mesh, sx: number, sy: number, sz: number, renderOrigin: RenderOrigin): void;
export declare function sectionIntersectsFrustum(sectionWorldX: number, sectionWorldY: number, sectionWorldZ: number, cameraWorldX: number, cameraWorldY: number, cameraWorldZ: number, frustum: THREE.Frustum, box: THREE.Box3, boxMin: THREE.Vector3, boxMax: THREE.Vector3): {
    visible: boolean;
    distSq: number;
};
/**
 * Per-frame frustum cull + back-to-front renderOrder for one legacy section.
 * Used for pooled per-section meshes (reveal defer + invariant fallback).
 */
export declare function updateLegacySectionCullState(mesh: THREE.Mesh, sectionWorldX: number, sectionWorldY: number, sectionWorldZ: number, cameraWorldX: number, cameraWorldY: number, cameraWorldZ: number, frustum: THREE.Frustum, box: THREE.Box3, boxMin: THREE.Vector3, boxMax: THREE.Vector3): void;
//# sourceMappingURL=legacySectionCull.d.ts.map