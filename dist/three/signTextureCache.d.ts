import * as THREE from 'three';
import type { WorldRendererThree } from './worldRendererThree';
export declare function getSignTexture(worldRenderer: WorldRendererThree, blockEntity: any, isHanging: boolean, backSide?: boolean): THREE.Texture | undefined;
export declare function releaseSignTexture(texture: THREE.Texture): void;
export declare function disposeAllSignTextures(): void;
//# sourceMappingURL=signTextureCache.d.ts.map