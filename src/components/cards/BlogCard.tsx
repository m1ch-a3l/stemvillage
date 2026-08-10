import Link from "next/link";
import { CardMedia } from "@/components/ui/card-media";
import { Badge } from "@/components/ui/badge";
import { getBlogPhoto } from "@/lib/photos";
import type { BlogPost } from "@/types/content";

export function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(`${post.date}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <CardMedia photo={getBlogPhoto(post.category)} seed={post.slug} alt={post.title} />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <Badge variant="outline" className="w-fit">
          {post.category}
        </Badge>
        <h3 className="font-heading text-lg leading-snug font-semibold text-foreground">{post.title}</h3>
        <p className="line-clamp-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
          <span>{post.author}</span>
          <span>
            {date} · {post.readTimeMinutes} min read
          </span>
        </div>
      </div>
    </Link>
  );
}
