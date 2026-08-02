import * as THREE from 'three';
export declare const stevePngUrl: string;
export declare const steveTexture: Promise<THREE.Texture<unknown, THREE.TextureEventMap>>;
/** Minecraft skin sheets: WxW or Wx(W/2) at standard power-of-two widths. */
export declare const isLikelySkinImageSize: (width: number, height: number) => boolean;
declare const config: {
    apiEnabled: boolean;
};
export declare const setSkinsConfig: (newConfig: Partial<typeof config>) => void;
export declare function loadSkinFromUsername(username: string, type: 'skin' | 'cape'): Promise<string | undefined>;
export declare const parseSkinTexturesValue: (value: string) => string;
export declare function loadSkinImage(skinUrl: string): Promise<{
    canvas: OffscreenCanvas;
    image: ImageBitmap;
}>;
export {};
//# sourceMappingURL=skins.d.ts.map