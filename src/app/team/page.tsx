import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { TeamMemberCard } from "@/components/cards/TeamMemberCard";
import { pageMetadata } from "@/lib/seo";
import { getTeamPhoto } from "@/lib/photos";
import { getTeam } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Our Team",
  description: "Meet the team behind STEM Village's programmes and partnerships.",
  path: "/team",
});

export default function TeamPage() {
  const team = getTeam();

  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeader
          eyebrow="Meet the Team"
          title="The people who make up STEM Village."
          description="Our philosophy is simple: bring together people who care about STEM education, and give them the support to do their best work."
          align="center"
        />
        <div className="flex w-full flex-wrap justify-center gap-x-10 gap-y-12">
          {team.map((member) => (
            <div key={member.slug} className="w-full max-w-64 sm:w-64">
              <TeamMemberCard
                slug={member.slug}
                name={member.name}
                role={member.role}
                bio={member.bio}
                linkedin={member.linkedin}
                photo={getTeamPhoto(member.slug)}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
