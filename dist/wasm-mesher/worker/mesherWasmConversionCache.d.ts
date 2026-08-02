import type { ChunkConversionResult } from '../bridge/convertChunk';
export declare const CONVERSION_CACHE_LIMIT = 64;
interface CacheEntry {
    chunkRef: any;
    version: string;
    worldMinY: number;
    worldMaxY: number;
    result: ChunkConversionResult;
}
export interface GetOrConvertResult {
    result: ChunkConversionResult;
    hit: boolean;
}
export declare function getOrConvertColumn(x: number, z: number, chunkRef: any, version: string, worldMinY: number, worldMaxY: number, convert: () => ChunkConversionResult, liveChunkRef?: any): GetOrConvertResult;
export declare function setConversionCacheLimit(n: number): void;
export declare function getConversionCacheLimit(): number;
export declare function invalidateConversion(x: number, z: number): boolean;
export declare function clearConversionCache(): void;
export declare function getConversionCacheSize(): number;
export declare function consumeConversionCacheStats(): {
    hits: number;
    misses: number;
};
export declare function _peekConversionCache(x: number, z: number): CacheEntry | undefined;
export {};
//# sourceMappingURL=mesherWasmConversionCache.d.ts.map