import * as THREE from 'three';
export interface TintPaletteEntry {
    r: number;
    g: number;
    b: number;
}
export declare class TintPalette {
    private entries;
    private colorToIndex;
    private categoryBiomeToIndex;
    private texture;
    private ready;
    /** Pack [r,g,b] (0-1 floats) into a 24-bit integer for fast lookup */
    private packColor;
    /** Add a tint entry, returns its palette index (reuses duplicates) */
    add(r: number, g: number, b: number, category: string, key: string): number;
    /** Look up tint index for a specific block face */
    getTintIndex(faceTintIndex: number | undefined, blockName: string, blockProps: Record<string, any>, biome: string): number;
    /** Get the palette entry at a given index */
    getEntry(index: number): TintPaletteEntry;
    /** Total number of palette entries */
    get size(): number;
    /** Build RGBA Float32Array from palette entries (for DataTexture) */
    private buildTextureData;
    /** Create or update the Three.js DataTexture */
    createTexture(): THREE.DataTexture;
    getTexture(): THREE.DataTexture | null;
    isReady(): boolean;
    /** Precompute the full palette using tints data */
    static fromTintsData(tintsData: Record<string, any>): TintPalette;
}
//# sourceMappingURL=tintPalette.d.ts.map