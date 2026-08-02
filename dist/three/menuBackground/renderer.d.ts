import * as THREE from 'three';
import type { GraphicsInitOptions } from '../../graphicsBackend/types';
import type { DocumentRenderer } from '../documentRenderer';
import { V2MenuBackground } from './v2';
import type { MenuBackgroundOptions } from './types';
/**
 * Orchestrates main-menu background rendering (dispatches to classic / v2 / world-blocks).
 */
export declare class MenuBackgroundRenderer {
    private readonly documentRenderer;
    private readonly options;
    private active?;
    private readonly abortController;
    private readonly mode;
    private lastFrameTime;
    constructor(documentRenderer: DocumentRenderer, options: GraphicsInitOptions, menuBackgroundOptions?: MenuBackgroundOptions, singleFileBuild?: boolean);
    /** Active v2 instance when that style is running. */
    get v2(): V2MenuBackground | undefined;
    get scene(): THREE.Scene | undefined;
    get camera(): THREE.PerspectiveCamera | undefined;
    start(menuBackgroundOptions?: MenuBackgroundOptions): Promise<void>;
    private createImplementation;
    dispose(): void;
}
//# sourceMappingURL=renderer.d.ts.map