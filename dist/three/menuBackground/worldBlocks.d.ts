import * as THREE from 'three';
import type { GraphicsInitOptions } from '../../graphicsBackend/types';
import { WorldRendererThree } from '../worldRendererThree';
import type { DocumentRenderer } from '../documentRenderer';
import type { MenuBackgroundView } from './activeView';
/**
 * Menu background built from a wall of random stained-glass blocks (single-file / demo style).
 */
export declare class WorldBlocksMenuBackground implements MenuBackgroundView {
    private readonly documentRenderer;
    private readonly options;
    private readonly abortSignal;
    private _scene;
    private _camera;
    get scene(): THREE.Scene<THREE.Object3DEventMap>;
    get camera(): THREE.PerspectiveCamera;
    private worldRenderer?;
    WorldRendererClass: typeof WorldRendererThree;
    constructor(documentRenderer: DocumentRenderer, options: GraphicsInitOptions, abortSignal: AbortSignal);
    init(): Promise<void>;
    update(_dt: number, sizeChanged: boolean): void;
    dispose(): void;
    private setupMouseParallax;
}
//# sourceMappingURL=worldBlocks.d.ts.map