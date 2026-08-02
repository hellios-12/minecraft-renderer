import { Vec3 } from 'vec3';
import { WorldRendererThree } from './worldRendererThree';
export interface CinimaticPoint {
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    duration: number;
    easing?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | 'smoothstep' | 'bounce';
    lookAt?: {
        x: number;
        y: number;
        z: number;
    };
    fov?: number;
}
export interface CinimaticScript {
    name?: string;
    points: CinimaticPoint[];
    loop?: boolean;
    onComplete?: () => void;
    onPointReached?: (pointIndex: number, point: CinimaticPoint) => void;
}
export declare class CinimaticScriptRunner {
    private readonly worldRenderer;
    private readonly updateCamera;
    private readonly updateFov;
    private readonly getInitialState;
    private isRunning;
    private currentScript;
    private currentPointIndex;
    private currentTweens;
    private startTime;
    private totalDuration;
    private currentPosition;
    private currentRotation;
    private currentFov;
    constructor(worldRenderer: WorldRendererThree, updateCamera: (pos: Vec3, yaw: number, pitch: number) => void, updateFov: (fov: number) => void, getInitialState: () => {
        position: Vec3;
        yaw: number;
        pitch: number;
        fov: number;
    });
    startScript(script: CinimaticScript): boolean;
    stopScript(): void;
    runExampleScripts(index: number): {
        circular: CinimaticScript;
        spiral: CinimaticScript;
        buildingTour: CinimaticScript;
    };
    private moveToPoint;
    private wrapRotation;
    private getEasingFunction;
    private handleScriptComplete;
    get running(): boolean;
    get progress(): number;
    get currentScriptName(): string | undefined;
    static createCircularFlyby(center: Vec3, radius: number, height: number, duration: number): CinimaticScript;
    static createSpiralDescent(start: Vec3, end: Vec3, spirals: number, duration: number): CinimaticScript;
    static createBuildingTour(waypoints: Array<{
        pos: Vec3;
        lookAt?: Vec3;
        duration?: number;
    }>): CinimaticScript;
}
//# sourceMappingURL=cinimaticScript.d.ts.map