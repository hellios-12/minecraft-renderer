import { BlockModelPartsResolved } from './world';
export type BlockElement = NonNullable<BlockModelPartsResolved[0][0]['elements']>[0];
export declare function buildRotationMatrix(axis: any, degree: any): number[][];
export declare function vecadd3(a: any, b: any): any;
export declare function vecsub3(a: any, b: any): any;
export declare function matmul3(matrix: any, vector: any): [number, number, number];
export declare function matmulmat3(a: any, b: any): number[][];
export declare function buildElementRotation(rotation: any): {
    localMatrix: number[][];
    localShift: any;
};
export declare const elemFaces: {
    up: {
        dir: number[];
        mask1: number[];
        mask2: number[];
        corners: number[][];
    };
    down: {
        dir: number[];
        mask1: number[];
        mask2: number[];
        corners: number[][];
    };
    east: {
        dir: number[];
        mask1: number[];
        mask2: number[];
        corners: number[][];
    };
    west: {
        dir: number[];
        mask1: number[];
        mask2: number[];
        corners: number[][];
    };
    north: {
        dir: number[];
        mask1: number[];
        mask2: number[];
        corners: number[][];
    };
    south: {
        dir: number[];
        mask1: number[];
        mask2: number[];
        corners: number[][];
    };
};
//# sourceMappingURL=modelsGeometryCommon.d.ts.map