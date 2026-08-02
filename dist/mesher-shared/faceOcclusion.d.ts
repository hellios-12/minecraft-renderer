import type { WorldBlockProvider } from 'mc-assets/dist/worldBlockProvider';
import type { BlockElement } from './modelsGeometryCommon';
export type CardinalDir = [number, number, number];
type BlockStateInfo = {
    stateId: number;
    name: string;
};
export declare function resetFaceOcclusionCache(): void;
export declare function oppositeDir(dir: CardinalDir): CardinalDir;
export declare function roundCardinalDir(dir: [number, number, number]): CardinalDir;
export declare function buildModelGlobalMatrix(model: {
    x?: number;
    y?: number;
    z?: number;
}): number[][] | null;
export declare function blockRendersSolid(block: {
    name: string;
    transparent?: boolean;
}): boolean;
export declare function getOcclusionShape(version: string, stateId: number, worldDir: CardinalDir, blockProvider: WorldBlockProvider): Uint16Array;
export declare function faceIsCulled(version: string, currentElement: BlockElement, faceName: string, neighborStateId: number, currentBlock: BlockStateInfo, blockProvider: WorldBlockProvider, worldFaceDir: CardinalDir, globalMatrix: number[][] | null): boolean;
export {};
//# sourceMappingURL=faceOcclusion.d.ts.map