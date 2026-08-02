import type { WorldRendererThree } from '../worldRendererThree';
import type { RendererModuleController, RendererModuleManifest } from '../rendererModuleSystem';
export declare class RainModule implements RendererModuleController {
    private readonly worldRenderer;
    private instancedMesh?;
    private geometry?;
    private material?;
    private particles;
    private enabled;
    private readonly dummy;
    private readonly tempPosition;
    private readonly tempQuaternion;
    private readonly tempScale;
    private readonly configUnsubs;
    constructor(worldRenderer: WorldRendererThree);
    enable(): void;
    disable(): void;
    autoEnableCheck(): boolean;
    render?: (deltaTime: number) => void;
    dispose(): void;
    private syncRainAppearance;
    private createRain;
    private respawnParticle;
}
export declare const rainManifest: RendererModuleManifest;
//# sourceMappingURL=rain.d.ts.map