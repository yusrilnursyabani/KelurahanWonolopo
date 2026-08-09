export const TYPOGRAPHY = {
  heading: {
    family: "var(--font-heading)",
    lineHeight: 1.15,
    tracking: "-0.02em",
  },
  body: {
    family: "var(--font-sans)",
    lineHeight: 1.7,
  },
} as const;

export const SPACING = {
  sectionMobile: "3rem",
  sectionDesktop: "5rem",
  contentGap: "1.5rem",
} as const;

export const CONTAINER = {
  maxWidth: "80rem",
  paddingXMobile: "1rem",
  paddingXDesktop: "2rem",
} as const;

export const RADIUS = {
  sm: "0.5rem",
  md: "0.75rem",
  lg: "0.875rem",
  xl: "1.25rem",
} as const;

export const ELEVATION = {
  sm: "var(--shadow-sm)",
  md: "var(--shadow-md)",
  lg: "var(--shadow-lg)",
} as const;

export const ICON_SIZE = {
  sm: "1rem",
  md: "1.25rem",
  lg: "1.5rem",
} as const;

export const MOTION = {
  durationFast: "140ms",
  durationBase: "220ms",
  durationSlow: "360ms",
  easingStandard: "cubic-bezier(0.2, 0, 0, 1)",
} as const;
