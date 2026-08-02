import * as THREE from 'three';
import { Item } from 'prismarine-item';
import { Team } from 'mineflayer';
import { PlayerObjectType } from '../lib/createPlayerObject';
import * as Entity from './entity/EntityMesh';
import { type EntityRenderHints } from './entity/interpolationPolicy';
import { WorldRendererThree } from './worldRendererThree';
import { IndexedData } from 'minecraft-data';
import { ItemSpecificContextProperties } from '../playerState/types';
export type EntityModelOverridePart = {
    modelPath: string | ArrayBuffer;
    modelType: Entity.EntityModelType;
    metadata?: any;
};
export declare const steveTexture: Promise<THREE.Texture<unknown, THREE.TextureEventMap>>;
export declare const TWEEN_DURATION = 120;
export type SceneEntity = THREE.Object3D & {
    playerObject?: PlayerObjectType;
    username?: string;
    uuid?: string;
    additionalCleanup?: () => void;
    originalEntity: import('prismarine-entity').Entity & {
        delete?: any;
        pos?: any;
        name: any;
        team?: Team;
        renderHints?: EntityRenderHints;
    };
};
export declare class Entities {
    worldRenderer: WorldRendererThree;
    mcData?: IndexedData | undefined;
    entities: Record<string, SceneEntity>;
    playerEntity: SceneEntity | null;
    entitiesOptions: {
        fontFamily: string;
    };
    debugMode: string;
    onSkinUpdate: () => void;
    clock: THREE.Timer;
    currentlyRendering: boolean;
    cachedMapsImages: Record<number, string>;
    itemFrameMaps: Record<number, Array<THREE.Mesh<THREE.PlaneGeometry, THREE.MeshLambertMaterial>>>;
    pendingModelOverrides: Map<string, {
        parts: EntityModelOverridePart[];
    }>;
    private boatPaddleScratch;
    get entitiesByName(): Record<string, SceneEntity[]>;
    get entitiesRenderingCount(): number;
    getDebugString(): string;
    constructor(worldRenderer: WorldRendererThree, mcData?: IndexedData | undefined);
    handlePlayerEntity(playerData: SceneEntity['originalEntity']): void;
    clear(): void;
    reloadEntities(): void;
    watchResourcesUpdates(): void;
    setDebugMode(mode: string, entity?: THREE.Object3D | null): void;
    setRendering(rendering: boolean, entity?: THREE.Object3D | null): void;
    isRenderingAllowed(): boolean;
    /** Add or remove entity meshes from the scene (including third-person player). */
    syncSceneAttachment(entity?: THREE.Object3D | null): void;
    private setSceneAttached;
    playEntityModelAnimation(entityId: string, animationName: string, loop?: boolean): void;
    render(): void;
    private applyRemoteBoatPassengerRotations;
    private updateBoatPaddleAnimations;
    private applyLocalThirdPersonPlayerRotation;
    private resolvePassengerEntity;
    private resolveLocalVehicleRenderWorldPos;
    updateVehiclePassengerPositions(): void;
    /** @deprecated Use updateVehiclePassengerPositions */
    updateBoatPassengerPositions(): void;
    private syncArmorPositions;
    getPlayerObject(entityId: string | number): PlayerObjectType | undefined;
    uuidPerSkinUrlsCache: Record<string, {
        skinUrl?: string;
        capeUrl?: string;
    }>;
    currentSkinUrls: Record<string, string>;
    private isCanvasBlank;
    updatePlayerSkin(entityId: string | number, username: string | undefined, uuidCache: string | undefined, skinUrl: string | true, capeUrl?: string | true | undefined): Promise<void>;
    /** Local preview override: hand + player model until server skin refresh or reconnect. */
    applyTemporaryPlayerSkinOverride(skinUrl: string, entityId: string | number, username?: string, uuid?: string): Promise<void>;
    private loadAndApplySkin;
    private loadAndApplyCape;
    debugSwingArm(): void;
    private applyMovementAnimation;
    playAnimation(entityPlayerId: any, animation: 'walking' | 'running' | 'oneSwing' | 'idle' | 'crouch' | 'crouchWalking' | 'riding'): void;
    parseEntityLabel(jsonLike: any): any;
    private textFromComponent;
    getItemMesh(item: any, specificProps: ItemSpecificContextProperties, faceCamera?: boolean, previousModel?: string): {
        mesh: THREE.Group<THREE.Object3DEventMap>;
        isBlock: boolean;
        modelName: string;
        cleanup?: undefined;
    } | {
        mesh: THREE.Object3D<THREE.Object3DEventMap>;
        isBlock: boolean;
        modelName: string;
        cleanup: (() => void) | undefined;
    } | undefined;
    setVisible(mesh: THREE.Object3D, visible: boolean): void;
    update(entity: SceneEntity['originalEntity'], overrides: any): void;
    applyEntityRenderHints(e: SceneEntity, entity: SceneEntity['originalEntity']): void;
    updateEntityPosition(entity: SceneEntity['originalEntity'], justAdded: boolean, overrides: {
        rotation?: {
            head?: {
                y: number;
                x: number;
            };
        };
    }, headRotationOnly?: boolean): void;
    afterAddEntity(entity: import('prismarine-entity').Entity): void;
    beforeEntityAdded(entity: import('prismarine-entity').Entity): void;
    loadedSkinEntityIds: Set<string>;
    maybeRenderPlayerSkin(entityId: string): void;
    onRemoveEntity(entity: import('prismarine-entity').Entity): void;
    updateMap(mapNumber: string | number, data: string): void;
    updateNameTagVisibility(entity: SceneEntity): void;
    addMapModel(entityMesh: THREE.Object3D, mapNumber: number, rotation: number): void;
    loadMap(data: any): THREE.Texture<unknown, THREE.TextureEventMap>;
    addItemModel(entityMesh: SceneEntity, hand: 'left' | 'right', item: Item, isPlayer?: boolean): void;
    handleDamageEvent(entityId: any, damageAmount: any): void;
    raycastSceneDebug(): THREE.Object3D<THREE.Object3DEventMap>;
    updateEntityModel(entityId: string, modelPathOrParts: string | EntityModelOverridePart[], modelType?: Entity.EntityModelType, metadata?: any): void;
    private setupPlayerObject;
    private updateEntityEquipment;
}
//# sourceMappingURL=entities.d.ts.map