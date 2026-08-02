/**
 * Graphics Backend Base - Shared functionality for Three.js backends.
 *
 * Contains common backend methods and utilities used by both single-thread
 * and off-thread implementations.
 */
import type { GraphicsBackend, GraphicsInitOptions, DisplayWorldOptions, UpdateCameraOptions } from '../graphicsBackend';
import { WorldRendererThree } from './worldRendererThree';
import { ThreeRendererMainData } from './documentRenderer';
import type { MenuBackgroundOptions } from './menuBackground/types';
/**
 * Get backend methods from world renderer instance.
 */
export declare const getBackendMethods: (worldRenderer: WorldRendererThree) => any;
export type ThreeJsBackendMethods = ReturnType<typeof getBackendMethods>;
/**
 * Call mods method helper.
 */
export declare const callModsMethod: (method: string, ...args: any[]) => void;
/**
 * Creates the base graphics backend with core functionality.
 */
export declare const createGraphicsBackendBase: () => {
    main: {
        init: (initOptionsArg: GraphicsInitOptions, mainData?: ThreeRendererMainData) => void;
        backend: GraphicsBackend;
    };
    workerProxy(): {
        __workerProxy: {
            init(initOptionsArg: GraphicsInitOptions, canvas: OffscreenCanvas): void;
            updateSizeExternal(width: number, height: number, pixelRatio: number): void;
            startMenuBackground: (menuBackgroundStartOptions?: MenuBackgroundOptions) => Promise<void>;
            startWorld: (displayOptionsArg: DisplayWorldOptions) => Promise<void>;
            disconnect: () => void;
            setRendering: (rendering: boolean) => void;
            updateCamera(pos: any, yaw: any, pitch: any, options?: UpdateCameraOptions): void;
            callBackendMethod<K extends keyof ThreeJsBackendMethods>(method: K, ...args: Parameters<ThreeJsBackendMethods[K]>): Promise<ReturnType<ThreeJsBackendMethods[K]> extends Promise<infer R> ? R : ReturnType<ThreeJsBackendMethods[K]>>;
        };
    };
};
//# sourceMappingURL=graphicsBackendBase.d.ts.map