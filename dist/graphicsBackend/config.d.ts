/**
 * Default configurations for the graphics backend and world renderer.
 */
import type { GraphicsBackendConfig, RendererReactiveState, NonReactiveState } from './types';
/**
 * Default world renderer configuration.
 * These settings control rendering behavior and visual options.
 */
export declare const defaultWorldRendererConfig: {
    paused: boolean;
    showChunkBorders: boolean;
    enableDebugOverlay: boolean;
    debugWasmPerf: boolean;
    debugModelVariant: undefined | number[];
    futuristicReveal: boolean;
    /** Master toggle for section occlusion graph (smart / cave cull). Disabled in spectator. */
    smartCull: boolean;
    wasmMesher: boolean;
    /** Render full 1×1 cubes through the instanced shader path (requires WebGL2). */
    shaderCubeBlocks: boolean;
    /** 0=off, 1=holes red, 2=tileIndex, 3=faceId colors, 4=atlas alpha */
    shaderCubeDebugMode: number;
    mesherWorkers: number;
    addChunksBatchWaitTime: number;
    _experimentalSmoothChunkLoading: boolean;
    _renderByChunks: boolean;
    autoLowerRenderDistance: boolean;
    /** Disable WASM mesher worker-side conversion cache (memory hotfix for
     * iOS Safari and other low-RAM environments). Trades performance for
     * lower per-worker RAM. */
    disableMesherConversionCache: boolean;
    /** Whether to dedicate the last worker exclusively to block-update
     * remeshing (change worker). When true, initial chunk meshing is
     * distributed only across workers[0 .. n-2]. */
    dedicatedChangeWorker: boolean;
    /** Face shading: vanilla Minecraft vs higher-contrast client look */
    shadingTheme: "vanilla" | "high-contrast";
    /** Synced from player reactive state (dimension / nether) — consumed by mesher */
    cardinalLight: string;
    dayCycle: boolean;
    smoothLighting: boolean;
    enableLighting: boolean;
    starfield: boolean;
    defaultSkybox: boolean;
    renderEntities: boolean;
    extraBlockRenderers: boolean;
    foreground: boolean;
    fov: number;
    volume: number;
    showHand: boolean;
    viewBobbing: boolean;
    handRenderer: "vanilla" | "legacy";
    renderEars: boolean;
    highlightBlockColor: "blue" | "classic" | "auto" | undefined;
    fetchPlayerSkins: boolean;
    skinTexturesProxy: undefined | string;
    vrSupport: boolean;
    vrPageGameRendering: boolean;
    clipWorldBelowY: undefined | number;
    isPlayground: boolean;
    instantCameraUpdate: boolean;
    isRaining: boolean;
    rainColor: string;
    /** Rain particle opacity 0–1. */
    rainOpacity: number;
    moduleStates: Record<string, "enabled" | "disabled" | "auto">;
};
export type WorldRendererConfig = typeof defaultWorldRendererConfig;
/**
 * Default graphics backend configuration.
 */
export declare const defaultGraphicsBackendConfig: GraphicsBackendConfig;
/**
 * Creates a new proxied world renderer config with default values.
 */
export declare const createWorldRendererConfig: (overrides?: Partial<WorldRendererConfig>) => WorldRendererConfig;
/**
 * Get default renderer reactive state.
 */
export declare const getDefaultRendererState: () => {
    reactive: RendererReactiveState;
    nonReactive: NonReactiveState;
};
//# sourceMappingURL=config.d.ts.map