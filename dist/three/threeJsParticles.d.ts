import * as THREE from 'three';
import type { SceneOrigin } from './sceneOrigin';
interface ParticleConfig {
    fountainHeight: number;
    resetHeight: number;
    xVelocityRange: number;
    zVelocityRange: number;
    particleCount: number;
    particleRadiusRange: {
        min: number;
        max: number;
    };
    yVelocityRange: {
        min: number;
        max: number;
    };
}
export interface FountainOptions {
    position?: {
        x: number;
        y: number;
        z: number;
    };
    particleConfig?: Partial<ParticleConfig>;
}
export declare class Fountain {
    sectionId: string;
    private readonly particles;
    private readonly config;
    private readonly position;
    private readonly sceneOrigin;
    container: THREE.Object3D | undefined;
    constructor(sectionId: string, options?: FountainOptions, sceneOrigin?: SceneOrigin);
    private createConfig;
    private toSceneX;
    private toSceneY;
    private toSceneZ;
    createParticles(container: THREE.Object3D): void;
    render(): void;
    private updateParticleCount;
    private addParticles;
    private removeParticles;
    dispose(): void;
}
export {};
//# sourceMappingURL=threeJsParticles.d.ts.map