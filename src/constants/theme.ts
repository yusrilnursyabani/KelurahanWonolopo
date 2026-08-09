export const COLOR_TOKENS = {
  neutral: {
    background: "#ffffff",
    surface: "#f8fafc",
    border: "#e2e8f0",
    text: "#0f172a",
    muted: "#475569",
  },
  accent: {
    semarangRed: "#c1121f",
    semarangRedHover: "#a40f1a",
  },
  state: {
    success: "#15803d",
    warning: "#b45309",
    danger: "#dc2626",
  },
} as const;

export const LAYOUT = {
  container: "max-w-7xl",
  sectionPadding: "py-12 md:py-16 lg:py-20",
  pagePaddingX: "px-4 md:px-6 lg:px-8",
} as const;
