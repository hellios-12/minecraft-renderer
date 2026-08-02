export declare const CAMERA_COLLISION_BYTES_PER_SECTION: number;
/**
 * Sparse 1-bit-per-block solidity cache for third-person voxel DDA.
 * Allocates a 512-byte section bitset only when it contains ≥1 solid block.
 */
export declare class CameraCollisionBlockCache {
    private readonly sections;
    private Chunk;
    private solidityTable;
    private worldMinY;
    private worldMaxY;
    constructor(version: string);
    setVersion(version: string): void;
    setWorldBounds(minY: number, worldHeight: number): void;
    clear(): void;
    /** Allocated 16³ section bitsets (512 bytes each). */
    getAllocatedSectionCount(): number;
    getAllocatedBytes(): number;
    removeColumn(chunkX: number, chunkZ: number): void;
    ingestColumn(chunkX: number, chunkZ: number, chunkJson: unknown): void;
    setBlockStateId(x: number, y: number, z: number, stateId: number): void;
    isSolidBlock(x: number, y: number, z: number): boolean;
}
//# sourceMappingURL=cameraCollisionBlockCache.d.ts.map