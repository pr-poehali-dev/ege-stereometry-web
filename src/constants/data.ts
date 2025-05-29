import { Topic, StatItem } from "@/types";

export const topics: Topic[] = [
  {
    title: "Объемы многогранников",
    description: "Призмы, пирамиды, параллелепипеды",
    icon: "Box",
    problems: 25,
  },
  {
    title: "Тела вращения",
    description: "Цилиндры, конусы, сферы",
    icon: "Circle",
    problems: 20,
  },
  {
    title: "Комбинированные фигуры",
    description: "Сложные составные тела",
    icon: "Layers",
    problems: 15,
  },
];

export const stats: StatItem[] = [
  { value: "95%", label: "Успешная сдача ЕГЭ" },
  { value: "60+", label: "Разобранных задач" },
  { value: "3 мес", label: "Средний срок подготовки" },
];
