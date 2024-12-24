import { tv } from "tailwind-variants";

export const button = tv({
  base: "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      primary: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-alpha)]",
      secondary: "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary-alpha)]",
      outline: "border border-[var(--border)] bg-[var(--background)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]",
    },
    size: {
      sm: "h-9 px-3 text-sm rounded-[calc(var(--radius-sm)*1px)]",
      md: "h-10 px-4 py-2 rounded-[calc(var(--radius-md)*1px)]",
      lg: "h-11 px-8 text-lg rounded-[calc(var(--radius-lg)*1px)]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
