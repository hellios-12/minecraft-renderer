import type { Vec3Like } from './interpolationPolicy';
export type PassengerLayout = 'boat' | 'minecart' | 'horse';
export declare function shouldSkipLocalPassengerAnchoring(layout: PassengerLayout): boolean;
export declare function isFiniteVec3(value: Vec3Like | undefined | null): value is Vec3Like;
export type VehiclePassengerRenderState = {
    position: {
        set: (x: number, y: number, z: number) => unknown;
    };
    userData: {
        _posTween?: {
            stop: () => unknown;
        };
        _tweenTarget?: Vec3Like;
        _passengerVehicleId?: string;
        /** @deprecated Use _passengerVehicleId */
        _boatPassengerVehicleId?: string;
    };
};
export declare function anchorVehiclePassengerPosition(passenger: VehiclePassengerRenderState, passengerWorldPos: Vec3Like, vehicleId: string): void;
export declare function releaseVehiclePassengerPosition(passenger: VehiclePassengerRenderState, vehicleId: string, currentWorldPos: Vec3Like | undefined): boolean;
/** @deprecated Use anchorVehiclePassengerPosition */
export declare const anchorBoatPassengerPosition: typeof anchorVehiclePassengerPosition;
/** @deprecated Use releaseVehiclePassengerPosition */
export declare const releaseBoatPassengerPosition: typeof releaseVehiclePassengerPosition;
//# sourceMappingURL=vehiclePassengerRendering.d.ts.map