import type { ChatMessage } from 'prismarine-chat';
type SignBlockEntity = {
    Color?: string;
    GlowingText?: 0 | 1;
    Text1?: string;
    Text2?: string;
    Text3?: string;
    Text4?: string;
} | {
    is_waxed?: 0 | 1;
    front_text: {
        color: string;
        messages: string[];
        has_glowing_text?: 0 | 1;
    };
};
type JsonEncodedType = string | null | Record<string, any>;
export declare const renderSign: (blockEntity: SignBlockEntity, isHanging: boolean, PrismarineChat: typeof ChatMessage, ctxHook?: (ctx: any) => void, canvasCreator?: (width: any, height: any) => OffscreenCanvas) => OffscreenCanvas | undefined;
export declare const renderComponent: (text: JsonEncodedType | string | undefined, PrismarineChat: typeof ChatMessage, canvas: OffscreenCanvas, fontSize: number, defaultColor: string, offset?: number) => false | undefined;
export {};
//# sourceMappingURL=index.d.ts.map