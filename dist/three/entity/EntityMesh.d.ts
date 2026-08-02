import * as THREE from 'three';
import { WorldRendererThree } from '../worldRendererThree';
interface JsonBone {
    name: string;
    pivot?: [number, number, number];
    bind_pose_rotation?: [number, number, number];
    rotation?: [number, number, number];
    parent?: string;
    cubes?: JsonCube[];
    mirror?: boolean;
}
interface JsonCube {
    origin: [number, number, number];
    size: [number, number, number];
    uv: [number, number];
    inflate?: number;
    rotation?: [number, number, number];
}
interface JsonModel {
    texturewidth?: number;
    textureheight?: number;
    bones: JsonBone[];
}
export type CustomModelMetadata = {
    scale?: number;
    offset?: {
        x?: number;
        y?: number;
        z?: number;
    };
    texture?: string;
    textures?: Record<string, string>;
    animation?: string;
    animationLoop?: boolean;
};
export type CustomModelPart = {
    modelPath: string | ArrayBuffer;
    modelType: 'obj' | 'bedrock' | 'gltf';
    metadata?: CustomModelMetadata;
};
/** One part, or several (same idea as `models[]` on the custom-model-overlay). */
export type EntityCustomModel = CustomModelPart | {
    parts: CustomModelPart[];
};
interface EntityOverrides {
    textures?: Record<string, string>;
    rotation?: Record<string, {
        x?: number;
        y?: number;
        z?: number;
    }>;
    customModel?: EntityCustomModel;
}
export declare function getMesh(worldRenderer: WorldRendererThree | undefined, texture: string, jsonModel: JsonModel, overrides?: EntityOverrides, debugFlags?: EntityDebugFlags): THREE.SkinnedMesh;
export declare const rendererSpecialHandled: string[];
export type EntityModelType = 'obj' | 'bedrock' | 'gltf';
export type EntityDebugFlags = {
    type?: 'obj' | 'bedrock' | 'gltf' | 'special';
    tempMap?: string;
    textureMap?: boolean;
    errors?: string[];
    isHardcodedTexture?: boolean;
};
export declare class EntityMesh {
    mesh: THREE.Object3D;
    animations?: THREE.AnimationClip[];
    private animationControllers;
    constructor(version: string, type: string, worldRenderer?: WorldRendererThree, overrides?: EntityOverrides, debugFlags?: EntityDebugFlags);
    playAnimation(name: string, loop?: boolean): void;
    update(deltaTime: number): void;
    static getStaticData(name: string): {
        boneNames: string[];
    };
}
export {};
//# sourceMappingURL=EntityMesh.d.ts.map