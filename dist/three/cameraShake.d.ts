import { type CameraBobInput } from '../lib/cameraBobbing';
import { WorldRendererThree } from './worldRendererThree';
export declare class CameraShake {
    worldRenderer: WorldRendererThree;
    onRenderCallbacks: Array<(deltaTime: number) => void>;
    private rollAngle;
    private get damageRollAmount();
    private get damageAnimDuration();
    private rollAnimation?;
    private basePitch;
    private baseYaw;
    private cameraBobInput;
    setCameraBobInput(input: CameraBobInput | null): void;
    constructor(worldRenderer: WorldRendererThree, onRenderCallbacks: Array<(deltaTime: number) => void>);
    setBaseRotation(pitch: number, yaw: number): void;
    getBaseRotation(): {
        pitch: number;
        yaw: number;
    };
    shakeFromDamage(yaw?: number): void;
    update(): void;
    private easeOut;
    private easeInOut;
    private addAntiZfightingOffset;
}
//# sourceMappingURL=cameraShake.d.ts.map