/**
 * Minecraft Data Shim
 *
 * Provides a minimal minecraft-data implementation that only loads
 * the versions specified in globalThis.includedVersions.
 */
declare const VERSION = "1.16.5";
declare const createLazyData: (version: string) => {
    readonly attributes: any;
    readonly blocks: any;
    readonly blockCollisionShapes: any;
    readonly biomes: any;
    readonly effects: any;
    readonly items: any;
    readonly enchantments: any;
    readonly recipes: any;
    readonly instruments: any;
    readonly materials: any;
    readonly language: any;
    readonly entities: any;
    readonly protocol: any;
    readonly windows: any;
    readonly version: any;
    readonly foods: any;
    readonly particles: any;
    readonly blockLoot: any;
    readonly entityLoot: any;
    readonly loginPacket: any;
    readonly tints: any;
    readonly mapIcons: any;
    readonly sounds: any;
};
//# sourceMappingURL=minecraftData.d.ts.map