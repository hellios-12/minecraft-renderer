import { Vec3 } from 'vec3';
import type { WorldBlockProvider } from 'mc-assets/dist/worldBlockProvider';
import type { World, WorldBlock as Block } from './world';
/**
 * Block name + properties for model lookup. Only runs neighbor/preflat work when
 * `world.preflat` (legacy); modern block-state worlds use `fromStateId` only.
 */
export declare function resolveBlockPropertiesForMeshing(world: World | undefined, cursor: Vec3, blockProvider: WorldBlockProvider, blockStateId: number, PrismarineBlockCtor: {
    fromStateId: (id: number, biome: number) => Block;
}): {
    name: string;
    properties: Record<string, unknown>;
};
export declare function preflatBlockCalculation(block: Block, world: World, position: Vec3): {} | undefined;
//# sourceMappingURL=blockPropertiesForMeshing.d.ts.map