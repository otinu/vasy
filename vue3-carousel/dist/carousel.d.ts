import * as vue from 'vue';
import { VNode } from 'vue';
import { Breakpoints } from '@/types';

declare const _default$1: vue.DefineComponent<{
    itemsToShow: {
        default: number;
        type: NumberConstructor;
    };
    itemsToScroll: {
        default: number;
        type: NumberConstructor;
    };
    wrapAround: {
        default: boolean | undefined;
        type: BooleanConstructor;
    };
    snapAlign: {
        default: "start" | "end" | "center" | "center-even" | "center-odd";
        validator(value: string): boolean;
    };
    transition: {
        default: number | undefined;
        type: NumberConstructor;
    };
    breakpoints: {
        default: Breakpoints | undefined;
        type: ObjectConstructor;
    };
    autoplay: {
        default: number | undefined;
        type: NumberConstructor;
    };
    pauseAutoplayOnHover: {
        default: boolean | undefined;
        type: BooleanConstructor;
    };
    modelValue: {
        default: undefined;
        type: NumberConstructor;
    };
    mouseDrag: {
        default: boolean | undefined;
        type: BooleanConstructor;
    };
    touchDrag: {
        default: boolean | undefined;
        type: BooleanConstructor;
    };
    dir: {
        default: "rtl" | "ltr";
        validator(value: string): boolean;
    };
    settings: {
        default(): {};
        type: ObjectConstructor;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, vue.EmitsOptions, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<{
    itemsToShow?: unknown;
    itemsToScroll?: unknown;
    wrapAround?: unknown;
    snapAlign?: unknown;
    transition?: unknown;
    breakpoints?: unknown;
    autoplay?: unknown;
    pauseAutoplayOnHover?: unknown;
    modelValue?: unknown;
    mouseDrag?: unknown;
    touchDrag?: unknown;
    dir?: unknown;
    settings?: unknown;
} & {
    itemsToShow: number;
    itemsToScroll: number;
    wrapAround: boolean;
    snapAlign: "start" | "end" | "center" | "center-even" | "center-odd";
    transition: number;
    breakpoints: Record<string, any>;
    autoplay: number;
    pauseAutoplayOnHover: boolean;
    mouseDrag: boolean;
    touchDrag: boolean;
    dir: "rtl" | "ltr";
    settings: Record<string, any>;
} & {
    modelValue?: number | undefined;
}>, {
    itemsToShow: number;
    itemsToScroll: number;
    wrapAround: boolean;
    snapAlign: "start" | "end" | "center" | "center-even" | "center-odd";
    transition: number;
    breakpoints: Record<string, any>;
    autoplay: number;
    pauseAutoplayOnHover: boolean;
    modelValue: number;
    mouseDrag: boolean;
    touchDrag: boolean;
    dir: "rtl" | "ltr";
    settings: Record<string, any>;
}>;

declare const Navigation: (props: any, { slots, attrs }: any) => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[];

declare const _default: vue.DefineComponent<{
    index: {
        type: NumberConstructor;
        default: number;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, vue.EmitsOptions, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<{
    index?: unknown;
} & {
    index: number;
} & {}>, {
    index: number;
}>;

interface Data {
    [key: string]: unknown;
}

declare const Pagination: () => VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>;

declare const Icon: {
    (props: Data): vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }> | undefined;
    props: {
        name: StringConstructor;
        title: StringConstructor;
    };
};

export { _default$1 as Carousel, Icon, Navigation, Pagination, _default as Slide };
