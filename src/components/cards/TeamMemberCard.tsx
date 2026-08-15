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
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-secondary">
        <CardMedia photo={photo} seed={slug} alt={name} sizes="(min-width: 1024px) 25vw, 50vw" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h3 className="font-heading text-base font-semibold text-foreground">{name}</h3>
          {linkedin ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn`}
              className="text-muted-foreground transition-colors hover:text-brand-indigo dark:hover:text-primary"
            >
              <LinkedinIcon className="size-4" aria-hidden />
            </a>
          ) : null}
        </div>
        <p className="text-sm font-medium text-brand-indigo dark:text-primary">{role}</p>
        {bio ? <p className="text-sm text-muted-foreground">{bio}</p> : null}
      </div>
    </div>
  );
}
