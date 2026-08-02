import mcData from 'minecraft-data';
import { Block } from 'prismarine-block';
import { Vec3 } from 'vec3';
import { WorldBlockProvider } from 'mc-assets/dist/worldBlockProvider';
import { CustomBlockModels, BlockStateModelInfo } from './shared';
export declare function worldColumnKey(x: any, z: any): string;
export type ElementPrecomputed = {
    faces: {
        [face: string]: {
            dir: [number, number, number];
            corners: Array<{
                pos: number[];
                vertex: number[];
                uvs: number[];
                side1Dir: [number, number, number];
                side2Dir: [number, number, number];
                cornerDir: [number, number, number];
            }>;
        };
    };
};
type BlockDataPrecomputed = {
    initialMatrix?: any;
    initialShift?: any;
    elementsPrecomputed?: ElementPrecomputed[];
};
export type BlockModelPartsResolved = Array<Array<ReturnType<WorldBlockProvider['getAllResolvedModels0_1']>[number][number] & BlockDataPrecomputed>>;
export type WorldBlock = Omit<Block, 'position'> & {
    isCube: boolean;
    /** cache */
    models?: BlockModelPartsResolved | null;
    _originalProperties?: Record<string, any>;
    _properties?: Record<string, any>;
};
export declare class World {
    config: {
        version: string;
        worldMaxY: number;
        worldMinY: number;
        enableLighting: boolean;
        skyLight: number;
        smoothLighting: boolean;
        shadingTheme: "vanilla" | "high-contrast";
        cardinalLight: string;
        outputFormat: "threeJs" | "webgpu";
        debugModelVariant: undefined | number[];
        clipWorldBelowY: undefined | number;
        disableBlockEntityTextures: boolean;
        disableConversionCache: boolean;
        computeWireframeEdges: boolean;
        shaderCubeBlocks: boolean;
    };
    Chunk: typeof import('prismarine-chunk/types/index').PCChunk;
    columns: {
        [key: string]: import("prismarine-chunk/types/index").PCChunk;
    };
    blockCache: {};
    biomeCache: {
        [id: number]: mcData.Biome;
    };
    preflat: boolean;
    erroredBlockModel?: BlockModelPartsResolved;
    customBlockModels: Map<string, CustomBlockModels>;
    sentBlockStateModels: Set<string>;
    blockStateModelInfo: Map<string, BlockStateModelInfo>;
    constructor(version: any);
    getChannelLightNorm(pos: Vec3): {
        block: number;
        sky: number;
    };
    getLight(pos: Vec3, isNeighbor?: boolean, skipMoreChecks?: boolean, curBlockName?: string): number;
    addColumn(x: any, z: any, json: any): typeof import("prismarine-chunk").CommonChunk;
    removeColumn(x: any, z: any): void;
    getColumn(x: any, z: any): import("prismarine-chunk").PCChunk;
    setBlockStateId(pos: Vec3, stateId: any): boolean;
    getColumnByPos(pos: Vec3): import("prismarine-chunk").PCChunk;
    getBlock(pos: Vec3, blockProvider?: WorldBlockProvider, attr?: {
        hadErrors?: boolean;
    }): WorldBlock | null;
    shouldMakeAo(block: WorldBlock | null): boolean | undefined;
}
export {};
//# sourceMappingURL=world.d.ts.map