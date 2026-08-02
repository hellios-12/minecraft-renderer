import { world } from 'prismarine-world';
export type BlockFaceType = {
    side: number;
    textureIndex: number;
    tint?: [number, number, number];
    isTransparent?: boolean;
    face?: string;
    neighbor?: string;
    light?: number;
};
export type BlockType = {
    faces: BlockFaceType[];
    block: string;
};
export declare const makeError: (str: string) => void;
export declare const makeErrorCritical: (str: string) => never;
export declare const getSyncWorld: (version: string) => world.WorldSync;
export declare const delayedIterator: <T>(arr: T[], delay: number, exec: (item: T, index: number) => Promise<void>, chunkSize?: number) => Promise<void>;
//# sourceMappingURL=shared.d.ts.map