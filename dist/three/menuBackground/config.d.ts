import type { MenuBackgroundMode } from './types';
import type { V2CameraId, V2SceneId, MinecraftBlockGroupId } from './v2';
/** Single source of truth for menu-background defaults (settings + runtime fallbacks). */
export declare const MENU_BACKGROUND_OPTION_DEFAULTS: {
    readonly mode: MenuBackgroundMode;
    readonly minecraftTextures: boolean;
    readonly v2Scene: V2SceneId;
    readonly v2Camera: V2CameraId;
    readonly v2BlockGroup: MinecraftBlockGroupId;
    /** 0–200 (%). 100 = 1× motion. */
    readonly v2CameraSpeedPercent: 80;
    readonly v2BlockSpeedPercent: 40;
};
export declare const menuBackgroundSpeedToMultiplier: (percent: number) => number;
/** Default camera / block motion multipliers (1 = 100%). */
export declare const MENU_BACKGROUND_MOTION_DEFAULTS: {
    readonly camera: number;
    readonly block: number;
};
//# sourceMappingURL=config.d.ts.map