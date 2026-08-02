import type { WorldRendererThree } from '../worldRendererThree';
import type { RendererModuleController, RendererModuleManifest } from '../rendererModuleSystem';
export declare class StarfieldModule implements RendererModuleController {
    private readonly worldRenderer;
    private points?;
    private timer;
    private enabled;
    private currentTime?;
    constructor(worldRenderer: WorldRendererThree);
    enable(): void;
    disable(): void;
    toggle(): boolean;
    enablementCheck?: () => boolean;
    render?: (deltaTime: number) => void;
    /**
     * Update visibility based on time of day (0-24000 Minecraft ticks).
     */
    updateTimeOfDay(time: number): void;
    private updateVisibility;
    private createStars;
    dispose(): void;
    private removeStars;
}
export declare const starfieldManifest: RendererModuleManifest;
//# sourceMappingURL=starfield.d.ts.map