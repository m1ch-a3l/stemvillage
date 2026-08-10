import { CardMedia } from "@/components/ui/card-media";
import { Badge } from "@/components/ui/badge";
import { getProjectPhoto } from "@/lib/photos";
import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  const date = new Date(`${project.date}-01T00:00:00`).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-44 w-full overflow-hidden">
        <CardMedia photo={getProjectPhoto(project.slug)} seed={project.slug} alt={project.name} />
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
