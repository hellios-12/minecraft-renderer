import * as THREE from 'three';
export declare const WAYPOINT_CONFIG: {
    TARGET_SCREEN_PX: number;
    CANVAS_SIZE: number;
    LAYOUT: {
        DOT_Y: number;
        NAME_Y: number;
        DISTANCE_Y: number;
    };
    CANVAS_SCALE: number;
    ARROW: {
        enabledDefault: boolean;
        pixelSize: number;
        paddingPx: number;
    };
    DEFAULT_VISUAL_SCALE: number;
    DEFAULT_OPACITY: number;
};
export type WaypointSprite = {
    group: THREE.Group;
    sprite: THREE.Sprite;
    enableOffscreenArrow: (enabled: boolean) => void;
    setArrowParent: (parent: THREE.Object3D | null) => void;
    updateForCamera: (cameraPosition: THREE.Vector3, camera: THREE.PerspectiveCamera, viewportWidthPx: number, viewportHeightPx: number) => boolean;
    setColor: (color: number) => void;
    setLabel: (label?: string) => void;
    updateDistanceText: (label: string, distanceText: string) => void;
    setVisible: (visible: boolean) => void;
    setPosition: (x: number, y: number, z: number) => void;
    dispose: () => void;
};
export declare function createWaypointSprite(options: {
    position: THREE.Vector3 | {
        x: number;
        y: number;
        z: number;
    };
    color?: number;
    label?: string;
    depthTest?: boolean;
    labelYOffset?: number;
    metadata?: any;
    visualScale?: number;
    opacity?: number;
}): WaypointSprite;
export declare const WaypointHelpers: {
    computeWorldScale(distance: number, fixedReference?: number): number;
    computeScreenPixelScale(camera: THREE.PerspectiveCamera, distance: number, pixelSize: number, viewportHeightPx: number): number;
};
//# sourceMappingURL=waypointSprite.d.ts.map