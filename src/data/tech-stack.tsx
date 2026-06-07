import type { IconType } from "react-icons";
import {
  SiChartdotjs,
  SiDiscord,
  SiExpress,
  SiFastapi,
  SiNextdotjs,
  SiNodedotjs,
  SiPnpm,
  SiPrisma,
  SiPython,
  SiReact,
  SiRoblox,
  SiSqlite,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from "react-icons/si";

export interface TechItem {
  name: string;
  Icon: IconType;
}

export const techStack: TechItem[] = [
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "tRPC", Icon: SiTrpc },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Vite", Icon: SiVite },
  { name: "Vue.js", Icon: SiVuedotjs },
  { name: "Python", Icon: SiPython },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "SQLite", Icon: SiSqlite },
  { name: "Discord.js", Icon: SiDiscord },
  { name: "Chart.js", Icon: SiChartdotjs },
  { name: "pnpm", Icon: SiPnpm },
  { name: "Roblox", Icon: SiRoblox },
];
