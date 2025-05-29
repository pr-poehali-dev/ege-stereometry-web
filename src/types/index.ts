export interface Topic {
  title: string;
  description: string;
  icon: string;
  problems: number;
}

export interface StatItem {
  value: string;
  label: string;
}

export type TabType = "main" | "theory" | "practice";
