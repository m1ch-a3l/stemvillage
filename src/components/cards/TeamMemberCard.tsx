import { CardMedia } from "@/components/ui/card-media";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  slug: string;
  photo?: string;
}

export function TeamMemberCard({ name, role, bio, slug, photo }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
      <div className="relative aspect-square w-full overflow-hidden">
        <CardMedia photo={photo} seed={slug} alt={name} sizes="(min-width: 1024px) 25vw, 50vw" />
      </div>
      <div className="flex flex-col gap-1 p-5">
        <h3 className="font-heading text-base font-semibold text-foreground">{name}</h3>
        <p className="text-sm font-medium text-brand-indigo dark:text-primary">{role}</p>
        <p className="mt-1 text-sm text-muted-foreground">{bio}</p>
      </div>
    </div>
  );
}
