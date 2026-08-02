export type ShaderSectionRaycastBox = {
    minX: number;
    minY: number;
    minZ: number;
    maxX: number;
    maxY: number;
    maxZ: number;
    cx: number;
    cy: number;
    cz: number;
};
export type ShaderSectionRaycastEntry = {
    box: ShaderSectionRaycastBox;
    sectionCenterX: number;
    sectionCenterY: number;
    sectionCenterZ: number;
};
/**
 * Tight world-space AABB covering occupied shader-cube blocks in a section.
 * `sectionCenter*` is geometryData.sx/sy/sz (section base + 8).
 */
export declare function computeShaderSectionRaycastAabb(words: Uint32Array, faceCount: number, sectionCenterX: number, sectionCenterY: number, sectionCenterZ: number): ShaderSectionRaycastBox | undefined;
export declare function isPointInsideAabb(ox: number, oy: number, oz: number, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): boolean;
/** Ray–AABB entry distance, or undefined. Ignores hits when origin is inside the box. */
export declare function raycastAabb(ox: number, oy: number, oz: number, dx: number, dy: number, dz: number, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number, maxDist: number): number | undefined;
/** Ray origin inside AABB: distance to exit face along the ray. */
export declare function raycastAabbFromInside(ox: number, oy: number, oz: number, dx: number, dy: number, dz: number, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number, maxDist: number): number | undefined;
//# sourceMappingURL=sectionRaycastAabb.d.ts.map