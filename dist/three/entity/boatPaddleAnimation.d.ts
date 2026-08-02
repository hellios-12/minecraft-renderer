import * as THREE from 'three';
export declare const BOAT_PADDLE_STEP: number;
export declare const BOAT_TICKS_PER_SECOND = 20;
export declare const BOAT_PADDLE_RADIANS_PER_SECOND: number;
export type BoatPaddleAnimationState = {
    leftActive: boolean;
    rightActive: boolean;
    leftPhase: number;
    rightPhase: number;
};
export type BoatPaddlePivotScratch = {
    current: THREE.Quaternion;
    rest: THREE.Quaternion;
    delta: THREE.Quaternion;
    euler: THREE.Euler;
};
export declare function createBoatPaddlePivotScratch(): BoatPaddlePivotScratch;
export declare function createBoatPaddleAnimationState(): BoatPaddleAnimationState;
export declare function advanceBoatPaddlePhase(phase: number, active: boolean, dt: number): number;
export declare function getVanillaBoatPaddleAngles(phase: number, side: 0 | 1): {
    xRot: number;
    yRot: number;
    zRot: number;
};
export declare function getBoatPaddleRelativeQuaternion(phase: number, side: 0 | 1, scratch: BoatPaddlePivotScratch): THREE.Quaternion;
export declare function applyBoatPaddlePivotRotation(pivot: THREE.Object3D, phase: number, side: 0 | 1, scratch: BoatPaddlePivotScratch): void;
export declare function syncBoatPaddleAnimationTargets(state: BoatPaddleAnimationState, leftActive: boolean, rightActive: boolean): void;
export declare function updateBoatPaddleAnimationState(state: BoatPaddleAnimationState, dt: number, leftPivot: THREE.Object3D | undefined, rightPivot: THREE.Object3D | undefined, scratch: BoatPaddlePivotScratch): void;
//# sourceMappingURL=boatPaddleAnimation.d.ts.map