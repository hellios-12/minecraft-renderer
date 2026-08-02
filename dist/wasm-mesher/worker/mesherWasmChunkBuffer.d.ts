export type PendingChunkMessage = {
    x: number;
    z: number;
    chunk: any;
    customBlockModels?: any;
};
export declare class PendingChunkBuffer {
    private pending;
    enqueue(msg: PendingChunkMessage): void;
    drain(apply: (msg: PendingChunkMessage) => void): void;
    get size(): number;
    clear(): void;
}
//# sourceMappingURL=mesherWasmChunkBuffer.d.ts.map