/** Worker-related basenames inside `minecraft-renderer`/`dist`; skipped if missing. */
export declare const MESHER_DIST_FILES: readonly ["mesher.js", "mesher.js.map", "mesherWasm.js", "mesherWasm.js.map"];
export type BundlePrepareMesherOptions = {
    cwd?: string;
    packageName?: string;
    outDir?: string;
    mesherDistDir?: string;
    files?: readonly string[];
};
export declare function bundlePrepareMesherWorkers(opts?: BundlePrepareMesherOptions): Promise<string[]>;
//# sourceMappingURL=bundlePrepare.d.ts.map