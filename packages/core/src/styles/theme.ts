import { createTheme } from "@vanilla-extract/css";

//@ts-ignore
import { variables } from "../vars.css.ts";

type ThemeVars = typeof variables;

export const createCustomTheme = (tokens: ThemeVars) => createTheme(variables, tokens);
