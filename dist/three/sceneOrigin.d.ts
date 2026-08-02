import type { Object3D, Scene } from 'three';
interface TrackOptions {
    updateMatrix?: boolean;
}
export declare class SceneOrigin {
    private scene;
    private _x;
    private _y;
    private _z;
    private readonly _tracked;
    private readonly _worldCoords;
    private readonly _originalPositions;
    private readonly _trackOptions;
    constructor(scene: Scene);
    get x(): number;
    get y(): number;
    get z(): number;
    /** Update origin (called each frame with camera world position) */
    update(worldX: number, worldY: number, worldZ: number): void;
    /** Track an Object3D so its position is automatically adjusted on origin changes */
    track(obj: Object3D, options?: TrackOptions): void;
    /** Stop tracking an Object3D, restoring its original position Vector3 */
    untrack(obj: Object3D): void;
    /** Track an Object3D and add it to the scene */
    addAndTrack(obj: Object3D, options?: TrackOptions): void;
    /** Untrack an Object3D and remove it from the scene */
    removeAndUntrack(obj: Object3D): void;
    /** Untrack an Object3D and all its descendants, then remove from the scene */
    removeAndUntrackAll(obj: Object3D): void;
    /** Get stored world position for a tracked object */
    getWorldPosition(obj: Object3D): {
        x: number;
        y: number;
        z: number;
    } | undefined;
    /** Clear all tracked objects (call on scene reset) */
    clear(): void;
    /** Number of currently tracked objects (for debugging) */
    get trackedCount(): number;
    /** Convert world coordinates → scene coordinates */
    toSceneX(worldX: number): number;
    toSceneY(worldY: number): number;
    toSceneZ(worldZ: number): number;
    /** Convert scene coordinates → world coordinates */
    toWorldX(sceneX: number): number;
    toWorldY(sceneY: number): number;
    toWorldZ(sceneZ: number): number;
}
export {};
//# sourceMappingURL=sceneOrigin.d.ts.map