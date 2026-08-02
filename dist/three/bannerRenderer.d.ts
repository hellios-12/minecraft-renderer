import * as THREE from 'three';
import { Vec3 } from 'vec3';
import type { WorldRendererThree } from './worldRendererThree';
type BannerBlockEntity = {
    Patterns?: Array<{
        Color?: number;
        Pattern?: string;
    }>;
};
export declare const renderBanner: (baseColor: number, blockEntity: BannerBlockEntity, canvasCreator?: (width: number, height: number) => OffscreenCanvas) => OffscreenCanvas | undefined;
export declare function getBannerTexture(worldRenderer: WorldRendererThree, blockName: string, blockEntity: any): THREE.Texture | undefined;
export declare function releaseBannerTexture(texture: THREE.Texture): void;
export declare function createBannerMesh(position: Vec3, rotation: number, isWall: boolean, texture: THREE.Texture, blockLightNorm?: number, skyLightNorm?: number, skyLevel?: number): THREE.Group & {
    bannerTexture?: THREE.Texture;
    bannerMaterial?: THREE.MeshBasicMaterial;
};
export {};
//# sourceMappingURL=bannerRenderer.d.ts.map