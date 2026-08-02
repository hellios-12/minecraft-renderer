import * as THREE from 'three';
export type ShaderCubeInstanceData = {
    words: Uint32Array;
    count: number;
};
/**
 * Build InstancedBufferGeometry for full-cube shader faces.
 * One instance = one visible face; vertex shader uses gl_VertexID (6 verts/face).
 */
export declare function buildShaderCubeGeometry(words: Uint32Array, faceCount: number): THREE.InstancedBufferGeometry;
/**
 * CPU raycast uses section AABB (geometry.boundingBox), not GPU-generated faces.
 * Enough for third-person camera collision; block pick uses mineflayer, not mesh raycast.
 */
export declare function attachShaderCubeRaycast(mesh: THREE.Mesh<THREE.BufferGeometry, THREE.Material>): void;
export declare function createShaderCubeMesh(data: ShaderCubeInstanceData, material: THREE.ShaderMaterial): THREE.Mesh<THREE.InstancedBufferGeometry, THREE.ShaderMaterial>;
export declare function disposeShaderCubeMesh(mesh: THREE.Mesh): void;
//# sourceMappingURL=shaderCubeMesh.d.ts.map