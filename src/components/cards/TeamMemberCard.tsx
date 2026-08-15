import { CardMedia } from "@/components/ui/card-media";
import { LinkedinIcon } from "@/components/layout/SocialIcons";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio?: string;
  slug: string;
  photo?: string;
  linkedin?: string;
}

export function TeamMemberCard({ name, role, bio, slug, photo, linkedin }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
      <div className="relative aspect-square w-full overflow-hidden">
        <CardMedia photo={photo} seed={slug} alt={name} sizes="(min-width: 1024px) 25vw, 50vw" />
      </div>
      <div className="flex flex-col gap-1 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-base font-semibold text-foreground">{name}</h3>
          {linkedin ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn`}
              className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand-indigo hover:text-brand-indigo dark:hover:border-primary dark:hover:text-primary"
            >
              <LinkedinIcon className="size-4" aria-hidden />
            </a>
          ) : null}
        </div>
        <p className="text-sm font-medium text-brand-indigo dark:text-primary">{role}</p>
        {bio ? <p className="mt-1 text-sm text-muted-foreground">{bio}</p> : null}
      </div>
    </div>
  );
}
