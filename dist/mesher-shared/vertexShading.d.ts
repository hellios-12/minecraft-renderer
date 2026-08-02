import type { MesherConfig } from './shared';
export type FaceDirection = readonly [number, number, number];
/** Directional face darkening (matches legacy `renderElement` in models.ts). */
export declare function getSideShading(dir: FaceDirection, shadingTheme: MesherConfig['shadingTheme'], cardinalLight: MesherConfig['cardinalLight']): number;
/** Per-vertex brightness from AO (0–3) and corner light (0–15). */
export declare function vertexLightFromAo(ao: number, cornerLight15: number, sideShading: number, shadingTheme: MesherConfig['shadingTheme']): number;
//# sourceMappingURL=vertexShading.d.ts.map