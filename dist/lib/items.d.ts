import { ResourcesManagerCommon } from '../resourcesManager';
import { ItemSpecificContextProperties } from '../playerState/types';
import { PlayerStateRenderer } from '../playerState/playerState';
type RenderSlotComponent = {
    type: string;
    data: any;
};
export type RenderItem = Pick<import('prismarine-item').Item, 'name' | 'displayName' | 'durabilityUsed' | 'maxDurability' | 'enchants' | 'nbt'> & {
    components?: RenderSlotComponent[];
};
export type GeneralInputItem = Pick<import('prismarine-item').Item, 'name' | 'nbt'> & {
    components?: RenderSlotComponent[];
    displayName?: string;
    modelResolved?: boolean;
};
export declare const getItemMetadata: (item: GeneralInputItem, resourcesManager: ResourcesManagerCommon) => {
    customText: any;
    customModel: string | undefined;
};
export declare const getItemNameRaw: (item: Pick<import("prismarine-item").Item, "nbt"> | null, resourcesManager: ResourcesManagerCommon) => any;
export declare const getItemModelName: (item: GeneralInputItem, specificProps: ItemSpecificContextProperties, resourcesManager: ResourcesManagerCommon, playerState: PlayerStateRenderer) => string;
export {};
//# sourceMappingURL=items.d.ts.map