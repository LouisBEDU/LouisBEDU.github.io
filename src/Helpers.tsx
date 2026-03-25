import type { ColorStyle, ProjectColor } from "./Types";

export const colorMap: Record<ProjectColor, ColorStyle> = {
  accent: {
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    text: "text-emerald-400",
  },
  blue: {
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    text: "text-blue-400",
  },
  purple: {
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    text: "text-purple-400",
  },
  orange: {
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    text: "text-orange-400",
  },
  red: {
    bg: "bg-red-400/10",
    border: "border-red-400/20",
    text: "text-red-400",
  },
};