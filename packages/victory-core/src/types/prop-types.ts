import { any } from "prop-types";
import * as React from "react";
import {
  AnimationEasing,
  AnimationStyle
} from "../victory-animation/victory-animation";
import { StringOrNumberOrCallback } from "./callbacks";

export type AxisType = "x" | "y";
export type DatumValue = number | string | Date | null | undefined;
export type Datum = any;
export type ForAxes<T> = T | { x?: T; y?: T };
export type ID = number | string;
export type ValueOrAccessor<ValueType = unknown, PropsType = object> =
  | ValueType
  | ((props: PropsType) => ValueType);
export type Tuple<T> = [T, T];
export type ValueOrAxes<T> = T | ForAxes<T>;

export type DomainPaddingPropType = ValueOrAxes<PaddingType>;
export type DomainPropType = ValueOrAxes<DomainTuple>;
export type DomainValue = number | Date;
// This should be a tuple type, but every time we use it, it fails with a type error.
// type number[] is not assignable to type [number, number] | [Date, Date].
export type DomainTuple = number[] | Date[];
export type PaddingType = number | Tuple<number>;
export type RangePropType = ValueOrAxes<RangeTuple>;
export type RangeTuple = number[];
export type StringOrNumberOrList = string | number | (string | number)[];

export interface Padding {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface AnimatePropTypeInterface {
  duration?: number;
  onEnd?: () => void;
  onExit?: {
    duration?: number;
    before?: (datum: Datum, index: number, data: Datum[]) => AnimationStyle;
  };
  onEnter?: {
    duration?: number;
    before?: (datum: Datum, index: number, data: Datum[]) => AnimationStyle;
    after?: (datum: Datum, index: number, data: Datum[]) => AnimationStyle;
  };
  onLoad?: {
    duration?: number;
    before?: (datum: Datum, index: number, data: Datum[]) => AnimationStyle;
    after?: (datum: Datum, index: number, data: Datum[]) => AnimationStyle;
  };
  easing?: AnimationEasing;
  animationWhitelist?: string[];
}

export interface EventCallbackInterface<TTarget, TEventKey> {
  childName?: string | string[];
  target?: TTarget;
  eventKey?: TEventKey;
  mutation: (props: any) => any;
  callback?: (props: any) => any;
}

export interface EventPropTypeInterface<TTarget, TEventKey> {
  childName?: string | Array<StringOrNumberOrCallback>;
  target: TTarget;
  eventKey?: TEventKey;
  eventHandlers: {
    [key: string]:
      | {
          (
            event: React.SyntheticEvent<any>,
            props?: any
          ): EventCallbackInterface<TTarget, TEventKey>;
        }
      | {
          (
            event: React.SyntheticEvent<any>,
            props?: any
          ): EventCallbackInterface<TTarget, TEventKey>[];
        }
      | {
          (event: React.SyntheticEvent<any>, props?: any): void;
        };
  };
}

// type NumberValue = number | { valueOf(): number };
/**
 * D3 scale function shape. Don't want to introduce typing dependency to d3
 */
// export interface D3Scale<TRange = any> {
//   (input: NumberValue): number;

//   ticks: (count?: number) => number[];
//   tickFormat: (count?: number) => (d: number) => string;
//   domain: () => number[];
//   range: () => TRange[];
//   copy: () => this;
//   invert: (value: number) => number;
// }
export type D3Scale = any;

export type ScaleName = "linear" | "time" | "log" | "sqrt";
export type ScalePropType = ScaleName;
export type ScaleXYPropType = {
  x: D3Scale;
  y: D3Scale;
};

export type CategoryPropType =
  | string[]
  | { x: string[] }
  | { y: string[] }
  | {
      x: string[];
      y: string[];
    };

export type DataGetterPropType = ValueOrAccessor<string | number | number[]>;

export type InterpolationPropType =
  | "basis"
  | "basisClosed"
  | "basisOpen"
  | "bundle"
  | "cardinal"
  | "cardinalClosed"
  | "cardinalOpen"
  | "catmullRom"
  | "catmullRomClosed"
  | "catmullRomOpen"
  | "linear"
  | "linearClosed"
  | "monotoneX"
  | "monotoneY"
  | "natural"
  | "radial"
  | "step"
  | "stepAfter"
  | "stepBefore";

export type ColorScalePropType =
  | "grayscale"
  | "qualitative"
  | "heatmap"
  | "warm"
  | "cool"
  | "red"
  | "green"
  | "blue"
  | string[];

export type SortOrderPropType = "ascending" | "descending";

export interface VictoryLabelableProps {
  labelComponent?: React.ReactElement;
}

export interface VictoryMultiLabelableProps extends VictoryLabelableProps {
  labels?:
    | string[]
    | number[]
    | { (data: any): string | string[] | number | number[] | null };
}

export interface VictorySingleLabelableProps extends VictoryLabelableProps {
  label?: string | { (data: any): string | number | null };
}

export type CoordinatesPropType = {
  x: number;
  y: number;
};
