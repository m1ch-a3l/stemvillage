import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PlaceholderArt } from "@/components/ui/placeholder-art";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/cards/BlogCard";
import { pageMetadata, articleJsonLd } from "@/lib/seo";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/content";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const date = new Date(`${post.date}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const related = getBlogPosts().filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }}
      />
      <article className="py-12 sm:py-16">
        <Container className="mx-auto flex max-w-3xl flex-col gap-6">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" aria-hidden />
            Back to Insights
          </Link>
          <Badge variant="outline" className="w-fit">
            {post.category}
          </Badge>
          <h1 className="text-3xl font-bold text-balance sm:text-4xl">{post.title}</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{post.author}</span>
            <span aria-hidden>·</span>
            <span>{post.authorRole}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>{date}</time>
            <span aria-hidden>·</span>
            <span>{post.readTimeMinutes} min read</span>
          </div>
          <div className="h-64 w-full overflow-hidden rounded-xl sm:h-80">
            <PlaceholderArt seed={post.slug} />
          </div>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-foreground/90">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </article>
      {related.length ? (
        <section className="border-t border-border bg-secondary/40 py-16">
          <Container className="flex flex-col gap-8">
            <h2 className="font-heading text-xl font-bold">More in {post.category}</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
