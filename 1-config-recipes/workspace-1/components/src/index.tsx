import { badge, button, card } from "@ui-kit/styled-system/recipes";
import {
  createRecipeComponent,
  createSlotRecipeComponentFactory,
} from "./utils/panda";

export const Badge = createRecipeComponent(badge, "span", "Badge");

export const Button = createRecipeComponent(button, "div", "Button");

const cardFactory = createSlotRecipeComponentFactory(card);

export const Card = cardFactory.createProviderComponent(
  "div",
  "container",
  "Card",
);
export const CardTitle = cardFactory.createConsumerComponent(
  "h2",
  "title",
  "CardTitle",
);
