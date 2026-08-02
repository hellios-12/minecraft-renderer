import { BlockType } from '../playground/shared';
export declare const SECTION_HEIGHT = 16;
export declare const defaultMesherConfig: {
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
    /** Pack eligible full-cube faces as GPU-instanced shader words during WASM post-processing. */
    shaderCubeBlocks: boolean;
};
export type CustomBlockModels = {
    [blockPosKey: string]: string;
};
export type MesherConfig = typeof defaultMesherConfig;
/** Vertex/index arrays for one opaque or blend geometry bucket. */
export type MesherGeometryBucketData = {
    positions: Float32Array;
    normals: Float32Array;
    colors: Float32Array;
    skyLights: Float32Array;
    blockLights: Float32Array;
    uvs: Float32Array;
    indices: Uint32Array | Uint16Array;
};
export type MesherGeometryOutput = {
    sectionYNumber: number;
    chunkKey: string;
    sectionStartY: number;
    sectionEndY: number;
    sectionStartX: number;
    sectionEndX: number;
    sectionStartZ: number;
    sectionEndZ: number;
    sx: number;
    sy: number;
    sz: number;
    positions: any;
    normals: any;
    colors: any;
    skyLights: any;
    blockLights: any;
    uvs: any;
    /** Per-section blend geometry (water, lava, stained glass, ice, etc.). */
    blend?: MesherGeometryBucketData;
    indices: Uint32Array | Uint16Array | number[];
    indicesCount: number;
    using32Array: boolean;
    tiles: Record<string, BlockType>;
    heads: Record<string, any>;
    signs: Record<string, any>;
    banners: Record<string, any>;
    hadErrors: boolean;
    blocksCount: number;
    wireframePositions?: Float32Array;
    customBlockModels?: CustomBlockModels;
    /** GPU-instanced full-cube faces packed by the mesher; consumed by ChunkMeshManager. */
    shaderCubes?: {
        words: Uint32Array;
        count: number;
        formatVersion: 3;
    };
    /** Packed VisibilitySet (36 bits) for section occlusion / smart cull. */
    visibilitySet?: number;
};
export interface MesherMainEvents {
    geometry: {
        type: 'geometry';
        key: string;
        geometry: MesherGeometryOutput;
        workerIndex: number;
    };
    sectionFinished: {
        type: 'sectionFinished';
        key: string;
        workerIndex: number;
        processTime?: number;
        pre?: number;
        wasm?: number;
        post?: number;
        preTargetConvert?: number;
        preNeighborConvert?: number;
        preNeighborCount?: number;
        preTypedArrayBuild?: number;
        preOther?: number;
        preCacheHits?: number;
        preCacheMisses?: number;
        chunkCount?: number;
        worldColumns3x3?: number;
        parsedCache3x3?: number;
        columnMeshPath?: string;
    };
    neighborDataArrived: {
        type: 'neighborDataArrived';
        x: number;
        z: number;
        workerIndex: number;
    };
    blockStateModelInfo: {
        type: 'blockStateModelInfo';
        info: Record<string, BlockStateModelInfo>;
    };
    heightmap: {
        type: 'heightmap';
        key: string;
        heightmap: Int16Array;
    };
    /** Reply to `{ type: 'mc-web-ping', t?, workerIndex? }` from the main thread (not batched in worker). */
    mcWebPong: {
        type: 'mc-web-pong';
        workerIndex: number;
        t?: number;
        recvAt?: number;
    };
}
export type MesherMainEvent = MesherMainEvents[keyof MesherMainEvents];
export type HighestBlockInfo = {
    y: number;
    stateId: number | undefined;
    biomeId: number | undefined;
};
export type BlockStateModelInfo = {
    cacheKey: string;
    issues: string[];
    modelNames: string[];
    conditions: string[];
};
export declare const getBlockAssetsCacheKey: (stateId: number, modelNameOverride?: string) => string;
//# sourceMappingURL=shared.d.ts.map