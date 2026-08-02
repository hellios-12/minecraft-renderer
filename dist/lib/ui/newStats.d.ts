/** Class for advanced stats pane; host app should set z-index (see integrating app global CSS). */
export declare const MC_RENDERER_DEBUG_OVERLAY_CLASS = "mc-renderer-debug-overlay";
export declare const addNewStat: (id: string, width?: number, x?: number, y?: number, opts?: {
    className?: string;
}) => {
    updateText(text: string): void;
    setVisibility(visible: boolean): void;
};
export declare const addNewStat2: (id: string, { top, bottom, right, left, displayOnlyWhenWider }: {
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
    displayOnlyWhenWider?: number;
}) => {
    updateText(text: string): void;
    setVisibility(visible: boolean): void;
};
export declare const updateStatText: (id: any, text: any) => void;
export declare const updatePanesVisibility: (visible: boolean) => void;
export declare const removeAllStats: () => void;
export declare const removeStat: (id: any) => void;
//# sourceMappingURL=newStats.d.ts.map