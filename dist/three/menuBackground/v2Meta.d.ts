/** Settings / labels only — no Three.js or DocumentRenderer (safe for defaultOptions imports). */
export declare const V2_SCENE_IDS: readonly ["galaxy", "nether", "end", "cyber", "light"];
export type V2SceneId = (typeof V2_SCENE_IDS)[number];
export declare const V2_CAMERA_IDS: readonly ["cruise", "barrel", "dive", "orbit", "snake"];
export type V2CameraId = (typeof V2_CAMERA_IDS)[number];
export declare const V2_SCENE_LABELS: Record<V2SceneId, string>;
export declare const V2_CAMERA_LABELS: Record<V2CameraId, string>;
export declare const MINECRAFT_BLOCK_GROUP_IDS: readonly ["mixed", "stainedGlass", "wool", "construction", "glow", "world"];
export type MinecraftBlockGroupId = (typeof MINECRAFT_BLOCK_GROUP_IDS)[number];
export declare const MINECRAFT_BLOCK_GROUP_LABELS: Record<MinecraftBlockGroupId, string>;
//# sourceMappingURL=v2Meta.d.ts.map