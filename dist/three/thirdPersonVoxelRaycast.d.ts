export type VoxelRaycastHit = {
    distance: number;
    blockX: number;
    blockY: number;
    blockZ: number;
};
/**
 * Amanatides–Woo grid traversal against solid block volumes (not rendered mesh faces).
 * `radius` is baked into per-block AABB expansion (swept sphere).
 */
export declare function raycastVoxelSolid(ox: number, oy: number, oz: number, dx: number, dy: number, dz: number, maxDist: number, radius: number, minCameraDistance: number, isSolid: (x: number, y: number, z: number) => boolean): VoxelRaycastHit | undefined;
//# sourceMappingURL=thirdPersonVoxelRaycast.d.ts.map