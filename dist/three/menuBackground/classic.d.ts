import * as THREE from 'three';
import type { DocumentRenderer } from '../documentRenderer';
import type { MenuBackgroundView } from './activeView';
/**
 * Vanilla-style rotating cubemap (Minecraft title-screen style) with optional squids.
 */
export declare class ClassicMenuBackground implements MenuBackgroundView {
    private readonly documentRenderer;
    readonly scene: THREE.Scene;
    readonly camera: THREE.PerspectiveCamera;
    private readonly startTimes;
    private time;
    private panoramaGroup;
    constructor(documentRenderer: DocumentRenderer);
    init(): Promise<void>;
    update(_dt: number, sizeChanged: boolean): void;
    dispose(): void;
    private buildCubemap;
    /** Debug helper: flat cubemap face in front of the camera. */
    debugImageInFrontOfCamera(): Promise<void>;
}
//# sourceMappingURL=classic.d.ts.map