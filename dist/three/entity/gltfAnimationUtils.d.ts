import * as THREE from 'three';
export interface AnimationState {
    mixer: THREE.AnimationMixer;
    animations: THREE.AnimationClip[];
    actions: Map<string, THREE.AnimationAction>;
    speed: number;
    loop: boolean;
}
export declare class AnimationManager {
    object: THREE.Object3D;
    animations: THREE.AnimationClip[];
    private readonly timer;
    private readonly animatedObjects;
    state: AnimationState;
    constructor(object: THREE.Object3D, animations: THREE.AnimationClip[]);
    /**
     * Creates an animation state for a Three.js object
     */
    createAnimationState(): AnimationState;
    /**
     * Plays an animation by name
     */
    playAnimation(name: string, loop?: boolean, speed?: number): boolean;
    /**
     * Updates animation parameters for a state
     */
    updateAnimationParams(speed?: number, loop?: boolean): void;
    /**
     * Stops all animations for a state
     */
    stopAnimations(): void;
    /**
     * Gets the current clock delta (useful for manual updates)
     */
    getDelta(): number;
}
/**
 * Convenience function to create and manage animations for an object
 */
export declare function createAnimatedObject(object: THREE.Object3D, animations: THREE.AnimationClip[]): AnimationManager;
//# sourceMappingURL=gltfAnimationUtils.d.ts.map