import { isBoatEntityName } from './boatModelRotation';
/** Vanilla 1.17.1 `Boat.clampRotation` limit (degrees → radians). */
export declare const BOAT_PASSENGER_MAX_HEAD_YAW_RAD: number;
export declare function normalizeYawDelta(from: number, to: number): number;
export declare function normalizeYaw(yaw: number): number;
export declare function clampBoatPassengerRelativeHeadYaw(relativeYaw: number): number;
/** Clamp absolute look yaw for a boat passenger (vanilla `Boat.clampRotation`). */
export declare function getClampedBoatPassengerYaw(requestedYaw: number, boatYaw: number): number;
export type BoatPassengerThirdPersonRotation = {
    bodyYaw: number;
    headYaw: number;
    headPitch: number;
    effectiveCameraYaw: number;
};
export declare function resolveBoatPassengerThirdPersonRotation(params: {
    cameraYaw: number;
    cameraPitch: number;
    vehicleYaw: number;
}): BoatPassengerThirdPersonRotation;
export declare function shouldApplyBoatPassengerRotation(params: {
    isAnchoredPassenger: boolean;
    vehicleName: string | undefined;
    vehicleYaw: number | undefined;
}): boolean;
export declare function shouldApplyBoatPassengerThirdPersonRotation(params: {
    isThirdPerson: boolean;
    isAnchoredPassenger: boolean;
    vehicleName: string | undefined;
    vehicleYaw: number | undefined;
}): boolean;
export { isBoatEntityName };
//# sourceMappingURL=boatPassengerRotation.d.ts.map