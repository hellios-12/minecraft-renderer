/**
 * Sync port of Minecraft SectionOcclusionGraph BFS (v1 — no Octree/async/advanced ray-march).
 * @see extracted_minecraft_data/client/net/minecraft/client/renderer/SectionOcclusionGraph.java
 */
import { Direction } from '../../mesher-shared/visibilitySet';
export type OcclusionSectionRecord = {
    visibilitySet: number;
    worldX: number;
    worldY: number;
    worldZ: number;
};
export type OcclusionUpdateParams = {
    smartCull: boolean;
    cameraWorldX: number;
    cameraWorldY: number;
    cameraWorldZ: number;
    viewDistance: number;
    sectionHeight: number;
    worldMinY: number;
    worldMaxY: number;
};
export declare class OcclusionNode {
    readonly sectionKey: string;
    private sourceDirections;
    directions: number;
    readonly step: number;
    constructor(sectionKey: string, sourceDir: Direction | null, step: number);
    setDirections(fromParent: number, exitDir: Direction): void;
    hasDirection(dir: Direction): boolean;
    addSourceDirection(dir: Direction): void;
    hasSourceDirection(index: number): boolean;
    hasSourceDirections(): boolean;
}
export declare class SectionOcclusionGraph {
    private readonly sections;
    private readonly nodeByKey;
    private visibleKeys;
    private stepByKey;
    private needsFullUpdate;
    private lastCameraKey;
    registerSection(key: string, record: OcclusionSectionRecord): void;
    unregisterSection(key: string): void;
    invalidate(): void;
    getVisibleKeys(): ReadonlySet<string>;
    getStep(key: string): number | undefined;
    isVisible(key: string): boolean;
    update(params: OcclusionUpdateParams): Set<string>;
    private runFullUpdate;
    /** @see SectionOcclusionGraph.initializeQueueForFullUpdate */
    private initializeQueueForFullUpdate;
}
//# sourceMappingURL=sectionOcclusionGraph.d.ts.map