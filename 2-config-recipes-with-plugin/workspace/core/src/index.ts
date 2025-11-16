import {
  definePlugin,
  definePreset,
  defineRecipe,
  defineSlotRecipe,
} from "@pandacss/dev";

export default definePreset({
  name: "@ui-kit/core",
  theme: {
    extend: {
      recipes: {
        badge: defineRecipe({
          className: "badge",
          base: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "600",
            borderRadius: "md",
            paddingX: "2",
            paddingY: "1",
            bg: "violet.500",
          },
        }),
        button: defineRecipe({
          className: "button",
          base: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "600",
            borderRadius: "md",
            paddingX: "4",
            paddingY: "2",
            bg: "blue.500",
          },
        }),
      },
      slotRecipes: {
        card: defineSlotRecipe({
          className: "card",
          slots: ["container", "title"],
          base: {
            container: {
              borderWidth: "1px",
              borderColor: "border",
              borderRadius: "lg",
              padding: "4",
              backgroundColor: "backgroundSecondary",
            },
            title: {
              fontSize: "lg",
              fontWeight: "700",
            },
          },
        }),
      },
    },
  },
});
