import { Vec3 } from 'vec3';
import type { WorldRendererThree } from './worldRendererThree';
export declare class FireworksRenderer {
    private readonly worldRenderer;
    static readonly DEFAULT_PARTICLE_COUNT = 50;
    static readonly DEFAULT_PARTICLE_SIZE = 0.05;
    static readonly DEFAULT_EXPLOSION_DURATION = 6000;
    static readonly GRAVITY = -0.005;
    static readonly VELOCITY_FACTOR = 1.5;
    static readonly TEST_INTERVAL = 1000;
    static readonly DEBUG_SHOW_EXPLOSION_CENTER = true;
    static readonly DEBUG_SHOW_PARTICLE_TRAILS = false;
    private readonly explosions;
    private readonly particleGeometry;
    private readonly particleMaterials;
    private testModeTimer?;
    private explosionCounter;
    constructor(worldRenderer: WorldRendererThree);
    private createParticleMaterials;
    private getRandomMaterial;
    private createExplosion;
    private createExplosionFacingCamera;
    /**
     * Create a firework explosion at the specified position
     * @param position World position for the explosion
     * @param size Size multiplier for the explosion (default: 1.0)
     * @param color Optional specific color for all particles (default: random colors)
     * @param duration Duration of the explosion in milliseconds (default: DEFAULT_EXPLOSION_DURATION)
     */
    explode(position: Vec3, size?: number, color?: number, duration?: number): string;
    /**
     * Create a firework explosion that faces the camera direction
     * @param position World position for the explosion
     * @param size Size multiplier for the explosion (default: 1.0)
     * @param color Optional specific color for all particles (default: random colors)
     * @param duration Duration of the explosion in milliseconds (default: DEFAULT_EXPLOSION_DURATION)
     */
    explodeFacingCamera(position: Vec3, size?: number, color?: number, duration?: number): string;
    private startTestMode;
    private updateParticle;
    render(): void;
    private removeExplosion;
    stopTestMode(): void;
    destroy(): void;
}
//# sourceMappingURL=fireworksRenderer.d.ts.map