import type { RendererGpuPreference } from '../three/menuBackground/gpuPreference';
export type RendererOptionMeta = {
    possibleValues?: string[] | Array<[string, string]>;
    isCustomInput?: boolean;
    min?: number;
    max?: number;
    unit?: string;
    text?: string;
    tooltip?: string;
    requiresRestart?: boolean;
    requiresChunksReload?: boolean;
};
export type RendererMesherPipeline = 'wasm' | 'legacy-js';
export type RendererShaderCubeDebugMode = 'off' | 'holes' | 'texIndex' | 'faces' | 'atlasAlpha';
/** Maps stored option → `inWorldRenderingConfig.shaderCubeDebugMode` (0–4). */
export declare function rendererShaderCubeDebugModeToValue(mode: RendererShaderCubeDebugMode): number;
/** Default values for options owned by minecraft-renderer (spread into app `defaultOptions`). */
export declare const RENDERER_DEFAULT_OPTIONS: {
    readonly rendererWorldPerformance: "low-energy" | "normal" | "maximum";
    readonly rendererMeshersCountOverride: number | null;
    readonly starfieldRendering: boolean;
    readonly defaultSkybox: boolean;
    readonly menuBackgroundMode: import("..").MenuBackgroundMode;
    readonly menuBackgroundMinecraftTextures: boolean;
    readonly menuBackgroundV2Scene: "light" | "galaxy" | "nether" | "end" | "cyber";
    readonly menuBackgroundV2Camera: "dive" | "cruise" | "barrel" | "orbit" | "snake";
    readonly menuBackgroundV2BlockGroup: "stainedGlass" | "mixed" | "wool" | "construction" | "glow" | "world";
    readonly menuBackgroundV2CameraSpeed: 80;
    readonly menuBackgroundV2BlockSpeed: 40;
    readonly rendererFuturisticReveal: boolean;
    readonly rendererPerfDebugOverlay: boolean;
    readonly disableBlockEntityTextures: boolean;
    readonly rendererMesher: RendererMesherPipeline;
    readonly rendererShaderCubeDebugMode: RendererShaderCubeDebugMode;
    readonly showChunkBorders: boolean;
    readonly renderEntities: boolean;
    readonly renderDebug: "none" | "basic" | "advanced";
    readonly frameLimit: number | false;
    readonly backgroundRendering: "full" | "20fps" | "5fps";
    readonly vanillaLook: boolean;
    readonly smoothLighting: boolean;
    readonly newVersionsLighting: boolean;
    readonly vrSupport: boolean;
    readonly vrPageGameRendering: boolean;
    readonly clipWorldBelowY: number | undefined;
    readonly highlightBlockColor: "auto" | "blue" | "classic";
    readonly loadPlayerSkins: boolean;
    readonly renderEars: boolean;
    readonly showHand: boolean;
    readonly viewBobbing: boolean;
    readonly dayCycleAndLighting: boolean;
    readonly keepChunksDistance: 1;
    readonly gpuPreference: RendererGpuPreference;
    readonly fov: 75;
};
export type RendererDefaultOptionKey = keyof typeof RENDERER_DEFAULT_OPTIONS;
/** App options storage shape for renderer-owned keys. */
export type RendererStorageOptions = typeof RENDERER_DEFAULT_OPTIONS;
/**
 * Migrate persisted / legacy option keys into current {@link RENDERER_DEFAULT_OPTIONS} shape.
 * Call when loading saved settings (safe to run on every load).
 */
export declare function migrateRendererOptions(saved: Record<string, unknown>): void;
/** Settings UI metadata for {@link RENDERER_DEFAULT_OPTIONS} keys. */
export declare const RENDERER_OPTIONS_META: Partial<Record<RendererDefaultOptionKey, RendererOptionMeta>>;
/** Grouped keys for the Render settings screen (section title + option keys). */
export declare const RENDERER_RENDER_GUI_SECTIONS: ReadonlyArray<{
    title: string;
    keys: readonly RendererDefaultOptionKey[];
}>;
//# sourceMappingURL=rendererDefaultOptions.d.ts.map