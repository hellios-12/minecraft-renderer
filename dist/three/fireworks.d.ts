import * as THREE from 'three';
import type { SceneOrigin } from './sceneOrigin';
export interface FireworkLaunchOptions {
    /** Position to launch the firework from */
    position?: THREE.Vector3;
    /** Particle size (100-600, default: 300) */
    particleSize?: number;
    /** Force rich fireworks type (with trails) */
    forceRich?: boolean;
    /** Force basic fireworks type (no trails) */
    forceBasic?: boolean;
}
export interface FireworksManagerConfig {
    /** Maximum number of active fireworks at once */
    maxActiveFireworks?: number;
    /** Default particle size for fireworks */
    defaultParticleSize?: number;
}
export declare const FIREWORKS_CONFIG: {
    textureSize: number;
    gravity: THREE.Vector3;
    friction: number;
    defaultParticleSize: number;
    maxActiveFireworks: number;
};
export declare const createFireworksTexture: () => THREE.Texture<OffscreenCanvas, THREE.TextureEventMap>;
export declare class ParticleMesh {
    particleNum: number;
    timerStartFading: number;
    mesh: THREE.Points;
    constructor(num: number, vels: THREE.Vector3[], type: 'seed' | 'trail' | 'default', texture: THREE.Texture, particleSize?: number);
    update(gravity: THREE.Vector3): void;
    disposeAll(): void;
}
export declare class ParticleSeedMesh extends ParticleMesh {
    constructor(num: number, vels: THREE.Vector3[], texture: THREE.Texture);
    update(gravity: THREE.Vector3): void;
}
export declare class ParticleTailMesh extends ParticleMesh {
    constructor(num: number, vels: THREE.Vector3[], texture: THREE.Texture);
    update(gravity: THREE.Vector3): void;
}
export declare class BasicFireworks {
    meshGroup: THREE.Group;
    isExplode: boolean;
    petalsNum: number;
    life: number;
    seed: ParticleSeedMesh;
    flowerSizeRate: number;
    flower?: ParticleMesh;
    texture: THREE.Texture;
    particleSize: number;
    constructor(texture: THREE.Texture, particleSize?: number, startPosition?: THREE.Vector3);
    getSeed(startPosition?: THREE.Vector3): ParticleSeedMesh;
    explode(pos: THREE.Vector3): void;
    getFlower(pos: THREE.Vector3): ParticleMesh;
    update(gravity: THREE.Vector3): void;
    drawTail(): void;
}
export declare class RichFireworks extends BasicFireworks {
    tailMeshGroup: THREE.Group;
    tails: ParticleTailMesh[];
    constructor(texture: THREE.Texture, particleSize?: number, startPosition?: THREE.Vector3);
    explode(pos: THREE.Vector3): void;
    getTail(): ParticleTailMesh[];
    update(gravity: THREE.Vector3): void;
}
export declare class FireworksManager {
    fireworksInstances: Array<BasicFireworks | RichFireworks>;
    scene: THREE.Scene;
    sceneOrigin: SceneOrigin;
    texture: THREE.Texture;
    particleSize: number;
    maxFireworks: number;
    constructor(scene: THREE.Scene, sceneOrigin: SceneOrigin, config?: FireworksManagerConfig);
    launchFirework(options?: FireworkLaunchOptions): void;
    repositionAll(): void;
    update(): void;
    clear(): void;
    dispose(): void;
}
//# sourceMappingURL=fireworks.d.ts.map