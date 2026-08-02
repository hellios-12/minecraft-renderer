import type { EventEmitter } from 'events';
import type { WorldViewEvents } from '../worldView/types';
import type { WorldViewWorker } from '../worldView';
/**
 * Register an EventEmitter listener removed when `signal` aborts.
 * Safe for shared emitters (e.g. worldView) — only removes this handler.
 */
export declare function bindAbortableListener<E extends keyof WorldViewEvents>(emitter: Pick<WorldViewWorker, 'on' | 'off'>, event: E, handler: (...args: Parameters<WorldViewEvents[E]>) => void, signal: AbortSignal): void;
/** Same pattern for plain EventEmitters (e.g. resourcesManager). */
export declare function bindAbortableEmitterListener(emitter: Pick<EventEmitter, 'on' | 'off'>, event: string, handler: (...args: any[]) => void, signal: AbortSignal): void;
//# sourceMappingURL=bindAbortableListener.d.ts.map