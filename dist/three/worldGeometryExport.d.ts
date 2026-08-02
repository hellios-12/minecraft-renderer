import * as THREE from 'three';
import type { WorldRendererThree } from './worldRendererThree';
import type { ExportedWorldGeometry } from '../mesher-shared/exportedGeometryTypes';
export type { ExportedSection, ExportedWorldGeometry } from '../mesher-shared/exportedGeometryTypes';
/**
 * Export world geometry to a downloadable file
 */
export declare function exportWorldGeometry(worldRenderer: WorldRendererThree, cameraPosition: {
    x: number;
    y: number;
    z: number;
}, cameraRotation: {
    pitch: number;
    yaw: number;
}, includeTexture?: boolean): ExportedWorldGeometry;
/**
 * Download world geometry as JSON file
 */
export declare function downloadWorldGeometry(worldRenderer: WorldRendererThree, cameraPosition: {
    x: number;
    y: number;
    z: number;
}, cameraRotation: {
    pitch: number;
    yaw: number;
}, filename?: string, includeTexture?: boolean): void;
/**
 * Load world geometry from URL
 */
export declare function loadWorldGeometryFromUrl(url: string): Promise<ExportedWorldGeometry>;
export declare function createMeshesFromExport(exportData: ExportedWorldGeometry, material: THREE.Material, shaderMaterial?: THREE.ShaderMaterial | null, skyLevel?: number): THREE.Group[];
/**
 * Load texture from data URL and create THREE.js texture
 */
export declare function loadTextureFromDataUrl(dataUrl: string): Promise<THREE.Texture>;
/**
 * Apply exported geometry to an existing WorldRenderer instance.
 * Replaces any previously imported geometry export group.
 */
export declare function applyWorldGeometryExport(worldRenderer: WorldRendererThree, exportData: ExportedWorldGeometry): Promise<number>;
//# sourceMappingURL=worldGeometryExport.d.ts.map