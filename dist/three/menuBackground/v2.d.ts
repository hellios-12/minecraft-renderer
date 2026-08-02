import * as THREE from 'three';
import type { DocumentRenderer } from '../documentRenderer';
import { ResourcesManager } from '../../resourcesManager/resourcesManager';
import type { MenuBackgroundView } from './activeView';
import { type V2CameraId, type V2SceneId, type MinecraftBlockGroupId } from './v2Meta';
export { V2_SCENE_IDS, V2_SCENE_LABELS, V2_CAMERA_IDS, V2_CAMERA_LABELS, MINECRAFT_BLOCK_GROUP_IDS, MINECRAFT_BLOCK_GROUP_LABELS } from './v2Meta';
export type { V2SceneId, V2CameraId, MinecraftBlockGroupId } from './v2Meta';
export interface V2MenuBackgroundOptions {
    useMinecraftTextures?: boolean;
    initialScene?: V2SceneId;
    initialCamera?: V2CameraId;
    initialBlockGroup?: MinecraftBlockGroupId;
    /** Camera path speed multiplier (0 = frozen path; mouse parallax unchanged). */
    initialCameraSpeed?: number;
    /** Floating blocks + sky drift speed multiplier. */
    initialBlockSpeed?: number;
    resourcesManager?: ResourcesManager;
}
/** Block pools for textured floating cubes (selected via {@link V2MenuBackground.setBlockGroup}). */
export declare const MINECRAFT_BLOCK_GROUPS: {
    readonly mixed: readonly ["white_wool", "cyan_wool", "blue_wool", "purple_wool", "white_stained_glass", "cyan_stained_glass", "blue_stained_glass", "purple_stained_glass", "glowstone", "sea_lantern", "amethyst_block", "copper_block", "gold_block", "diamond_block"];
    readonly stainedGlass: readonly ["white_stained_glass", "orange_stained_glass", "magenta_stained_glass", "light_blue_stained_glass", "yellow_stained_glass", "lime_stained_glass", "pink_stained_glass", "gray_stained_glass", "light_gray_stained_glass", "cyan_stained_glass", "purple_stained_glass", "blue_stained_glass", "brown_stained_glass", "green_stained_glass", "red_stained_glass", "black_stained_glass"];
    readonly wool: readonly ["white_wool", "orange_wool", "magenta_wool", "light_blue_wool", "yellow_wool", "lime_wool", "pink_wool", "gray_wool", "light_gray_wool", "cyan_wool", "purple_wool", "blue_wool", "brown_wool", "green_wool", "red_wool", "black_wool"];
    readonly construction: readonly ["copper_block", "exposed_copper", "weathered_copper", "oxidized_copper", "cut_copper", "exposed_cut_copper", "weathered_cut_copper", "oxidized_cut_copper", "iron_block", "gold_block", "diamond_block", "emerald_block", "netherite_block", "lapis_block", "redstone_block", "coal_block", "quartz_block", "amethyst_block", "bricks", "stone_bricks", "deepslate_bricks", "polished_blackstone"];
    readonly glow: readonly ["glowstone", "sea_lantern", "shroomlight", "ochre_froglight", "verdant_froglight", "pearlescent_froglight", "redstone_lamp", "beacon"];
    readonly world: readonly ["grass_block", "podzol", "mycelium", "dirt", "coarse_dirt", "rooted_dirt", "mud", "clay", "stone", "cobblestone", "mossy_cobblestone", "deepslate", "cobbled_deepslate", "tuff", "calcite", "sand", "red_sand", "gravel", "snow_block", "coal_ore", "deepslate_coal_ore", "iron_ore", "deepslate_iron_ore", "copper_ore", "deepslate_copper_ore", "gold_ore", "deepslate_gold_ore", "diamond_ore", "deepslate_diamond_ore", "emerald_ore", "deepslate_emerald_ore", "lapis_ore", "deepslate_lapis_ore", "redstone_ore", "deepslate_redstone_ore", "nether_gold_ore", "ancient_debris", "oak_log", "birch_log", "spruce_log", "jungle_log", "acacia_log", "dark_oak_log", "mangrove_log", "cherry_log", "netherrack", "soul_sand", "basalt", "end_stone"];
};
export declare class V2MenuBackground implements MenuBackgroundView {
    private readonly documentRenderer;
    private readonly abortSignal?;
    readonly scene: THREE.Scene;
    readonly camera: THREE.PerspectiveCamera;
    private readonly ambient;
    private readonly dir;
    private readonly pt1;
    private readonly pt2;
    private readonly blocks;
    private readonly bGroup;
    private readonly galaxy;
    private readonly nebula;
    private readonly stars;
    private readonly galGeo;
    private readonly nebGeo;
    private readonly bGeo;
    private readonly eGeo;
    private curScene;
    private curCam;
    private blockGroup;
    private cameraSpeed;
    private blockSpeed;
    private camT;
    private mx;
    private my;
    private tmx;
    private tmy;
    private transitioning;
    private useMinecraftTextures;
    private readonly resourcesManager?;
    private atlasTexture;
    private blockMaterialPool;
    private gradientSky;
    private gradientSkyTexture;
    private disposed;
    private animTime;
    private texturesApplied;
    private textureLoadInProgress;
    private onAssetsTexturesUpdated?;
    constructor(documentRenderer: DocumentRenderer, options?: V2MenuBackgroundOptions, abortSignal?: AbortSignal | undefined);
    init(): Promise<void>;
    private scheduleMinecraftTextureLoad;
    private attachAssetsListener;
    private detachAssetsListener;
    private hasBlockAtlas;
    private ensureAtlasReady;
    private tryApplyMinecraftTextures;
    private applyScenePalette;
    private setupMouseTracking;
    private addBackgroundTextPlane;
    private spawnBlock;
    private createBlockMaterial;
    private removeBlockEdgeLines;
    private ensureMcDataLoaded;
    private resolveBlockAtlasUv;
    private applyMinecraftTexturesFromAtlas;
    setScene(name: V2SceneId): void;
    setCamera(name: V2CameraId): void;
    setCameraSpeed(speed: number): void;
    setBlockSpeed(speed: number): void;
    setBlockGroup(name: MinecraftBlockGroupId): Promise<void>;
    getSceneId(): V2SceneId;
    getCameraId(): V2CameraId;
    getBlockGroupId(): MinecraftBlockGroupId;
    update(dt: number, sizeChanged: boolean): void;
    dispose(): void;
}
//# sourceMappingURL=v2.d.ts.map