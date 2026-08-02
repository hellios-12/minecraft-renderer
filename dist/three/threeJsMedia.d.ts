import * as THREE from 'three';
import { WorldRendererThree } from './worldRendererThree';
type ControlModeConfig = {
    mouseButton: 'both' | 'left' | 'right';
    controlMode: 'play_pause' | 'play_if_ended' | 'toggle_mute';
};
interface MediaProperties {
    position: {
        x: number;
        y: number;
        z: number;
    };
    size: {
        width: number;
        height: number;
    };
    src: string;
    rotation?: 0 | 1 | 2 | 3;
    doubleSide?: boolean;
    background?: number;
    opacity?: number;
    uvMapping?: {
        startU: number;
        endU: number;
        startV: number;
        endV: number;
    };
    allowOrigins?: string[] | boolean;
    loop?: boolean;
    volume?: number;
    autoPlay?: boolean;
    imageOverride?: boolean;
    allowLighting?: boolean;
    controlMode?: ControlModeConfig;
}
interface MediaData {
    mesh: THREE.Object3D;
    props: MediaProperties;
    video: HTMLVideoElement | undefined;
    pausedBecuaseHidden: boolean;
    texture: THREE.Texture;
    updateUVMapping: (config: {
        startU: number;
        endU: number;
        startV: number;
        endV: number;
    }) => void;
    positionalAudio?: THREE.PositionalAudio;
    hadAutoPlayError?: boolean;
    ended?: boolean;
    handleError: (err: Error) => void;
    destroyed?: boolean;
}
export declare class ThreeJsMedia {
    private readonly worldRenderer;
    customMedia: Map<string, MediaData>;
    constructor(worldRenderer: WorldRendererThree);
    onWorldGone(): void;
    onWorldStop(): void;
    private createErrorTexture;
    private createBackgroundTexture;
    validateOrigin(src: string, allowOrigins: string[] | boolean): boolean;
    onPageInteraction(): void;
    addMedia(id: string, props: MediaProperties): string;
    playVideo(id: string, fromAutoPlay?: boolean): void;
    render(): void;
    setVideoPlaying(id: string, playing: boolean): void;
    setVideoSeeking(id: string, seconds: number): void;
    setVideoVolume(id: string, volume: number): void;
    setVideoSpeed(id: string, speed: number): void;
    setControlMode(id: string, mouseButton: 'both' | 'left' | 'right', controlMode: 'play_pause' | 'play_if_ended'): void;
    destroyMedia(id: string): void;
    /**
     * Positions a mesh exactly at startPosition and extends it along the rotation direction
     * with the specified width and height
     *
     * @param mesh The mesh to position
     * @param rotation Rotation in radians (applied to Y axis)
     * @param startPosition The exact starting position (corner) of the mesh
     * @param width Width of the mesh
     * @param height Height of the mesh
     * @param depth Depth of the mesh (default: 1)
     * @returns The positioned mesh for chaining
     */
    positionMeshExact(mesh: THREE.Mesh, rotation: number, startPosition: {
        x: number;
        y: number;
        z: number;
    }, width: number, height: number, depth?: number): {
        mesh: THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes, THREE.BufferGeometryEventMap>, THREE.Material<THREE.MaterialEventMap> | THREE.Material<THREE.MaterialEventMap>[], THREE.Object3DEventMap>;
        debugGroup: THREE.Group<THREE.Object3DEventMap>;
    };
    createTestCanvasTexture(): THREE.CanvasTexture<OffscreenCanvas> | null;
    /**
     * Creates a test mesh that demonstrates the exact positioning
     */
    lastCheck: number;
    THROTTLE_TIME: number;
    tryIntersectMedia(): void;
    handleUserClick(button: 'left' | 'right'): void;
}
export {};
//# sourceMappingURL=threeJsMedia.d.ts.map