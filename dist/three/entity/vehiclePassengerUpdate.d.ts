import { type EntityRenderHints, type Vec3Like } from './interpolationPolicy';
import { type VehiclePassengerRenderState } from './vehiclePassengerRendering';
export type VehiclePassengerSceneEntity = VehiclePassengerRenderState & {
    playerObject?: unknown;
    originalEntity: {
        id: number;
    };
};
export type VehiclePassengerVehicle = {
    originalEntity: {
        id: number | string;
        name: string;
        height?: number;
    };
    userData: {
        renderHints?: EntityRenderHints;
    };
    rotation: {
        y: number;
    };
    realName?: string;
};
export declare function updateVehiclePassengerPositions(args: {
    entities: Record<string, VehiclePassengerSceneEntity | VehiclePassengerVehicle>;
    localPlayer: VehiclePassengerSceneEntity | null;
    getWorldPosition: (target: unknown) => Vec3Like | undefined;
}): Set<VehiclePassengerSceneEntity>;
//# sourceMappingURL=vehiclePassengerUpdate.d.ts.map