export declare class SectionRequestTracker {
    private readonly counts;
    /** Register one pending request for `key` (called per dirty-section ingest). */
    addRequest(key: string): void;
    /** True if at least one request for `key` is still pending. */
    hasPending(key: string): boolean;
    /** Pending request count for `key` (0 if none). */
    pendingCount(key: string): number;
    /**
     * Consume one pending request for `key`. Returns true if a request was
     * consumed, false if there was nothing pending. Callers in the column
     * path must treat `false` as a contract violation (the main thread did
     * not request this key).
     */
    consumeOne(key: string): boolean;
    /** Clear all pending requests (used on worker reset). */
    clear(): void;
    /** Drop all pending requests for one column (`cx`,`cz` = column origin in block coords). */
    clearColumn(cx: number, cz: number): void;
    /** Number of distinct keys with pending requests. */
    size(): number;
}
//# sourceMappingURL=mesherWasmRequestTracker.d.ts.map