import * as THREE from 'three';
/** Canvas used for item texture extraction (main thread or worker). */
export type ItemTextureCanvas = HTMLCanvasElement | OffscreenCanvas;
export interface Create3DItemMeshOptions {
    depth: number;
    pixelSize?: number;
}
export interface Create3DItemMeshResult {
    geometry: THREE.BufferGeometry;
    totalVertices: number;
    totalTriangles: number;
}
/**
 * Creates a 3D item geometry with front/back faces and connecting edges
 * from a canvas containing the item texture
 */
export declare function create3DItemMesh(canvas: ItemTextureCanvas, options: Create3DItemMeshOptions): Create3DItemMeshResult;
export interface ItemTextureInfo {
    u: number;
    v: number;
    sizeX: number;
    sizeY: number;
}
export interface ItemMeshResult {
    mesh: THREE.Object3D;
    itemsTexture?: THREE.Texture;
    itemsTextureFlipped?: THREE.Texture;
    cleanup?: () => void;
}
/**
 * Extracts item texture region to a canvas
 */
export declare function extractItemTextureToCanvas(sourceTexture: THREE.Texture<HTMLImageElement | ImageBitmap>, textureInfo: ItemTextureInfo): ItemTextureCanvas;
/**
 * Creates either a 2D or 3D item mesh based on parameters
 */
export declare function createItemMesh(sourceTexture: THREE.Texture, textureInfo: ItemTextureInfo, options?: {
    faceCamera?: boolean;
    use3D?: boolean;
    depth?: number;
}): ItemMeshResult;
/**
 * Creates a complete 3D item mesh from a canvas texture
 */
export declare function createItemMeshFromCanvas(canvas: HTMLCanvasElement, options: Create3DItemMeshOptions): THREE.Mesh;
//# sourceMappingURL=itemMesh.d.ts.map