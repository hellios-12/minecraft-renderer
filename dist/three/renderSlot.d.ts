import { BlockModel } from 'mc-assets';
import type { ResourcesManagerCommon } from '../resourcesManager';
export type ResolvedItemModelRender = {
    modelName: string;
    originalItemName?: string;
};
export declare const renderSlot: (model: ResolvedItemModelRender, resourcesManager: ResourcesManagerCommon, debugIsQuickbar?: boolean, fullBlockModelSupport?: boolean) => {
    texture: string;
    blockData: (Record<string, {
        slice: any;
        path: any;
    }> & {
        resolvedModel: BlockModel;
    }) | null;
    scale: number | null;
    slice: number[] | null;
    modelName: string | null;
};
//# sourceMappingURL=renderSlot.d.ts.map