/**
 * Player State - Initial player state for renderer.
 */
import { PlayerStateReactive } from '../playerState/playerState';
/**
 * Get initial player state with default values.
 */
export declare const getInitialPlayerState: () => PlayerStateReactive;
/**
 * Get player state utils.
 */
export declare const getPlayerStateUtils: (reactive: PlayerStateReactive) => {
    isSpectator(): boolean;
    isSpectatingEntity(): boolean;
    isThirdPerson(): boolean;
};
/**
 * Get initial player state for renderer.
 */
export declare const getInitialPlayerStateRenderer: () => {
    reactive: {
        playerSkin: string | undefined;
        inWater: boolean;
        waterBreathing: boolean;
        backgroundColor: [number, number, number];
        ambientLight: number;
        directionalLight: number;
        eyeHeight: number;
        gameMode: import("../playerState/types").GameMode | undefined;
        lookingAtBlock: {
            x: number;
            y: number;
            z: number;
            face?: number;
            shapes: import("../playerState/types").BlocksShapes;
        } | undefined;
        diggingBlock: {
            x: number;
            y: number;
            z: number;
            stage: number;
            face?: number;
            mergedShape: import("../playerState/types").BlockShape | undefined;
        } | undefined;
        movementState: import("../playerState/types").MovementState;
        onGround: boolean;
        sneaking: boolean;
        flying: boolean;
        sprinting: boolean;
        walkDist: number;
        prevWalkDist: number;
        bob: number;
        prevBob: number;
        itemUsageTicks: number;
        username: string;
        onlineMode: boolean;
        cardinalLight: string;
        lightingDisabled: boolean;
        shouldHideHand: boolean;
        heldItemMain: import("../playerState/types").HandItemBlock | undefined;
        heldItemOff: import("../playerState/types").HandItemBlock | undefined;
        perspective: import("../playerState/types").CameraPerspective;
        onFire: boolean;
        fovMultiplier: number;
        cameraSpectatingEntity: number | undefined;
        team: import("../playerState/types").Team | undefined;
    };
};
//# sourceMappingURL=playerState.d.ts.map