/**
 * EXAMPLES: How to use Canvas2DOverlay with Three.js
 * Works in both main thread and Web Workers!
 */
import { DocumentRenderer } from '../three/documentRenderer';
import { Canvas2DOverlay, WebGLDirect2DOverlay } from './canvas2DOverlay';
export declare function example1_SimpleBlackBox(documentRenderer: DocumentRenderer): Canvas2DOverlay;
export declare function example2_FPSCounter(documentRenderer: DocumentRenderer): Canvas2DOverlay;
export declare function example3_CoordinateDisplay(documentRenderer: DocumentRenderer, getPosition: () => {
    x: number;
    y: number;
    z: number;
}): Canvas2DOverlay;
export declare function example4_MiniMap(documentRenderer: DocumentRenderer, playerPos: {
    x: number;
    z: number;
}): Canvas2DOverlay;
export declare function example5_DirectWebGL(documentRenderer: DocumentRenderer): WebGLDirect2DOverlay;
export declare function example6_HealthBar(documentRenderer: DocumentRenderer, getHealth: () => {
    current: number;
    max: number;
}): Canvas2DOverlay;
export declare function example7_DebugGrid(documentRenderer: DocumentRenderer): Canvas2DOverlay;
export declare function integrateWithDocumentRenderer(documentRenderer: DocumentRenderer): Canvas2DOverlay;
export declare function workerCompatibleOverlay(documentRenderer: DocumentRenderer): Canvas2DOverlay;
//# sourceMappingURL=canvas2DOverlay.example.d.ts.map