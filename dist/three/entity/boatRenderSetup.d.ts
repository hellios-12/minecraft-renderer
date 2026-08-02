import * as THREE from 'three';
/** Vanilla BoatModel.createWaterPatch() size in blocks (after X rotation). */
export declare const BOAT_WATER_PATCH_WIDTH: number;
export declare const BOAT_WATER_PATCH_HEIGHT: number;
export declare const BOAT_WATER_PATCH_DEPTH: number;
/** OBJ boat root offset applied in EntityMesh (single source — import from here, do not duplicate). */
export declare const BOAT_OBJ_OFFSET_Y = -1.125;
/**
 * Vanilla 1.17.1 water patch center in OBJ-local space.
 * Tuned with BOAT_OBJ_OFFSET_Y so entity-space bounds stay Y [0.375, 0.5625].
 */
export declare const BOAT_WATER_PATCH_CENTER_Y = 1.59375;
export declare const BOAT_WATER_PATCH_CENTER_Z = 0;
export declare const BOAT_WATER_PATCH_WORLD_BOUNDS: {
    readonly minX: -0.875;
    readonly maxX: 0.875;
    readonly minY: 0.375;
    readonly maxY: 0.5625;
    readonly minZ: -0.5;
    readonly maxZ: 0.5;
};
export declare const BOAT_HULL_RENDER_ORDER = 0;
export declare const BOAT_WATER_PATCH_RENDER_ORDER = 1;
export declare const BOAT_WATER_PATCH_NAME = "boat_water_patch";
export declare const BOAT_PADDLE_PIVOT_LEFT_NAME = "boat_paddle_pivot_left";
export declare const BOAT_PADDLE_PIVOT_RIGHT_NAME = "boat_paddle_pivot_right";
/** Original handoff pivot (rotation center only — geometry stays aft if used alone). */
export declare const BOAT_PADDLE_SOURCE_LEFT: THREE.Vector3;
export declare const BOAT_PADDLE_SOURCE_RIGHT: THREE.Vector3;
/** Root-local shift applied to paddle mesh together with the pivot move. */
export declare const BOAT_PADDLE_GEOMETRY_DELTA: THREE.Vector3;
/** Vanilla 1.17.1 oarlock positions in OBJ-local blocks (after geometry delta). */
export declare const BOAT_PADDLE_LEFT_PIVOT: THREE.Vector3;
export declare const BOAT_PADDLE_RIGHT_PIVOT: THREE.Vector3;
/** Entity-space mapping for OBJ-local points (mesh `rotation.y = −π/2`, `BOAT_OBJ_OFFSET_Y`). */
export declare function boatObjLocalToEntitySpace(objX: number, objY: number, objZ: number): THREE.Vector3;
export declare function setupBoatPaddlePivots(root: THREE.Object3D): {
    leftPivot?: THREE.Object3D;
    rightPivot?: THREE.Object3D;
};
export declare function getBoatMeshYawOffset(): number;
export declare function createBoatWaterPatchGeometry(): THREE.BoxGeometry;
export declare function createBoatWaterPatchMaterial(): THREE.MeshBasicMaterial;
export declare function createBoatWaterPatchMesh(): THREE.Mesh;
export declare function applyBoatHullRenderSettings(root: THREE.Object3D): void;
export declare function getBoatWaterPatchEntitySpaceBounds(objOffsetY?: number): {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    minZ: number;
    maxZ: number;
};
export declare function setupBoatMesh(root: THREE.Object3D): {
    waterPatch: THREE.Mesh;
};
export declare function disposeBoatWaterPatch(root: THREE.Object3D): void;
//# sourceMappingURL=boatRenderSetup.d.ts.map