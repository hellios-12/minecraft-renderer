export type RendererGpuPreference = 'default' | 'high-performance' | 'low-power';
/** Maps stored `gpuPreference` to WebGL `powerPreference` (undefined = browser default). */
export declare function gpuPreferenceToWebGLPowerPreference(preference: RendererGpuPreference): 'high-performance' | 'low-power' | undefined;
//# sourceMappingURL=gpuPreference.d.ts.map