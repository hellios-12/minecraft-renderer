/**
 * Single-Thread Graphics Backend - Main thread Three.js implementation.
 *
 * This is the standard graphics backend that runs entirely on the main thread.
 * It provides direct access to the Three.js renderer and world renderer.
 */
import type { GraphicsBackendLoader } from '../graphicsBackend';
/**
 * Creates a single-thread graphics backend.
 */
declare const createGraphicsBackendSingleThread: GraphicsBackendLoader;
export default createGraphicsBackendSingleThread;
export { createGraphicsBackendSingleThread };
//# sourceMappingURL=graphicsBackendSingleThread.d.ts.map