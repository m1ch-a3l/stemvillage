import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { BlogCard } from "@/components/cards/BlogCard";
import { ButtonLink } from "@/components/ui/button-link";
import { getBlogPosts } from "@/lib/content";

export function BlogPreview() {
  const posts = getBlogPosts().slice(0, 3);

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="STEM Insights"
            title="From the blog."
            description="Practical guides, programme updates and perspectives on STEM education."
          />
          <ButtonLink href="/blog" variant="outline" className="h-10 shrink-0 px-5 text-sm">
            Read All Insights
          </ButtonLink>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
