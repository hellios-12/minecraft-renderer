import type { WorldRendererThree } from '../worldRendererThree';
import type { RendererModuleController, RendererModuleManifest } from '../rendererModuleSystem';
export declare class BlockBreakParticlesModule implements RendererModuleController {
    private readonly worldRenderer;
    private particles;
    private sharedMaterial?;
    private enabled;
    private tickAccumulator;
    private nextParticleIndex;
    constructor(worldRenderer: WorldRendererThree);
    enable(): void;
    disable(): void;
    dispose(): void;
    render: (deltaTime: number) => void;
    spawnBlockBreakParticles(worldX: number, worldY: number, worldZ: number, blockName: string, floorMap: number[], biomeName?: string): void;
    private tickPhysics;
    private updateVisuals;
    spawnCrackParticle(worldX: number, worldY: number, worldZ: number, face: number, blockName: string, floorMap: number[], biomeName?: string): void;
    private createParticle;
    private allocateParticle;
    private findInactiveParticle;
    private recycleOldest;
    private deactivateParticle;
    private getFloorY;
    private resolveBlockTexture;
    private extractUV;
    private setGeometryUVs;
    private ensureMaterial;
}
export declare const blockBreakParticlesManifest: RendererModuleManifest;
//# sourceMappingURL=blockBreakParticles.d.ts.map