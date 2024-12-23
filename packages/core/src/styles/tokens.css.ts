import { createGlobalTheme } from "@vanilla-extract/css";
import { variables } from "../vars.css";

export const tokens = createGlobalTheme(":root", {
  colors: {
    [variables.colors.primary]: "#0070f3",
    [variables.colors.secondary]: "#666",
    [variables.colors.white]: "#fff",
    [variables.colors.error]: "#ff4d4f",
  },
  space: {
    [variables.space.small]: "8px",
    [variables.space.medium]: "16px",
  },
  borderRadius: {
    [variables.borderRadius.small]: "4px",
    [variables.borderRadius.medium]: "8px",
  },
});
