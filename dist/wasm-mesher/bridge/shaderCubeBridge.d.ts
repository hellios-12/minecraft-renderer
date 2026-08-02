/**
 * Pack visible WASM block faces into GPU-instanced shader words (4×Uint32 per face).
 * Each emitted instance becomes one face quad on the shader-cube mesh; the legacy
 * vertex path is bypassed for blocks that pass {@link isShaderCubeBlock}.
 */
import { TextureIndexMapping, type TextureEntry } from '../../three/shaders/textureIndexMapping';
import { TintPalette } from '../../three/shaders/tintPalette';
export declare const SHADER_CUBES_FORMAT_VERSION: 3;
export declare const SHADER_CUBES_WORDS_PER_FACE: 4;
export type ShaderCubesOutput = {
    words: Uint32Array;
    /** Number of visible faces (= instances × 1; each instance is one face) */
    count: number;
    formatVersion: typeof SHADER_CUBES_FORMAT_VERSION;
};
/**
 * WASM/elemFaces corner order → shader vi corner order (BASE/DU/DV in cubeBlockShader).
 * UP/DOWN/EAST/WEST match 1:1; NORTH/SOUTH need a 180° corner rotation because their
 * BASE origin is on the opposite side of the quad.
 */
export declare const AO_LIGHT_REMAP: readonly (readonly number[])[];
/** Reorder per-corner AO or light values for shader-space corners. */
export declare function remapCornersForShaderFace(faceIdx: number, values: number[], fallback: number): number[];
export interface ShaderCubeBlockInput {
    position: [number, number, number];
    visible_faces: number;
    ao_data: number[][];
    /** @deprecated combined f32; prefer sky_light_data + block_light_data or light_combined */
    light_data?: number[][];
    sky_light_data?: number[][];
    block_light_data?: number[][];
    /** Per-corner nibble-packed byte: high=sky4, low=block4 */
    light_combined?: number[][];
}
export interface ShaderCubeModelInput {
    blockName: string;
    blockProps: Record<string, any>;
    isCube: boolean;
    /** Resolved variant `models[variantIndex][0]` */
    model: {
        x?: number;
        y?: number;
        z?: number;
        elements?: Array<{
            rotation?: {
                axis: string;
                angle: number;
                origin: number[];
            };
            faces?: Record<string, {
                texture?: TextureEntry & {
                    rotation?: number;
                };
                tintindex?: number;
            }>;
        }>;
    };
}
type FaceTextureRef = TextureEntry & {
    tileIndex?: number;
};
/** Prefer atlas `tileIndex` from block model (legacy path uses the same). */
export declare function resolveFaceTileIndex(tex: FaceTextureRef, texMapping: TextureIndexMapping): number;
export declare function getShaderCubeResources(): {
    tintPalette: TintPalette;
    textureIndexMapping: TextureIndexMapping;
} | null;
/** Reset cached palette/atlas (tests). */
export declare function resetShaderCubeResources(): void;
/**
 * Returns true when the block is a plain 1×1×1 cube that the instanced shader path
 * can render exactly like the legacy mesher (no model rotation, single un-rotated
 * element with all 6 cardinal faces present, atlas matches shader gate).
 * Pass the already-resolved model variant (`modelVars[variantIndex][0]`).
 */
export declare function isShaderCubeBlock(cached: ShaderCubeModelInput & {
    isCube: boolean;
}, model: ShaderCubeModelInput['model'], sectionHeight: number, texMapping: TextureIndexMapping): boolean;
export declare function packWord2(texIndex: number, aoDiagonalFlip: boolean, sectionBaseX: number, sectionBaseY: number, sectionBaseZ: number): number;
export declare function packWord3(sectionBaseX: number, sectionBaseZ: number): number;
/** Decode section base block coords from packed words (round-trip helper for tests). */
export declare function decodeSectionBaseFromWords(word2: number, word3: number): {
    x: number;
    y: number;
    z: number;
};
/** EMPTY sentinel for a freed global-buffer instance slot. */
export declare function packWord2Empty(): number;
/** 12-bit texture tile index from packed word2. */
export declare function unpackTexIndexFromWord2(word2: number): number;
export type BuildShaderCubeInstancesOpts = {
    sectionOrigin: {
        x: number;
        y: number;
        z: number;
    };
    sectionHeight: number;
    biome?: string;
    tintPalette: TintPalette;
    textureIndexMapping: TextureIndexMapping;
    /**
     * When false (blocks with model.ao === false), emit full-bright faces without AO
     * diagonal flip — matches legacy render-from-wasm path.
     */
    doAO?: boolean;
    /** Bitmask of faces to skip (same indices as visible_faces: 0=up … 5=north). */
    forceCullMask?: number;
};
/**
 * Pack all visible faces of one block into `words` (4 uints per face).
 * Returns false if the block must use the legacy vertex path.
 */
export declare function tryBuildShaderCubeInstances(block: ShaderCubeBlockInput, cached: ShaderCubeModelInput & {
    isCube: boolean;
}, model: ShaderCubeModelInput['model'], opts: BuildShaderCubeInstancesOpts, words: number[]): boolean;
export declare function buildShaderCubesFromWords(wordQuads: number[]): ShaderCubesOutput | undefined;
/** Visible face count from WASM bitmask */
export declare function countVisibleFaces(visibleFaces: number): number;
export {};
//# sourceMappingURL=shaderCubeBridge.d.ts.map