/**
 * Port of Minecraft VisGraph — flood-fill air pockets in a 16³ section.
 * @see extracted_minecraft_data/client/net/minecraft/client/renderer/chunk/VisGraph.java
 */
import { VisibilitySet } from './visibilitySet';
export declare class VisGraph {
    private readonly bitSet;
    private empty;
    setOpaque(x: number, y: number, z: number): void;
    resolve(): VisibilitySet;
    private floodFill;
    private addEdges;
    private getNeighborIndexAtFace;
}
export declare function computeSectionVisibilitySet(sectionHeight: number, isOpaqueAt: (lx: number, ly: number, lz: number) => boolean): number;
export { packVisibilitySet } from './visibilitySet';
//# sourceMappingURL=visGraph.d.ts.map