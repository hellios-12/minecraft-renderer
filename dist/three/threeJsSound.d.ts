import * as THREE from 'three';
import { WorldRendererThree } from './worldRendererThree';
import { SoundSystem } from '../graphicsBackend/types';
export declare class ThreeJsSound implements SoundSystem {
    worldRenderer: WorldRendererThree;
    audioListener: THREE.AudioListener | undefined;
    private readonly activeSounds;
    private readonly audioContext;
    /** Normalized individual gain (clamped to [0, 1], excluding master volume). */
    private readonly soundVolumes;
    baseVolume: number;
    constructor(worldRenderer: WorldRendererThree);
    initAudioListener(): void;
    playSound(position: {
        x: number;
        y: number;
        z: number;
    }, path: string, volume?: number, pitch?: number, timeout?: number, attenuationDistance?: number): void;
    stopAll(): void;
    changeVolume(volume: number): void;
    destroy(): void;
    playTestSound(): void;
}
//# sourceMappingURL=threeJsSound.d.ts.map