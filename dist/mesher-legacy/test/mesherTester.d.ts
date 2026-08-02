import { PCChunk } from 'prismarine-chunk';
import { Vec3 } from 'vec3';
import MinecraftData from 'minecraft-data';
import { World as MesherWorld } from '../../mesher-shared/world';
interface Options {
    chunkOverride?: PCChunk;
    noDebugTiles?: boolean;
}
export declare const setup: (version: any, initialBlocks: Array<[number[], string]>, options?: Options) => {
    mesherWorld: MesherWorld;
    setLight: (x: number, y: number, z: number, val?: number) => void;
    getLights: () => any;
    getGeometry: () => {
        centerFaces: number;
        totalTiles: number;
        centerTileNeighbors: number;
        faces: import("../../playground/shared").BlockFaceType[];
        attr: import("../../mesher-shared/shared").MesherGeometryOutput;
    };
    pos: Vec3;
    mcData: MinecraftData.IndexedData;
    reload: () => void;
    chunk: PCChunk;
};
export {};
//# sourceMappingURL=mesherTester.d.ts.map