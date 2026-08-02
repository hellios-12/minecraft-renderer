import type { GameMode, HandItemBlock, BlocksShapes, BlockShape, MovementState, CameraPerspective, Team, ItemSpecificContextProperties } from './types';
export declare const getInitialPlayerState: () => {
    playerSkin: string | undefined;
    inWater: boolean;
    waterBreathing: boolean;
    backgroundColor: [number, number, number];
    ambientLight: number;
    directionalLight: number;
    eyeHeight: number;
    gameMode: GameMode | undefined;
    lookingAtBlock: {
        x: number;
        y: number;
        z: number;
        face?: number;
        shapes: BlocksShapes;
    } | undefined;
    diggingBlock: {
        x: number;
        y: number;
        z: number;
        stage: number;
        face?: number;
        mergedShape: BlockShape | undefined;
    } | undefined;
    movementState: MovementState;
    onGround: boolean;
    sneaking: boolean;
    flying: boolean;
    sprinting: boolean;
    walkDist: number;
    prevWalkDist: number;
    bob: number;
    prevBob: number;
    itemUsageTicks: number;
    username: string;
    onlineMode: boolean;
    /** Dimension ambient lighting preset (e.g. nether) — from login/respawn dimension data when available */
    cardinalLight: string;
    lightingDisabled: boolean;
    shouldHideHand: boolean;
    heldItemMain: HandItemBlock | undefined;
    heldItemOff: HandItemBlock | undefined;
    perspective: CameraPerspective;
    onFire: boolean;
    /** Gameplay FOV scale (sprint, bow, zoom, etc.); base FOV comes from renderer options. */
    fovMultiplier: number;
    cameraSpectatingEntity: number | undefined;
    team: Team | undefined;
};
export declare const getPlayerStateUtils: (reactive: PlayerStateReactive) => {
    isSpectator(): boolean;
    isSpectatingEntity(): boolean;
    isThirdPerson(): boolean;
};
export declare const getInitialPlayerStateRenderer: () => {
    reactive: {
        playerSkin: string | undefined;
        inWater: boolean;
        waterBreathing: boolean;
        backgroundColor: [number, number, number];
        ambientLight: number;
        directionalLight: number;
        eyeHeight: number;
        gameMode: GameMode | undefined;
        lookingAtBlock: {
            x: number;
            y: number;
            z: number;
            face?: number;
            shapes: BlocksShapes;
        } | undefined;
        diggingBlock: {
            x: number;
            y: number;
            z: number;
            stage: number;
            face?: number;
            mergedShape: BlockShape | undefined;
        } | undefined;
        movementState: MovementState;
        onGround: boolean;
        sneaking: boolean;
        flying: boolean;
        sprinting: boolean;
        walkDist: number;
        prevWalkDist: number;
        bob: number;
        prevBob: number;
        itemUsageTicks: number;
        username: string;
        onlineMode: boolean;
        /** Dimension ambient lighting preset (e.g. nether) — from login/respawn dimension data when available */
        cardinalLight: string;
        lightingDisabled: boolean;
        shouldHideHand: boolean;
        heldItemMain: HandItemBlock | undefined;
        heldItemOff: HandItemBlock | undefined;
        perspective: CameraPerspective;
        onFire: boolean;
        /** Gameplay FOV scale (sprint, bow, zoom, etc.); base FOV comes from renderer options. */
        fovMultiplier: number;
        cameraSpectatingEntity: number | undefined;
        team: Team | undefined;
    };
};
export type PlayerStateReactive = ReturnType<typeof getInitialPlayerState>;
export type PlayerStateUtils = ReturnType<typeof getPlayerStateUtils>;
export type PlayerStateRenderer = PlayerStateReactive;
export declare const getItemSelector: (playerState: PlayerStateRenderer, specificProperties: ItemSpecificContextProperties, item?: import("prismarine-item").Item) => {
    'minecraft:date': Date;
    'minecraft:using_item'?: boolean | undefined;
    'minecraft:use_duration'?: number | undefined;
    'minecraft:use_cycle'?: number | undefined;
    'minecraft:display_context'?: "head" | "gui" | "ground" | "fixed" | "firstperson" | "thirdperson" | undefined;
};
//# sourceMappingURL=playerState.d.ts.map