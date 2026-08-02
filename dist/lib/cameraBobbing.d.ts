export interface CameraBobResult {
    position: {
        x: number;
        y: number;
    };
    rotation: {
        x: number;
        z: number;
    };
}
export interface CameraBobInput {
    walkDist: number;
    prevWalkDist: number;
    bob: number;
    prevBob: number;
    partialTick: number;
}
export declare function computeCameraBob(input: CameraBobInput): CameraBobResult;
//# sourceMappingURL=cameraBobbing.d.ts.map