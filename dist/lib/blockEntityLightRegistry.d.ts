import * as THREE from 'three';
import { type BlockLightmapParams } from './blockEntityLighting';
export type BlockEntityOverlayLight = {
    material: THREE.MeshBasicMaterial;
    blockLightNorm: number;
    skyLightNorm: number;
};
export declare class BlockEntityLightRegistry {
    private readonly entries;
    private skyLevel;
    private lightmapParams;
    register(entry: BlockEntityOverlayLight): void;
    unregister(material: THREE.Material): void;
    setSkyLevel(value: number): void;
    setLightmapParams(params: BlockLightmapParams): void;
    getSkyLevel(): number;
    private refreshAll;
    private applyBrightness;
}
export declare function tintBannerMaterial(material: THREE.MeshBasicMaterial, blockLightNorm: number, skyLightNorm: number, skyLevel: number, lightmapParams?: BlockLightmapParams): number;
//# sourceMappingURL=blockEntityLightRegistry.d.ts.map