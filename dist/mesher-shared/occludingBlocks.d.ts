export type OccludingBlockMeta = {
    occludingBlocks: Uint16Array;
    occludingLookup: Uint8Array;
};
/** Opaque full-cube state ids used for face culling and VisGraph — single source of truth. */
export declare const getOccludingBlockMeta: (version: string) => OccludingBlockMeta;
//# sourceMappingURL=occludingBlocks.d.ts.map