/**
 * Shared block lighting math — keep in sync with APPLY_LIGHTMAP_GLSL in shaders.
 */
export type BlockLightmapParams = {
    curve?: number;
    minBrightness?: number;
    gamma?: number;
};
export declare const DEFAULT_LIGHTMAP_PARAMS: Required<BlockLightmapParams>;
/** GLSL body for applyLightmap — requires u_lightCurve, u_minBrightness, u_lightGamma uniforms. */
export declare const APPLY_LIGHTMAP_GLSL = "\nfloat applyLightmap(float L) {\n    float curved = L / (4.0 - 3.0 * L);\n    float shaped = mix(L, curved, u_lightCurve);\n    shaped = mix(u_minBrightness, 1.0, shaped);\n    return clamp(pow(shaped, u_lightGamma), 0.0, 1.0);\n}\n";
export declare function applyLightmap(L: number, params?: BlockLightmapParams): number;
/** Same cap as block shaders: max(block, min(sky, skyLevel)). */
export declare function combinedBlockLight(block: number, sky: number, skyLevel: number): number;
/** 0..1 brightness for MeshBasicMaterial.color.setScalar on block-entity overlays. */
export declare function blockEntityBrightness(blockNorm: number, skyNorm: number, skyLevel: number, lightmapParams?: BlockLightmapParams): number;
//# sourceMappingURL=blockEntityLighting.d.ts.map