/**
 * Port of Minecraft VisibilitySet — 6×6 face connectivity matrix for section air pockets.
 * @see extracted_minecraft_data/client/net/minecraft/client/renderer/chunk/VisibilitySet.java
 */
/** Java Direction.values() order: DOWN, UP, NORTH, SOUTH, WEST, EAST */
export declare enum Direction {
    DOWN = 0,
    UP = 1,
    NORTH = 2,
    SOUTH = 3,
    WEST = 4,
    EAST = 5
}
export declare const DIRECTIONS: readonly Direction[];
/** All 36 bits set — fail-open default when visibility data is missing. */
export declare const VISIBILITY_SET_ALL_TRUE: number;
export declare class VisibilitySet {
    private data;
    add(faces: Set<Direction>): void;
    set(a: Direction, b: Direction, value: boolean): void;
    setAll(value: boolean): void;
    visibilityBetween(a: Direction, b: Direction): boolean;
    static allTrue(): VisibilitySet;
    static allFalse(): VisibilitySet;
    private setBit;
    private getBit;
}
export declare function packVisibilitySet(vs: VisibilitySet): number;
export declare function unpackVisibilitySet(bits: number): VisibilitySet;
export declare function visibilityBetweenPacked(bits: number, a: Direction, b: Direction): boolean;
export declare function oppositeDirection(dir: Direction): Direction;
//# sourceMappingURL=visibilitySet.d.ts.map