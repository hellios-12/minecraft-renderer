/** Structured reason so logs / support can tell fetch vs worker vs ping failures apart. */
export type MesherWorkerPreloadFailure = {
    phase: 'fetch';
    code: 'timeout' | 'network' | 'bad-status';
    status?: number;
    detail?: string;
} | {
    phase: 'fetch';
    code: 'invalid-body';
    hint: 'empty' | 'html';
} | {
    phase: 'worker';
    code: 'construct-failed';
    message: string;
} | {
    phase: 'worker';
    code: 'script-error';
    message: string;
} | {
    phase: 'ping';
    code: 'timeout' | 'messageerror' | 'post-failed';
    detail?: string;
};
export declare class MesherWorkerPreloadError extends Error {
    readonly failure: MesherWorkerPreloadFailure;
    constructor(message: string, failure: MesherWorkerPreloadFailure);
}
/**
 * Validates a mesher worker script over HTTP (not HTML/error page), instantiates a Worker, and waits for `mc-web-pong`.
 * Use `mesher.js` for the legacy mesher bundle and `mesherWasm.js` for the WASM mesher bundle.
 * Single-file builds skip (blob worker).
 */
export declare function preloadMesherWorkerScript(opts?: {
    fetchTimeoutMs?: number;
    pingTimeoutMs?: number;
    /** Worker script basename relative to `document.baseURI`. Defaults to `mesher.js`. */
    script?: string;
}): Promise<void>;
//# sourceMappingURL=preloadWorkers.d.ts.map