import { SectionOcclusionGraph, type OcclusionSectionRecord, type OcclusionUpdateParams } from './sectionOcclusionGraph';
export type { OcclusionSectionRecord, OcclusionUpdateParams };
export declare class SectionOcclusionCull {
    private readonly graph;
    private readonly registered;
    private lastVisible;
    registerSection(key: string, visibilitySet: number | undefined, worldX: number, worldY: number, worldZ: number): void;
    unregisterSection(key: string): void;
    invalidate(): void;
    update(params: OcclusionUpdateParams): Set<string>;
    isSectionVisible(key: string): boolean;
    hasRegisteredSection(key: string): boolean;
    getVisibleKeys(): ReadonlySet<string>;
    getStep(key: string): number | undefined;
    getGraph(): SectionOcclusionGraph;
}
export declare function hsvToRgb(step: number): number;
//# sourceMappingURL=sectionOcclusionCull.d.ts.map