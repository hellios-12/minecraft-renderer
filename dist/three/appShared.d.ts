import { BlockModel } from 'mc-assets/dist/types';
import { ItemSpecificContextProperties } from '../playerState/types';
import { PlayerStateRenderer } from '../playerState/playerState';
import { ResourcesManagerTransferred } from '../resourcesManager';
import { renderSlot } from './renderSlot';
export declare const getItemUv: (item: Record<string, any>, specificProps: ItemSpecificContextProperties, resourcesManager: ResourcesManagerTransferred, playerState: PlayerStateRenderer) => {
    u: number;
    v: number;
    su: number;
    sv: number;
    renderInfo?: ReturnType<typeof renderSlot>;
    modelName: string;
} | {
    resolvedModel: BlockModel;
    modelName: string;
};
//# sourceMappingURL=appShared.d.ts.map