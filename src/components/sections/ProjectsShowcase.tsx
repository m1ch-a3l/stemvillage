import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { getProjects } from "@/lib/content";

export function ProjectsShowcase() {
  const projects = getProjects().slice(0, 6);

  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Innovation Showcase"
          title="What learners have actually built."
          description="A sample of projects built during programmes, workshops and hackathons — from robotics builds to student-designed apps."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
