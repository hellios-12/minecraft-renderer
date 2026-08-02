import * as THREE from 'three';
export declare const disposeObject: (obj: THREE.Object3D, cleanTextures?: boolean) => void;
export declare const loadThreeJsTextureFromUrlSync: (imageUrl: string) => {
    texture: THREE.Texture<unknown, THREE.TextureEventMap>;
    promise: Promise<THREE.Texture<unknown, THREE.TextureEventMap>>;
};
export declare const loadThreeJsTextureFromUrl: (imageUrl: string) => Promise<THREE.Texture<unknown, THREE.TextureEventMap>>;
export declare const loadThreeJsTextureFromBitmap: (image: ImageBitmap) => THREE.Texture<OffscreenCanvas, THREE.TextureEventMap>;
/** Worker-safe sync handle; image loads via fetch + OffscreenCanvas (not TextureLoader). */
export declare function loadNearestFilterTexture(imageUrl: string): THREE.Texture;
export declare function loadTexture(texture: string, cb: (texture: THREE.Texture) => void, onLoad?: () => void): Promise<void>;
export declare const clearTextureCache: () => void;
//# sourceMappingURL=threeJsUtils.d.ts.map