export declare const loadScript: (scriptSrc: string, highPriority?: boolean) => Promise<HTMLScriptElement>;
export declare const createCanvas: (width: number, height: number) => OffscreenCanvas;
export declare function loadImageFromUrl(imageUrl: string): Promise<ImageBitmap>;
export declare const versionToNumber: (ver: string) => number;
export declare const versionToMajor: (version: string) => string;
export declare const versionsMapToMajor: <T>(versionsMap: Record<string, T>) => Record<string, T>;
//# sourceMappingURL=utils.d.ts.map