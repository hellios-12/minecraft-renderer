/**
 * Maps texture atlas positions to 12-bit absolute tile indices used by the
 * instanced shader-cube path.
 *
 * Requirement: atlas MUST be 1024×1024 with 16×16 tiles (max 4096 tiles fits in 12 bits).
 * If atlas dimensions differ, `isValid()` returns false and callers must fall back to
 * the legacy vertex path.
 */
export interface TextureAtlasInfo {
    /** Atlas width in pixels (must be 1024) */
    width: number;
    /** Atlas height in pixels (must be 1024) */
    height: number;
    /** Tile size in pixels (must be 16) */
    tileSize: number;
    /** Resolution scale (suSv = tileSize * resolution) */
    suSv: number;
    /** Texture name → atlas position */
    textures: Record<string, TextureEntry>;
}
export interface TextureEntry {
    /** Horizontal pixel offset within atlas */
    u: number;
    /** Vertical pixel offset within atlas */
    v: number;
    /** Horizontal pixel count (typically 16 or suSv) */
    su: number;
    /** Vertical pixel count (typically 16 or suSv) */
    sv: number;
}
export declare class TextureIndexMapping {
    private atlasWidth;
    private atlasHeight;
    private tileSize;
    private tilesPerRow;
    private maxTiles;
    private valid;
    constructor(atlasInfo: TextureAtlasInfo);
    /** True when 12-bit texIndex encoding is safe (atlas matches the shader's layout). */
    isValid(): boolean;
    /** Tiles per row in the atlas */
    getTilesPerRow(): number;
    /**
     * Compute absolute tile index from atlas pixel position.
     * Returns -1 if the position is out of range or gate fails.
     */
    tileIndexFromPixelCoords(u: number, v: number): number;
    /**
     * Get tile index for a texture entry from the atlas.
     * Returns -1 if the texture spans multiple tiles or gate fails.
     */
    tileIndexFromTextureEntry(entry: TextureEntry): number;
    /**
     * Look up tile index by texture name.
     * Returns -1 if the texture is not found, spans multiple tiles, or gate fails.
     */
    tileIndexFromTextureName(textureName: string, atlasInfo: TextureAtlasInfo): number;
}
//# sourceMappingURL=textureIndexMapping.d.ts.map