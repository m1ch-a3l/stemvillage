import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { TeamMemberCard } from "@/components/cards/TeamMemberCard";
import { pageMetadata } from "@/lib/seo";
import { getTeamPhoto, heroPhotos } from "@/lib/photos";
import { getTeam } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Our Team",
  description: "Meet the team behind GoStem's programmes and partnerships.",
  path: "/team",
});

export default function TeamPage() {
  const team = getTeam();

  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people behind the programmes."
        description="A team combining backgrounds in education, engineering and community outreach."
        image={heroPhotos[1]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <TeamMemberCard
                key={member.slug}
                slug={member.slug}
                name={member.name}
                role={member.role}
                bio={member.bio}
                photo={getTeamPhoto(member.slug)}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
