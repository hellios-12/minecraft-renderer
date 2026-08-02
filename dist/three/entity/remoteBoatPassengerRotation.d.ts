import type { PlayerObjectType } from '../../lib/createPlayerObject';
import { type NetworkHeadRotationState } from './networkHeadPitchRendering';
export type RemoteBoatPassengerEntity = {
    rotation: {
        y: number;
        set: (x: number, y: number, z: number) => unknown;
    };
    visible: boolean;
    playerObject?: PlayerObjectType;
    userData: NetworkHeadRotationState & {
        _passengerVehicleId?: string;
        _boatPassengerVehicleId?: string;
        _rotTween?: {
            stop: () => unknown;
        };
    };
};
export type RemoteBoatPassengerVehicle = {
    rotation: {
        y: number;
    };
    realName?: string;
    originalEntity: {
        name: string;
    };
};
export declare function getAnchoredVehicleId(userData: RemoteBoatPassengerEntity['userData']): string | undefined;
export declare function stopRemotePassengerRotationTween(userData: RemoteBoatPassengerEntity['userData']): void;
export declare function applyRemoteBoatPassengerRotation(params: {
    passenger: RemoteBoatPassengerEntity;
    vehicle: RemoteBoatPassengerVehicle;
    vehicleYaw: number;
    networkHeadYaw: number;
}): void;
export declare function restoreGenericRemotePassengerRotation(passenger: RemoteBoatPassengerEntity): void;
export declare function processRemoteBoatPassengerRotation(params: {
    passenger: RemoteBoatPassengerEntity;
    vehicle: RemoteBoatPassengerVehicle | undefined;
    syncArmor?: () => void;
}): void;
export declare function processRemoteBoatPassengerRotations(params: {
    entities: Record<string, RemoteBoatPassengerEntity | undefined>;
    syncArmor: (passenger: RemoteBoatPassengerEntity) => void;
}): void;
//# sourceMappingURL=remoteBoatPassengerRotation.d.ts.map