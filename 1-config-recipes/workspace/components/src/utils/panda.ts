import { cx } from "@ui-kit/styled-system/css";
import type {
  RecipeRuntimeFn,
  RecipeVariant,
  RecipeVariantFn,
  RecipeVariantRecord,
  SlotRecipeRuntimeFn,
  SlotRecipeVariantFn,
  SlotRecipeVariantRecord,
  SlotRecord,
} from "@ui-kit/styled-system/types";
import {
  type ComponentProps,
  type ComponentRef,
  type ElementType,
  createContext,
  createElement,
  forwardRef,
  useContext,
} from "react";

import { type ExtendedComponentProps, getComponentName } from "./react";

export type Recipe<T extends RecipeVariantRecord = RecipeVariantRecord> =
  RecipeVariantFn<T> & Pick<RecipeRuntimeFn<T>, "splitVariantProps">;

export const createRecipeComponent = <
  TRecipe extends Recipe,
  TElement extends ElementType,
>(
  recipe: TRecipe,
  element: TElement,
  displayName = `Recipe(${getComponentName(element)})`,
) => {
  const Component = forwardRef<
    ComponentRef<TElement>,
    ExtendedComponentProps<TElement, Partial<RecipeVariant<TRecipe>>>
  >((props, ref) => {
    const [variantProps, restProps] = recipe.splitVariantProps(props);
    const className = cx(
      recipe(variantProps),
      "className" in restProps ? String(restProps["className"]) : undefined,
    );

    return createElement(element, {
      ...restProps,
      className,
      ref,
    });
  });

  Component.displayName = displayName;

  return Component;
};

export type SlotRecipe<
  S extends string = string,
  T extends SlotRecipeVariantRecord<S> = SlotRecipeVariantRecord<S>,
> = SlotRecipeVariantFn<S, T> &
  Pick<SlotRecipeRuntimeFn<S, T>, "splitVariantProps">;

export type ExtractSlotFromSlotRecipe<T> =
  T extends SlotRecipe<infer S> ? S : never;

export const createSlotRecipeComponentFactory = <
  TRecipe extends SlotRecipe,
  TSlot extends ExtractSlotFromSlotRecipe<TRecipe>,
>(
  recipe: TRecipe,
) => {
  const StylesContext = createContext({} as SlotRecord<TSlot, string>);

  const createProviderComponent = <TElement extends ElementType>(
    element: TElement,
    slot: TSlot,
    displayName = `SlotRecipeProvider(${getComponentName(element)})`,
  ) => {
    const Component = forwardRef<
      ComponentRef<TElement>,
      ExtendedComponentProps<TElement, Partial<RecipeVariant<TRecipe>>>
    >((props, ref) => {
      const [variantProps, restProps] = recipe.splitVariantProps(props);
      const styles = recipe(variantProps);
      const className = cx(
        styles[slot],
        "className" in restProps ? String(restProps["className"]) : undefined,
      );

      return createElement(
        StylesContext.Provider,
        {
          value: styles,
        },
        createElement(element, {
          ...restProps,
          className,
          ref,
        }),
      );
    });

    Component.displayName = displayName;

    return Component;
  };

  const createConsumerComponent = <TElement extends ElementType>(
    element: TElement,
    slot: TSlot,
    displayName = `SlotRecipeConsumer(${getComponentName(element)})`,
  ) => {
    const Component = forwardRef<
      ComponentRef<TElement>,
      ComponentProps<TElement>
    >((props, ref) => {
      const styles = useContext(StylesContext);
      const className = cx(styles[slot], props.className);

      return createElement(element, {
        ...props,
        className,
        ref,
      });
    });

    Component.displayName = displayName;

    return Component;
  };

  return {
    createProviderComponent,
    createConsumerComponent,
  };
};
