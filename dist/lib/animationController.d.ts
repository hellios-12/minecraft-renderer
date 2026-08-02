import * as tweenJs from '@tweenjs/tween.js';
export declare class AnimationController {
    private currentAnimation;
    private isAnimating;
    private cancelRequested;
    private completionCallbacks;
    private currentCancelCallback;
    /** Main method */
    startAnimation(createAnimation: () => tweenJs.Group, onCancelled?: () => void): Promise<void>;
    /** Main method */
    cancelCurrentAnimation(): Promise<void>;
    animationCycleFinish(): void;
    forceFinish(callComplete?: boolean): void;
    /** Required method */
    update(): void;
    get isActive(): boolean;
    get shouldCancel(): boolean;
}
//# sourceMappingURL=animationController.d.ts.map