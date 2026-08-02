import type { WorldRendererThree } from '../worldRendererThree';
import type { RendererModuleController, RendererModuleManifest } from '../rendererModuleSystem';
export declare class CameraBobbingModule implements RendererModuleController {
    private readonly worldRenderer;
    private enabled;
    private lastBobWalkDist;
    private lastBobTickTime;
    constructor(worldRenderer: WorldRendererThree);
    enable(): void;
    disable(): void;
    render?: (deltaTime: number) => void;
    dispose(): void;
}
export declare const cameraBobbingManifest: RendererModuleManifest;
//# sourceMappingURL=cameraBobbing.d.ts.map