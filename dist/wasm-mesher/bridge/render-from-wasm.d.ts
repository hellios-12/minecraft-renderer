import type { ExportedWorldGeometry, ExportedSection } from '../../mesher-shared/exportedGeometryTypes';
import type { MesherGeometryOutput } from '../../mesher-shared/shared';
import type { World } from '../../mesher-shared/world';
interface WasmBlockFaceData {
    position: [number, number, number];
    block_state_id: number;
    visible_faces: number;
    ao_data: number[][];
    light_data?: number[][];
    sky_light_data?: number[][];
    block_light_data?: number[][];
    light_combined?: number[][];
}
export interface WasmGeometryOutput {
    blocks: WasmBlockFaceData[];
    block_count: number;
    block_iterations: number;
    /**
     * Per-(x,z) max non-invisible block Y for the meshed column, indexed as
     * `z * 16 + x`. Sentinel value `-32768` = no block in that column.
     *
     * Populated by Rust `Mesher::generate_with_world` (see
     * `wasm-mesher/src/mesher.rs`, field `heightmap`). serde_wasm_bindgen
     * serializes `Vec<i16>` as a plain JS `number[]`, which is why the type
     * here is `ArrayLike<number>` rather than `Int16Array` — the runtime
     * adapter `extractColumnHeightmap` handles both shapes.
     *
     * Used at runtime by `mesherWasm.ts` `processColumnTick`: every column
     * tick the WASM heightmap is extracted via `extractColumnHeightmap` and
     * posted to the main thread as a `'heightmap'` message. JS
     * `computeHeightmap` is now only a fallback (length mismatch / missing
     * field) and a safety-net for empty columns at chunk load. Empty-column
     * semantics are aligned: both Rust and JS use `-32768` (see
     * `EMPTY_COLUMN_HEIGHTMAP_SENTINEL`).
     */
    heightmap?: ArrayLike<number> | null;
}
/**
 * Extract a 256-entry Int16Array heightmap from a full-column WASM mesher
 * result, indexed as `z * 16 + x` (matching the JS `computeHeightmap`
 * convention). Returns `null` when the WASM output does not carry a
 * heightmap or carries one of unexpected length — in that case the
 * caller MUST fall back to JS `computeHeightmap` rather than guess.
 *
 * This adapter is the single place that converts Rust's `Vec<i16>` heightmap
 * shape into a transferable typed array. Tests exercise this same adapter so
 * future runtime usage and parity assertions cannot drift apart.
 */
export declare function extractColumnHeightmap(wasmOutput: {
    heightmap?: ArrayLike<number> | null;
} | null | undefined): Int16Array | null;
export type RenderWasmOptions = {
    /** Section height in blocks. Shader-cube path requires 16; other values keep legacy. */
    sectionHeight?: number;
    /**
     * Pack full-cube blocks into instanced shader words.
     * Set false in parity tests that expect legacy vertex buffers only.
     */
    shaderCubes?: boolean;
};
/**
 * Render WASM mesher output to Three.js geometry
 */
export declare function renderWasmOutputToGeometry(wasmOutput: WasmGeometryOutput, version: string, sectionKey: string, sectionPosition: {
    x: number;
    y: number;
    z: number;
}, world?: World, options?: RenderWasmOptions): ExportedSection;
/**
 * Split a single full-column WASM mesher result into per-section
 * `ExportedSection` outputs by filtering `wasmResult.blocks` per requested
 * section's Y range and invoking `renderWasmOutputToGeometry` once per
 * section.
 *
 * Why split at the block level (and not after geometry generation):
 *   - Liquids (water/lava), signs/heads/banners metadata, AO/light arrays
 *     and index numbering are computed inside `renderWasmOutputToGeometry`.
 *     Splitting *finished* vertex/index buffers would silently break those.
 *   - Filtering blocks by Y range and re-running the post-processor per
 *     section keeps the output identical to the existing per-section path.
 *
 * Y=15/16 (and any other inter-section) seam handling:
 *   - The Rust mesher produced `wasmResult` over the full column, so each
 *     block's `visible_faces`, `ao_data` and `light_data` already account
 *     for its true neighbors — including the block above at the section
 *     seam (e.g. a Y=15 top face is correctly suppressed when Y=16 is
 *     opaque, even though Y=16 lives in the next render section).
 *   - This helper therefore does NOT need to widen the per-section block
 *     window: a strict `[sy*sectionHeight, sy*sectionHeight + sectionHeight)`
 *     filter on `block.position[1]` is sufficient. The neighbor information
 *     is already baked into each block's per-face mask/AO/light arrays.
 *
 * Empty sections: sections with no blocks in range still get a call into
 * `renderWasmOutputToGeometry` with an empty `blocks` array, so the
 * returned `ExportedSection` shape matches what the per-section path
 * produces for an empty section (empty positions/normals/colors/uvs/
 * indices arrays).
 *
 * Note: this pure helper is not gated internally; callers decide whether
 * column meshing is enabled.
 */
export declare function splitColumnWasmOutputToSections(fullColumnOutput: WasmGeometryOutput, requestedSectionKeys: Array<{
    x: number;
    y: number;
    z: number;
}>, ctx: {
    version: string;
    world?: World;
    sectionHeight?: number;
    shaderCubes?: boolean;
}): Map<string, {
    exported: ExportedSection;
    blocksCount: number;
}>;
/**
 * Convert WASM output to exported geometry format
 */
export declare function wasmOutputToExportFormat(wasmOutput: WasmGeometryOutput, version: string, sectionKey: string, sectionPosition: {
    x: number;
    y: number;
    z: number;
}, cameraPosition?: {
    x: number;
    y: number;
    z: number;
}, cameraRotation?: {
    pitch: number;
    yaw: number;
}, world?: World): ExportedWorldGeometry;
/**
 * Convert mesher geometry output to exported geometry format
 * Takes the output from getSectionGeometry() and converts it to ExportedWorldGeometry
 */
export declare function mesherGeometryToExportFormat(mesherGeometry: MesherGeometryOutput, version: string, cameraPosition?: {
    x: number;
    y: number;
    z: number;
}, cameraRotation?: {
    pitch: number;
    yaw: number;
}, skyLevel?: number): ExportedWorldGeometry;
export {};
//# sourceMappingURL=render-from-wasm.d.ts.map