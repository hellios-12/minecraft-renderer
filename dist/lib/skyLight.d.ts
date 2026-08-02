/**
 * Calculates sky light level based on Minecraft time of day.
 *
 * Minecraft time reference:
 * - 0 ticks = 6:00 AM (sunrise complete)
 * - 6000 ticks = 12:00 PM (noon) - brightest
 * - 12000 ticks = 6:00 PM (sunset begins)
 * - 13000 ticks = 7:00 PM (dusk/night begins)
 * - 18000 ticks = 12:00 AM (midnight) - darkest
 * - 23000 ticks = 5:00 AM (dawn begins)
 * - 24000 ticks = 6:00 AM (same as 0)
 *
 * Sky light ranges from 4 (night) to 15 (day).
 */
/**
 * Calculate celestial angle from time of day (0-1 range representing sun position)
 */
export declare const getCelestialAngle: (timeOfDay: number) => number;
/**
 * Calculate sky light level (0-15) based on time of day in ticks.
 * Matches Minecraft vanilla behavior.
 *
 * @param timeOfDay - Time in ticks (0-24000)
 * @returns Sky light level (4-15, where 15 is brightest day, 4 is darkest night)
 */
export declare const calculateSkyLight: (timeOfDay: number) => number;
/**
 * Simplified sky light calculation that more closely matches vanilla behavior.
 * Uses piecewise linear interpolation based on known Minecraft light levels.
 *
 * @param timeOfDay - Time in ticks (0-24000)
 * @returns Sky light level (4-15)
 */
export declare const calculateSkyLightSimple: (timeOfDay: number) => number;
export declare const debugSkyLight: () => void;
//# sourceMappingURL=skyLight.d.ts.map