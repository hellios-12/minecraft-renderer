/**
 * QUICK START: Add a black 100px box at bottom-left corner
 *
 * This is the minimal code needed to render 2D graphics on your Three.js canvas.
 * Works in both main thread and Web Workers!
 */
import { DocumentRenderer } from '../three/documentRenderer';
import { Canvas2DOverlay } from './canvas2DOverlay';
export declare function addBlackBoxOverlay(documentRenderer: DocumentRenderer): Canvas2DOverlay;
export declare function addMultipleElements(documentRenderer: DocumentRenderer): Canvas2DOverlay;
export declare function addDynamicOverlay(documentRenderer: DocumentRenderer, getData: () => {
    fps: number;
    x: number;
    y: number;
    z: number;
}): Canvas2DOverlay;
import { WebGLDirect2DOverlay } from './canvas2DOverlay';
export declare function addHighPerformanceOverlay(documentRenderer: DocumentRenderer): WebGLDirect2DOverlay;
//# sourceMappingURL=canvas2DOverlay.quickstart.d.ts.map