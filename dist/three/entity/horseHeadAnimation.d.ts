import * as THREE from 'three';
export declare const HORSE_HEAD_PIVOT: {
    readonly x: 0;
    readonly y: 1.25;
    readonly z: -0.75;
};
export declare const HORSE_HEAD_MAX_YAW: number;
export declare const HORSE_HEAD_TICK_SECONDS = 0.05;
export type HorseHeadRig = THREE.Group & {
    userData: THREE.Group['userData'] & {
        horseHeadParts: THREE.Object3D[];
    };
};
export declare const HORSE_HEAD_RIG_USER_DATA_KEY = "_horseHeadRig";
export declare const HORSE_HEAD_ANIMATION_USER_DATA_KEY = "_horseHeadAnimation";
/**
 * Reparents every horse head-related OBJ object under the vanilla head_parts
 * pivot while retaining each object's world transform.
 */
export declare function createHorseHeadRig(root: THREE.Object3D): HorseHeadRig;
export type HorseHeadPoseInput = {
    entityPitch: number;
    headYaw: number;
    bodyYaw: number;
    limbSwing: number;
    limbSwingAmount: number;
};
export type HorseHeadPose = {
    pitch: number;
    yaw: number;
};
export declare function normalizeYawDelta(fromYaw: number, toYaw: number): number;
export declare function calculateHorseHeadPose(input: HorseHeadPoseInput): HorseHeadPose;
export type HorseHeadAnimationState = {
    lastPosition?: {
        x: number;
        z: number;
    };
    pendingPosition?: {
        x: number;
        z: number;
    };
    prevLimbSwing: number;
    limbSwing: number;
    prevLimbSwingAmount: number;
    limbSwingAmount: number;
    elapsedSeconds: number;
    tickAccumulatorSeconds: number;
};
export declare function createHorseHeadAnimationState(): HorseHeadAnimationState;
/** Save authoritative entity coordinates until the next animation tick. */
export declare function setHorseHeadAnimationPosition(state: HorseHeadAnimationState, position: {
    x: number;
    z: number;
}): void;
/** Advance using authoritative entity coordinates, before camera transforms. */
export declare function advanceHorseHeadAnimation(state: HorseHeadAnimationState, position: {
    x: number;
    z: number;
}): void;
export declare function getInterpolatedHorseHeadAnimation(state: HorseHeadAnimationState, partialTick: number): {
    limbSwing: number;
    limbSwingAmount: number;
};
export declare function updateHorseHeadAnimationFrame(state: HorseHeadAnimationState, deltaSeconds: number): {
    limbSwing: number;
    limbSwingAmount: number;
};
export declare function applyHorseHeadPose(rig: THREE.Object3D, pose: HorseHeadPose): void;
//# sourceMappingURL=horseHeadAnimation.d.ts.map