import TypedEmitter from 'typed-emitter';
import { IndexedData } from 'minecraft-data';
import { AtlasParser, ItemsAtlasesOutputJson } from 'mc-assets/dist/atlasParser';
import { WorldBlockProvider } from 'mc-assets/dist/worldBlockProvider';
import { ItemsRenderer } from 'mc-assets/dist/itemsRenderer';
import { getLoadedItemDefinitionsStore } from 'mc-assets/dist/stores';
type ResourceManagerEvents = {
    assetsTexturesUpdated: () => void;
    assetsInventoryStarted: () => void;
    assetsInventoryReady: () => void;
};
type ItemDefinitionsStore = ReturnType<typeof getLoadedItemDefinitionsStore>;
export declare function getItemsDefinitionsStoreForRender(resources: LoadedResourcesTransferrable): ItemDefinitionsStore;
export declare function ensureItemsDefinitionsStore(resources: LoadedResourcesTransferrable): void;
export declare class LoadedResourcesTransferrable {
    readonly sourceItemDefinitionsJson: any;
    itemsDefinitionsStore: import("mc-assets/dist/versionedStore").VersionedStore<{
        model?: any;
        disable_hand_animation?: boolean | undefined;
    }>;
    allReady: boolean;
    itemsAtlasImage: ImageBitmap;
    blocksAtlasImage: ImageBitmap;
    blocksAtlasJson: ItemsAtlasesOutputJson;
    itemsAtlasJson: ItemsAtlasesOutputJson;
    customBlockStates?: Record<string, any>;
    customModels?: Record<string, any>;
    /** array where the index represents the custom model data value, and the element at that index is the model path to use */
    customItemModelNames: Record<string, string[]>;
    customTextures: {
        items?: {
            tileSize: number | undefined;
            textures: Record<string, HTMLImageElement>;
        };
        blocks?: {
            tileSize: number | undefined;
            textures: Record<string, HTMLImageElement>;
        };
        armor?: {
            tileSize: number | undefined;
            textures: Record<string, HTMLImageElement>;
        };
    };
    guiAtlas: {
        json: any;
        image: ImageBitmap;
    } | null;
    guiAtlasVersion: number;
    itemsRenderer: ItemsRenderer | undefined;
    worldBlockProvider?: WorldBlockProvider;
    blockstatesModels: any;
    version: string;
    texturesVersion: string;
    mcData: IndexedData;
    constructor(data?: any);
    prepareForTransfer(): LoadedResourcesTransferrable;
}
export interface ResourcesCurrentConfig {
    version: string;
    texturesVersion?: string;
    noInventoryGui?: boolean;
    includeOnlyBlocks?: string[];
}
export interface UpdateAssetsRequest {
    _?: false;
}
export interface ResourcesManagerTransferred extends TypedEmitter<ResourceManagerEvents> {
    currentResources: LoadedResourcesTransferrable;
}
export interface ResourcesManagerCommon extends TypedEmitter<ResourceManagerEvents> {
    currentResources: LoadedResourcesTransferrable | undefined;
}
declare const ResourcesManager_base: new () => TypedEmitter<ResourceManagerEvents>;
export declare class ResourcesManager extends ResourcesManager_base {
    static restorerName: string;
    rebuildWorkerRenderers(resources: LoadedResourcesTransferrable): void;
    static restoreTransferred(data: any, worker?: Worker): ResourcesManager;
    enrichTransferSnapshot(transfer?: LoadedResourcesTransferrable): LoadedResourcesTransferrable | undefined;
    prepareForTransfer(worker?: Worker): {
        __restorer: string;
        currentResources: LoadedResourcesTransferrable | undefined;
    };
    sourceBlockStatesModels: any;
    readonly sourceBlocksAtlases: any;
    readonly sourceItemsAtlases: any;
    currentResources: LoadedResourcesTransferrable | undefined;
    itemsAtlasParser: AtlasParser;
    blocksAtlasParser: AtlasParser;
    currentConfig: ResourcesCurrentConfig | undefined;
    abortController: AbortController;
    _promiseAssetsReadyResolvers: PromiseWithResolvers<void>;
    get promiseAssetsReady(): Promise<void>;
    loadSourceData(version?: string | undefined): Promise<void>;
    resetResources(): void;
    updateAssetsData(request: UpdateAssetsRequest, unstableSkipEvent?: boolean): Promise<void>;
    recreateBlockAtlas(resources?: LoadedResourcesTransferrable): Promise<void>;
    recreateItemsAtlas(resources?: LoadedResourcesTransferrable): Promise<void>;
    generateGuiTextures(): Promise<void>;
    downloadDebugAtlas(isItems?: boolean): Promise<void>;
    destroy(): void;
}
export {};
//# sourceMappingURL=resourcesManager.d.ts.map