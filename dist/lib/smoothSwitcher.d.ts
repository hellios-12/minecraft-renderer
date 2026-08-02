export type StateProperties = Record<string, number>;
export type StateGetterFn = () => StateProperties;
export type StateSetterFn = (property: string, value: number) => void;
export declare class SmoothSwitcher {
    getState: StateGetterFn;
    setState: StateSetterFn;
    private readonly animationController;
    private readonly defaultState;
    private readonly speeds;
    currentStateName: string;
    transitioningToStateName: string;
    constructor(getState: StateGetterFn, setState: StateSetterFn, speeds?: Partial<Record<string, number>>);
    /**
     * Calculate transition duration based on the largest property change
     */
    private calculateDuration;
    private getPropertySpeed;
    /**
     * Start a transition to a new state
     * @param newState Partial state - only need to specify properties that change
     * @param easing Easing function to use
     */
    startTransition(newState: Partial<StateProperties>, stateName?: string, onEnd?: () => void, easing?: (amount: number) => number, onCancelled?: () => void): void;
    /**
     * Reset to default state
     */
    reset(): void;
    /**
     * Update the animation (should be called in your render/update loop)
     */
    update(): void;
    /**
     * Force finish the current transition
     */
    forceFinish(): void;
    /**
     * Start a new transition to the specified state
     */
    transitionTo(newState: Partial<StateProperties>, stateName?: string, onEnd?: () => void, onCancelled?: () => void): void;
    /**
     * Get the current value of a property
     */
    getCurrentValue(property: string): number;
    /**
     * Check if currently transitioning
     */
    get isTransitioning(): boolean;
}
//# sourceMappingURL=smoothSwitcher.d.ts.map