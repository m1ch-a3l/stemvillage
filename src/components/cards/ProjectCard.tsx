import { PlaceholderArt } from "@/components/ui/placeholder-art";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  const date = new Date(`${project.date}-01T00:00:00`).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-shadow hover:shadow-lg">
      <div className="h-44 w-full overflow-hidden">
        <PlaceholderArt seed={project.slug} className="transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <Badge variant="secondary" className="w-fit bg-brand-emerald/10 text-brand-emerald">
          {project.category}
        </Badge>
        <h3 className="font-heading text-base font-semibold text-foreground">{project.name}</h3>
        <p className="flex-1 text-sm text-muted-foreground">{project.description}</p>
        <span className="text-xs text-muted-foreground">{date}</span>
      </div>
    </div>
  );
}
