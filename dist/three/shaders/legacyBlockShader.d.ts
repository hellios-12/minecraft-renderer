import * as THREE from 'three';
import { type BlockLightmapParams } from '../../lib/blockEntityLighting';
export type RenderOrigin = {
    x: number;
    y: number;
    z: number;
};
export declare function computeCameraRelativeUniforms(renderOrigin: RenderOrigin, x: number, y: number, z: number): {
    originDelta: RenderOrigin;
    cameraOriginFrac: RenderOrigin;
};
export declare function createLegacyBlockMaterial(): THREE.ShaderMaterial;
/** Global opaque legacy buffer — per-vertex section origin via a_origin. */
export declare function createGlobalLegacyBlockMaterial(): THREE.ShaderMaterial;
/** Global transparent blend buffer — same shaders as opaque global, blend material flags. */
export declare function createGlobalLegacyBlendMaterial(): THREE.ShaderMaterial;
/** Render-origin + fractional camera split — matches GlobalBlockBuffer.setCameraOrigin. */
export declare function setLegacyCameraOrigin(material: THREE.ShaderMaterial, renderOrigin: RenderOrigin, x: number, y: number, z: number): void;
export declare function setLegacySkyLevel(material: THREE.ShaderMaterial, value: number): void;
export declare function setLegacyLightmapParams(material: THREE.ShaderMaterial, params: BlockLightmapParams): void;
//# sourceMappingURL=legacyBlockShader.d.ts.map