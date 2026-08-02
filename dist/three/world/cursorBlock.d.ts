import * as THREE from 'three';
import { LineMaterial } from 'three-stdlib';
import { Vec3 } from 'vec3';
import { WorldRendererThree } from '../worldRendererThree';
import { BlockShape, BlocksShapes } from '../../playerState/types';
export declare class CursorBlock {
    readonly worldRenderer: WorldRendererThree;
    _cursorLinesHidden: boolean;
    get cursorLinesHidden(): boolean;
    set cursorLinesHidden(value: boolean);
    cursorLineMaterial: LineMaterial;
    interactionLines: null | {
        blockPos: Vec3;
        mesh: THREE.Group;
        shapePositions: BlocksShapes | undefined;
    };
    prevColor: string | undefined;
    blockBreakMesh: THREE.Mesh;
    breakTextures: THREE.Texture[];
    constructor(worldRenderer: WorldRendererThree);
    updateLineMaterial(): void;
    updateBreakAnimation(blockPosition: {
        x: number;
        y: number;
        z: number;
    } | undefined, stage: number | null, mergedShape?: BlockShape): void;
    hideBreakAnimation(): void;
    updateDisplay(): void;
    /**
     * Check if a block should be visible (not occluded by terrain between it and camera)
     */
    /**
     * Check if a block should be visible (not occluded by terrain between it and camera)
     */
    private isBlockOccluded;
    setHighlightCursorBlock(blockPos: Vec3 | null, shapePositions?: BlocksShapes, force?: boolean): void;
    render(): void;
}
//# sourceMappingURL=cursorBlock.d.ts.map