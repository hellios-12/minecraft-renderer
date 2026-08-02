import type { PlayerObjectType } from '../../lib/createPlayerObject';
export type NetworkHeadRotationState = {
    _networkHeadPitch?: number;
    _networkHeadYaw?: number;
    _remoteBoatRotationApplied?: boolean;
};
/** @deprecated Use NetworkHeadRotationState */
export type NetworkHeadPitchState = NetworkHeadRotationState;
export declare function storeNetworkHeadPitch(userData: NetworkHeadRotationState, pitch: unknown): void;
export declare function storeNetworkHeadYaw(userData: NetworkHeadRotationState, headYaw: unknown, fallbackYaw?: unknown): void;
export declare function getNetworkHeadPitch(userData: NetworkHeadRotationState): number;
export declare function applyNetworkHeadPitch(playerObject: PlayerObjectType, userData: NetworkHeadRotationState): void;
export declare function restoreGenericRemotePlayerHeadRotation(playerObject: PlayerObjectType, userData: NetworkHeadRotationState): void;
//# sourceMappingURL=networkHeadPitchRendering.d.ts.map