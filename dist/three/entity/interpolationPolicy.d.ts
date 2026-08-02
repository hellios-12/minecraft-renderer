export declare const LOCAL_MOVEMENT_TWEEN_DURATION_MS = 50;
export declare const ENTITY_TWEEN_DURATION_MS = 120;
export declare const SPECTATING_CAMERA_TWEEN_DURATION_MS = 150;
export declare const CAMERA_POSITION_EPSILON = 0.0001;
export type CameraMovementMode = 'local-player' | 'server-vehicle' | 'spectating';
export type UpdateCameraOptions = {
    movementMode?: CameraMovementMode;
    instant?: boolean;
};
export type Vec3Like = {
    x: number;
    y: number;
    z: number;
};
export type EntityRenderHints = {
    localVehicle?: boolean;
    localVehicleVerticalCameraLock?: 'horse';
    /** Render-only: lock locally controlled horse yaw to camera each frame. */
    localVehicleYawLock?: 'horse';
    boatWaterPatchVisible?: boolean;
    boatPaddleLeft?: boolean;
    boatPaddleRight?: boolean;
    passengerIds?: number[];
    passengerLayout?: 'boat' | 'minecart' | 'horse';
    /** @deprecated Use passengerIds */
    boatPassengerIds?: number[];
};
export type EntityWithRenderHints = {
    renderHints?: EntityRenderHints;
};
export declare function usesCameraSyncedVehiclePosition(entity: EntityWithRenderHints | undefined): boolean;
export declare function shouldApplyLocalHorseCameraYawLock(renderHints: EntityRenderHints | undefined): boolean;
/** Visual-only: align local horse model yaw with camera before head pose and passengers. */
export declare function applyLocalHorseCameraYawLock(sceneEntity: {
    rotation: {
        y: number;
    };
    userData: Record<string, unknown>;
}, cameraYaw: number): boolean;
export declare function getEntityTweenDurationMs(entity: EntityWithRenderHints | undefined, justAdded: boolean): number;
/** Rotation follows the same instant-vs-remote policy as entity position. */
export declare function getEntityRotationTweenDurationMs(entity: EntityWithRenderHints | undefined, justAdded: boolean): number;
export declare function samePosition(a: Vec3Like, b: Vec3Like, epsilon?: number): boolean;
export declare function getCameraMovementTweenDurationMs(mode: CameraMovementMode, instant?: boolean): number;
export declare function shouldRestartCameraPositionTween(args: {
    target: Vec3Like;
    currentTarget: Vec3Like | null;
    movementMode: CameraMovementMode;
    previousMovementMode: CameraMovementMode | null;
    instant: boolean;
}): boolean;
/** Locally ridden vehicle X/Z follow camera tween; Y uses latest server vehicle height. */
export declare function getLocalVehicleWorldPosition(cameraWorldPos: Vec3Like, vehicleY: number): Vec3Like;
export declare function resolveLocalVehicleWorldPosition(args: {
    cameraWorldPos: Vec3Like;
    rawVehicleY: number;
    eyeHeight: number;
    vehicleName: string | undefined;
    vehicleHeight: number;
    verticalCameraLock?: 'horse';
}): Vec3Like;
export declare function isRideableHorseEntityName(name?: string): boolean;
export declare function isRideableMinecartEntityName(name?: string): boolean;
export declare function getBoatPassengerSeatOffset(passengerIndex: number, passengerCount: number): number;
/** Vanilla 1.17.1 Boat#positionRider position, without applying the passenger pose. */
export declare function getBoatPassengerWorldPosition(boatWorldPos: Vec3Like, boatYaw: number, passengerIndex: number, passengerCount: number): Vec3Like;
/** Vanilla 1.17.1 minecart positionRider for a centered player passenger. */
export declare function getMinecartPassengerWorldPosition(minecartWorldPos: Vec3Like): Vec3Like;
/** Vanilla 1.17.1 AbstractHorse positionRider feet Y for a centered player passenger. */
export declare function getHorsePassengerWorldPosition(vehicleWorldPos: Vec3Like, name: string | undefined, height?: number): Vec3Like;
//# sourceMappingURL=interpolationPolicy.d.ts.map