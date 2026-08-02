/**
 * Strip non–structured-clone values before Worker.postMessage (e.g. mineflayer `debug` on entities).
 */
export declare function sanitizeForWorkerPostMessage(value: unknown, depth?: number): unknown;
export declare function sanitizeWorkerEventArgs(args: unknown[]): unknown[];
//# sourceMappingURL=workerMessageSanitize.d.ts.map