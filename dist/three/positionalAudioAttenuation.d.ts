export declare const DEFAULT_ATTENUATION_DISTANCE = 16;
export declare function computeEffectiveVolume(soundEntryVolume: number, packetVolume: number): number;
export declare function computeIndividualGain(effectiveVolume: number): number;
export declare function computePositionalAudioParams(effectiveVolume: number, attenuationDistance: number): {
    individualGain: number;
    maxDistance: number;
};
export declare function applyVanillaLinearPanner(panner: PannerNode, maxDistance: number): void;
export declare function setPannerPositionImmediate(panner: PannerNode, audioContext: AudioContext, x: number, y: number, z: number): void;
//# sourceMappingURL=positionalAudioAttenuation.d.ts.map