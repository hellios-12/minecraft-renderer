import { WorldRendererThree } from './worldRendererThree';
import { type WaypointSprite } from './waypointSprite';
interface Waypoint {
    id: string;
    x: number;
    y: number;
    z: number;
    minDistance: number;
    maxDistance: number;
    color: number;
    label?: string;
    sprite: WaypointSprite;
}
interface WaypointOptions {
    color?: number;
    label?: string;
    minDistance?: number;
    maxDistance?: number;
    metadata?: any;
}
export declare class WaypointsRenderer {
    private readonly worldRenderer;
    private readonly waypoints;
    private readonly waypointScene;
    private readonly lastCameraPosition;
    private lastUpdateTime;
    private readonly UPDATE_THROTTLE_MS;
    constructor(worldRenderer: WorldRendererThree);
    private updateWaypoints;
    render(): void;
    addWaypoint(id: string, x: number, y: number, z: number, options?: WaypointOptions): void;
    removeWaypoint(id: string): void;
    clear(): void;
    testWaypoint(): void;
    getWaypoint(id: string): Waypoint | undefined;
    getAllWaypoints(): Waypoint[];
    setWaypointColor(id: string, color: number): void;
    setWaypointLabel(id: string, label?: string): void;
}
export {};
//# sourceMappingURL=waypoints.d.ts.map