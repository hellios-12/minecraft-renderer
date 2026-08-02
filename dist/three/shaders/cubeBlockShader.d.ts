import * as THREE from 'three';
import { type BlockLightmapParams } from '../../lib/blockEntityLighting';
export type { BlockLightmapParams };
export declare function createCubeBlockMaterial(): THREE.ShaderMaterial;
export declare function setCubeSkyLevel(material: THREE.ShaderMaterial, value: number): void;
export declare function setCubeShadingTheme(material: THREE.ShaderMaterial, theme: 'vanilla' | 'high-contrast', cardinalLight: string): void;
export declare function setCubeLightmapParams(material: THREE.ShaderMaterial, params: BlockLightmapParams): void;
export declare const VERTICES_PER_FACE = 6;
/** Section index units for render origin R (R is always a multiple of 16). */
export declare function computeSectionOriginRel(renderOrigin: {
    x: number;
    y: number;
    z: number;
}): {
    x: number;
    y: number;
    z: number;
};
export declare const WORD0: {
    readonly LX_BITS: 4;
    readonly LY_BITS: 4;
    readonly LZ_BITS: 4;
    readonly FACE_BITS: 3;
    readonly TINT_BITS: 8;
    readonly AO_BITS_PER_CORNER: 2;
    readonly NUM_CORNERS: 4;
    readonly LX_SHIFT: 0;
    readonly LY_SHIFT: 4;
    readonly LZ_SHIFT: 8;
    readonly FACE_SHIFT: 12;
    readonly TINT_SHIFT: 15;
    readonly AO_SHIFT: 23;
    readonly TRANSPARENT_SHIFT: 31;
};
export declare const WORD1: {
    readonly LIGHT_BITS_PER_CORNER: 8;
    readonly NUM_CORNERS: 4;
};
export declare const WORD2: {
    readonly TEX_INDEX_BITS: 12;
    readonly DIAGONAL_FLAG_SHIFT: 12;
    readonly SECTION_Y_SHIFT: 13;
    readonly SECTION_Y_BITS: 5;
    readonly EMPTY_SHIFT: 18;
    readonly SECTION_X_HI_SHIFT: 19;
    readonly SECTION_Z_HI_SHIFT: 25;
    readonly SECTION_HI_BITS: 6;
    readonly SPARE_BITS: 1;
};
/** Section base X/Z: low 16 bits in a_w3, high 6 in a_w2 (22-bit biased section index). */
export declare const WORD3: {
    readonly SECTION_BITS: 22;
    readonly SECTION_MASK: number;
    readonly LO_BITS: 16;
    readonly HI_BITS: 6;
    readonly SECTION_BIAS: 2097152;
};
//# sourceMappingURL=cubeBlockShader.d.ts.map