import { Block } from 'prismarine-block';
import { IndexedData } from 'minecraft-data';
import * as THREE from 'three';
import { BlockModelPartsResolved } from './world';
type NeighborSide = 'up' | 'down' | 'east' | 'west' | 'north' | 'south';
type Neighbors = Partial<Record<NeighborSide, boolean>>;
export declare const renderBlockThreeAttr: (models: BlockModelPartsResolved, block: Block | undefined, biome: string, mcData: IndexedData, variants?: never[], neighbors?: Neighbors) => Record<string, any>;
export declare const renderBlockThree: (...args: Parameters<typeof renderBlockThreeAttr>) => THREE.BufferGeometry<THREE.NormalBufferAttributes, THREE.BufferGeometryEventMap>;
export declare const getThreeBlockModelGroup: (material: THREE.Material, ...args: Parameters<typeof renderBlockThree>) => THREE.Group<THREE.Object3DEventMap>;
export declare const setBlockPosition: (object: THREE.Object3D, position: {
    x: number;
    y: number;
    z: number;
}) => void;
export {};
//# sourceMappingURL=standaloneRenderer.d.ts.map