import { brand } from '../config/brand'

const tokenMap = {
  'color-primary': brand.colors.primary,
  'color-secondary': brand.colors.secondary,
  'color-background': brand.colors.background,
  'color-surface': brand.colors.surface,
  'color-text': brand.colors.textDark,
  'color-text-muted': brand.colors.textMuted,
  'color-accent': brand.colors.accent,
  'font-heading': brand.fonts.heading,
  'font-body': brand.fonts.body,
}

export function applyTheme() {
  const root = document.documentElement
  Object.entries(tokenMap).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value)
  })
}
