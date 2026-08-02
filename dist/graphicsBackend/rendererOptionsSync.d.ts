/**
 * Maps app options storage → AppViewer runtime (in-world config, graphics config, menu background).
 * Call `subscribeRendererOptions` once after viewer init; keep volume sync in the app.
 */
import type { AppViewer } from './appViewer';
import type { RendererStorageOptions } from './rendererDefaultOptions';
import type { MenuBackgroundOptions } from '../three/menuBackground/types';
import type { MenuBackgroundRenderer } from '../three/menuBackground/renderer';
export type { RendererStorageOptions } from './rendererDefaultOptions';
export interface ApplyRendererOptionsContext {
    isSafari?: boolean;
    isCypress?: boolean;
    windowFocused?: boolean;
}
export interface RendererOptionsSubscribeHooks {
    isSafari?: boolean;
    isCypress?: boolean;
    getWindowFocused?: () => boolean;
    onRegisterFocusHandlers?: (handlers: {
        onFocus: () => void;
        onBlur: () => void;
    }) => void;
}
export interface RendererWorldViewLike {
    keepChunksDistance: number;
}
export declare function menuBackgroundOptionsFromStorage(o: Pick<RendererStorageOptions, 'menuBackgroundMode' | 'menuBackgroundMinecraftTextures' | 'menuBackgroundV2Scene' | 'menuBackgroundV2Camera' | 'menuBackgroundV2BlockGroup' | 'menuBackgroundV2CameraSpeed' | 'menuBackgroundV2BlockSpeed'>): MenuBackgroundOptions;
export declare function applyMenuBackgroundLiveOptions(menu: MenuBackgroundRenderer, o: Pick<RendererStorageOptions, 'menuBackgroundV2Scene' | 'menuBackgroundV2Camera' | 'menuBackgroundV2BlockGroup' | 'menuBackgroundV2CameraSpeed' | 'menuBackgroundV2BlockSpeed'>): void;
export declare function applyRendererOptions(appViewer: AppViewer, o: RendererStorageOptions, ctx?: ApplyRendererOptionsContext): void;
/** World-view + hand/camera options (call when WorldView is ready). */
export declare function applyRendererWorldViewOptions(appViewer: AppViewer, worldView: RendererWorldViewLike, o: Pick<RendererStorageOptions, 'keepChunksDistance' | 'renderEars' | 'showHand' | 'viewBobbing' | 'dayCycleAndLighting'>): void;
/**
 * Subscribe to options changes and sync renderer runtime.
 * Returns unsubscribe. Volume is intentionally excluded — wire it in the app.
 */
export declare function subscribeRendererOptions<T extends RendererStorageOptions>(appViewer: AppViewer, optionsProxy: T, hooks?: RendererOptionsSubscribeHooks): () => void;
/** Call when mineflayer bot is created (lighting depends on protocol features). */
export declare function applyRendererEnableLighting(appViewer: AppViewer, newVersionsLighting: boolean, blockStateIdSupported: boolean): void;
//# sourceMappingURL=rendererOptionsSync.d.ts.map