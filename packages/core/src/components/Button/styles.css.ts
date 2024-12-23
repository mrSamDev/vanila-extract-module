import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { tokens } from "../../styles/tokens.css";
import { RecipeVariants } from "@vanilla-extract/recipes";
import { variables } from "../../vars.css";

const base = style({
  borderRadius: tokens.borderRadius[variables.borderRadius.medium],
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  transition: "all 0.2s",
  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
  ":hover": {
    transform: "translateY(-1px)",
  },
});

const variants = styleVariants({
  primary: {
    backgroundColor: tokens.colors[variables.colors.primary],
    color: tokens.colors[variables.colors.white],
  },
  secondary: {
    backgroundColor: tokens.colors[variables.colors.secondary],
    color: tokens.colors[variables.colors.white],
  },
  error: {
    backgroundColor: tokens.colors[variables.colors.error],
    color: tokens.colors[variables.colors.white],
  },
});

const sizes = styleVariants({
  small: { padding: "6px 12px", fontSize: "14px" },
  medium: { padding: "8px 16px", fontSize: "16px" },
  large: { padding: "12px 24px", fontSize: "18px" },
});

export const button = recipe({
  base,
  variants: {
    variant: variants,
    size: sizes,
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export type ButtonVariants = NonNullable<RecipeVariants<typeof button>>;
