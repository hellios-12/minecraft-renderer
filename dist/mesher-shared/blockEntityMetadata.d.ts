import { Vec3 } from 'vec3';
export interface SignMeta {
    isWall: boolean;
    isHanging: boolean;
    rotation: number;
}
export interface HeadMeta {
    isWall: boolean;
    rotation: number;
}
export interface BannerMeta {
    isWall: boolean;
    blockName: string;
    rotation: number;
    blockLightNorm: number;
    skyLightNorm: number;
}
export interface BlockEntityMetadataTarget {
    signs: Record<string, SignMeta>;
    heads: Record<string, HeadMeta>;
    banners: Record<string, BannerMeta>;
}
export interface BlockEntityMetadataOptions {
    disableBlockEntityTextures?: boolean;
}
type BlockLike = {
    name: string;
    getProperties(): any;
};
type LightSampler = {
    getChannelLightNorm(pos: Vec3): {
        block: number;
        sky: number;
    };
};
export declare function collectBlockEntityMetadata(block: BlockLike, x: number, y: number, z: number, target: BlockEntityMetadataTarget, options: BlockEntityMetadataOptions, world?: LightSampler): void;
export {};
//# sourceMappingURL=blockEntityMetadata.d.ts.map