import { World } from './world';
import { MesherGeometryOutput } from './shared';
export { preflatBlockCalculation, resolveBlockPropertiesForMeshing } from './blockPropertiesForMeshing';
/** Mutable geometry bucket used while meshing (opaque or blend). */
export type MesherGeometryBucket = {
    positions: number[];
    normals: number[];
    colors: number[];
    skyLights: number[];
    blockLights: number[];
    uvs: number[];
    indices: number[];
    indicesCount: number;
};
export declare function isSemiTransparentBlockName(name: string): boolean;
export declare function getSectionGeometry(sx: number, sy: number, sz: number, world: World, readHeight?: number): MesherGeometryOutput;
export declare const setBlockStatesData: (blockstatesModels: any, blocksAtlas: any, _needTiles?: boolean, useUnknownBlockModel?: boolean, version?: string, mcData?: any) => void;
export declare function computeWireframeEdgesJS(positions: Float32Array | number[], indices: Uint32Array | Uint16Array | number[]): Float32Array;
//# sourceMappingURL=models.d.ts.map