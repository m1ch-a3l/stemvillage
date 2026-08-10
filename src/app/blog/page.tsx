import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { BlogCard } from "@/components/cards/BlogCard";
import { pageMetadata } from "@/lib/seo";
import { stemAreaPhotos } from "@/lib/photos";
import { getBlogPosts } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Blog / STEM Insights",
  description: "Practical guides, programme updates and perspectives on STEM education, coding, robotics, AI and technology in Africa.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <PageHero
        eyebrow="STEM Insights"
        title="Ideas, guides and updates from our team."
        description="Practical perspectives on STEM education, technology, and building the skills that matter."
        image={stemAreaPhotos["data-science"]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
