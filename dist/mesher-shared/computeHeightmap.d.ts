import { World } from './world';
/**
 * Sentinel value written to the heightmap for any column that contains no
 * non-INVISIBLE block in `[worldMinY, worldMaxY]`. Matches the value that
 * Rust's `wasm-mesher` writes for empty columns in its `Vec<i16>` heightmap,
 * so JS and Rust heightmaps are element-wise comparable.
 *
 * Downstream consumers (e.g. `src/three/modules/rain.ts`) MUST treat this
 * value as "no surface" rather than as a real Y coordinate.
 */
export declare const EMPTY_COLUMN_HEIGHTMAP_SENTINEL = -32768;
/**
 * Compute the surface heightmap for one 16x16 chunk column.
 *
 * Returns a 256-entry Int16Array indexed as `z * 16 + x`, where each entry is
 * the world-Y of the highest non-INVISIBLE block in that column, or
 * `EMPTY_COLUMN_HEIGHTMAP_SENTINEL` (-32768) if no such block exists.
 *
 * Shared by the JS-mode mesher (`mesher.ts`) and WASM-mode mesher
 * (`mesherWasm.ts`) `getHeightmap` handlers to guarantee element-wise parity.
 */
export declare function computeHeightmap(world: World, chunkX: number, chunkZ: number): Int16Array;
/**
 * Shared `getHeightmap` worker-handler logic.
 *
 * Both `mesher.ts` and `mesherWasm.ts` route their `case 'getHeightmap'` here so
 * the post-message payload (key + heightmap) is computed in exactly one place.
 * Test fixtures (see `wasm-mesher/test-section-boundary.ts`) invoke this helper
 * directly to exercise the real handler path end-to-end.
 */
export declare function handleGetHeightmap(world: World, x: number, z: number): {
    key: string;
    heightmap: Int16Array;
};
//# sourceMappingURL=computeHeightmap.d.ts.map