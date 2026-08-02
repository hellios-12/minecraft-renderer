export declare function createWorkerProxy<T extends Record<string, (...args: any[]) => void | Promise<any>>>(handlers: T, channel?: MessagePort): {
    __workerProxy: T;
};
/**
 * in main thread
 * ```ts
 * // either:
 * import type { importedTypeWorkerProxy } from './worker'
 * // or:
 * type importedTypeWorkerProxy = import('./worker').importedTypeWorkerProxy
 *
 * const workerChannel = useWorkerProxy<typeof importedTypeWorkerProxy>(worker)
 * ```
 */
export declare const useWorkerProxy: <T extends {
    __workerProxy: Record<string, (...args: any[]) => void>;
}>(worker: Worker | MessagePort, autoTransfer?: boolean) => T["__workerProxy"] & {
    transfer: (...args: Transferable[]) => T["__workerProxy"];
};
type SyncDirection = 'toWorker' | 'fromWorker';
export type WireSyncOp = {
    kind: 'set';
    path: (string | number | symbol)[];
    value: unknown;
} | {
    kind: 'delete';
    path: (string | number | symbol)[];
};
type ValtioOp = readonly unknown[];
/** @internal vitest only */
export declare const resetWorkerSyncStatsForTest: () => void;
/** @internal vitest only */
export declare const getWorkerSyncStatsForTest: () => {
    toWorker: number;
    fromWorker: number;
};
export declare const setByPath: (target: any, path: (string | number | symbol)[], value: unknown) => void;
export declare const deleteByPath: (target: any, path: (string | number | symbol)[]) => void;
export declare const prepareOpValueForTransfer: (value: any, worker: Worker) => any;
export declare const sendWorkerSyncOps: (syncId: string, ops: ValtioOp[], worker: Worker, direction: SyncDirection, debugKey: string) => void;
export declare const applySyncOps: (target: any, wireOps: WireSyncOp[], worker: Worker, countReceive?: "fromWorker" | false) => void;
export declare const deepPrepareForTransfer: (obj: any, worker: Worker, autoRemoveMethods?: boolean, _isRoot?: boolean, _isInsideValtio?: boolean) => any;
export declare const findProblemTransfer: (obj: any, path?: string[]) => void;
export declare const addDefaultRestorer: (restorer: {
    restorerName: string;
    restoreTransferred: (obj: any, worker: Worker) => any;
}) => void;
export declare const restoreTransferred: (obj: any, restorersArg: any[], worker: Worker, errorHandler?: ((error: Error) => void) | boolean, armSync?: boolean) => any;
export {};
//# sourceMappingURL=workerProxy.d.ts.map