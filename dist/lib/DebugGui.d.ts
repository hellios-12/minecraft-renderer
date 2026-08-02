export interface ParamMeta {
    min?: number;
    max?: number;
    step?: number;
}
export declare class DebugGui {
    private gui;
    private readonly storageKey;
    private target;
    private readonly params;
    private readonly paramsMeta;
    private _visible;
    private readonly initialValues;
    private initialized;
    constructor(id: string, target: any, params?: string[], paramsMeta?: Record<string, ParamMeta>);
    activate(): this;
    get visible(): boolean;
    set visible(value: boolean);
    private loadSavedValues;
    private saveValues;
    private saveVisibility;
    private setupControls;
    save(): void;
    destroy(): void;
    toggle(): void;
    show(): void;
    hide(): void;
}
//# sourceMappingURL=DebugGui.d.ts.map