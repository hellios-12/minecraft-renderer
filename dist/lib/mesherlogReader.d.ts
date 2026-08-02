import { WorldRendererCommon } from './worldrendererCommon';
export declare class MesherLogReader {
    private readonly worldRenderer;
    chunksToReceive: Array<{
        x: number;
        z: number;
        chunkLength: number;
    }>;
    messagesQueue: Array<{
        fromWorker: boolean;
        workerIndex: number;
        message: any;
    }>;
    sectionFinishedToReceive: {
        messagesLeft: string[];
        resolve: () => void;
    } | null;
    replayStarted: boolean;
    constructor(worldRenderer: WorldRendererCommon);
    chunkReceived(x: number, z: number, chunkLength: number): void;
    maybeStartReplay(): Promise<void>;
    workerMessageReceived(type: string, message: any): void;
    parseMesherLog(): void;
}
//# sourceMappingURL=mesherlogReader.d.ts.map