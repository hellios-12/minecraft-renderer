export class WalkingGeneralSwing extends PlayerAnimation {
    switchAnimationCallback: any;
    isRunning: boolean;
    isMoving: boolean;
    isCrouched: boolean;
    isRiding: boolean;
    _dt: number;
    _phase: number;
    _moveBlend: number;
    /** @type {number | null} */
    _swingTime: number | null;
    _swingDuration: number;
    /** @type {{
      bodyPos: any, bodyRot: any,
      leftArmPos: any, leftArmRot: any,
      rightArmPos: any, rightArmRot: any,
      leftLegPos: any, leftLegRot: any,
      rightLegPos: any, rightLegRot: any,
      headPos: any, headRot: any,
      capePos: any, capeRot: any,
      elytraPos: any, elytraRot: any,
    } | null} */
    _defaults: {
        bodyPos: any;
        bodyRot: any;
        leftArmPos: any;
        leftArmRot: any;
        rightArmPos: any;
        rightArmRot: any;
        leftLegPos: any;
        leftLegRot: any;
        rightLegPos: any;
        rightLegRot: any;
        headPos: any;
        headRot: any;
        capePos: any;
        capeRot: any;
        elytraPos: any;
        elytraRot: any;
    } | null;
    update(player: any, delta: any): void;
    swingArm(): void;
    _captureDefaults(player: any): void;
    _applyDefaults(player: any): void;
    animate(player: any): void;
}
import { PlayerAnimation } from 'skinview3d';
//# sourceMappingURL=animations.d.ts.map