import { PlayerObject, PlayerAnimation } from 'skinview3d';
import * as THREE from 'three';
export type PlayerObjectType = PlayerObject & {
    animation?: PlayerAnimation;
    realPlayerUuid: string;
    realUsername: string;
};
/** Log-depth world: opaque cutout mats (alphaTest + depthWrite, not transparent sort). */
export declare function configurePlayerSkinMaterials(playerObject: PlayerObject): void;
export declare function createPlayerObject(options: {
    username?: string;
    uuid?: string;
    scale?: number;
}): {
    playerObject: PlayerObjectType;
    wrapper: THREE.Group;
};
export declare const applySkinToPlayerObject: (playerObject: PlayerObjectType, skinUrl: string) => Promise<void>;
//# sourceMappingURL=createPlayerObject.d.ts.map