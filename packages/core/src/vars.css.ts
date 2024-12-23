import { createVar } from "@vanilla-extract/css";

export const variables = {
  colors: {
    primary: createVar(),
    secondary: createVar(),
    white: createVar(),
    error: createVar(),
  },
  space: {
    small: createVar(),
    medium: createVar(),
  },
  borderRadius: {
    small: createVar(),
    medium: createVar(),
  },
};
