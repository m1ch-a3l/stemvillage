import {
  Code2,
  Bot,
  BrainCircuit,
  BarChart3,
  ShieldCheck,
  Sigma,
  Cog,
  type LucideIcon,
} from "lucide-react";
import type { StemAreaIcon } from "@/types/content";

export const stemAreaIconMap: Record<StemAreaIcon, LucideIcon> = {
  code: Code2,
  robot: Bot,
  brain: BrainCircuit,
  data: BarChart3,
  shield: ShieldCheck,
  math: Sigma,
  engineering: Cog,
};
