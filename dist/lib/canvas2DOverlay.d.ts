/**
 * Canvas 2D Overlay for Three.js WebGL Canvas
 *
 * Provides methods to draw 2D graphics on top of Three.js rendering
 * Works in both main thread and Web Worker contexts (OffscreenCanvas)
 */
import * as THREE from 'three';
export declare class Canvas2DOverlay {
    private renderer;
    private canvas;
    private gl;
    private overlayScene;
    private overlayCamera;
    private overlayObjects;
    constructor(renderer: THREE.WebGLRenderer, canvas: HTMLCanvasElement | OffscreenCanvas);
    /**
     * Update camera when canvas size changes
     */
    updateSize(width: number, height: number): void;
    /**
     * Clear all overlay objects
     */
    clear(): void;
    /**
     * Draw a filled rectangle (2D box)
     * @param x X position (pixels from left)
     * @param y Y position (pixels from top)
     * @param width Width in pixels
     * @param height Height in pixels
     * @param color Color (hex or CSS color)
     * @param opacity Opacity (0-1)
     */
    drawRect(x: number, y: number, width: number, height: number, color?: number | string, opacity?: number): THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial, THREE.Object3DEventMap>;
    /**
     * Draw a rectangle outline (border only)
     */
    drawRectOutline(x: number, y: number, width: number, height: number, color?: number | string, lineWidth?: number, opacity?: number): THREE.Line<THREE.BufferGeometry<THREE.NormalBufferAttributes, THREE.BufferGeometryEventMap>, THREE.LineBasicMaterial, THREE.Object3DEventMap>;
    /**
     * Draw text using canvas texture (works in worker with OffscreenCanvas)
     */
    drawText(text: string, x: number, y: number, options?: {
        fontSize?: number;
        fontFamily?: string;
        color?: string;
        backgroundColor?: string;
        padding?: number;
        opacity?: number;
    }): THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial, THREE.Object3DEventMap>;
    /**
     * Draw a circle
     */
    drawCircle(x: number, y: number, radius: number, color?: number | string, opacity?: number): THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial, THREE.Object3DEventMap>;
    /**
     * Render the overlay on top of Three.js scene
     * Call this after rendering your main 3D scene
     */
    render(): void;
    /**
     * Dispose of all resources
     */
    dispose(): void;
}
/**
 * Alternative: Direct WebGL 2D Drawing
 * For more performance or if you need more control
 */
export declare class WebGLDirect2DOverlay {
    private renderer;
    private canvas;
    private gl;
    private program;
    private positionBuffer;
    private colorBuffer;
    constructor(renderer: THREE.WebGLRenderer, canvas: HTMLCanvasElement | OffscreenCanvas);
    private createShader;
    private createProgram;
    /**
     * Draw a rectangle using raw WebGL
     */
    drawRect(x: number, y: number, width: number, height: number, r: number, g: number, b: number, a?: number): void;
    dispose(): void;
}
//# sourceMappingURL=canvas2DOverlay.d.ts.map