type BlockMeta = {
    invisibleBlocks: Uint16Array;
    transparentBlocks: Uint16Array;
    noAoBlocks: Uint16Array;
    cullIdenticalBlocks: Uint16Array;
    occludingBlocks: Uint16Array;
    occludingLookup: Uint8Array;
};
export declare const getBlockMeta: (version: string) => BlockMeta;
export interface ChunkConversionResult {
    blockStates: Uint16Array;
    blockLight: Uint8Array;
    skyLight: Uint8Array;
    biomesArray: Uint8Array;
    invisibleBlocks: Uint16Array;
    transparentBlocks: Uint16Array;
    noAoBlocks: Uint16Array;
    cullIdenticalBlocks: Uint16Array;
    occludingBlocks: Uint16Array;
    blockCount: number;
}
/**
 * Convert a prismarine chunk to WASM format
 */
export declare function convertChunkToWasm(chunk: any, version: string, chunkX?: number, chunkZ?: number, worldMinY?: number, worldMaxY?: number, sectionY?: number, sectionHeight?: number): ChunkConversionResult;
export {};
//# sourceMappingURL=convertChunk.d.ts.map