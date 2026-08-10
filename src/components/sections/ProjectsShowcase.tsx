import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { getProjects } from "@/lib/content";

export function ProjectsShowcase() {
  const projects = getProjects().slice(0, 6);

  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader
            eyebrow="Innovation Showcase"
            title="What learners have actually built."
            description="A sample of projects built during programmes, workshops and hackathons — from robotics builds to student-designed apps."
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
