export type ColumnChunkEntry = {
    x: number;
    z: number;
    chunk: any | null;
};
export interface PacketCacheSet {
    has: (key: string) => boolean;
}
export interface PacketCaches {
    raw: PacketCacheSet;
    v17: PacketCacheSet;
    v16: PacketCacheSet;
}
export declare function columnCacheKey(x: number, z: number): string;
export declare function columnHasPacketCache(x: number, z: number, caches: PacketCaches): boolean;
export declare function columnDataAvailable(x: number, z: number, getColumn: (x: number, z: number) => any | null | undefined, caches: PacketCaches): boolean;
export declare function countWorldColumns3x3(x: number, z: number, getColumn: (x: number, z: number) => any | null | undefined): number;
export declare function countParsedCache3x3(x: number, z: number, caches: PacketCaches): number;
export declare function collectChunksForColumnUnion(x: number, z: number, getColumn: (x: number, z: number) => any | null | undefined, caches: PacketCaches): ColumnChunkEntry[];
export declare const SIDE_NEIGHBOR_OFFSETS: readonly [readonly [-16, 0], readonly [16, 0], readonly [0, -16], readonly [0, 16]];
export declare class PendingNeighborHealTracker {
    private awaiting;
    private colKey;
    recordMissingSide(columnX: number, columnZ: number, missingNeighborX: number, missingNeighborZ: number): void;
    takeColumnsAwaitingNeighbor(neighborX: number, neighborZ: number): Array<{
        x: number;
        z: number;
    }>;
    clearColumn(x: number, z: number): void;
    clear(): void;
}
//# sourceMappingURL=mesherWasmNeighborhood.d.ts.map