/**
 * Serialize any output object for snapshot comparison
 * Converts TypedArrays to regular arrays for JSON serialization
 */
export declare function serializeOutput(output: any): any;
/**
 * Deep equality comparison for snapshot testing
 */
export declare function deepEqual(obj1: any, obj2: any): boolean;
/**
 * Compare output with snapshot file, or write snapshot if it doesn't exist
 * @param output - The output object to compare/write
 * @param snapshotPath - Path to snapshot file (absolute or relative to __dirname)
 * @param baseDir - Base directory for relative paths (defaults to __dirname, ignored if snapshotPath is absolute)
 * @returns true if snapshot matches or was created, throws error if mismatch
 */
export declare function compareOrWriteSnapshot(output: any, snapshotPath: string, baseDir?: string): boolean;
//# sourceMappingURL=snapshotUtils.d.ts.map