export type NavItem = {
  id: string;
  label: string;
};

export type StackMap = Record<string, string[]>;

export type Experience = {
  title: string;
  company: string;
  type: string;
  period: string;
  active: boolean;
  bullets: string[];
  tags: string[];
};

export type ProjectColor = "accent" | "blue" | "purple" | "orange" | "red";

export type Project = {
  emoji: string;
  color: ProjectColor;
  title: string;
  desc: string;
  tags: string[];
  github?: string;
  live?: string;
};

export type ColorStyle = {
  bg: string;
  border: string;
  text: string;
};
