/**
 * AppViewer - Base application viewer for Minecraft renderer.
 *
 * This is the main entry point for integrating the renderer into an application.
 * It manages:
 * - Graphics backend loading and lifecycle
 * - World view management
 * - Player state
 * - Renderer state
 */
import { Vec3 } from 'vec3';
import type { GraphicsBackend, GraphicsBackendConfig, GraphicsBackendLoader, RendererReactiveState, NonReactiveState, UpdateCameraOptions } from './types';
import { WorldView, WorldProvider } from '../worldView';
import { WorldRendererConfig } from './config';
import { PlayerStateReactive } from '../playerState/playerState';
import { ResourcesManager } from '../resourcesManager';
import type { MenuBackgroundOptions } from '../three/menuBackground/types';
import type { RendererStorageOptions } from './rendererDefaultOptions';
export interface AppViewerOptions {
    config?: Partial<GraphicsBackendConfig>;
    rendererConfig?: Partial<WorldRendererConfig>;
    menuBackground?: MenuBackgroundOptions;
}
/**
 * AppViewer - Main application viewer class.
 *
 * This is designed to be extended for specific use cases (game client, playground, etc.)
 */
export declare class AppViewer {
    resourcesManager: ResourcesManager;
    waitBackendLoadPromises: Promise<void>[];
    onWorldStart?: () => void;
    onBeforeWorldStart?: () => void;
    worldView?: WorldView;
    readonly config: GraphicsBackendConfig;
    readonly menuBackgroundOptions: MenuBackgroundOptions;
    readonly inWorldRenderingConfig: WorldRendererConfig;
    backend?: GraphicsBackend;
    backendLoader?: GraphicsBackendLoader;
    private currentState?;
    currentDisplay: 'menu' | 'world' | null;
    playerState: {
        reactive: {
            playerSkin: string | undefined;
            inWater: boolean;
            waterBreathing: boolean;
            backgroundColor: [number, number, number];
            ambientLight: number;
            directionalLight: number;
            eyeHeight: number;
            gameMode: import("../playerState/types").GameMode | undefined;
            lookingAtBlock: {
                x: number;
                y: number;
                z: number;
                face?: number;
                shapes: import("../playerState/types").BlocksShapes;
            } | undefined;
            diggingBlock: {
                x: number;
                y: number;
                z: number;
                stage: number;
                face?: number;
                mergedShape: import("../playerState/types").BlockShape | undefined;
            } | undefined;
            movementState: import("../playerState/types").MovementState;
            onGround: boolean;
            sneaking: boolean;
            flying: boolean;
            sprinting: boolean;
            walkDist: number;
            prevWalkDist: number;
            bob: number;
            prevBob: number;
            itemUsageTicks: number;
            username: string;
            onlineMode: boolean;
            cardinalLight: string;
            lightingDisabled: boolean;
            shouldHideHand: boolean;
            heldItemMain: import("../playerState/types").HandItemBlock | undefined;
            heldItemOff: import("../playerState/types").HandItemBlock | undefined;
            perspective: import("../playerState/types").CameraPerspective;
            onFire: boolean;
            fovMultiplier: number;
            cameraSpectatingEntity: number | undefined;
            team: import("../playerState/types").Team | undefined;
        };
    };
    rendererState: RendererReactiveState;
    nonReactiveState: NonReactiveState;
    worldReady: Promise<void>;
    private resolveWorldReady;
    lastCamUpdate: number;
    /** Bound by `subscribeRendererOptions` / `bindRendererOptions` — source of truth for renderer-owned settings. */
    private getRendererOptions?;
    constructor(options?: AppViewerOptions, resourcesManager?: ResourcesManager);
    private initWorldReadyPromise;
    /**
     * Preload mesher worker script (HTTP validate + ephemeral Worker + `mc-web-ping` / `mc-web-pong`).
     * Chooses `/mesherWasm.js` vs `/mesher.js` from `inWorldRenderingConfig.wasmMesher`.
     */
    preloadWorkers(): Promise<void>;
    /** Wire app options storage (valtio proxy) for backend init (WebGL gpuPreference, etc.). */
    bindRendererOptions(getOptions: () => RendererStorageOptions): void;
    /**
     * Load a graphics backend.
     */
    loadBackend(loader: GraphicsBackendLoader): Promise<void>;
    /**
     * Start the world with a given world provider and render distance.
     */
    startWorld(world: WorldProvider, renderDistance: number, playerStateReactive?: PlayerStateReactive, startPosition?: Vec3): Promise<boolean>;
    /**
     * Start the main-menu background (3D scene behind UI).
     */
    startMenuBackground(menuBackgroundOptions?: MenuBackgroundOptions): void;
    /**
     * Reset the backend.
     */
    resetBackend(cleanState?: boolean): void;
    /**
     * Disconnect the backend.
     */
    disconnectBackend(cleanState?: boolean): void;
    /**
     * Update camera position and rotation.
     */
    updateCamera(pos: Vec3 | null, yaw: number, pitch: number, options?: UpdateCameraOptions): void;
    /**
     * Set rendering active/paused.
     */
    setRendering(rendering: boolean): void;
    /**
     * Start world with bot (convenience method).
     */
    startWithBot(bot: any, renderDistance: number): Promise<void>;
    /**
     * Destroy all resources including resource manager.
     */
    destroyAll(): void;
    /**
     * Get utility methods.
     */
    get utils(): {
        waitingForChunks(): Promise<void>;
    };
    /**
     * Destroy the viewer and cleanup resources.
     */
    destroy(): void;
}
//# sourceMappingURL=appViewer.d.ts.map